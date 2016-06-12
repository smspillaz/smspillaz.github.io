(function() {
    function generateTexture() {
        var windowsCanvas = document.createElement("canvas");
        windowsCanvas.width = 64;
        windowsCanvas.height = 128;
        var windowsContext = windowsCanvas.getContext("2d");
        windowsContext.fillStyle = "#333344";
        windowsContext.fillRect(0, 0, 64, 128);

        for (var y = 2; y < 128; ++y) {
            for (var x = 0; x < 8; ++x) {
                if (Math.random() > 0.7) {
                    windowsContext.fillStyle = "#999955";
                    windowsContext.fillRect(x * 8, y, 8, 1);
                }
            }
        }

        return windowsCanvas;
    }

    var element = document.getElementById("js-city-canvas");
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, element.clientWidth / element.clientHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( element.clientWidth, element.clientHeight );
    renderer.domElement.className = renderer.domElement.className + " emscripten-canvas";
    element.appendChild( renderer.domElement );

    var start_x = -30;

    function generateRectangularBuilding(textureArray, i, j) {
        var sceneArray = [];
        var materialArray = [
            new THREE.MeshLambertMaterial({ map: textureArray[0] }),
            new THREE.MeshLambertMaterial({ map: textureArray[1] }),
            new THREE.MeshLambertMaterial({color: 0x333344}),
            new THREE.MeshLambertMaterial({ map: textureArray[2] }),
            new THREE.MeshLambertMaterial({ map: textureArray[3] }),
            new THREE.MeshLambertMaterial({color: 0x333344})
        ];

        var tower = new THREE.Mesh( new THREE.BoxGeometry( 1, Math.max(3, 2 + 4 * Math.random()), 1.0 ),
                                    new THREE.MeshFaceMaterial(materialArray));
        tower.position.x = start_x + i * 2;
        tower.position.z = -j * 2;
        sceneArray.push( tower );

        if (Math.random () > 0.7) {
            var base = new THREE.Mesh (new THREE.BoxGeometry (1.5, Math.max(1, 0.5 + 2 * Math.random()), 1.5),
                                       new THREE.MeshFaceMaterial(materialArray));
            base.position.x = start_x + i * 2;
            base.position.z = -j * 4;
            sceneArray.push(base);
        }

        return sceneArray;
    }

    function generateSphericalBuilding(texture, i, j) {
        var tower = new THREE.Mesh (new THREE.CylinderGeometry(1, 1, Math.max(1, 0.5 + 2 * Math.random())),
                                    new THREE.MeshLambertMaterial({map: texture}));
        tower.position.x = start_x + i * 2;
        tower.position.z = -j * 2;

        return tower;
    }

    function generateTextureArray(n) {
        var array = new Array(4);
        for (var i = 0; i < array.length; ++i) {
            var texture = new THREE.Texture(generateTexture());
            texture.anisotropy  = renderer.getMaxAnisotropy();
            texture.magFilter = THREE.NearestFilter;
            texture.needsUpdate = true;
            array[i] = texture;
        }
        return array;
    }

    for (var j = 0; j < 10; ++j) {
        for (var i = 0; i < 30; ++i) {
            var val = Math.random();
            if (val > 0.6) {
                scene.add(generateSphericalBuilding(generateTextureArray(1)[0], i, j));
            } else {
                generateRectangularBuilding(generateTextureArray(4), i, j).map(function(obj) {
                    scene.add(obj);
                });
            }
            
        }
    }

    var street = new THREE.PlaneGeometry(100, 100, 1, 1);
    var streetPlane = new THREE.Mesh(street, new THREE.MeshBasicMaterial({ color: 0x111111 }));

    streetPlane.rotation.x = -Math.PI / 2;
    streetPlane.position.y = -0.5;

    var skyboxGeometry = new THREE.CubeGeometry(100, 100, 100);
    var skyboxMaterial = new THREE.ShaderMaterial({
        vertexShader: document.getElementById("skyboxVertexShader").textContent,
        fragmentShader: document.getElementById("skyboxFragmentShader").textContent
    });

    var materialArray = [];
    for (var i = 0; i < 6; ++i) {
        materialArray.push(skyboxMaterial);
    }
    for (var i = 0; i < 6; i++) {
       materialArray[i].side = THREE.BackSide;
    }
    var skyboxMaterialCube = new THREE.MeshFaceMaterial( materialArray );

    var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
    skybox.position.y += 5;

    var light = new THREE.PointLight(0x555577);
    light.position.set(0, 5, 5);

    scene.add(skybox);
    scene.add(streetPlane);
    scene.add(light);

    camera.position.z = 6;
    camera.position.y = 5;
    camera.rotation.x = -0.1;

    function LightsPostprocessingLayer() {
        this.renderTarget = new THREE.WebGLRenderTarget(element.clientWidth,
                                                        element.clientHeight, {
                                                           depthBuffer: true,
                                                           stencilBuffer: false,
                                                           scissorTest: false
                                                        });
        var ppGeometry = new THREE.PlaneGeometry(element.clientWidth / element.clientHeight, 1, 1);
        var ppMaterial = new THREE.ShaderMaterial({
            uniforms: {
                rtTexture: {
                    type: "t",
                    value: this.renderTarget.texture
                },
                aspect: {
                    type: "v2",
                    value: new THREE.Vector2(1.0 / element.clientWidth,
                                             1.0 / element.clientHeight)
                },
                lightsIntensity: {
                    type: "f",
                    value: Number.parseFloat(document.getElementById("lights-intensity").value)
                },
            },
            defines: {
                lightsBlur: Number.parseInt(document.getElementById("lights-blur").value)
            },
            vertexShader: "varying vec2 vTexCoord;\n" +
                          "void main() {\n" +
                          "    vTexCoord = uv;\n" +
                          "    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n" +
                          "}\n",
            fragmentShader: "varying vec2 vTexCoord;\n" +
                            "uniform sampler2D rtTexture;\n" +
                            "uniform vec2 aspect;\n" +
                            "uniform float lightsIntensity;\n" +
                            "void main() {\n" +
                            "    vec4 inputColor = texture2D(rtTexture, vTexCoord);\n" +
                            "    vec4 blurColor = vec4(0, 0, 0, 0);\n" +
                            "    for (int j = 0; j < lightsBlur; ++j) {\n" +
                            "        for (int i = 0; i < lightsBlur; ++i) {\n" +
                            "            blurColor += texture2D(rtTexture, vTexCoord + vec2(i - lightsBlur / 2, j - lightsBlur / 2) * aspect) / float(lightsBlur * lightsBlur);\n" +
                            "        }\n" +
                            "    }\n" +
                            "    /* Fragment will only pass the test if yellow enough */\n" +
                            "    if (blurColor.r > 0.07 && blurColor.g > 0.0) {\n" +
                            "        gl_FragColor = blurColor * vec4(lightsIntensity);\n" +
                            "    } else {\n" +
                            "        gl_FragColor = inputColor;\n" +
                            "    }\n" +
                            "}\n",
        });
        this.camera = new THREE.PerspectiveCamera(45,
                                                  element.clientWidth / element.clientHeight,
                                                  0.1,
                                                  100);
        this.camera.position.z = 1;
        this.camera.position.y = 0;
        this.scene = new THREE.Scene();
        var ppMesh = new THREE.Mesh(ppGeometry, ppMaterial);

        this.scene.add(ppMesh);

        document.getElementById("lights-intensity").addEventListener("change", function(e) {
            ppMaterial.uniforms.lightsIntensity.value = Number.parseFloat(e.target.value);
        });
    }

    var postprocessingLayer = new LightsPostprocessingLayer();

    document.getElementById("lights-blur").addEventListener("change", function(e) {
        postprocessingLayer = new LightsPostprocessingLayer();
    });

    function render() {
        var r = Date.now() * 0.0005;
        requestAnimationFrame(render.bind(this));
        camera.position.x = -0.1 + Math.sin(r);
        camera.position.z = 10 + Math.sin(r);
        camera.rotation.y = Math.sin(r) / 10.0;
        renderer.render(scene, camera, postprocessingLayer.renderTarget);
        renderer.render(postprocessingLayer.scene, postprocessingLayer.camera);
    }

    render();
})();