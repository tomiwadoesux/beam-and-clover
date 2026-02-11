"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";

import * as THREE from "three";

// --- Configuration ---
// Responsive breakpoints
const isLargeScreen = typeof window !== "undefined" ? window.innerWidth >= 1024 : false;

// Global responsive constants
const ACCENT_COLOR = "#000";

const POINT_COUNT = isLargeScreen ? 6000 : 9000; // lg different, sm/md same
const POINT_SIZE = isLargeScreen ? 0.05 : 0.04; // lg different, sm/md same

const SHAPE_SCALE = 1.4;
const TRANSITION_DURATION = 1.5;
const PAUSE_DURATION = 4;

// --- Basic Shape Helpers ---

const randomPointOnBox = (width, height, depth) => {
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
};

const randomPointInSphere = (radius) => {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = Math.cbrt(Math.random()) * radius;
  const sinPhi = Math.sin(phi);
  return new THREE.Vector3(
    r * sinPhi * Math.cos(theta),
    r * sinPhi * Math.sin(theta),
    r * Math.cos(phi)
  );
};

const randomPointOnCylinder = (
  radius,
  height,
  rotationZ = 0,
  rotationX = 0
) => {
  const angle = Math.random() * Math.PI * 2;
  const h = (Math.random() - 0.5) * height;

  let pos;
  if (Math.random() < 0.3) {
    const capR = Math.sqrt(Math.random()) * radius;
    pos = new THREE.Vector3(
      capR * Math.cos(angle),
      Math.random() > 0.5 ? height / 2 : -height / 2,
      capR * Math.sin(angle)
    );
  } else {
    pos = new THREE.Vector3(
      radius * Math.cos(angle),
      h,
      radius * Math.sin(angle)
    );
  }

  if (rotationZ) pos.applyAxisAngle(new THREE.Vector3(0, 0, 1), rotationZ);
  if (rotationX) pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), rotationX);
  return pos;
};

const randomPointOnTorus = (radius, tube) => {
  const u = Math.random() * Math.PI * 2;
  const v = Math.random() * Math.PI * 2;
  return new THREE.Vector3(
    (radius + tube * Math.cos(v)) * Math.cos(u),
    (radius + tube * Math.cos(v)) * Math.sin(u),
    tube * Math.sin(v)
  );
};

const randomPointOnCone = (radius, height) => {
  const theta = Math.random() * 2 * Math.PI;
  const r = Math.sqrt(Math.random()) * radius;
  const y = (1 - r / radius) * height - height / 2;
  return new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta));
};



const isDesktop = typeof window !== "undefined"
  ? window.innerWidth > 768
  : true; // SSR fallback

  
const generateFlag = () => {
  const SCALE = SHAPE_SCALE * 0.6; // smaller on all devices

  const r = Math.random();
  if (r < 0.1) {
    return randomPointOnCylinder(0.1, 5.0)
      .add(new THREE.Vector3(-1.5, 0, 0))
      .multiplyScalar(SCALE);
  } else {
    const u = Math.random();
    const v = Math.random();
    const w = 3.0;
    const h = 2.0;
    const x = -1.5 + u * w;
    const y = 2.5 - v * h;
    const z = Math.sin(u * Math.PI * 2) * 0.3;
    return new THREE.Vector3(x, y, z).multiplyScalar(SCALE);
  }
};

const generateLicensePlate = () => {
  return randomPointOnBox(4.0, 1.5, 0.2).multiplyScalar(SHAPE_SCALE);
};

