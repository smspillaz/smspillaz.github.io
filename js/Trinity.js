(function() {
    var gradientCanvas = document.createElement("canvas");
    gradientCanvas.width = 128;
    gradientCanvas.height = 128;

    var gradientCanvasContext = gradientCanvas.getContext("2d");
    var gradient = gradientCanvasContext.createRadialGradient(64, 64, 64, 64, 64, 0);
    gradient.addColorStop(0, "transparent");
    gradient.addColorStop(1, "white");
    gradientCanvasContext.fillStyle = gradient;
    gradientCanvasContext.fillRect(0, 0, 200, 200);

    function CurveWave(offset, color) {
        var curvaturePoints = [];
        for (var i = 0; i < 50; ++i) {
            curvaturePoints.push(new THREE.Vector3(Math.sin(i) - 1,
                                                   (i * 1.5) + offset,
                                                   Math.cos(i)));
        }

        var curve = new THREE.SplineCurve3(curvaturePoints);
        var geometry = new THREE.Geometry();
        geometry.vertices = curve.getPoints(200);
        var pointsMaterial = new THREE.PointsMaterial({
            color: color,
            size: 3,
            map: gradientTexture,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false
        });
        var lineMaterial = new THREE.LineBasicMaterial({
            color: color,
            linewidth: 3.0
        });
        return [
            new THREE.Line(geometry, lineMaterial),
            new THREE.Points(geometry, pointsMaterial)
        ];
    }

    var element = document.getElementById("trinity-wrapper");
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, element.clientWidth / element.clientHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.sortObjects = false;
    renderer.setSize( element.clientWidth, element.clientHeight );
    renderer.domElement.className = renderer.domElement.className + " emscripten-canvas";

    var gradientTexture = new THREE.Texture(gradientCanvas);
    gradientTexture.anisotropy  = renderer.getMaxAnisotropy();
    gradientTexture.magFilter = THREE.NearestFilter;
    gradientTexture.needsUpdate = true;

    element.appendChild(renderer.domElement);

    var waves = [];
    Array.prototype.push.apply(waves, CurveWave(0, 0xff0000));
    Array.prototype.push.apply(waves, CurveWave(-5, 0x00ff00));
    Array.prototype.push.apply(waves, CurveWave(-3, 0x0000ff));

    waves.forEach(function(w) {
        scene.add(w);
    });

    camera.position.z = 6;
    camera.position.y = 5;
    camera.rotation.x = -0.1;

    var skyboxGeometry = new THREE.CubeGeometry(100, 100, 100);
    var skyboxMaterial = new THREE.ShaderMaterial({
        vertexShader: document.getElementById("skyboxVertexShaderTrinity").textContent,
        fragmentShader: document.getElementById("skyboxFragmentShaderTrinity").textContent
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

    scene.add(skybox);

    function render() {
        var r = Date.now() * 0.0005;
        requestAnimationFrame(render);
        renderer.render(scene, camera);
        waves.forEach(function(w) {
            w.rotation.y += 0.01;
            w.position.y = Math.sin(r);
        });
    }

    render();
})();