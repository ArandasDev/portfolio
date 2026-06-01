"use client";

import { Canvas } from "@react-three/fiber";
import { Shapes } from "./Shapes";
import { ParticleField } from "./ParticleField";

/**
 * Cena 3D principal da V2. Importada dinamicamente (ssr:false).
 * Luzes coloridas (teal/violeta) dão o rim light "aurora".
 */
export default function SceneV2() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 5]} intensity={1.2} />
      <pointLight position={[-6, -2, -3]} intensity={3} color="#c084fc" />
      <pointLight position={[6, 3, 2]} intensity={2.4} color="#5eead4" />
      <ParticleField />
      <Shapes />
    </Canvas>
  );
}
