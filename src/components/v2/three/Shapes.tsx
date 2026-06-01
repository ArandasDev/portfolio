"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Dodecahedron,
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Octahedron,
  Tetrahedron,
  TorusKnot,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * Composição 3D da hero V2: um torus knot distorcido ao centro e
 * vários poliedros em wireframe flutuando ao redor (parallax pelo mouse).
 */
export function Shapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.3, 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.2, 0.03);
  });

  return (
    <group ref={group}>
      {/* Peça central */}
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.9}>
        <TorusKnot args={[1, 0.3, 240, 32]}>
          <MeshDistortMaterial
            color="#5eead4"
            emissive="#0f766e"
            emissiveIntensity={0.35}
            roughness={0.25}
            metalness={0.45}
            distort={0.22}
            speed={1.4}
          />
        </TorusKnot>
      </Float>

      {/* Poliedros em wireframe orbitando */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Octahedron args={[0.55]} position={[2.8, 1.2, -1]}>
          <meshBasicMaterial color="#c084fc" wireframe transparent opacity={0.55} />
        </Octahedron>
      </Float>

      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.2}>
        <Tetrahedron args={[0.55]} position={[-3, -0.7, -0.5]}>
          <meshBasicMaterial color="#7dd3fc" wireframe transparent opacity={0.5} />
        </Tetrahedron>
      </Float>

      <Float speed={2.4} rotationIntensity={1} floatIntensity={1.8}>
        <Dodecahedron args={[0.42]} position={[-2.4, 1.7, -1.5]}>
          <meshBasicMaterial color="#99f6e4" wireframe transparent opacity={0.45} />
        </Dodecahedron>
      </Float>

      <Float speed={1.8} rotationIntensity={1.4} floatIntensity={1.3}>
        <Icosahedron args={[0.48]} position={[2.5, -1.5, -1]}>
          <meshBasicMaterial color="#a5b4fc" wireframe transparent opacity={0.5} />
        </Icosahedron>
      </Float>
    </group>
  );
}
