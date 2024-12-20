import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="bg-[#1368B2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 justify-items-center md:justify-items-start">

          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold">InnovQuest</h3>
            <p className="text-white mt-4">
              Avec Innovquest, stimuler l'innovation pour propulser votre succès.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold">Structure</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link smooth={true} to="home" className="text-white hover:underline cursor-pointer">
                  Accueil
                </Link>
              </li>
              <li>
                <Link smooth={true} to="about" className="text-white hover:underline cursor-pointer">
                  À propos
                </Link>
              </li>
              <li>
                <Link smooth={true} to="services" className="text-white hover:underline cursor-pointer">
                  Service
                </Link>
              </li>
              <li>
                <Link smooth={true} to="projects" className="text-white hover:underline cursor-pointer">
                  Projets
                </Link>
              </li>
              <li>
                <Link smooth={true} to="formations" className="text-white hover:underline cursor-pointer">
                  Formations
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link smooth={true} to="teams" className="text-white hover:underline cursor-pointer">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link smooth={true} to="#" className="text-white hover:underline cursor-pointer">
                  Abonnements
                </Link>
              </li>
              <li>
                <Link smooth={true} to="#" className="text-white hover:underline cursor-pointer">
                  Centre d'aide
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold">Contactez-nous</h3>
            <p className="text-white mt-4">
              UAC, Abomey Calavi, Bénin
              <br />
              innov@innovquest.net
              <br />
              +229 47545686 / +229 47812579
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
