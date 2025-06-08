import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';
import getstarField from './StarBackground.js';


// mandatory: create a camera
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-79.80, 111.77, 389.65); // set the camera position
// console.log('Camera Position:', camera.position);


const cameraPositionDisplay = document.getElementById('cameraPositionDisplay');

function updateCameraPosition() {
  cameraPositionDisplay.innerHTML = `Camera Position: ${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)}`;
}



// mandatory: create a renderer
const w=window.innerWidth;
const h=window.innerHeight;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);


// mandatory: create a scene
const scene = new THREE.Scene();

// create earth group
const earthGroup = new THREE.Group();
earthGroup.rotation.x = -23.4*Math.PI / 180; 
earthGroup.rotation.y = 0.002; 
scene.add(earthGroup);

// create mercury group
const mercuryGroup = new THREE.Group();
mercuryGroup.rotation.x = -23.4*Math.PI / 180; 
mercuryGroup.rotation.y = 0.005; 
scene.add(mercuryGroup);


// create venus group
const venusGroup = new THREE.Group();
venusGroup.rotation.x = -23.4*Math.PI / 180; 
venusGroup.rotation.y = 0.003; 
scene.add(venusGroup);



// create mars group
const marsGroup = new THREE.Group();
marsGroup.rotation.x = -23.4*Math.PI / 180; 
marsGroup.rotation.y = 0.004; 
scene.add(marsGroup);

// create jupiter group
const jupiterGroup = new THREE.Group();
jupiterGroup.rotation.x = -23.4*Math.PI / 180; 
jupiterGroup.rotation.y = 0.001; 
scene.add(jupiterGroup);

// create saturn group
const saturnGroup = new THREE.Group();
saturnGroup.rotation.x = -23.4*Math.PI / 180; 
saturnGroup.rotation.y = 0.001; 
scene.add(saturnGroup);

// create uranus group
const uranusGroup = new THREE.Group();
uranusGroup.rotation.x = -23.4*Math.PI / 180; 
uranusGroup.rotation.y = 0.001; 
scene.add(uranusGroup);

// create neptune group
const neptuneGroup = new THREE.Group();
neptuneGroup.rotation.x = -23.4*Math.PI / 180; 
neptuneGroup.rotation.y = 0.001; 
scene.add(neptuneGroup);



//create a group for the sun
const sunGroup = new THREE.Group();
sunGroup.rotation.x = -23.4*Math.PI / 180;
scene.add(sunGroup);


// adding orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03; 
controls.enableZoom = true; 
controls.zoomSpeed = 1.5; 
controls.minDistance = 50; 
controls.maxDistance = 600; 

//loading a texture
const textureLoader = new THREE.TextureLoader();


// creating a pivot point for the earth group
const pivot = new THREE.Object3D();
scene.add(pivot);



// creating a pivot point for the planets
const earthPivot = new THREE.Object3D();
const mercuryPivot = new THREE.Object3D();
const venusPivot = new THREE.Object3D();
const marsPivot = new THREE.Object3D(); 
const jupiterPivot = new THREE.Object3D();
const saturnPivot = new THREE.Object3D();
const uranusPivot = new THREE.Object3D();
const neptunePivot = new THREE.Object3D();


// creating a geometry
const detail=12
const geo= new THREE.IcosahedronGeometry(10, detail); 





// creating a sun material
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_sun.jpg'), 
    side: THREE.DoubleSide 
});
const sunMesh = new THREE.Mesh(geo, sunMat);
sunMesh.scale.setScalar(3); 
sunMesh.position.set(0, 0, 0); 
scene.add(sunMesh); 
sunMesh.castShadow = false;
sunMesh.receiveShadow = false;

// Add a PointLight at the Sun's position for 360-degree sunlight
const sunLight = new THREE.PointLight(0xffffff,50, 10000000); 
sunLight.position.copy(sunMesh.position);
scene.add(sunLight);
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 4096;
sunLight.shadow.mapSize.height = 4096;
sunLight.shadow.camera.near = 1;
sunLight.shadow.camera.far = 1000;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.25); 
scene.add(ambientLight);

renderer.shadowMap.enabled = true;




// adding sun to the pivot point
pivot.position.set(0, 0, 0);


// creating an earth material
const mat = new THREE.MeshStandardMaterial({ 
    map: textureLoader.load('Images/2k_earth_daymap.jpg'), 
});
const earthmesh = new THREE.Mesh(geo, mat);
earthmesh.position.set(0.90, 0, 0); 
earthGroup.add(earthmesh);


