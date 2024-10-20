import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Floor() {
  const textures = useTexture({
    alphaMap: "/textures/floor/alpha.webp",
    map: "/textures/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.webp",
    armMap:
      "/textures/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.webp",
    normalMap:
      "/textures/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.webp",
    displacementMap:
      "/textures/floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.webp",
  });

  textures.map.colorSpace = THREE.SRGBColorSpace;
  textures.map.repeat.set(8, 8);
  textures.map.wrapS = textures.map.wrapT = THREE.RepeatWrapping;
  textures.armMap.repeat.set(8, 8);
  textures.armMap.wrapS = textures.armMap.wrapT = THREE.RepeatWrapping;
  textures.normalMap.repeat.set(8, 8);
  textures.normalMap.wrapS = textures.normalMap.wrapT = THREE.RepeatWrapping;
  textures.displacementMap.repeat.set(8, 8);
  textures.displacementMap.wrapS = textures.displacementMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <mesh rotation-x={-Math.PI * 0.5} receiveShadow>
      <planeGeometry args={[20, 20, 100, 100]} />
      <meshStandardMaterial
        transparent
        alphaMap={textures.alphaMap}
        map={textures.map}
        aoMap={textures.armMap}
        roughnessMap={textures.armMap}
        metalnessMap={textures.armMap}
        normalMap={textures.normalMap}
        displacementMap={textures.displacementMap}
        displacementScale={0.3}
        displacementBias={-0.2}
      />
    </mesh>
  );
}
