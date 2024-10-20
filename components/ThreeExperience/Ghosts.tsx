import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Ghosts() {
  const ghost1Ref = useRef<THREE.PointLight>(null);
  const ghost2Ref = useRef<THREE.PointLight>(null);
  const ghost3Ref = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (ghost1Ref.current) {
      const ghost1Angle = elapsedTime * 0.5;
      ghost1Ref.current.position.x = Math.cos(ghost1Angle) * 4;
      ghost1Ref.current.position.z = Math.sin(ghost1Angle) * 4;
      ghost1Ref.current.position.y = Math.sin(ghost1Angle * 2.34) * 0.5;
    }

    if (ghost2Ref.current) {
      const ghost2Angle = -elapsedTime * 0.38;
      ghost2Ref.current.position.x = Math.cos(ghost2Angle) * 5;
      ghost2Ref.current.position.z = Math.sin(ghost2Angle) * 5;
      ghost2Ref.current.position.y = Math.sin(ghost2Angle * 2.34) * 0.5;
    }

    if (ghost3Ref.current) {
      const ghost3Angle = elapsedTime * 0.23;
      ghost3Ref.current.position.x = Math.cos(ghost3Angle) * 6;
      ghost3Ref.current.position.z = Math.sin(ghost3Angle) * 6;
      ghost3Ref.current.position.y = Math.sin(ghost3Angle * 2.34) * 0.5;
    }
  });

  return (
    <>
      <pointLight
        ref={ghost1Ref}
        color="#8800ff"
        intensity={6}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={10}
      />
      <pointLight
        ref={ghost2Ref}
        color="#ff0088"
        intensity={6}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={10}
      />
      <pointLight
        ref={ghost3Ref}
        color="#ff0000"
        intensity={6}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={10}
      />
    </>
  );
}
