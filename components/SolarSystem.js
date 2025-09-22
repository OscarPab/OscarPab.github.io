'use client';

import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useRef } from 'react';

const Sun = () => {
  return (
    <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial emissive="#ffcc00" color="#ff9900" />
    </Sphere>
  );
};

const Planet = ({ size, position, color, speed }) => {
  const ref = useRef();
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ref.current.position.x = Math.cos(elapsedTime * speed) * position[0];
    ref.current.position.z = Math.sin(elapsedTime * speed) * position[0];
  });

  return (
    <Sphere args={[size, 32, 32]} ref={ref} position={[position[0], 0, 0]}>
      <meshStandardMaterial color={color} />
    </Sphere>
  );
};

const SolarSystem = () => {
  return (
    <group>
      <Sun />
      <Planet size={0.4} position={[5, 0, 0]} color="#4fd1c5" speed={0.8} /> {/* Mercurio */}
      <Planet size={0.6} position={[7, 0, 0]} color="#f6ad55" speed={0.6} /> {/* Venus */}
      <Planet size={0.6} position={[9, 0, 0]} color="#3182ce" speed={0.4} /> {/* Tierra */}
      <Planet size={0.5} position={[11, 0, 0]} color="#e53e3e" speed={0.3} /> {/* Marte */}
      <Planet size={1.0} position={[14, 0, 0]} color="#d69e2e" speed={0.2} /> {/* Júpiter */}
      <Planet size={0.9} position={[18, 0, 0]} color="#d69e2e" speed={0.15} /> {/* Saturno */}
    </group>
  );
};

export default SolarSystem;