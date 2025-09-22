'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPhp,
  SiWordpress,
  SiFirebase,
  SiLatex
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SkillIcon = ({ name, color, description, icon: IconComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-col items-center">
        <div 
          className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-700 cursor-pointer transform transition-transform hover:scale-110 mb-2"
          onClick={() => setIsOpen(true)}
          style={{ boxShadow: `0 0 15px ${color}` }}
        >
          <IconComponent className="text-3xl text-white" />
        </div>
        <span className="text-white text-sm">{name}</span>
      </div>

      {/* Modal/Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-gray-800 p-6 rounded-lg max-w-md mx-4" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-300">{description}</p>
            <button 
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Skills = () => {
  const skills = [
    { 
      name: 'JavaScript', 
      color: '#f7df1e', 
      description: 'Desarrollo de aplicaciones web interactivas, animaciones y funcionalidades dinámicas.',
      icon: SiJavascript
    },
    { 
      name: 'React.js', 
      color: '#61dafb', 
      description: 'Creación de interfaces de usuario modernas y componentes reutilizables.',
      icon: SiReact
    },
    { 
      name: 'HTML5', 
      color: '#e34f26', 
      description: 'Maquetación web semántica y estructuración de contenido.',
      icon: SiHtml5
    },
    { 
      name: 'CSS3', 
      color: '#1572b6', 
      description: 'Diseño responsive, animaciones y estilos modernos para interfaces web.',
      icon: SiCss3
    },
    { 
      name: 'Java', 
      color: '#007396', 
      description: 'Desarrollo de sistemas punto de venta, aplicaciones desktop y aplicaciones empresariales.',
      icon: FaJava
    },
    { 
      name: 'Python', 
      color: '#3776ab', 
      description: 'Desarrollo de scripts, automatizaciones, ciencia de datos y proyectos académicos.',
      icon: SiPython
    },
    { 
      name: 'PHP', 
      color: '#777bb4', 
      description: 'Desarrollo backend para aplicaciones web dinámicas y sistemas de gestión de contenido.',
      icon: SiPhp
    },
    { 
      name: 'WordPress', 
      color: '#21759b', 
      description: 'Creación de tiendas en línea, blogs y sitios web administrables con plugins personalizados.',
      icon: SiWordpress
    },
    { 
      name: 'Firebase', 
      color: '#ffca28', 
      description: 'Implementación de bases de datos en tiempo real, autenticación y hosting de aplicaciones.',
      icon: SiFirebase
    },
    { 
      name: 'LaTeX', 
      color: '#008080', 
      description: 'Redacción de documentación técnica, libros académicos y papers científicos con formato profesional.',
      icon: SiLatex
    },
  ];

  return (
    <section id="habilidades" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Habilidades</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillIcon 
              key={index}
              name={skill.name}
              color={skill.color}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;