"use client";

import { Canvas } from "@react-three/fiber";
import CareerVisual from "./career-visual";

export default function CareerHeroCanvas() {
  return (
    <div className="absolute top-0 right-0 w-full h-full md:w-1/2 opacity-50 md:opacity-100 z-30" style={{ height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.5} />
        <CareerVisual position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
