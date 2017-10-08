(function() {
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

    var element = document.getElementById("parametric-fit-wrapper");
    var camera = new THREE.PerspectiveCamera(45,
                                             element.clientWidth / element.clientHeight,
                                             0.1,
                                             1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.sortObjects = false;
    renderer.setSize( element.clientWidth, element.clientHeight );
    renderer.domElement.className = renderer.domElement.className + " emscripten-canvas";

    element.appendChild(renderer.domElement);

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

    var tabMatrix = ['xx', 'xy', 'xz', 'xw',
                     'yx', 'yy', 'yz', 'yw',
                     'zx', 'zy', 'zz', 'zw',
                     'wx', 'wy', 'wz', 'ww'];

    function render() {
        requestAnimationFrame(render);

        var xRot = Number.parseFloat(document.getElementById("x").value) / 10.0;
        var yRot = Number.parseFloat(document.getElementById("y").value) / 10.0;
        var zRot = Number.parseFloat(document.getElementById("z").value) / 10.0;

        var zMat = new THREE.Matrix4().set(Math.cos(zRot), -Math.sin(zRot), 0, 0,
                                           Math.sin(zRot), Math.cos(zRot), 0, 0,
                                           0, 0,                           1, 0,
                                           0, 0,                           0, 1);
        var xMat = new THREE.Matrix4().set(1, 0, 0, 0,
                                           0, Math.cos(xRot), -Math.sin(xRot), 0,
                                           0, Math.sin(xRot), Math.cos(xRot), 0,
                                           0, 0, 0, 1);
        var yMat = new THREE.Matrix4().set(Math.cos(yRot), 0, Math.sin(yRot), 0,
                                           0, 1, 0, 0,
                                           -Math.sin(yRot), 0, Math.cos(yRot), 0,
                                           0, 0, 0, 1);

        var matrixTables = [
            { axis: 'z', mat: zMat.clone().transpose().elements },
            { axis: 'y', mat: yMat.clone().transpose().elements },
            { axis: 'x', mat: xMat.clone().transpose().elements }
        ];

        [cube, lineX, lineY, lineZ].forEach(function(object) {
            object.matrixAutoUpdate = false;
            object.matrix.multiply(yMat).multiply(zMat).multiply(xMat);
        });

        /* Okay, now that we have all these matrices, set values in our tables */
        matrixTables.forEach(function(table) {
            var axis = table.axis;
            var mat = table.mat;

            mat.forEach(function(elem, i) {
                document.getElementById(axis + '-' + tabMatrix[i]).innerHTML = String(elem.toFixed(2));
            });
        });

        renderer.render(scene, camera);
    }

    render();
})();