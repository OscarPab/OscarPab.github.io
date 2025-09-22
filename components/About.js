'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import ComputerSetup from './ComputerSetup';

const About = () => {
  return (
    <section id="sobre-mi" className="min-h-screen py-20 bg-gray-800 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Sobre Mí</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Texto - Centrado perfectamente */}
          <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center">
            <p className="text-lg text-gray-300 mb-6 text-justify">
              Soy un <span className="text-blue-400 font-semibold">desarrollador Full-Stack</span> con más de 4 años de experiencia 
              en el mundo de la programación. Aunque he tenido periodos de pausa, siempre regreso con 
              más energía y conocimientos renovados.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 text-justify">
              Mi pasión por la tecnología se combina con mi formación en 
              <span className="text-blue-400 font-semibold"> Física</span> en la BUAP e 
              <span className="text-blue-400 font-semibold"> Ingeniería en Sistemas</span> en la UVEG, 
              lo que me permite abordar problemas desde perspectivas únicas y encontrar soluciones innovadoras.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 text-justify">
              Me especializo en crear <span className="text-blue-400 font-semibold">landing pages impactantes</span>, 
              <span className="text-blue-400 font-semibold"> sistemas punto de venta</span>, 
              <span className="text-blue-400 font-semibold"> tiendas en línea</span> y 
              <span className="text-blue-400 font-semibold"> aplicaciones web complejas</span>. 
              También tengo experiencia en desarrollo de videojuegos y redacción de documentación técnica con LaTeX.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <span className="text-blue-400 text-2xl font-bold">4+</span>
                <p className="text-gray-300 text-sm">Años de experiencia</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <span className="text-blue-400 text-2xl font-bold">20+</span>
                <p className="text-gray-300 text-sm">Proyectos completados</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <span className="text-blue-400 text-2xl font-bold">5+</span>
                <p className="text-gray-300 text-sm">Tecnologías dominadas</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <span className="text-blue-400 text-2xl font-bold">2</span>
                <p className="text-gray-300 text-sm">Carreras universitarias</p>
              </div>
            </div>
          </div>
          
          {/* Computadora 3D - Centrada y responsive */}
          <div className="lg:w-1/2 h-64 sm:h-80 lg:h-96 order-1 lg:order-2 flex items-center justify-center">
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }} className="w-full h-full">
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <directionalLight position={[-5, 5, 5]} intensity={0.5} />
              <Suspense fallback={null}>
                <ComputerSetup />
              </Suspense>
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={1} 
                enablePan={false}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;