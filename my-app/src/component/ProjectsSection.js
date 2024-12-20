import React from 'react';

const ProjectsSection = () => {
  return (
    <section id='projects' className="py-12 relative">
      <div
        className="absolute bottom-[-10rem] w-[758px] h-[267px]"
        style={{
          backgroundImage: `url("./icon/wavy_shape.svg")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
        }}
      ></div>

      <h2 className="text-2xl font-bold text-center mb-8 relative z-10">Nos projets</h2>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center">
          <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-3xl relative z-10">
            <img
              src="./images/image_project/web_security.png"
              alt="CyberCentre"
              className="rounded-md mb-6 w-full h-auto object-cover"
            />
            <h3 className="text-2xl font-semibold mb-3">Cyber Centre Universitaire</h3>
            <p className="text-gray-600 mb-4 inline-block bg-green-300 px-3 py-1 rounded-full">Terminé</p>
            <p className="text-gray-700 leading-relaxed text-justify">
             Le projet CCU (Cyber Centre Universitaire) est un centre d'innovation numérique créé au sein de l'Université d'Abomey-Calavi. Il offre aux étudiants un accès abordable à Internet, des formations en compétences numériques, ainsi que des activités de networking et de mentorat pour booster l'innovation dans le milieu estudiantin à travers son Programme Étudiants Entrepreneurs. Il vise à renforcer les compétences des jeunes, promouvoir l'inclusion numérique et faciliter leur réussite académique et professionnelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;