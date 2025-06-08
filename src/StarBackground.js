import * as THREE from "three";

export default function getStarfield({ numStars = 500 } = {}) {
  function randomSpherePoint() {
    const radius = Math.random() * 2500 + 25; // Random radius between 25 and 2525
    const u = Math.random();// Random angle in the range [0, 1)
    const v = Math.random();// Random angle in the range [0, 1)
    const theta = 2 * Math.PI * u;// Random azimuthal angle 
    const phi = Math.acos(2 * v - 1); // Random polar angle
    let x = radius * Math.sin(phi) * Math.cos(theta); // Random polar angle
    let y = radius * Math.sin(phi) * Math.sin(theta);// Random polar angle
    let z = radius * Math.cos(phi); // Random polar angle  

    return {
      pos: new THREE.Vector3(x, y, z),
      hue: 0.6,
      minDist: radius,
    }; // Return a point on the sphere with a random radius
  }
  const verts = []; 
  const colors = [];
  const positions = [];
  let col;
  for (let i = 0; i < numStars; i += 1) {
    let p = randomSpherePoint();
    const { pos, hue } = p;
    positions.push(p);
    col = new THREE.Color().setHSL(hue, 0.2, Math.random());
    verts.push(pos.x, pos.y, pos.z);
    colors.push(col.r, col.g, col.b);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));//
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.2,
    vertexColors: true,
    map: new THREE.TextureLoader().load(
      "./textures/stars/circle.png"
    ),
  });
  const points = new THREE.Points(geo, mat);
  return points;
}
