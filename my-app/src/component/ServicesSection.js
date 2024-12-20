import React from 'react';
import { Link } from 'react-scroll';

function ServicesSection() {
  return (
    <>
      <section id='services' className="w-full py-16 bg-gray-100 relative">
        <div
          className="absolute bottom-0 right-0 w-64 h-64"
          style={{
            backgroundImage: `url("./icon/dark_blob.svg")`, 
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'bottom right', 
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Nos services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="w-full order-1 md:order-2">
              <img
                src="./images/image_service/developpement_web.svg" 
                alt="Mobile Apps"
                className="w-3/4 h-auto object-cover rounded-lg shadow-lg mx-auto md:ml-auto"
              />
            </div>
            <div className="w-full order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">
                <span role="img" aria-label="rocket">🚀</span> Développement web et mobile
              </h3>
              <p className="text-gray-600 mb-6">
                Nos équipes excellent dans le développement web et mobile, en créant des solutions sur mesure qui dépassent les attentes de nos clients et les propulsent à la pointe de l'innovation numérique.
              </p>
               <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300 cursor-pointer"
        >
          Contactez-nous
        </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gray-100 relative">
        <div
          className="absolute bottom-0 left-0 w-64 h-64"
          style={{
            backgroundImage: `url("./icon/abstract_shape.svg")`, 
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom left',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="w-full order-1">
              <img
                src="./images/image_service/developpement_mobile.svg" 
                alt="UI Design"
                className="w-3/4 h-auto object-cover rounded-lg shadow-lg mx-auto md:mr-auto"
              />
            </div>

            <div className="w-full order-2">
              <h3 className="text-2xl font-semibold mb-4">
                <span role="img" aria-label="paint palette">🎨</span> Conception d'interface utilisateur
              </h3>
              <p className="text-gray-600 mb-6">
                Nos équipes sont expertes dans la conception d'interfaces utilisateur, en créant des expériences fluides et engageantes pour les utilisateurs finaux.
              </p>
               <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300 cursor-pointer"
        >
          Contactez-nous
        </Link>
            </div>
          </div>
        </div>
        
      </section>
    <section className="w-full py-16 bg-gray-100 relative">
  <div
    className="absolute bottom-0 right-0 w-64 h-64"
    style={{
      backgroundImage: `url("./icon/wavy_shape.svg")`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    }}
  ></div>

  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="w-full order-1 md:order-2">
        <img
          src="./images/image_service/support_technique.jpg" 
          alt="Support Technique"
          className="w-3/4 h-full object-cover rounded-lg shadow-xl mx-auto md:ml-auto"
          style={{ aspectRatio: '1/1' }}
        />
      </div>

      <div className="w-full order-2 md:order-1">
        <h3 className="text-2xl font-semibold mb-4">
          <span role="img" aria-label="outils">🛠️</span> Support technique
        </h3>
        <p className="text-gray-600 mb-6">
          Nos équipes de support technique sont disponibles pour fournir une assistance rapide et efficace, répondant à vos questions et résolvant vos problèmes techniques pour garantir une expérience sans interruption.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300 cursor-pointer"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default ServicesSection;
