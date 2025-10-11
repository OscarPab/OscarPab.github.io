'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
      whileHover={{ y: -10 }}
    >
      {/* Encabezado con gradiente de color para la tarjeta */}
      <div className="h-48 relative overflow-hidden">
  {project.imageUrl && (
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
    />
  )}
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    <span className="text-white text-xl font-semibold">{project.categoryLabel}</span>
  </div>
</div>

      {/* Contenido principal de la tarjeta */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        {/* Lista de tecnologías utilizadas */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Enlaces a demo y código */}
        <div className="flex justify-between">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition"
            >
              <ExternalLink size={16} className="mr-1" />
              Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition"
            >
              <Github size={16} className="mr-1" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  
  // Lista de proyectos (algunos comentados temporalmente)
  const projects = [
    /*
    {
      title: "Sistema Punto de Venta Java",
      description: "Sistema completo de punto de venta con gestión de inventario y reportes.",
      technologies: ["Java", "MySQL", "Swing"],
      category: "punto-venta",
      categoryLabel: "Punto de Venta",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce WordPress",
      description: "Tienda en línea con carrito de compras y pasarela de pagos.",
      technologies: ["WordPress", "WooCommerce", "PHP"],
      category: "tienda-online",
      categoryLabel: "Tienda Online",
      demoUrl: "#",
      githubUrl: "#"
    },
    */
    {
      title: "Milina Salon",
      description: "Landing page elegante y moderna para Milina Salon, un salón de belleza especializado en uñas, estética y cuidado personal.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "landing-page",
      categoryLabel: "Landing Page",
      demoUrl: "https://oscarpab.github.io/milina-salon-landing-page/index.html",
      githubUrl: "https://github.com/OscarPab/milina-salon-landing-page",
      imageUrl: "/images/milina-salon-preview.png"
    },
    {
  "title": "Dental Core",
  "description": "Landing page profesional para clínica dental con diseño responsive. Incluye servicios odontológicos, formulario de citas online y sección de testimonios.",
  "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap"],
  "category": "landing-page",
  "categoryLabel": "Landing Page",
  "demoUrl": "https://oscarpab.github.io/Dental-core/",
  "githubUrl": "https://github.com/OscarPab/Dental-core",
  "imageUrl": "/images/dental.png"
},
{
  "title": "Haircare",
  "description": "Landing page moderna para salón de belleza Haircare. Diseño responsive con secciones de servicios, galería, equipo profesional, precios y formulario de reservas.",
  "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap"],
  "category": "landing-page",
  "categoryLabel": "Landing Page",
  "demoUrl": "https://oscarpab.github.io/Haircare-/",
  "githubUrl": "https://github.com/OscarPab/Haircare-",
  "imageUrl": "/images/haircare.png"
},
    {
      title: "EL TALLER DEL ABUELO",
      description: "Videojuego de plataformas 2D con mecánicas Puzzle.",
      technologies: ["Rpg maker", ".json"],
      category: "videojuegos",
      categoryLabel: "Videojuegos",
      demoUrl: "https://racsoarom.itch.io/el-taller-del-abuelo",
      imageUrl: "/images/gato.png"
    },
    {
      title: "Calculadora en Java Swing",
      description: "Este proyecto contiene una calculadora simple implementada en Java",
      technologies: ["Java", "Swing", "eclipse"],
      category: "programacion",
      categoryLabel: "Programación",
      githubUrl: "https://github.com/OscarPab/Calculadora-en-Java-Swing"
    },
    {
      title: "Libro Física LaTeX",
      description: "Libro de introducción a latex.",
      technologies: ["LaTeX", "Física"],
      category: "libros",
      categoryLabel: "Libros",
      demoUrl: "https://www.researchgate.net/publication/389671967_Introduccion_a_LaTeX_Desde_Cero_hasta_Avanzado_Detalles_academicos",
      githubUrl: "https://www.overleaf.com/read/pdgkmsfctswt#ec9b16",
      imageUrl: "/images/libro_latex.png"
    },
    {
      title: "Campo y Potencial Eléctrico",
      description: "Simulación del campo y potencial eléctrico generado por un par de cargas puntuales",
      technologies: ["Python", "Spyder", "Anaconda"],
      category: "fisica",
      categoryLabel: "Física",
      githubUrl: "https://github.com/OscarPab/Campo-y-Potencial-Electrico",
      imageUrl: "/images/cargas.png"
    },
    {
      title: "Celula viva",
      description: "Simulación de evolución celular en una cuadrícula.",
      technologies: ["Python", "Spyder", "Anaconda"],
      category: "fisica",
      categoryLabel: "Física",
      githubUrl: "https://github.com/OscarPab/Simulacion-de-Celulas",
      imageUrl: "/images/celula.png"
    }
  ];

  // Opciones de filtrado disponibles
  const filters = [
    { key: 'todos', label: 'Todos' },
    { key: 'landing-page', label: 'Landing Pages' },
    /*
    { key: 'punto-venta', label: 'Puntos de Venta' },
    { key: 'tienda-online', label: 'Tiendas Online' },
    */
    { key: 'videojuegos', label: 'Videojuegos' },
    { key: 'programacion', label: 'Programación' },
    { key: 'libros', label: 'Libros' },
    { key: 'fisica', label: 'Física' },
  ];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="proyectos" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Proyectos</h2>
        <p className="text-center text-gray-400 mb-12">Explora mi trabajo por categorías</p>
        
        {/* Filtros responsive para categorías de proyectos */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 px-2">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-3 py-2 rounded-full transition text-sm md:text-base ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Grid de proyectos responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mensaje si no hay proyectos en la categoría seleccionada */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <p>No hay proyectos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;