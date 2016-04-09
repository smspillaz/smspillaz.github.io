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
for (var i = 0; i < 6; i++)
   materialArray[i].side = THREE.BackSide;
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

function render() {
    var r = Date.now() * 0.0005;
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    camera.position.x = -0.1 + Math.sin(r);
    camera.position.z = 10 + Math.sin(r);
    camera.rotation.y = Math.sin(r) / 10.0;
}

render();