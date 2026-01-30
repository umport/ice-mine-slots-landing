'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center, Environment, Sparkles } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function IceCrystal({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position as [number, number, number]} castShadow>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshPhysicalMaterial
          color="#7dd3fc"
          transmission={0.95}
          thickness={0.8}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2}
          ior={1.5}
          specularColor="#ffffff"
          emissive="#0c4a6e"
          emissiveIntensity={0.2}
        />
      </mesh>
      <pointLight 
        position={[position[0] + 1, position[1] + 1, position[2] + 1]} 
        intensity={15} 
        color="#38bdf8" 
        distance={5}
      />
      <Sparkles count={20} scale={2} size={1} speed={0.3} color="#7dd3fc" />
    </Float>
  );
}

function IceText() {
  return (
    <Center>
      <Text3D
        font="/fonts/helvetiker_bold.typeface.json"
        size={0.8}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={8}
      >
        ICE MINE
        <meshPhysicalMaterial
          color="#bae6fd"
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2}
        />
      </Text3D>
    </Center>
  );
}

export default function IceMineScene() {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-cyan-900/20 to-blue-900/20">
          <div className="text-cyan-400 text-xl">Загрузка 3D-сцены...</div>
        </div>
      }>
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
          <color attach="background" args={['#0f172a']} />
          
          <ambientLight intensity={0.4} color="#7dd3fc" />
          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
            color="#38bdf8"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          
          <Environment preset="city" />
          
          <IceText />
          
          <IceCrystal position={[-3, -1, 0]} />
          <IceCrystal position={[0, 1.5, 0]} />
          <IceCrystal position={[3, -1, 0]} />
          <IceCrystal position={[-1.5, -2, 1]} />
          <IceCrystal position={[1.5, -2, -1]} />
          
          <Sparkles 
            count={100} 
            scale={10} 
            size={0.5} 
            speed={0.2} 
            color="#7dd3fc"
          />
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            maxDistance={12}
            minDistance={4}
          />
          
          <fog attach="fog" args={['#0c4a6e', 5, 20]} />
        </Canvas>
      </Suspense>
    </div>
  );
}
