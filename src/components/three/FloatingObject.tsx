"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Objeto central da hero: um icosaedro distorcido que respira lentamente
 * e reage com sutileza ao movimento do mouse (parallax).
 */
export function FloatingObject() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.45, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.3, 0.04);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
        <Icosahedron args={[1.4, 8]}>
          <MeshDistortMaterial
            color="#5a62e8"
            emissive="#2b2f7a"
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.35}
            distort={0.35}
            speed={1.5}
          />
        </Icosahedron>

        {/* Malha de arame sutil sobre o objeto, reforçando a vibe tech. */}
        <Icosahedron args={[1.45, 3]}>
          <meshBasicMaterial color="#a5a9ff" wireframe transparent opacity={0.12} />
        </Icosahedron>
      </Float>
    </group>
  );
}
