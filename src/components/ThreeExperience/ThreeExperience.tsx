'use client'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Torus from "./Torus";

export default function ThreeExperience() {
    return (
        <div className="fixed top-0 left-0 outline-none h-screen w-screen">
            <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 20] }}>
                <OrbitControls
                    enableDamping
                    enablePan
                    enableRotate
                    enableZoom
                />
                <Torus />
            </Canvas>
        </div>
    );
}

