"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function Stars() {
  const ref = useRef<any>();

  const positions = useMemo(() => {
    const particles = new Float32Array(12000 * 3);

    for (let i = 0; i < 12000; i++) {
      particles[i * 3] = (Math.random() - 0.5) * 80;
      particles[i * 3 + 1] = (Math.random() - 0.5) * 80;
      particles[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }

    return particles;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#FFD700"
        size={0.12}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        z-10
      "
    >
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={2} />
        <Stars />
      </Canvas>
    </div>
  );
}