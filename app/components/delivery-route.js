"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

// --- Configuration ---
// Responsive breakpoints
const isLargeScreen = typeof window !== "undefined" ? window.innerWidth >= 1024 : false;

// Global responsive constants
const ACCENT_COLOR = "transparent";

const POINT_COUNT = isLargeScreen ? 6000 : 9000; // lg different, sm/md same
const POINT_SIZE = isLargeScreen ? 0.05 : 0.04; // lg different, sm/md same

const SHAPE_SCALE = 1.4;
const TRANSITION_DURATION = 1.5;
const PAUSE_DURATION = 4;

// --- Shape Generators ---

function randomPointOnBox(width, height, depth) {
  const u = Math.random();
  const v = Math.random();
  const face = Math.floor(Math.random() * 6);
  const x = (width / 2);
  const y = (height / 2);
  const z = (depth / 2);

  switch (face) {
    case 0: return new THREE.Vector3(x, (u - 0.5) * height, (v - 0.5) * depth);
    case 1: return new THREE.Vector3(-x, (u - 0.5) * height, (v - 0.5) * depth);
    case 2: return new THREE.Vector3((u - 0.5) * width, y, (v - 0.5) * depth);
    case 3: return new THREE.Vector3((u - 0.5) * width, -y, (v - 0.5) * depth);
    case 4: return new THREE.Vector3((u - 0.5) * width, (v - 0.5) * height, z);
    case 5: return new THREE.Vector3((u - 0.5) * width, (v - 0.5) * height, -z);
    default: return new THREE.Vector3();
  }
}

function randomPointOnCylinder(radius, height, rotationZ = 0, rotationX = 0) {
  const angle = Math.random() * Math.PI * 2;
  const h = (Math.random() - 0.5) * height;

  let pos;
  if (Math.random() < 0.3) {
    const capR = Math.sqrt(Math.random()) * radius;
    pos = new THREE.Vector3(capR * Math.cos(angle), Math.random() > 0.5 ? height / 2 : -height / 2, capR * Math.sin(angle));
  }
  else {
    pos = new THREE.Vector3(radius * Math.cos(angle), h, radius * Math.sin(angle));
  }

  if (rotationZ)
    pos.applyAxisAngle(new THREE.Vector3(0, 0, 1), rotationZ);
  if (rotationX)
    pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), rotationX);
  return pos;
}

function randomPointOnTorus(radius, tube) {
  const u = Math.random() * Math.PI * 2;
  const v = Math.random() * Math.PI * 2;
  return new THREE.Vector3(
    (radius + tube * Math.cos(v)) * Math.cos(u),
    (radius + tube * Math.cos(v)) * Math.sin(u),
    tube * Math.sin(v),
  );
}

// --- Specific Shapes ---
const isDesktop = typeof window !== "undefined" ?
  window.innerWidth >= 1024 :
  true; // SSR fallback

// ---------------------- TRUCK ----------------------
function generateTruck() {
  const LOCAL = isDesktop ? 0.5 : 0.7; // smaller on desktop only

  const section = Math.random();
  let p;
  if (section < 0.2) {
    p = randomPointOnBox(2, 2.5, 2).add(new THREE.Vector3(3.5, 0.5, 0));
  }
  else if (section < 0.8) {
    p = randomPointOnBox(6, 3.5, 2.8).add(new THREE.Vector3(-1, 1, 0));
  }
  else {
    const wheelX = Math.random() > 0.5 ? 3.5 : -3;
    const wheelZ = Math.random() > 0.5 ? 1.2 : -1.2;
    p = randomPointOnCylinder(0.6, 0.5, Math.PI / 2)
      .add(new THREE.Vector3(wheelX + (Math.random() - 0.5) * 1.5, -1.2, wheelZ));
  }
  return p.multiplyScalar(SHAPE_SCALE * LOCAL);
}

// ---------------------- CONTAINER ----------------------
function generateContainer() {
  const LOCAL = isDesktop ? 0.45 : 0.7; // smaller on desktop only
  return randomPointOnBox(8, 3.5, 3.5).multiplyScalar(SHAPE_SCALE * LOCAL);
}

// ---------------------- FORKLIFT / CRANE ----------------------
function generateForklift() {
  const LOCAL = isDesktop ? 0.8 : 1; // already correct (desktop smaller)

  const section = Math.random();
  let p;

  if (section < 0.4) {
    p = randomPointOnBox(3, 1.5, 2).add(new THREE.Vector3(-1, -0.5, 0));
  }
  else if (section < 0.6) {
    p = randomPointOnBox(1.5, 2.5, 1.8).add(new THREE.Vector3(-1, 1.5, 0));
  }
  else if (section < 0.8) {
    if (Math.random() < 0.7) {
      p = randomPointOnBox(0.5, 4, 1.5).add(new THREE.Vector3(1.5, 0.5, 0));
    }
    else {
      p = randomPointOnBox(2, 0.2, 1.2).add(new THREE.Vector3(2.5, -1, 0));
    }
  }
  else {
    const wx = Math.random() > 0.5 ? 0.2 : -2;
    const wz = Math.random() > 0.5 ? 1 : -1;
    p = randomPointOnCylinder(0.6, 0.5, Math.PI / 2)
      .add(new THREE.Vector3(wx, -1.2, wz));
  }

  return p.multiplyScalar(SHAPE_SCALE * LOCAL);
}

