import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export default function Graves() {
  const textures = useTexture({
    armMap:
      "/textures/grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.webp",
    map: "/textures/grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.webp",
    normalMap:
      "/textures/grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.webp",
  });

  textures.armMap.repeat.set(0.3, 0.4);
  textures.map.colorSpace = THREE.SRGBColorSpace;
  textures.map.repeat.set(0.3, 0.4);
  textures.normalMap.repeat.set(0.3, 0.4);

  return (
    <group castShadow receiveShadow>
      {Array.from({ length: 30 }).map((_, idx) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 3 + Math.random() * 4;

        return (
          <mesh
            key={idx}
            position={[
              Math.sin(angle) * radius,
              0.4 * Math.random(),
              Math.cos(angle) * radius,
            ]}
            rotation={[
              (Math.random() - 0.5) * 0.4,
              (Math.random() - 0.5) * 0.4,
              (Math.random() - 0.5) * 0.4,
            ]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.6, 0.8, 0.2]} />
            <meshStandardMaterial
              map={textures.map}
              normalMap={textures.normalMap}
              aoMap={textures.armMap}
              roughnessMap={textures.armMap}
              metalnessMap={textures.armMap}
            />
          </mesh>
        );
      })}
    </group>
  );
}
