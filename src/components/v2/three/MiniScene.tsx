"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function Spinner() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.2;
    ref.current.rotation.x += delta * 0.08;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1}>
      <Icosahedron ref={ref} args={[1.5, 0]}>
        <meshBasicMaterial color="#5eead4" wireframe transparent opacity={0.55} />
      </Icosahedron>
    </Float>
  );
}

/** Objeto 3D de destaque (acento) usado dentro de seções. */
export default function MiniScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.6]} gl={{ alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#c084fc" />
      <Spinner />
    </Canvas>
  );
}
