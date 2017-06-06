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

    function CreateLine() {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0));
        geometry.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0));

        var material = new THREE.LineBasicMaterial({ color: 0xffffff });
        return new THREE.Line(geometry, material);
    }

    function multiply_quaternions(q, r) {
        return [
            r[0] * q[0] - r[1] * q[1] - r[2] * q[2] - r[3] * q[3],
            r[0] * q[1] + r[1] * q[0] - r[2] * q[3] + r[3] * q[2],
            r[0] * q[2] + r[1] * q[3] + r[2] * q[0] - r[3] * q[1],
            r[0] * q[3] - r[1] * q[2] + r[2] * q[1] + r[3] * q[0]
        ];
    }

    function quaternion_conjugate(q) {
        return [q[0], -q[1], -q[2], -q[3]]
    }

    function point_to_quaternion(p) {
        return [0, p[0], p[1], p[2]];
    }

    function quaternion_rotation(axis, ang) {
        return [
            Math.cos(ang / 2),
            Math.sin(ang / 2) * axis[0],
            Math.sin(ang / 2) * axis[1],
            Math.sin(ang / 2) * axis[2]
        ];
    }

    function normalize(vec) {
        var magnitude = Math.sqrt(vec.reduce(function(a, v) {
            a += v * v;
        }), 0.0) || 1.0;
        return vec.map(function(v) {
            return v / magnitude;
        });
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
    var line = CreateLine();

    scene.add(cube);
    scene.add(line);

    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);

        // define a rotation quaternion (the x-axis)
        var ang =  Math.PI/ 180;
        var axis = normalize([
          Number(document.getElementById("x").value),
          Number(document.getElementById("y").value),
          Number(document.getElementById("z").value),
        ]);
        var r = quaternion_rotation(axis, ang);

        // Set the vertices on the line to the axis itself
        var scale = 10.0;
        line.geometry.vertices[1] = (new THREE.Vector3(axis[0] * scale,
                                                       axis[1] * scale,
                                                       axis[2] * scale));
        line.geometry.verticesNeedUpdate = true;

        // Okay, now that we have our quaternion rotation, we can
        // calculate the resultant product:
        // p' = rpr'
        cube.geometry.vertices.forEach(function(v) {
            var q = multiply_quaternions(
                multiply_quaternions(r, point_to_quaternion([v.x, v.y, v.z])),
                quaternion_conjugate(r)
            );
            v.x = q[1];
            v.y = q[2];
            v.z = q[3];
        });
        cube.geometry.verticesNeedUpdate = true;
    }

    render();
})();