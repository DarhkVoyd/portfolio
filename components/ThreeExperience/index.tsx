"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import Floor from "./Floor";
import House from "./House";
import Ghosts from "./Ghosts";
import Graves from "./Graves";

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 2, 5], fov: 75 }}
      style={{ width: "100%", height: "100vh" }}
      flat={true}
      fallback={<div>Sorry no WebGL supported!</div>}
    >
      <fogExp2 color="#002230" density={0.1} attach="fog" />
      <ambientLight color="#86cdff" intensity={0.275} />

      <directionalLight
        color="#86cdff"
        intensity={1}
        position={[4, 4, -8]}
        shadow-mapSize={[256, 256]}
        castShadow
        shadow-camera-far={20}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-camera-near={1}
      ></directionalLight>
      <Ghosts />
      <Graves />
      <House />
      <Floor />
      <OrbitControls />
      <Sky
        turbidity={10}
        rayleigh={3}
        mieCoefficient={0.1}
        mieDirectionalG={0.95}
        sunPosition={[0.3, -0.038, -0.95]}
      />
    </Canvas>
  );
}
