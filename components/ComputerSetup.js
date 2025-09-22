'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ComputerSetup = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
      {/* Monitor */}
      <mesh position={[0, 1.5, -1.5]}>
        <boxGeometry args={[3, 2, 0.2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Pantalla */}
      <mesh position={[0, 1.5, -1.39]}>
        <planeGeometry args={[2.8, 1.8]} />
        <meshStandardMaterial color="#007acc" emissive="#003366" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Base del monitor */}
      <mesh position={[0, 0.5, -1.5]}>
        <cylinderGeometry args={[0.3, 0.8, 0.8, 16]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      
      {/* Teclado */}
      <mesh position={[0, 0.3, 0]} >
        <boxGeometry args={[2.5, 0.1, 1.5]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {/* Teclas del teclado */}
      {Array.from({ length: 60 }, (_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        return (
          <mesh
            key={i}
            position={[col * 0.25 - 1.1, 0.34, row * 0.2 - 0.4]}
          >
            <boxGeometry args={[0.2, 0.05, 0.15]} />
            <meshStandardMaterial color="#555" />
          </mesh>
        );
      })}
      
      {/* Mouse */}
      <mesh position={[1.7, 0.2, 0]} rotation={[105, -Math.PI/4, 0]}>
        <sphereGeometry args={[0.3, 16, 16, 0, Math.PI * 1.5]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Torre CPU */}
      <mesh position={[-2.5, 1, 0]}>
        <boxGeometry args={[0.8, 2, 1.5]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      
      {/* Detalles de la CPU */}
      <mesh position={[-2.5, 1.2, 0.76]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#00ff00" emissive="#003300" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Luz de poder */}
      <mesh position={[-2.5, 0.8, 0.76]}>
        <circleGeometry args={[0.05, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#330000" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Silla */}
      <mesh position={[0, -1.5, 1.6]} rotation={[0, Math.PI, 0]}>
        <cylinderGeometry args={[0.8, 1.2, 1.5, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Respaldo de silla */}
      <mesh position={[0, -0.2, 2.4]}>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
};

export default ComputerSetup;