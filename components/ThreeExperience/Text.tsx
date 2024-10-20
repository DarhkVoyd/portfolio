import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js"; // Ensure correct import path
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js"; // Use jsm for the latest import paths
import { Object3DNode, extend } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

export default function TextMesh({ text }: { text: string }) {
  const font = useLoader(FontLoader, "./helvetiker_regular.typeface.json");
  extend({ TextGeometry });

  const meshRef = useRef<THREE.Mesh>(null!);
  const [geometry, setGeometry] = useState<TextGeometry | undefined>();

  useEffect(() => {
    if (font) {
      const textGeometry = new TextGeometry(text, {
        font,
        size: 4,
        height: 0.00001,
      });

      textGeometry.center();

      setGeometry(textGeometry);
    }
  }, [font, text]);

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 2, 0]}>
      <meshStandardMaterial />
    </mesh>
  );
}