// creating a mercury material
const mercuryMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load('Images/2k_mercury.jpg'), 
    
});
const mercuryMesh = new THREE.Mesh(geo, mercuryMat);
mercuryMesh.scale.setScalar(0.5); 
mercuryMesh.position.set(0.50, 0, 0); 
mercuryGroup.add(mercuryMesh);




// creating a venus material
const venusMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load('Images/2k_venus_surface.jpg'), 
});
const venusMesh = new THREE.Mesh(geo, venusMat);
venusMesh.scale.setScalar(0.8); 
venusMesh.position.set(0.70, 0, 0); 
venusGroup.add(venusMesh); 



// creating a mars material
const marsMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load('Images/2k_mars.jpg'), 

});
const marsMesh = new THREE.Mesh(geo, marsMat);
marsMesh.scale.setScalar(0.6); 
marsMesh.position.set(1.20, 0, 0); 
marsGroup.add(marsMesh); 



// creating a jupiter material
const jupiterMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load('Images/2k_jupiter.jpg'), 
});
const jupiterMesh = new THREE.Mesh(geo, jupiterMat);
jupiterMesh.scale.setScalar(1.5); 
jupiterMesh.position.set(2.50, 0, 0); 
jupiterGroup.add(jupiterMesh); 



// creating a saturn material
const saturnMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load('Images/2k_saturn.jpg'), 
});
const saturnMesh = new THREE.Mesh(geo, saturnMat);
saturnMesh.scale.setScalar(1.3); 
saturnMesh.position.set(0.00, 0, 0); 
saturnGroup.add(saturnMesh); 

//add rings to saturn
const saturnRingGeo = new THREE.RingGeometry(14, 20, 64);
const saturnRingMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_saturn_ring_alpha.png'), 
    side: THREE.DoubleSide, 
    transparent: true, 
});
const saturnRingMesh = new THREE.Mesh(saturnRingGeo, saturnRingMat);
saturnRingMesh.rotation.x = -Math.PI / 2; 
saturnRingMesh.position.set(0.00, 0, 0); 
saturnGroup.add(saturnRingMesh); 




// creating a uranus material
const uranusMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load('Images/2k_uranus.jpg'),
});
const uranusMesh = new THREE.Mesh(geo, uranusMat);
uranusMesh.scale.setScalar(1); 
uranusMesh.position.set(3.50, 0, 0); 
uranusGroup.add(uranusMesh); 



// creating a neptune material
const neptuneMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load('Images/2k_neptune.jpg'), 
});
const neptuneMesh = new THREE.Mesh(geo, neptuneMat);
neptuneMesh.scale.setScalar(1); 
neptuneMesh.position.set(4.00, 0, 0); 
neptuneGroup.add(neptuneMesh); 









// adding a StarBackground
const stars = getstarField({numStars:10000});
scene.add(stars);












//cloudmesh
const CloudMat = new THREE.MeshStandardMaterial({
    map: textureLoader.load('Images/2k_earth_clouds.jpg'), 
    blending: THREE.AdditiveBlending, 
    transparent: true, 
    opacity: 0.5
});

const cloudMesh = new THREE.Mesh(geo, CloudMat);
cloudMesh.scale.setScalar(1.0003); 
earthGroup.add(cloudMesh); 









// light mesh to visualize the light{EARTH}
const lightmat= new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/earthlights1k.jpg'), 
    blending: THREE.AdditiveBlending, 

});
const lightsMesh = new THREE.Mesh(
    geo,
    lightmat
);
earthGroup.add(lightsMesh); 





// light mesh to visualize the light{MERCURY}
const lightmatmer= new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_mercury_dark.jpg'), 
    blending: THREE.AdditiveBlending,

});
const lightsMeshmer = new THREE.Mesh(
    geo,
    lightmatmer
);
lightsMeshmer.scale.setScalar(0.5); 
mercuryGroup.add(lightsMeshmer); 





//light mesh to visualize the light venus
const lightmatven= new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_venus_surface_darkk.jpg'), 
    blending: THREE.AdditiveBlending,

});
const lightsMeshven = new THREE.Mesh(
    geo,
    lightmatven
);
lightsMeshven.scale.setScalar(0.8); 
venusGroup.add(lightsMeshven);


