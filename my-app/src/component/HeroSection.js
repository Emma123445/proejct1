import React, { useState } from 'react';
import { Link } from 'react-scroll';

function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleReserveClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    handleClosePopup();
  };

  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh]" 
      style={{ 
        backgroundImage: "url('./backgrounds/banner_header.jpg')",
        backgroundPosition: "center 25%"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-40 md:py-48 text-center text-white">
        <div className="space-y-8 md:space-y-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Stimulez l'<span className="text-blue-400">innovation</span> pour propulser votre succès
          </h1>
          
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Avec InnovQuest, surmontez la peur du changement et atteignez l'excellence dans tous vos projets.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 pt-4">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="bg-blue-600 px-8 py-4 rounded-full text-white hover:bg-blue-700 transition-all cursor-pointer text-lg"
            >
              Découvrir
            </Link>
            <button 
              onClick={handleOpenPopup} 
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all text-lg"
            >
              Parler à un expert
            </button>
          </div>
        </div>
      </div>

      <img
        src="./icon/straight_line.svg"  
        alt="Ondulation"
        className="absolute bottom-0 left-0 w-full"
        style={{ zIndex: 1 }}
      />

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-center">Contactez un expert</h2>
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700 text-2xl">
                &times;
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-center border rounded-lg p-4 md:p-6 w-full md:w-1/2">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Appelez-nous maintenant</h3>
                <p className="text-gray-600 mb-4">
                  Voulez-vous être assisté par une équipe expérimentée ? Super, nous avons réponse et solution à toutes vos questions.
                </p>
                <p className="text-blue-600 text-lg md:text-xl mb-4">
                  +229 47545686 / +229 47812579
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full md:w-auto">
                  Appelez-nous
                </button>
              </div>
              <div className="text-center border rounded-lg p-4 md:p-6 w-full md:w-1/2 flex flex-col items-center justify-center">
                <div className="text-3xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-6">Allez plus loin....</h3>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={handleReserveClick}
                  className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 cursor-pointer w-full md:w-auto text-center"
                >
                  Réservez maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;