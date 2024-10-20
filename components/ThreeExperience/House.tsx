import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function House() {
  const textures = useTexture({
    bushARMMap:
      "textures/bush/leaves_forest_ground_1k/leaves_forest_ground_arm_1k.webp",
    bushColorMap:
      "textures/bush/leaves_forest_ground_1k/leaves_forest_ground_diff_1k.webp",
    bushNormalMap:
      "textures/bush/leaves_forest_ground_1k/leaves_forest_ground_nor_gl_1k.webp",
    doorAlphaMap: "/textures/door/alpha.webp",
    doorAmbientOcclusionMap: "/textures/door/ambientOcclusion.webp",
    doorColorMap: "/textures/door/color.webp",
    doorMetalnessMap: "/textures/door/metalness.webp",
    doorNormalMap: "/textures/door/normal.webp",
    doorRoughnessMap: "/textures/door/roughness.webp",
    doorHeightMap: "/textures/door/height.webp",
    wallARMMap:
      "/textures/wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.webp",
    wallColorMap:
      "/textures/wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.webp",
    wallNormalMap:
      "/textures/wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.webp",
    roofARMMap: "/textures/roof/roof_slates_02_1k/roof_slates_02_arm_1k.webp",
    roofColorMap:
      "/textures/roof/roof_slates_02_1k/roof_slates_02_diff_1k.webp",
    roofNormalMap:
      "/textures/roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.webp",
  });

  textures.bushARMMap.repeat.set(2, 1);
  textures.bushARMMap.wrapS = THREE.RepeatWrapping;
  textures.bushColorMap.colorSpace = THREE.SRGBColorSpace;
  textures.bushColorMap.repeat.set(2, 1);
  textures.bushColorMap.wrapS = THREE.RepeatWrapping;
  textures.bushNormalMap.repeat.set(2, 1);
  textures.bushNormalMap.wrapS = THREE.RepeatWrapping;

  textures.doorColorMap.colorSpace = THREE.SRGBColorSpace;

  textures.wallColorMap.colorSpace = THREE.SRGBColorSpace;

  textures.roofARMMap.repeat.set(3, 1);
  textures.roofARMMap.wrapS = THREE.RepeatWrapping;
  textures.roofColorMap.colorSpace = THREE.SRGBColorSpace;
  textures.roofColorMap.repeat.set(3, 1);
  textures.roofColorMap.wrapS = THREE.RepeatWrapping;
  textures.roofNormalMap.repeat.set(3, 1);
  textures.roofNormalMap.wrapS = THREE.RepeatWrapping;

  return (
    <group>
      {/* House walls */}
      <mesh position={[0, 1.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 2.5, 4]} />
        <meshStandardMaterial
          map={textures.wallColorMap}
          normalMap={textures.wallNormalMap}
          aoMap={textures.wallARMMap}
          roughnessMap={textures.wallARMMap}
          metalnessMap={textures.wallARMMap}
        />
      </mesh>
      {/* Door Light */}
      <pointLight color="#ff7d46" intensity={5} position={[0, 2.2, 2.5]} />

      {/* Roof */}
      <mesh
        position={[0, 2.5 + 0.75, 0]}
        rotation-y={Math.PI * 0.25}
        castShadow
      >
        <coneGeometry args={[3.5, 1.5, 4]} />
        <meshStandardMaterial
          map={textures.roofColorMap}
          normalMap={textures.roofNormalMap}
          aoMap={textures.roofARMMap}
          roughnessMap={textures.roofARMMap}
          metalnessMap={textures.roofARMMap}
        />
      </mesh>

      {/* Door */}
      <mesh position={[0, 1, 2 + 0.01]}>
        <planeGeometry args={[2.2, 2.2, 100, 100]} />
        <meshStandardMaterial
          transparent
          map={textures.doorColorMap}
          alphaMap={textures.doorAlphaMap}
          aoMap={textures.doorAmbientOcclusionMap}
          metalnessMap={textures.doorMetalnessMap}
          normalMap={textures.doorNormalMap}
          roughnessMap={textures.doorRoughnessMap}
          displacementMap={textures.doorHeightMap}
          displacementScale={0.15}
          displacementBias={-0.04}
        />
      </mesh>

      {/* Bushes */}
      <mesh
        scale={[0.5, 0.5, 0.5]}
        position={[0.8, 0.2, 2.2]}
        rotation-x={-0.75}
      >
        <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
        <meshStandardMaterial
          color="ccffcc"
          map={textures.bushColorMap}
          normalMap={textures.bushNormalMap}
          aoMap={textures.bushARMMap}
          roughnessMap={textures.bushARMMap}
          metalnessMap={textures.bushARMMap}
        ></meshStandardMaterial>
      </mesh>
      <mesh
        scale={[0.25, 0.25, 0.25]}
        position={[1.4, 0.1, 2.1]}
        rotation-x={-0.75}
      >
        <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
        <meshStandardMaterial
          color="ccffcc"
          map={textures.bushColorMap}
          normalMap={textures.bushNormalMap}
          aoMap={textures.bushARMMap}
          roughnessMap={textures.bushARMMap}
          metalnessMap={textures.bushARMMap}
        ></meshStandardMaterial>
      </mesh>
      <mesh
        scale={[0.4, 0.4, 0.4]}
        position={[-0.8, 0.1, 2.2]}
        rotation-x={-0.75}
      >
        <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
        <meshStandardMaterial
          color="ccffcc"
          map={textures.bushColorMap}
          normalMap={textures.bushNormalMap}
          aoMap={textures.bushARMMap}
          roughnessMap={textures.bushARMMap}
          metalnessMap={textures.bushARMMap}
        ></meshStandardMaterial>
      </mesh>
      <mesh
        scale={[0.15, 0.15, 0.15]}
        position={[-1, 0.05, 2.6]}
        rotation-x={-0.75}
      >
        <sphereGeometry args={[1, 16, 16]}></sphereGeometry>
        <meshStandardMaterial
          color="ccffcc"
          map={textures.bushColorMap}
          normalMap={textures.bushNormalMap}
          aoMap={textures.bushARMMap}
          roughnessMap={textures.bushARMMap}
          metalnessMap={textures.bushARMMap}
        ></meshStandardMaterial>
      </mesh>
    </group>
  );
}
