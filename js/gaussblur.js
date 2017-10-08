(function() {
    var yRot = 0.01;

    var stats = new Stats();
    stats.showPanel(0);

    function BlurPostprocessingLayer(radius) {
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
                }
            },
            defines: {
                radius: radius
            },
            vertexShader: "varying vec2 vTexCoord;\n" +
                          "void main() {\n" +
                          "    vTexCoord = uv;\n" +
                          "    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n" +
                          "}\n",
            fragmentShader: "varying vec2 vTexCoord;\n" +
                            "uniform sampler2D rtTexture;\n" +
                            "uniform vec2 aspect;\n" +
                            "void main() {\n" +
                            "    vec4 inputColor = texture2D(rtTexture, vTexCoord);\n" +
                            "    vec4 blurColor = vec4(0, 0, 0, 0);\n" +
                            "    float weightSum = 0.0;\n" +
                            "    for (int j = 0; j < radius; ++j) {\n" +
                            "        for (int i = 0; i < radius; ++i) {\n" +
                            "            vec2 samplingOffset = vec2(i - radius / 2, j - radius / 2) * aspect;\n" +
                            "            float weight = exp(-(samplingOffset.x * samplingOffset.x + samplingOffset.y * samplingOffset.y) / float(2 * radius * radius)) / (3.14195 * 2.0 * float(radius * radius));\n" +
                            "            blurColor += texture2D(rtTexture, vTexCoord + samplingOffset) * weight;\n" +
                            "            weightSum += weight;\n" +
                            "        }\n" +
                            "    }\n" +
                            "    gl_FragColor = blurColor / weightSum;\n" +
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
    }

    function CreateCube() {
        //create box geometry object
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        geometry.dynamic = true;
        for ( var i = 0; i < geometry.faces.length; i ++ ) {
            geometry.faces[i].color.setHex( Math.random() * 0xffffff );
        }
        //create material with colour
        var material = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors } );
        //combine geometry with material to create the cube
        return new THREE.Mesh(geometry, material);
    }

    function CreateLine(to, color) {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0));
        geometry.vertices.push(to);

        var material = new THREE.LineBasicMaterial({ color: color });
        return new THREE.Line(geometry, material);
    }

    var element = document.getElementById("gaussblur");
    var camera = new THREE.PerspectiveCamera(45,
                                             element.clientWidth / element.clientHeight,
                                             0.1,
                                             1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.sortObjects = false;
    renderer.setSize( element.clientWidth, element.clientHeight );
    renderer.domElement.className = renderer.domElement.className + " emscripten-canvas";

    element.appendChild(renderer.domElement);
    element.appendChild(stats.dom);

    camera.position.z = 5;
    camera.position.y = 0;
    camera.rotation.x = -0.1;

    var scene = new THREE.Scene();
    var cube = CreateCube();
    var lineX = CreateLine(new THREE.Vector3(10.0, 0.0, 0.0), 0xff0000);
    var lineY = CreateLine(new THREE.Vector3(0.0, 10.0, 0.0), 0x00ff00);
    var lineZ = CreateLine(new THREE.Vector3(0.0, 0.0, 10.0), 0x0000ff);

    scene.add(cube);
    scene.add(lineX);
    scene.add(lineY);
    scene.add(lineZ);

    var radius = 16.0;
    var postprocessingLayer = new BlurPostprocessingLayer(radius);

    function render() {
        requestAnimationFrame(render);

        stats.begin();

        var yMat = new THREE.Matrix4().set(Math.cos(yRot), 0, Math.sin(yRot), 0,
                                           0, 1, 0, 0,
                                           -Math.sin(yRot), 0, Math.cos(yRot), 0,
                                           0, 0, 0, 1);

        [cube, lineX, lineY, lineZ].forEach(function(object) {
            object.matrixAutoUpdate = false;
            object.matrix.multiply(yMat);
        });

        renderer.render(scene, camera, postprocessingLayer.renderTarget);
        renderer.render(postprocessingLayer.scene, postprocessingLayer.camera);

        stats.end();
    }

    render();

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("baseRadius").addEventListener("change", function(e) {
            radius = Number.parseFloat(e.target.value);
            postprocessingLayer = new BlurPostprocessingLayer(radius);
        });
    });
})();