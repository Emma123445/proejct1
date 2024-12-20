import React from 'react';

const TrainingSection = () => {
 const formations = [
    { 
      id: '01', 
      title: 'Formation en compétence numérique', 
      description: "Développez les compétences numériques essentielles pour façonner votre avenir" 
    },
    { 
      id: '02', 
      title: 'Formation en compétence entreprenariale', 
      description: "Développez les compétences clés pour créer et gérer votre entreprise avec succès." 
    },
  ];

  return (
    <section id='formations' className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Nos formations</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {formations.map((formation) => (
            <div key={formation.id} className="relative bg-white p-6 shadow-md rounded-lg text-center">
              <p className="text-gray-700 font-semibold mb-2">{formation.title}</p>
              <p className="text-gray-600 mb-4">{formation.description}</p>
              <a href="https://whatsapp.com/channel/0029VauMAV0GehEVJrVLMy1X" target ="_blank" rel="noopener noreferrer" className="text-blue-500">En savoir plus →</a>

              <div className="absolute bottom-0 right-0 text-gray-800 text-6xl font-bold opacity-10">
                {formation.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
