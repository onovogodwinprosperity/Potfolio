import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const CRIMSON = '#e11d2e';
const TRUST_BLUE = '#2563eb';
const SOFT_WHITE = '#94a3b8';

/** Slowly rotating particle field, tinted crimson/blue. */
function ParticleField({ count = 420 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 13;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color={SOFT_WHITE} transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/** Floating geometric shapes that drift with the pointer. */
function FloatingShapes() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    // Gentle parallax: ease the whole group toward the pointer.
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, x * 0.25, 2.5, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -y * 0.18, 2.5, delta);
  });

  return (
    <group ref={group}>
      {/* Hero torus — the signature ring, right of centre */}
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[3.4, 0.4, -1]} rotation={[0.4, 0.3, 0]}>
          <torusGeometry args={[1.35, 0.32, 24, 80]} />
          <MeshDistortMaterial color={CRIMSON} metalness={0.55} roughness={0.25} distort={0.18} speed={1.6} />
        </mesh>
      </Float>

      {/* Icosahedron — left, blue */}
      <Float speed={1.1} rotationIntensity={0.9} floatIntensity={1.5}>
        <mesh position={[-3.8, 1.1, -2]} rotation={[0.6, 0.8, 0]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color={TRUST_BLUE} metalness={0.6} roughness={0.2} flatShading />
        </mesh>
      </Float>

      {/* Small octahedron — lower left */}
      <Float speed={1.8} rotationIntensity={1.1} floatIntensity={1.8}>
        <mesh position={[-2.6, -1.9, -0.5]} rotation={[0.3, 0.5, 0.2]}>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial color={CRIMSON} metalness={0.5} roughness={0.3} flatShading />
        </mesh>
      </Float>

      {/* Wireframe sphere — far right, subtle */}
      <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh position={[4.6, -1.6, -3]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial color={TRUST_BLUE} wireframe transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 8, 4]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-6, -2, 2]} intensity={18} color={TRUST_BLUE} />
      <pointLight position={[5, 3, 1]} intensity={14} color={CRIMSON} />
      <ParticleField />
      <FloatingShapes />
    </>
  );
}

/**
 * Interactive 3D hero background. The parent (Hero) only mounts this when
 * WebGL is available and the user does not prefer reduced motion; an
 * ErrorBoundary around it swaps in a static gradient if anything fails.
 */
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden="true"
    >
      <Scene />
    </Canvas>
  );
}
