var element = document.getElementById("js-city-canvas");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, element.clientWidth / element.clientHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( element.clientWidth, element.clientHeight );
renderer.domElement.className = renderer.domElement.className + " emscripten-canvas";
element.appendChild( renderer.domElement );

var start_x = -30;

for (var j = 0; j < 10; ++j) {
    for (var i = 0; i < 30; ++i) {
        var tower = new THREE.Mesh( new THREE.BoxGeometry( 1, Math.max(3, 2 + 4 * Math.random()), 1.0 ),
                                   new THREE.MeshLambertMaterial( { color: 0x333344 } ) );
        tower.position.x = start_x + i * 2;
        tower.position.z = -j * 2;
        scene.add( tower );

        if (Math.random () > 0.7) {
            var base = new THREE.Mesh (new THREE.BoxGeometry (1.5, Math.max(1, 0.5 + 2 * Math.random()), 1.5),
                                       new THREE.MeshLambertMaterial( { color: 0x333344 } ) );
            base.position.x = start_x + i * 2;
            base.position.z = -j * 4;
            scene.add(base);
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
for (var i = 0; i < 6; i++)
   materialArray[i].side = THREE.BackSide;
var skyboxMaterialCube = new THREE.MeshFaceMaterial( materialArray );

var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
skybox.position.y += 5;

var light = new THREE.PointLight(0xffffff);
light.position.set(0, 5, 5);

scene.add(skybox);
scene.add(streetPlane);
scene.add(light);

camera.position.z = 6;
camera.position.y = 5;
camera.rotation.x = -0.1;

function render() {
    var r = Date.now() * 0.0005;
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    camera.position.x = -0.1 + Math.sin(r);
    camera.position.z = 10 + Math.sin(r);
    camera.rotation.y = Math.sin(r) / 10.0;
}

render();