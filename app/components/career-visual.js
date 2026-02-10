"use client";

import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// --- 3D Component: Rotating Globe ---
const RotatingGlobe = ({ color = "#000", pointSize = 0.04 }) => {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const speedRef = useRef(0.002); // Slower default rotation

  const count = 3000; // More points for density
  const radius = 2;   // Larger base radius

  // Generate points on a sphere surface
  const positions = useMemo(() => {
    const temp = new Float32Array(count * 3);
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      temp[i * 3] = x * radius;
      temp[i * 3 + 1] = y * radius;
      temp[i * 3 + 2] = z * radius;
    }

    return temp;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    // Smooth speed transition
    const targetSpeed = hovered ? 0.001 : 0.002;
    speedRef.current += (targetSpeed - speedRef.current) * 0.05;

    // Rotation
    ref.current.rotation.y += speedRef.current;
    
    // Gentle floating wobble
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <group
      ref={ref}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={pointSize}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

export default function CareerVisual({ className, color = "#000", pointSize = 0.03 }) {
  return (
    <div className={`w-full h-full relative ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
         {/* <ambientLight intensity={0.5} /> */}
        <RotatingGlobe color={color} pointSize={pointSize} />
      </Canvas>
    </div>
  );
}