'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import FinalNavbar from '../components/FinalNavbar'; // Cambié a FinalNavbar
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import SolarSystem from '../components/SolarSystem';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Fondo con Sistema Solar */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SolarSystem />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
          />
          <Stars radius={100} depth={50} count={5000} factor={4} />
        </Canvas>
      </div>
      
      {/* Contenido principal */}
      <div className="z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          Oscar Pablo <span className="text-blue-400">Morales Zuñiga</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">Desarrollador Full-Stack & Físico</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => {
              const element = document.getElementById('proyectos');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition transform hover:scale-105"
          >
            Ver Proyectos
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border border-white hover:bg-white/10 px-6 py-3 rounded-lg transition transform hover:scale-105"
          >
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <FinalNavbar /> {/* Cambié a FinalNavbar */}
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}