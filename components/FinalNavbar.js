'use client';

import { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  BookOpen, 
  Mail,
  Star
} from 'lucide-react';

const FinalNavbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  // Detectar sección activa de forma más simple
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'experiencia', 'contacto'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'inicio', icon: Home, label: 'Inicio' },
    { id: 'sobre-mi', icon: User, label: 'Sobre mí' },
    { id: 'habilidades', icon: Code2, label: 'Skills' },
    { id: 'proyectos', icon: Briefcase, label: 'Proyectos', featured: true },
    { id: 'experiencia', icon: BookOpen, label: 'Estudios' },
    { id: 'contacto', icon: Mail, label: 'Contacto' }
  ];

  return (
    <>
      {/* Navbar Desktop (arriba) */}
      <nav className="hidden md:block fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">OscarPab</div>
            
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-900/20'
                      : 'text-gray-300 hover:text-blue-400'
                  } ${item.featured ? 'ring-2 ring-blue-400' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Mobile (abajo) - SIMPLE Y FUNCIONAL */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/30 p-2">
  <div className="flex justify-around items-center">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className={`flex flex-col items-center p-1 rounded-lg transition-colors min-w-[50px] ${
          activeSection === item.id
            ? 'text-blue-400 bg-blue-900/20'
            : 'text-gray-300 hover:text-blue-400'
        } ${item.featured ? 'relative -top-1 bg-blue-600 text-white px-2' : ''}`} // Cambiado de -top-2 a -top-1
      >
        {item.featured && (
          <Star size={10} className="absolute -top-1 -right-1 text-yellow-400 fill-current" />
        )}
        
        <item.icon size={18} />
        <span className="text-[9px] mt-1">{item.label}</span>
      </button>
    ))}
  </div>
</div>

      {/* Espacio para evitar que el contenido se oculte detrás del navbar */}
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default FinalNavbar;