//light mesh to visualizev the light mars
const lightmatmars= new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_mars_dark.jpg'), 
    blending: THREE.AdditiveBlending, 

});
const lightsMeshmars = new THREE.Mesh(
    geo,
    lightmatmars
);
lightsMeshmars.scale.setScalar(0.6); 
marsGroup.add(lightsMeshmars);




//light mesh to visualizev the light jupiter
const lightmatjup= new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_jupiter_dark.jpg'), 
    blending: THREE.AdditiveBlending, 

});
const lightsMeshjup = new THREE.Mesh(
    geo,
    lightmatjup
);
lightsMeshjup.scale.setScalar(1.5); 
jupiterGroup.add(lightsMeshjup); 




//light mesh to visualizev the light saturn
const lightmatsat= new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_saturn_dark.jpg'), 
    blending: THREE.AdditiveBlending, 

});
const lightsMeshsat = new THREE.Mesh(
    geo,
    lightmatsat
);
lightsMeshsat.scale.setScalar(1.3);
saturnGroup.add(lightsMeshsat); 



//light mesh to visualizev the light neptune

const lightmatnep= new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_neptune_dark.jpg'),
    blending: THREE.AdditiveBlending,

});
const lightsMeshnep = new THREE.Mesh(
    geo,
    lightmatnep
);
lightsMeshnep.scale.setScalar(1.001);
lightsMeshnep.rotation.x = -23.4 * Math.PI / 180;

neptuneGroup.add(lightsMeshnep); 


const lightmatura= new THREE.MeshBasicMaterial({
    map: textureLoader.load('Images/2k_uranus_dark.jpg'), 
    blending: THREE.AdditiveBlending, 

});
const lightsMeshura = new THREE.Mesh(
    geo,
    lightmatura
);
lightsMeshura.scale.setScalar(1.001); 
lightsMeshura.rotation.x = -23.4 * Math.PI / 180;
uranusGroup.add(lightsMeshura); 













// Position planet groups at their orbit radii
mercuryGroup.position.set(100, 0, 0);  // Mercury orbit radius
venusGroup.position.set(120, 0, 0);    // Venus orbit radius
earthGroup.position.set(140, 0, 0);    // Earth orbit radius
marsGroup.position.set(160, 0, 0);   // Mars orbit radius
jupiterGroup.position.set(200, 0, 0); // Jupiter orbit radius
saturnGroup.position.set(250, 0, 0); // Saturn orbit radius
uranusGroup.position.set(300, 0, 0); // Uranus orbit radius
neptuneGroup.position.set(350, 0, 0); // Neptune orbit radius



// Add planet groups to their pivots
earthPivot.add(earthGroup);
mercuryPivot.add(mercuryGroup);
venusPivot.add(venusGroup);
marsPivot.add(marsGroup); 
jupiterPivot.add(jupiterGroup);
saturnPivot.add(saturnGroup);
uranusPivot.add(uranusGroup);
neptunePivot.add(neptuneGroup);



mercuryMesh.castShadow = true;
mercuryMesh.receiveShadow = true;
venusMesh.castShadow = true;
venusMesh.receiveShadow = true;
marsMesh.castShadow = true;
marsMesh.receiveShadow = true;
earthmesh.castShadow = true;
earthmesh.receiveShadow = true;
jupiterMesh.castShadow = true;
jupiterMesh.receiveShadow = true;
saturnMesh.castShadow = true;
saturnMesh.receiveShadow = true;
uranusMesh.castShadow = true;
uranusMesh.receiveShadow = true;
neptuneMesh.castShadow = true;
neptuneMesh.receiveShadow = true;




// Add pivots to the scene (centered at the Sun)
scene.add(earthPivot);
scene.add(mercuryPivot);
scene.add(venusPivot);
scene.add(marsPivot); 
scene.add(jupiterPivot);
scene.add(saturnPivot);
scene.add(uranusPivot);
scene.add(neptunePivot);



function createOrbitLine(radius, color = 0xffffff) { 
    const segments = 128;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        positions.push(
            Math.cos(theta) * radius,
            0,
            Math.sin(theta) * radius
        );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({ color });
    return new THREE.Line(geometry, material);
} 

