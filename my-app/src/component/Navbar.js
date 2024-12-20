import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.to);
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "home", label: "Accueil" },
    { to: "about", label: "À propos" },
    { to: "services", label: "Services" },
    { to: "projects", label: "Projets" },
    { to: "formations", label: "Formations" },
    { to: "teams", label: "Equipe" }
  ];

  return (
    <nav className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <div className="flex-shrink-0">
            <img 
              src="./logo/logo.svg" 
              alt="InnovQuest Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Desktop - Centrée */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    spy={true}
                    smooth={true} 
                    duration={500} 
                    className={`text-sm xl:text-base font-medium hover:font-bold cursor-pointer transition-all
                      ${activeSection === item.to ? 
                        'text-gray-900 font-bold border-b-2 border-blue-600' : 
                        'text-gray-700'}`}
                    onClick={() => setActiveSection(item.to)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bouton Contact à droite */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-4 py-2 text-sm xl:text-base font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                spy={true}
                smooth={true} 
                duration={500} 
                className={`block px-4 py-2 text-base font-medium hover:font-bold transition-all
                  ${activeSection === item.to ? 
                    'text-gray-900 font-bold border-l-4 border-blue-600 bg-gray-50' : 
                    'text-gray-700'}`}
                onClick={() => {
                  setActiveSection(item.to);
                  toggleMenu();
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block w-full text-center px-4 py-2 font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                onClick={toggleMenu}
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;