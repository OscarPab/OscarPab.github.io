'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const ExperienceCard = ({ title, subtitle, period, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <div className="flex items-start mb-4">
        <div className="bg-blue-600 p-3 rounded-full mr-4">
          <Icon size={24} className="text-white" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <p className="text-blue-400">{subtitle}</p>
          <p className="text-gray-400 text-sm">{period}</p>
        </div>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Programador Full Stack",
      subtitle: "Autónomo",
      period: "febrero 2020 - Presente (5 años 8 meses)",
      description: "Desarrollo de proyectos independientes incluyendo landing pages, sistemas punto de venta y aplicaciones web.",
      icon: Briefcase
    },
    {
      title: "Participante",
      subtitle: "Major League Hacking",
      period: "febrero 2023 - febrero 2023 (1 mes)",
      description: "Participación en hackatones y eventos de programación para desarrollar habilidades técnicas y de trabajo en equipo.",
      icon: Briefcase
    }
  ];

  const education = [
    {
      title: "Ingeniería en Sistemas Computacionales",
      subtitle: "Universidad Virtual del Estado de Guanajuato (UVEG)",
      period: "octubre 2022 - mayo 2026",
      description: "Formación en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos.",
      icon: GraduationCap
    },
    {
      title: "Física, Ciencias físicas",
      subtitle: "Benemérita Universidad Autónoma de Puebla (BUAP)",
      period: "agosto 2023 - agosto 2027",
      description: "Estudio de las leyes fundamentales del universo, matemáticas avanzadas y métodos de investigación científica.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Experiencia & Educación</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Experiencia Laboral */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="mr-2 text-blue-400" size={24} />
              Experiencia Profesional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} index={index} />
              ))}
            </div>
          </div>

          {/* Educación */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="mr-2 text-blue-400" size={24} />
              Educación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <ExperienceCard key={index} {...edu} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;