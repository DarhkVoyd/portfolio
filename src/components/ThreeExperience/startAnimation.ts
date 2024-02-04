import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function startExperience(canvas: HTMLCanvasElement) {
	const scene = new THREE.Scene();

	const geometry = new THREE.TorusGeometry(10, 3, 16, 50);
	const material = new THREE.MeshBasicMaterial({
		color: 0x777777,
		wireframe: true,
	});
	const torus = new THREE.Mesh(geometry, material);
	scene.add(torus);

	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.z = 20;

	const renderer = new THREE.WebGLRenderer({ canvas: canvas });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	const animate = () => {
		requestAnimationFrame(animate);

		torus.rotation.x += 0.01;
		torus.rotation.y += 0.005;
		torus.rotation.z += 0.01;

		renderer.render(scene, camera);
	};

	const controls = new OrbitControls(camera, renderer.domElement);

	animate();
}
