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

// --- Basic Shape Helpers ---

function randomPointOnBox(width, height, depth) {
  const u = Math.random();
  const v = Math.random();
  const face = Math.floor(Math.random() * 6);
  const x = width / 2;
  const y = height / 2;
  const z = depth / 2;

  switch (face) {
    case 0:
      return new THREE.Vector3(x, (u - 0.5) * height, (v - 0.5) * depth);
    case 1:
      return new THREE.Vector3(-x, (u - 0.5) * height, (v - 0.5) * depth);
    case 2:
      return new THREE.Vector3((u - 0.5) * width, y, (v - 0.5) * depth);
    case 3:
      return new THREE.Vector3((u - 0.5) * width, -y, (v - 0.5) * depth);
    case 4:
      return new THREE.Vector3((u - 0.5) * width, (v - 0.5) * height, z);
    case 5:
      return new THREE.Vector3((u - 0.5) * width, (v - 0.5) * height, -z);
    default:
      return new THREE.Vector3();
  }
}

function randomPointInSphere(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = Math.cbrt(Math.random()) * radius; // Uniform distribution in sphere
  const sinPhi = Math.sin(phi);
  return new THREE.Vector3(
    r * sinPhi * Math.cos(theta),
    r * sinPhi * Math.sin(theta),
    r * Math.cos(phi),
  );
}

