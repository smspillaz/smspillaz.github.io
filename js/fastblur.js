(function() {
    var yRot = 0.01;

    var stats = new Stats();
    stats.showPanel(0);

    function computeWeights(radius) {
        var radiusBandWidth = 1.0;
        var groupNumber = Math.floor(radius / radiusBandWidth) + 1;
        var groupPartitions = radiusBandWidth * groupNumber;
        var arraySize = groupNumber * radiusBandWidth + 1;
        var max = Math.sqrt(Math.log(10));

        var array = Array.apply(null, Array(arraySize)).map(function () { return 0; });
        var sum = 1.0;

        array[0] = 1;

        for (var i = 1; i <= groupPartitions; ++i) {
            array[i] = Math.exp(-Math.pow(i * max / groupPartitions, 2));
            sum += array[i];
        }

        for (i = 0; i <= groupPartitions; ++i) {
            array[i] = array[i] / sum;
        }

        return {
            elements: groupPartitions + 1,
            array: array
        };
    }

    function weightsToDataTexture(weights) {
        var array = new Float32Array(weights.elements * 4);
        array.fill(0.0);
        for (var i = 0; i < weights.elements; ++i) {
            array[i * 4] = weights.array[i];
        }
        var texture = new THREE.DataTexture(array, weights.elements, 1, THREE.RGBAFormat, THREE.FloatType);
        texture.needsUpdate = true;
        return texture;
    }

    function precomputeTextureWeightsUpToRadius(radius) {
        return Array.apply(null, Array(radius + 1)).map(function (_, i) {
            var computed = computeWeights(i);
            return {
                elements: computed.elements,
                texture: weightsToDataTexture(computed)
            };
        });
    }

    var textureWeights = precomputeTextureWeightsUpToRadius(64);

    /* This shader was taken from https://github.com/yozoon/gnome-shell-extension-blyr/blob/master/blyr%40yozoon.dev.gmail.com/shader.glsl
     * licenced under the LGPLv2+ */
    var FRAGMENT_SHADER = (
        "    #define MAX_ELEMENTS 256.0\n" +
        "    uniform sampler2D tex;\n" +
        "    uniform sampler2D weightsTex;\n" +
        "    uniform float numWeights;\n" +
        "    uniform float width;\n" +
        "    uniform float height;\n" +
        "    uniform float dir;\n" +
        "    uniform float radius;\n" +
        "    varying vec2 vTexCoord;\n" +
        "\n" +
        "    float sampleWeightsTexture(sampler2D tx, float i) {\n" +
        "        return texture2D(tx, vec2(i, 0.0)).r;\n" +
        "    }\n" +
        "\n" +
        "    void main(void) {\n" +
        "        vec2 step_size = vec2((radius / 15.0 + 1.0) / (4.0 / 3.0 * width),\n" +
        "                              (radius / 15.0 + 1.0) / (4.0 / 3.0 * height)); \n" +
        "        vec2 direction = vec2(float(dir), (1.0 - dir));\n" +
        "        vec4 blurSum = texture2D(tex, vTexCoord) * sampleWeightsTexture(weightsTex, 0.0);\n" +
        "        for (float t = 1.0; t < MAX_ELEMENTS; t += 1.0) { \n" +
        "            if (t > numWeights * 2.0)\n" +
        "                break;\n" +
        "            vec2 offset = (t * step_size * direction);\n" +
        "            float weight = sampleWeightsTexture(weightsTex, t);\n" +
        "            blurSum += texture2D(tex, vTexCoord + offset) * weight;\n" +
        "            blurSum += texture2D(tex, vTexCoord - offset) * weight;\n" +
        "        }\n" +
        "        gl_FragColor = blurSum;\n" +
        "    }\n"
    );

    function BlurPostprocessingLayer(radius, direction) {
        this.renderTarget = new THREE.WebGLRenderTarget(element.clientWidth,
                                                        element.clientHeight, {
                                                           depthBuffer: true,
                                                           stencilBuffer: false,
                                                           scissorTest: false
                                                        });
        var ppGeometry = new THREE.PlaneGeometry(element.clientWidth / element.clientHeight, 1, 1);
        var ppMaterial = new THREE.ShaderMaterial({
            uniforms: {
                tex: {
                    type: "t",
                    value: this.renderTarget.texture
                },
                weightsTex: {
                    type: "t",
                    value: textureWeights[radius].texture
                },
                numWeights: {
                    type: "f",
                    value: textureWeights[radius].elements
                },
                width: {
                    type: "f",
                    value: element.clientWidth
                },
                height: {
                    type: "f",
                    value: element.clientHeight
                },
                radius: {
                    type: "f",
                    value: radius
                },
                dir: {
                    type: "f",
                    value: direction
                }
            },
            vertexShader: "varying vec2 vTexCoord;\n" +
                          "void main() {\n" +
                          "    vTexCoord = uv;\n" +
                          "    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n" +
                          "}\n",
            fragmentShader: FRAGMENT_SHADER,
        });
        this.camera = new THREE.PerspectiveCamera(45,
                                                  element.clientWidth / element.clientHeight,
                                                  0.1,
                                                  100);
        this.camera.position.z = 1 / 0.8098875953 - 0.03;
        this.camera.position.y = 0;
        this.scene = new THREE.Scene();
        var ppMesh = new THREE.Mesh(ppGeometry, ppMaterial);

        this.setRadius = function(radius) {
            ppMaterial.uniforms.radius.value = radius;
            ppMaterial.uniforms.weightsTex.value = textureWeights[radius].texture;
            ppMaterial.uniforms.numWeights.value = textureWeights[radius].elements;
            console.log(textureWeights[radius].texture, textureWeights[radius].elements);
        };

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

    var element = document.getElementById("fastblur");
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
    var vPostprocessingLayer = new BlurPostprocessingLayer(radius, 0.0);
    var hPostprocessingLayer = new BlurPostprocessingLayer(radius, 1.0);

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

        renderer.render(scene, camera, vPostprocessingLayer.renderTarget);
        renderer.render(vPostprocessingLayer.scene, vPostprocessingLayer.camera, hPostprocessingLayer.renderTarget);
        renderer.render(hPostprocessingLayer.scene, hPostprocessingLayer.camera);

        stats.end();
    }

    render();

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("baseRadius").addEventListener("change", function(e) {
            var newRadius = Number.parseFloat(e.target.value);

            vPostprocessingLayer.setRadius(newRadius);
            hPostprocessingLayer.setRadius(newRadius);
        });
    });
})();