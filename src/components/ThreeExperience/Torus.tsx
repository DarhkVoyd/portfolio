'use client'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function Torus() {
    const torusRef = useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (torusRef.current) {
            torusRef.current.rotation.x += 0.01;
            torusRef.current.rotation.y += 0.005;
            torusRef.current.rotation.z += 0.01;
        }
    });
    return (
        <mesh ref={torusRef}>
            <torusGeometry args={[10, 3, 16, 50]} />
            <meshNormalMaterial wireframe />
        </mesh>
    );
}