const mercuryOrbit = createOrbitLine(100, 0xffffff);
const venusOrbit = createOrbitLine(120, 0xffffff);
const earthOrbit = createOrbitLine(140, 0xffffff);
const marsOrbit = createOrbitLine(160, 0xffffff); 
const jupiterOrbit = createOrbitLine(200, 0xffffff);
const saturnOrbit = createOrbitLine(250, 0xffffff);
const uranusOrbit = createOrbitLine(300, 0xffffff);
const neptuneOrbit = createOrbitLine(350, 0xffffff);

scene.add(earthOrbit);
scene.add(mercuryOrbit);
scene.add(venusOrbit);
scene.add(marsOrbit);
scene.add(jupiterOrbit);
scene.add(saturnOrbit);
scene.add(uranusOrbit);
scene.add(neptuneOrbit);





// Default revolution speeds
let earthRevolutionSpeed = 0.005;
let mercuryRevolutionSpeed = 0.003;
let venusRevolutionSpeed = 0.002;
let marsRevolutionSpeed = 0.004;
let jupiterRevolutionSpeed = 0.003;
let saturnRevolutionSpeed = 0.005;
let uranusRevolutionSpeed = 0.006;
let neptuneRevolutionSpeed = 0.007;

// Get slider DOM elements
const earthSpeedSlider = document.getElementById('earthSpeed');
const mercurySpeedSlider = document.getElementById('mercurySpeed');
const venusSpeedSlider = document.getElementById('venusSpeed');
const marsSpeedSlider = document.getElementById('marsSpeed');
const jupiterSpeedSlider = document.getElementById('jupiterSpeed');
const saturnSpeedSlider = document.getElementById('saturnSpeed');
const uranusSpeedSlider = document.getElementById('uranusSpeed');
const neptuneSpeedSlider = document.getElementById('neptuneSpeed');


// Set slider default values (sync with defaults above)
if (earthSpeedSlider) earthSpeedSlider.value = earthRevolutionSpeed;
if (mercurySpeedSlider) mercurySpeedSlider.value = mercuryRevolutionSpeed;
if (venusSpeedSlider) venusSpeedSlider.value = venusRevolutionSpeed;
if (marsSpeedSlider) marsSpeedSlider.value = marsRevolutionSpeed;
if (jupiterSpeedSlider) jupiterSpeedSlider.value = jupiterRevolutionSpeed;
if (saturnSpeedSlider) saturnSpeedSlider.value = saturnRevolutionSpeed;
if (uranusSpeedSlider) uranusSpeedSlider.value = uranusRevolutionSpeed;
if (neptuneSpeedSlider) neptuneSpeedSlider.value = neptuneRevolutionSpeed;


// Update revolution speed when user changes slider
if (earthSpeedSlider) {
    earthSpeedSlider.addEventListener('input', () => {
        earthRevolutionSpeed = parseFloat(earthSpeedSlider.value);
    });
}
if (mercurySpeedSlider) {
    mercurySpeedSlider.addEventListener('input', () => {
        mercuryRevolutionSpeed = parseFloat(mercurySpeedSlider.value);
    });
}
if (venusSpeedSlider) {
    venusSpeedSlider.addEventListener('input', () => {
        venusRevolutionSpeed = parseFloat(venusSpeedSlider.value);
    });

}
if (marsSpeedSlider) {
    marsSpeedSlider.addEventListener('input', () => {
        marsRevolutionSpeed = parseFloat(marsSpeedSlider.value);
    });
}
if  (jupiterSpeedSlider) {
    jupiterSpeedSlider.addEventListener('input', () => {
        jupiterRevolutionSpeed = parseFloat(jupiterSpeedSlider.value);
    });
}
if (saturnSpeedSlider) {
    saturnSpeedSlider.addEventListener('input', () => {
        saturnRevolutionSpeed = parseFloat(saturnSpeedSlider.value);
    });
}
if (uranusSpeedSlider) {
    uranusSpeedSlider.addEventListener('input', () => {
        uranusRevolutionSpeed = parseFloat(uranusSpeedSlider.value);
    });
}
if (neptuneSpeedSlider) {
    neptuneSpeedSlider.addEventListener('input', () => {
        neptuneRevolutionSpeed = parseFloat(neptuneSpeedSlider.value);
    });
}

let isPaused = false; 

const pausePlayBtn = document.getElementById('pausePlayBtn');
if (pausePlayBtn) {
    pausePlayBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        pausePlayBtn.textContent = isPaused ? 'Play' : 'Pause';
        if (!isPaused) animate(); 
    });
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const planetInfo = document.getElementById('planetInfo');

