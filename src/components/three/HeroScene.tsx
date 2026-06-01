"use client";

import { Canvas } from "@react-three/fiber";
import { FloatingObject } from "./FloatingObject";
import { Starfield } from "./Starfield";

/**
 * Cena 3D da hero. Importada dinamicamente (ssr:false) para rodar só no cliente.
 * Iluminação baseada em luzes (sem HDR externo) para não depender de rede.
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 3, 4]} intensity={1.3} />
      <pointLight position={[-5, -2, -4]} intensity={2.4} color="#7c83ff" />
      <pointLight position={[4, 4, 2]} intensity={1.2} color="#ffffff" />
      <Starfield />
      <FloatingObject />
    </Canvas>
  );
}