// ---------------------- DRONE ----------------------
function generateDrone() {
  const LOCAL = isDesktop ? 0.6 : 0.95;

  const section = Math.random();
  let p;

  if (section < 0.2) {
    p = randomPointOnBox(1.5, 0.8, 1.5);
  }
  else if (section < 0.6) {
    const armDir = Math.floor(Math.random() * 4);
    const len = 2.5;
    const angle = (armDir * Math.PI) / 2 + Math.PI / 4;
    const r = Math.random() * len + 0.5;
    p = new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r);
  }
  else {
    const rotorIdx = Math.floor(Math.random() * 4);
    const angle = (rotorIdx * Math.PI) / 2 + Math.PI / 4;
    const dist = 3;
    p = randomPointOnTorus(0.8, 0.1);
    p.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    p.add(new THREE.Vector3(Math.cos(angle) * dist, 0.2, Math.sin(angle) * dist));
  }

  return p.multiplyScalar(SHAPE_SCALE * LOCAL);
}

function generatePackage() {
  const p = randomPointOnBox(3, 3, 3);
  if (Math.random() < 0.1) {
    if (Math.abs(p.y) > 1.4)
      p.y += 0.1;
  }
  return p.multiplyScalar(SHAPE_SCALE);
}

function generateSteeringWheel() {
  if (Math.random() < 0.8) {
    return randomPointOnTorus(3, 0.3).multiplyScalar(SHAPE_SCALE);
  }
  else {
    if (Math.random() < 0.3) {
      return randomPointOnCylinder(0.8, 0.5, Math.PI / 2).multiplyScalar(SHAPE_SCALE);
    }
    else {
      return randomPointOnBox(6, 0.4, 0.2).multiplyScalar(SHAPE_SCALE);
    }
  }
}

// --- Component ---

function MorphingParticles() {
  const ref = useRef();

  // Pre-calculate all shapes
  const shapes = useMemo(() => {
    const generators = [
      generateTruck,
      generateContainer,
      generateForklift,
      generateDrone,
      generatePackage,
    ];

    return generators.map((gen) => {
      const positions = new Float32Array(POINT_COUNT * 3);
      for (let i = 0; i < POINT_COUNT; i++) {
        const p = gen();
        positions[i * 3] = p.x;
        positions[i * 3 + 1] = p.y;
        positions[i * 3 + 2] = p.z;
      }
      return positions;
    });
  }, []);

  // Initial positions buffer - useState for initialization, ref for mutations
  const [initialPositions] = useState(() => new Float32Array(POINT_COUNT * 3));
  const positionsRef = useRef(initialPositions);

  useFrame((state) => {
    if (!ref.current)
      return;

    const time = state.clock.elapsedTime;
    const totalDuration = TRANSITION_DURATION + PAUSE_DURATION;
    const cycleTime = time % (totalDuration * shapes.length);
    const shapeIndex = Math.floor(cycleTime / totalDuration);
    const progressInCycle = (cycleTime % totalDuration) / TRANSITION_DURATION;

    // Clamp progress to 1 (handle pause state)
    const t = Math.min(progressInCycle, 1);

    // Smooth easing (cubic)
    const smoothT = t * t * (3 - 2 * t);

    const currentPositions = shapes[shapeIndex];
    const nextPositions = shapes[(shapeIndex + 1) % shapes.length];
    const positions = positionsRef.current;

    // Interpolate
    for (let i = 0; i < POINT_COUNT; i++) {
      const i3 = i * 3;
      const cx = currentPositions[i3];
      const cy = currentPositions[i3 + 1];
      const cz = currentPositions[i3 + 2];

      const nx = nextPositions[i3];
      const ny = nextPositions[i3 + 1];
      const nz = nextPositions[i3 + 2];

      positions[i3] = cx + (nx - cx) * smoothT;
      positions[i3 + 1] = cy + (ny - cy) * smoothT;
      positions[i3 + 2] = cz + (nz - cz) * smoothT;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

    // Rotation
    ref.current.rotation.y = time * 0.3;
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={initialPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={ACCENT_COLOR}
          size={POINT_SIZE}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={1.0} // Increased from 0.9
        />
      </Points>
    </group>
  );
}

export default function DeliveryRoute() {
  return (
    <div className="w-full pl-0  overflow-visible -top-20 lg:-top-0 h-[40vh] lg:h-[100vh] rounded-xl relative">
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }} dpr={[1, 2]} gl={{ alpha: true }}>
        <ambientLight intensity={1.0} /> {/* Increased from 0.5 */}
        <MorphingParticles />
      </Canvas>
    </div>
  );
}
