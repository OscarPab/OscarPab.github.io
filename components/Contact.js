'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const ContactButton = ({ icon: Icon, text, href, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center p-4 rounded-lg ${color} text-white font-medium transition shadow-lg hover:shadow-xl`}
    >
      <Icon size={24} className="mr-2" />
      {text}
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Contacto</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ContactButton
              icon={Mail}
              text="oscaripingui@gmail.com"
              href="mailto:oscaripingui@gmail.com"
              color="bg-red-600 hover:bg-red-700"
            />
            
            <ContactButton
              icon={Phone}
              text="+52 744 153 5937"
              href="tel:+527441535937"
              color="bg-green-600 hover:bg-green-700"
            />
            
            <ContactButton
              icon={Linkedin}
              text="LinkedIn"
              href="https://linkedin.com/in/oscarpab"
              color="bg-blue-600 hover:bg-blue-700"
            />
            
            <ContactButton
              icon={Github}
              text="GitHub"
              href="https://github.com/oscarpab"
              color="bg-gray-700 hover:bg-gray-600"
            />
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-gray-300 mb-6">
              Estoy disponible para freelance y proyectos interesantes. No dudes en contactarme 
              para discutir cómo puedo ayudar a hacer realidad tu idea.
            </p>
            <motion.a
              href="mailto:oscaripingui@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              <Mail size={20} className="mr-2" />
              Enviar mensaje
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;