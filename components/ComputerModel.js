'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const ComputerModel = ({ 
  customBodyTexture = null,
  customScreenTexture = null,
  bodyColor = null,
  screenColor = null
}) => {
  const groupRef = useRef();
  const [model, setModel] = useState(null);
  
  // Cargar texturas personalizadas si se proporcionan
  const textures = useLoader(TextureLoader, 
    customBodyTexture && customScreenTexture 
      ? [customBodyTexture, customScreenTexture]
      : []
  );

  useEffect(() => {
    const loadModel = async () => {
      try {
        // Primero, modificar el contenido MTL para eliminar referencias problemáticas
        const response = await fetch('/models/Главный стол+ПК.mtl');
        let mtlContent = await response.text();
        
        // Eliminar líneas que referencian texturas que no existen
        mtlContent = mtlContent
          .replace(/map_Kd.*\n/g, '')
          .replace(/map_Bump.*\n/g, '')
          .replace(/refl.*\n/g, '');
        
        // Crear un blob con el contenido modificado
        const blob = new Blob([mtlContent], { type: 'text/plain' });
        const blobUrl = URL.createObjectURL(blob);
        
        // Cargar MTL modificado
        const mtlLoader = new MTLLoader();
        const materials = await new Promise((resolve, reject) => {
          mtlLoader.load(blobUrl, (materials) => {
            materials.preload();
            URL.revokeObjectURL(blobUrl); // Limpiar URL
            resolve(materials);
          }, undefined, reject);
        });

        // Cargar OBJ
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath('/models/');
        
        objLoader.load('Главный стол+ПК.obj', (object) => {
          // Aplicar texturas y colores personalizados
          object.traverse((child) => {
            if (child.isMesh) {
              // Aplicar colores personalizados a todos los materiales
              if (bodyColor) {
                child.material.color.set(bodyColor);
              }
              
              // Si quieres aplicar colores específicos a ciertos materiales
              // puedes verificar por nombre como en tu código original
              if (child.material.name && child.material.name.includes('Screen') && screenColor) {
                child.material.color.set(screenColor);
                child.material.emissive.set(screenColor);
                child.material.emissiveIntensity = 0.3;
              }
              
              child.material.needsUpdate = true;
            }
          });
          
          setModel(object);
        });
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, [textures, bodyColor, screenColor]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  if (!model) return null;

  return (
    <group ref={groupRef}>
      <primitive 
        object={model} 
        position={[2.5, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
    </group>
  );
};

export default ComputerModel;