function randomPointOnCylinder(radius, height, rotationZ = 0, rotationX = 0) {
  const angle = Math.random() * Math.PI * 2;
  const h = (Math.random() - 0.5) * height;

  let pos;
  if (Math.random() < 0.3) {
    const capR = Math.sqrt(Math.random()) * radius;
    pos = new THREE.Vector3(
      capR * Math.cos(angle),
      Math.random() > 0.5 ? height / 2 : -height / 2,
      capR * Math.sin(angle),
    );
  }
  else {
    pos = new THREE.Vector3(
      radius * Math.cos(angle),
      h,
      radius * Math.sin(angle),
    );
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

// --- IT Specific Shapes ---

function generateCodeBrackets() {
  // Generate < / >
  const part = Math.random();
  const p = new THREE.Vector3();

  if (part < 0.33) {
    // <
    // Two lines: (1,1) to (0,0) and (0,0) to (1,-1) roughly
    // Shifted to left: x around -2
    const t = Math.random();
    const upper = Math.random() > 0.5;
    // V shape at x=-2
    // x goes from -1 to -2.5 then back to -1?
    // Simple lines:
    if (upper) {
      p.set(-1.5 - t, 0.5 + t, 0);
    }
    else {
      p.set(-1.5 - t, -0.5 - t, 0);
    }
    // Add some thickness
    p.z += (Math.random() - 0.5) * 0.2;
  }
  else if (part < 0.66) {
    // >
    const t = Math.random();
    const upper = Math.random() > 0.5;
    if (upper) {
      p.set(1.5 + t, 0.5 + t, 0);
    }
    else {
      p.set(1.5 + t, -0.5 - t, 0);
    }
    p.z += (Math.random() - 0.5) * 0.2;
  }
  else {
    // /
    // Line from (0.5, -1.5) to (-0.5, 1.5)
    const t = Math.random(); // 0 to 1
    // x: 1 -> -1
    // y: -1.5 -> 1.5
    p.set(0.8 - 1.6 * t, -1.5 + 3.0 * t, 0);
    p.z += (Math.random() - 0.5) * 0.2;
  }

  return p.multiplyScalar(SHAPE_SCALE);
}

// Note: Unused shape generation functions removed to satisfy linting

function generatePadlock() {
  const MOVE_UP = 0.5; // amount to move the whole padlock upward
  const r = Math.random();

  if (r < 0.6) {
    // Body
    return randomPointOnBox(2.5, 2.0, 1.0)
      .add(new THREE.Vector3(0, -1 + MOVE_UP, 0)) // <- move up
      .multiplyScalar(SHAPE_SCALE);
  }
  else {
    // Shackle
    const p = randomPointOnTorus(1.0, 0.25);

    // Only top half of torus
    if (p.y < 0)
      p.y *= -1;

    // Move up
    p.y += 0.2 + MOVE_UP; // <- move up
    return p.multiplyScalar(SHAPE_SCALE);
  }
}

function generateScreen() {
  const r = Math.random();
  if (r < 0.7) {
    // Screen
    return randomPointOnBox(4, 2.5, 0.2)
      .add(new THREE.Vector3(0, 0.5, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
  else if (r < 0.85) {
    // Stand neck
    return randomPointOnBox(0.4, 1.5, 0.2)
      .add(new THREE.Vector3(0, -1, -0.2))
      .multiplyScalar(SHAPE_SCALE);
  }
  else {
    // Base
    return randomPointOnBox(2, 0.2, 1.5)
      .add(new THREE.Vector3(0, -1.8, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
}

function generateGear() {
  const r = Math.random();
  if (r < 0.75) {
    // Inner solid disk (Hub + Web)
    // Radius 2, thickness 0.4, facing Z (rotX = 90)
    return randomPointOnCylinder(1.5, 0.4, 0, Math.PI / 2).multiplyScalar(
      SHAPE_SCALE,
    );
  }
  else {
    // Teeth
    const teeth = 8;
    const angle = (Math.floor(Math.random() * teeth) / teeth) * Math.PI * 2;
    // Box for tooth
    const p = randomPointOnBox(0.8, 0.8, 0.2); // W, H, D
    // Move out
    p.y += 2.3; // Radius + offset
    // Rotate around Z
    p.applyAxisAngle(new THREE.Vector3(0, 0, 1), angle);
    return p.multiplyScalar(SHAPE_SCALE);
  }
}

function generateChart() {
  const SCALE = 0.85; // reduce size a little

  const r = Math.random();
  if (r < 0.1) {
    return randomPointOnBox(4, 0.2, 0.5)
      .add(new THREE.Vector3(0, -2, 0))
      .multiplyScalar(SHAPE_SCALE * SCALE);
  }
  else {
    const bar = Math.random();
    let p;
    if (bar < 0.33) {
      p = randomPointOnBox(0.8, 2.0, 0.5).add(new THREE.Vector3(-1.2, -1.0, 0));
    }
    else if (bar < 0.66) {
      p = randomPointOnBox(0.8, 3.0, 0.5).add(new THREE.Vector3(0, -0.5, 0));
    }
    else {
      p = randomPointOnBox(0.8, 4.5, 0.5).add(new THREE.Vector3(1.2, 0.25, 0));
    }
    return p.multiplyScalar(SHAPE_SCALE * SCALE);
  }
}

function generateGlobe() {
  const SCALE = 0.85; // reduce size a little

  const r = Math.random();
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const rad = 2.2;

  let p;
  if (r < 0.2) {
    const ringRad = 3.0;
    const angle = Math.random() * Math.PI * 2;
    p = new THREE.Vector3(
      Math.cos(angle) * ringRad,
      Math.sin(angle) * ringRad,
      0,
    );
    p.applyAxisAngle(new THREE.Vector3(1, 1, 0).normalize(), Math.PI / 4);
  }
  else {
    p = new THREE.Vector3(
      rad * Math.sin(phi) * Math.cos(theta),
      rad * Math.sin(phi) * Math.sin(theta),
      rad * Math.cos(phi),
    );
  }
  return p.multiplyScalar(SHAPE_SCALE * SCALE);
}

function generateRobotFace() {
  const r = Math.random();
  if (r < 0.6) {
    // Head
    return randomPointOnBox(2.5, 2.5, 2.5).multiplyScalar(SHAPE_SCALE);
  }
  else if (r < 0.75) {
    // Eyes
    const side = Math.random() > 0.5 ? 1 : -1;
    return randomPointOnCylinder(0.5, 0.2, Math.PI / 2)
      .add(new THREE.Vector3(side * 0.6, 0.2, 1.3))
      .multiplyScalar(SHAPE_SCALE);
  }
  else if (r < 0.85) {
    // Antenna
    return randomPointOnCylinder(0.1, 1.0)
      .add(new THREE.Vector3(0, 1.8, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
  else {
    // Mouth
    return randomPointOnBox(1.2, 0.2, 0.1)
      .add(new THREE.Vector3(0, -0.6, 1.3))
      .multiplyScalar(SHAPE_SCALE);
  }
}

// --- Component ---

function MorphingParticles() {
  const ref = useRef();

  // Pre-calculate all shapes
  const shapes = useMemo(() => {
    const generators = [
      generateCodeBrackets,
      generatePadlock,
      generateScreen,
      generateRobotFace,
      generateGear,
      generateChart,
      generateGlobe,
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
    ref.current.rotation.y = time * 0.2;
    ref.current.rotation.x = Math.sin(time * 0.1) * 0.1;
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
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function ITVisual() {
  return (
    <div className="w-full pl-0  overflow-visible -top-20 lg:-top-0 h-[40vh] lg:h-[100vh] rounded-xl relative">
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }} dpr={[1, 2]} gl={{ alpha: true }}>
        <ambientLight intensity={1.0} />
        <MorphingParticles />
      </Canvas>
    </div>
  );
}