// Map mesh to planet info
const planetData = [
    { mesh: sunMesh, name: "Sun", info: "Sun: The center of our solar system. Diameter: 1,391,000 km." },
  { mesh: earthmesh, name: "Earth", info: "Earth: Our home planet. Diameter: 12,742 km." },
  { mesh: mercuryMesh, name: "Mercury", info: "Mercury: Closest planet to the Sun. Diameter: 4,880 km." },
  { mesh: venusMesh, name: "Venus", info: "Venus: Hottest planet. Diameter: 12,104 km." },
  { mesh: marsMesh, name: "Mars", info: "Mars: The Red Planet. Diameter: 6,779 km." },
  { mesh: jupiterMesh, name: "Jupiter", info: "Jupiter: Largest planet. Diameter: 139,820 km." },
  { mesh: saturnMesh, name: "Saturn", info: "Saturn: Known for its rings. Diameter: 116,460 km." },
  { mesh: uranusMesh, name: "Uranus", info: "Uranus: Ice giant. Diameter: 50,724 km." },
  { mesh: neptuneMesh, name: "Neptune", info: "Neptune: Farthest planet. Diameter: 49,244 km." }
];



// animation
function animate(t=0) {
    if (isPaused) return; // Stop animation if paused
    requestAnimationFrame(animate);
    const earthRevolutionSpeed = parseFloat(earthSpeedSlider.value);
    const mercuryRevolutionSpeed = parseFloat(mercurySpeedSlider.value);
    const venusRevolutionSpeed = parseFloat(venusSpeedSlider.value);
    const marsRevolutionSpeed = parseFloat(marsSpeedSlider.value);
    const jupiterRevolutionSpeed = parseFloat(jupiterSpeedSlider.value);
    const saturnRevolutionSpeed = parseFloat(saturnSpeedSlider.value);
    const uranusRevolutionSpeed = parseFloat(uranusSpeedSlider.value);
    const neptuneRevolutionSpeed = parseFloat(neptuneSpeedSlider.value);
    earthmesh.rotation.y += 0.002; 
    lightsMesh.rotation.y += 0.002; 
    lightsMeshmer.rotation.y += 0.002; 
    lightsMeshven.rotation.y += 0.002; 
    lightsMeshmars.rotation.y+=0.002; 
    lightsMeshjup.rotation.y+=0.002; 
    lightsMeshsat.rotation.y+=0.002;
    lightsMeshnep.rotation.y+=0.002;
    lightsMeshura.rotation.y+=0.002;
    cloudMesh.rotation.y += 0.002; 
    mercuryMesh.rotation.y += 0.002; 
    venusMesh.rotation.y += 0.002; 
    marsMesh.rotation.y += 0.002;
    jupiterMesh.rotation.y += 0.002; 
    saturnMesh.rotation.y += 0.002; 
    uranusMesh.rotation.y += 0.002; 
    neptuneMesh.rotation.y += 0.002; 
    earthPivot.rotation.y += earthRevolutionSpeed;
    mercuryPivot.rotation.y += mercuryRevolutionSpeed;
    venusPivot.rotation.y += venusRevolutionSpeed;  
    marsPivot.rotation.y += marsRevolutionSpeed; 
    jupiterPivot.rotation.y += jupiterRevolutionSpeed; 
    saturnPivot.rotation.y += saturnRevolutionSpeed; 
    uranusPivot.rotation.y += uranusRevolutionSpeed; 
    neptunePivot.rotation.y += neptuneRevolutionSpeed; 
    
    renderer.render(scene, camera);
    controls.update(); 
    updateCameraPosition();
}   
animate();

renderer.domElement.addEventListener('pointerdown', (event) => {
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const meshes = planetData.map(p => p.mesh);
    const intersects = raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
        const mesh = intersects[0].object;
        const planet = planetData.find(p => p.mesh === mesh);
        if (planet) {
            planetInfo.innerHTML = `<h2>${planet.name}</h2><p>${planet.info}</p>`;
            planetInfo.style.display = 'block';
        }
    } else {
        planetInfo.style.display = 'none';
    }
});

document.addEventListener('pointerdown', (event) => {
    if (!renderer.domElement.contains(event.target) && planetInfo.style.display === 'block') {
        planetInfo.style.display = 'none';
    }
});


