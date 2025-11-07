import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function LaserBeams() {
  const groupRef = useRef();

  const beams = useMemo(() => {
    const beamArray = [];
    const wispDensity = 1;
    const beamCount = Math.floor(15 * wispDensity);

    for (let i = 0; i < beamCount; i++) {
      beamArray.push({
        id: i,
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 5,
        speed: 0.15 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return beamArray;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();
    const flowSpeed = 0.35;
    const flowStrength = 0.25;

    groupRef.current.children.forEach((beam, i) => {
      const data = beams[i];

      // Flow motion
      beam.position.x = data.x + Math.sin(time * flowSpeed + data.phase) * flowStrength * 2;
      beam.position.y = data.y + Math.cos(time * flowSpeed * 0.8 + data.phase) * flowStrength;

      // Wisp movement
      beam.position.z = data.z + Math.sin(time * data.speed + data.phase) * 0.5;

      // Fog fall effect
      beam.position.y -= 0.6 * 0.01;
      if (beam.position.y < -5) {
        beam.position.y = 5;
      }

      // Intensity and decay
      const intensity = 5;
      const decay = 1.1;
      const distance = Math.sqrt(
        beam.position.x ** 2 +
        beam.position.y ** 2 +
        beam.position.z ** 2
      );
      const opacity = Math.max(0, intensity / (1 + distance * decay * 0.1));

      beam.material.opacity = opacity * (0.3 + Math.sin(time * 2 + data.phase) * 0.2);
    });
  });

  return (
    <group ref={groupRef}>
      {beams.map((beam) => (
        <mesh key={beam.id} position={[beam.x, beam.y, beam.z]}>
          <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
          <meshBasicMaterial
            color="#667eea"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function FogEffect() {
  const fogRef = useRef();

  useFrame((state) => {
    if (!fogRef.current) return;
    const time = state.clock.getElapsedTime();
    fogRef.current.rotation.y = time * 0.05;
  });

  return (
    <group ref={fogRef}>
      <mesh>
        <sphereGeometry args={[8, 32, 32]} />
        <meshBasicMaterial
          color="#764ba2"
          transparent
          opacity={0.45}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function LaserFlow() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <LaserBeams />
        <FogEffect />
      </Canvas>
    </div>
  );
}
