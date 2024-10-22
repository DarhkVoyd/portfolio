"use client";

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Galaxy = () => {
  const parameters = {
    count: 100000,
    size: 0.001,
    radius: 12,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: "#9b291a",
    outsideColor: "#1b3984",
  };

  const positions = new Float32Array(parameters.count * 3);
  const colors = new Float32Array(parameters.count * 3);

  const colorInside = new THREE.Color(parameters.insideColor);
  const colorOutside = new THREE.Color(parameters.outsideColor);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;
    const radius = Math.random() * parameters.radius;
    const spinAngle = parameters.spin * radius;
    const branch = i % parameters.branches;
    const branchAngle = ((Math.PI * 2) / parameters.branches) * branch;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? -1 : 1);
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? -1 : 1);
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? -1 : 1);

    positions[i3] = radius * Math.cos(branchAngle + spinAngle) + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = radius * Math.sin(branchAngle + spinAngle) + randomZ;

    const mixedColor = colorInside
      .clone()
      .lerp(colorOutside, radius / parameters.radius);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  useFrame((state) => {
    state.scene.rotation.y = state.clock.getElapsedTime();
  });

  return (
    <>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={parameters.count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={parameters.count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={parameters.size}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors
        />
      </points>
    </>
  );
};

const GalaxyScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 4, 13], fov: 75, near: 0.1, far: 100 }}
      style={{ width: "100%", height: "100vh" }}
      flat={true}
    >
      <Galaxy />
      <OrbitControls />
    </Canvas>
  );
};

export default GalaxyScene;