const generateCar = () => {
  const offsetY = isDesktop ? 0.6 : 0;
  const r = Math.random();

  if (r < 0.2) {
    const fx = Math.random() > 0.5 ? 1.5 : -1.5;
    const fz = Math.random() > 0.5 ? 1.0 : -1.0;
    return randomPointOnCylinder(0.6, 0.4, Math.PI / 2)
      .add(new THREE.Vector3(fx, -0.8 + offsetY, fz))
      .multiplyScalar(SHAPE_SCALE);
  } else if (r < 0.6) {
    return randomPointOnBox(4.5, 1.0, 2.2)
      .add(new THREE.Vector3(0, -0.2 + offsetY, 0))
      .multiplyScalar(SHAPE_SCALE);
  } else {
    return randomPointOnBox(2.5, 1.0, 2.0)
      .add(new THREE.Vector3(-0.5, 0.8 + offsetY, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
};

const generateSUV = () => {
  const r = Math.random();
  if (r < 0.2) {
    const fx = Math.random() > 0.5 ? 1.6 : -1.6;
    const fz = Math.random() > 0.5 ? 1.1 : -1.1;
    return randomPointOnCylinder(0.7, 0.5, Math.PI / 2)
      .add(new THREE.Vector3(fx, -0.8, fz))
      .multiplyScalar(SHAPE_SCALE);
  } else if (r < 0.6) {
    return randomPointOnBox(4.8, 1.4, 2.4)
      .add(new THREE.Vector3(0, -0.1, 0))
      .multiplyScalar(SHAPE_SCALE);
  } else {
    return randomPointOnBox(3.5, 1.2, 2.2)
      .add(new THREE.Vector3(-0.2, 1.2, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
};

const generateScaleOfJustice = () => {
  const SCALE = SHAPE_SCALE * 0.85; // slightly smaller
  const r = Math.random();

  if (r < 0.15) {
    return randomPointOnCylinder(0.15, 4.5)
      .add(new THREE.Vector3(0, 0, 0))
      .multiplyScalar(SCALE);
  } else if (r < 0.3) {
    return randomPointOnCylinder(0.1, 3.5, 0, Math.PI / 2)
      .add(new THREE.Vector3(0, 2.0, 0))
      .multiplyScalar(SCALE);
  } else if (r < 0.65) {
    const side = Math.random() > 0.5 ? 1 : -1;
    let p = randomPointInSphere(0.8);
    if (p.y > 0) p.y *= -1;
    p.add(new THREE.Vector3(side * 1.5, 0.5, 0));
    return p.multiplyScalar(SCALE);
  } else {
    const side = Math.random() > 0.5 ? 1 : -1;
    const t = Math.random();
    const angle = Math.random() * Math.PI * 2;

    const rimX = Math.cos(angle) * 0.8;
    const rimZ = Math.sin(angle) * 0.8;

    const start = new THREE.Vector3(side * 1.5 + rimX, 0.5, rimZ);
    const end = new THREE.Vector3(side * 1.5, 2.0, 0);

    return new THREE.Vector3().lerpVectors(start, end, t).multiplyScalar(SCALE);
  }
};

const generateTrafficLight = () => {
  const SCALE = SHAPE_SCALE * 0.7; // smaller on all devices
  const r = Math.random();

  if (r < 0.6) {
    return randomPointOnBox(1.5, 4.5, 1.5).multiplyScalar(SCALE);
  } else {
    const which = Math.random();
    let yPos = which < 0.33 ? 1.2 : which < 0.66 ? 0 : -1.2;

    return randomPointOnCylinder(0.5, 0.2, Math.PI / 2)
      .add(new THREE.Vector3(0, yPos, 0.8))
      .multiplyScalar(SCALE);
  }
};

const generateLocationPin = () => {
  const r = Math.random();

  if (r < 0.6) {
    const p = randomPointInSphere(1.5);
    p.y += 1.5;
    if (p.y < 1.5) p.x *= 0.8;
    p.z *= 0.8;
    return p.multiplyScalar(SHAPE_SCALE);
  } else {
    return randomPointOnCone(1.4, 2.5)
      .add(new THREE.Vector3(0, 0.5, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
};

// Inverted cone – moved DOWN for all devices
const generateInvertedCone = () => {
  const p = randomPointOnCone(1.4, 2.5);
  p.y = p.y * -1 - 1.0; // lower
  return p.multiplyScalar(SHAPE_SCALE);
};

const generateCheckmark = () => {
  const r = Math.random();

  if (r < 0.3) {
    return randomPointOnCylinder(0.2, 1.5, 0, -Math.PI / 4)
      .add(new THREE.Vector3(-1.0, -0.5, 0))
      .multiplyScalar(SHAPE_SCALE);
  } else {
    return randomPointOnCylinder(0.2, 3.0, 0, Math.PI / 6)
      .add(new THREE.Vector3(0.5, 0.5, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
};

const generateTrafficCone = () => {
  const offsetY = isDesktop ? 0.5 : 0;
  const r = Math.random();

  if (r < 0.2) {
    return randomPointOnBox(2.5, 0.2, 2.5)
      .add(new THREE.Vector3(0, -1.5 + offsetY, 0))
      .multiplyScalar(SHAPE_SCALE);
  } else {
    return randomPointOnCone(1.0, 3.0)
      .add(new THREE.Vector3(0, 0 + offsetY, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
};

const generateMotorbike = () => {
  const offsetY = isDesktop ? 1.0 : 0;
  const r = Math.random();

  if (r < 0.3) {
    const fx = Math.random() > 0.5 ? 1.2 : -1.2;
    return randomPointOnTorus(0.7, 0.15)
      .add(new THREE.Vector3(fx, -0.8 + offsetY, 0))
      .multiplyScalar(SHAPE_SCALE);
  } else if (r < 0.7) {
    return randomPointOnBox(2.0, 0.8, 0.5)
      .add(new THREE.Vector3(0, 0 + offsetY, 0))
      .multiplyScalar(SHAPE_SCALE);
  } else {
    return randomPointOnCylinder(0.1, 1.5, 0, -Math.PI / 6)
      .add(new THREE.Vector3(1.0, 0.5 + offsetY, 0))
      .multiplyScalar(SHAPE_SCALE);
  }
};

// --- Component ---

function MorphingParticles() {
  const ref = useRef();

  // Pre-generate random seed - use useState for proper initialization
  const [pinVariant] = useState(() => Math.random());
  
  const shapes = useMemo(() => {
    
    const generators = [
      generateFlag,
      generateLicensePlate,
      generateCar,

      generateScaleOfJustice,
      generateTrafficLight,
      // Special handling for pin (combined sphere + cone)
      () => {
        if (pinVariant < 0.6) {
          const p = randomPointInSphere(1.5);
          p.y += 1.5;
          return p.multiplyScalar(SHAPE_SCALE);
        } else {
          return generateInvertedCone();
        }
      },
      generateSUV,
      generateTrafficCone,
      generateMotorbike,
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
  }, [pinVariant]);

  const [initialPositions] = useState(() => new Float32Array(POINT_COUNT * 3));
  const positionsRef = useRef(initialPositions);

  useFrame((state) => {
    if (!ref.current) return;

    const time = state.clock.elapsedTime;
    const totalDuration = TRANSITION_DURATION + PAUSE_DURATION;
    const cycleTime = time % (totalDuration * shapes.length);
    const shapeIndex = Math.floor(cycleTime / totalDuration);
    const progressInCycle = (cycleTime % totalDuration) / TRANSITION_DURATION;

    const t = Math.min(progressInCycle, 1);
    const smoothT = t * t * (3 - 2 * t);

    const currentPositions = shapes[shapeIndex];
    const nextPositions = shapes[(shapeIndex + 1) % shapes.length];
    const positions = positionsRef.current;

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

export default function VehicleVisual() {
  return (
    <div className="w-full pl-0  overflow-visible -top-20 lg:-top-0 h-[40vh] lg:h-[100vh] rounded-xl relative">
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }} dpr={[1, 2]}>
        <ambientLight intensity={1.0} />
        <MorphingParticles />
      </Canvas>
    </div>
  );
}
