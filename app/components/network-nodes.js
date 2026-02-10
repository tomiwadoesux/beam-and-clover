"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 35;
const CONNECT_DISTANCE = 4;
const BASE_SPEED = 0.008;

// Keywords to attach to some nodes
const NODE_LABELS = [
  "Fleet Management", "Vehicle Registration", "License Plates", "Traffic Analysis",
  "Cloud Migration", "Cybersecurity", "Digital Compliance", "Route Optimization",
  "Supply Chain", "Last-Mile Delivery", "RFID Systems", "IoT Integration",
  "Smart Cities", "E-Governance", "Data Analytics", "System Integration"
];

const COMPANY_COLOR = "#F48244"; 

function Nodes() {
  // Initialize particles
  const [particles] = useState(() => {
    const temp = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Pick a random label for some nodes (roughly 1 in 3)
      const label = Math.random() > 0.65 
        ? NODE_LABELS[Math.floor(Math.random() * NODE_LABELS.length)] 
        : null;

      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * BASE_SPEED,
          (Math.random() - 0.5) * BASE_SPEED,
          (Math.random() - 0.5) * BASE_SPEED
        ),
        label
      });
    }
    return temp;
  });

  const spheresRef = useRef([]);
  const linesGeometryRef = useRef(null);
  const textRefs = useRef({}); // Store refs for text components

  useFrame(() => {
    // Update positions
    particles.forEach((p, i) => {
      p.position.add(p.velocity);

      // Bounce off "walls" (soft boundaries)
      if (p.position.x > 12) p.velocity.x = -Math.abs(p.velocity.x);
      if (p.position.x < -12) p.velocity.x = Math.abs(p.velocity.x);
      if (p.position.y > 8) p.velocity.y = -Math.abs(p.velocity.y);
      if (p.position.y < -8) p.velocity.y = Math.abs(p.velocity.y);
      if (p.position.z > 6) p.velocity.z = -Math.abs(p.velocity.z);
      if (p.position.z < -6) p.velocity.z = Math.abs(p.velocity.z);

      // Update Sphere Mesh
      if (spheresRef.current[i]) {
        spheresRef.current[i].position.copy(p.position);
      }

      // Update Text Position (if it exists)
      // We offset the text slightly so it floats near the node
      if (p.label && textRefs.current[i]) {
        textRefs.current[i].position.set(
          p.position.x + 0.3, 
          p.position.y + 0.3, 
          p.position.z
        );
      }
    });

    // Update Connections
    const points = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const p1 = particles[i].position;
        const p2 = particles[j].position;
        const dist = p1.distanceTo(p2);

        if (dist < CONNECT_DISTANCE) {
          points.push(p1);
          points.push(p2);
        }
      }
    }

    if (linesGeometryRef.current) {
      linesGeometryRef.current.setFromPoints(points);
    }
  });

  return (
    <group>
      {particles.map((p, i) => (
        <group key={i}>
          {/* The Node Sphere */}
          <mesh ref={(el) => (spheresRef.current[i] = el)}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={COMPANY_COLOR} />
          </mesh>
          
          {/* The Text Label (if applicable) */}
          {p.label && (
            <Text
              ref={(el) => (textRefs.current[i] = el)}
              fontSize={0.35}
              color={COMPANY_COLOR}
              anchorX="left"
              anchorY="bottom"
            >
              {p.label}
            </Text>
          )}
        </group>
      ))}

      {/* Connecting Lines */}
      <lineSegments>
        <bufferGeometry ref={linesGeometryRef} />
        <lineBasicMaterial 
          color={COMPANY_COLOR} 
          transparent 
          opacity={0.2} 
          depthWrite={false} 
        />
      </lineSegments>
    </group>
  );
}


export default function NetworkNodes() {
  return (
    <div className="w-full h-full opacity-50 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Nodes />
      </Canvas>
    </div>
  );
}
