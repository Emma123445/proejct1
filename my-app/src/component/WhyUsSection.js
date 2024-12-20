import React, { useState } from 'react';

function WhyUsSection() {
  const [activeTab, setActiveTab] = useState('qui-sommes-nous');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: 'qui-sommes-nous', title: 'Qui sommes-nous ?' },
    { id: 'notre-mission', title: 'Notre mission' },
    { id: 'nos-valeurs', title: 'Nos valeurs' }
  ];

  return (
    <section id="about" className="py-8 md:py-16 bg-gray-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Pourquoi nous ?</h2>

        <div className="relative flex flex-col items-center justify-center mb-12">

          <div className="flex justify-between w-full max-w-md mb-4">
            {tabs.map((tab) => (
              <span 
                key={tab.id}
                className={`text-sm md:text-base font-medium cursor-pointer transition-colors
                  ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`}
              >
                {tab.title}
              </span>
            ))}
          </div>

          <svg className="w-full max-w-md" height="15" viewBox="0 0 341 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="8.5" x2="175" y2="8.5" stroke="#F1EAEA" strokeWidth="5" />
            <line x1="173" y1="8.5" x2="338" y2="8.5" stroke="#F1EAEA" strokeWidth="5" />
            <circle
              cx="7.5"
              cy="7.5"
              r="7.5"
              fill={activeTab === 'qui-sommes-nous' ? "#3068B1" : "#D9D9D9"}
              onClick={() => handleTabChange('qui-sommes-nous')}
              style={{ cursor: 'pointer' }}
            />
            <circle
              cx="174.5"
              cy="7.5"
              r="7.5"
              fill={activeTab === 'notre-mission' ? "#3068B1" : "#D9D9D9"}
              onClick={() => handleTabChange('notre-mission')}
              style={{ cursor: 'pointer' }}
            />
            <circle
              cx="333.5"
              cy="7.5"
              r="7.5"
              fill={activeTab === 'nos-valeurs' ? "#3068B1" : "#D9D9D9"}
              onClick={() => handleTabChange('nos-valeurs')}
              style={{ cursor: 'pointer' }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left max-w-md mx-auto">
            {activeTab === 'qui-sommes-nous' && (
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                InnovQuest est une startup innovante dédiée à la création de solutions numériques et entrepreneuriales. 
                Nous visons à encourager l'innovation, l'éducation, l'entrepreneuriat, ainsi que le développement des industries 
                culturelles, créatives au Bénin et au-delà.
              </p>
            )}
            {activeTab === 'notre-mission' && (
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                Chez InnovQuest, notre mission est claire : stimuler la croissance et l'innovation en Afrique avec des solutions numériques sur mesure. Nous nous engageons à offrir des services exceptionnels qui simplifient les défis numériques de nos clients et boostent leur succès grâce à une approche innovante.
              </p>
            )}
            {activeTab === 'nos-valeurs' && (
              <div className="grid grid-cols-1 gap-6">
                <div className="relative w-full h-48 md:h-64 mb-6">
                  <img 
                    src="./images/image_a_propos/nos_valeurs.jpg" 
                    alt="Nos Valeurs" 
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
               </div>
            )}
          </div>

          <div className="flex justify-center">
            {activeTab === 'qui-sommes-nous' && (
              <div className="relative w-full max-w-lg">
                <svg className="w-full" viewBox="0 0 399 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M307.251 83.4992C346.001 119.249 392.251 150.249 398.001 186.499C403.501 222.999 368.251 264.999 329.751 286.749C291.001 308.249 249.001 309.249 206.251 309.999C163.751 310.749 120.251 310.749 79.5012 289.249C38.7512 267.749 0.501219 224.249 0.751219 181.249C1.00122 138.249 40.0012 95.7492 80.7512 59.7492C121.751 23.9992 164.251 -5.0008 201.001 0.999196C237.751 6.7492 268.751 47.7492 307.251 83.4992Z" fill="#3772B7" fillOpacity="0.13"/>
                  <image 
                    href="./images/image_a_propos/a_propos.svg" 
                    x="40" 
                    y="20" 
                    height="250"
                    width="350"
                    preserveAspectRatio="xMidYMid slice" 
                  />
                </svg>
              </div>
            )}
            {activeTab === 'notre-mission' && (
              <div className="relative w-full max-w-lg h-64 md:h-80">
                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-blue-50">
                  <img 
                    src="./images/image_a_propos/notre_mission.png" 
                    alt="Illustration Notre mission" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {activeTab === 'nos-valeurs' && (
              <div className="grid grid-cols-1 gap-6 w-full max-w-lg">
                <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-sm">
                  <img src="./icon/icon_innov.svg" alt="Innovation" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">L'innovation</h3>
                    <p className="text-gray-600 text-sm text-justify">
                      Nous croyons en la puissance de l'innovation pour transformer les idées en réalités tangibles et résoudre les défis complexes du monde moderne.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-sm">
                  <img src="./icon/icon_line_blue.svg" alt="Excellence" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Excellence</h3>
                    <p className="text-gray-600 text-sm text-justify">
                      Nous nous engageons à fournir des solutions de la plus haute qualité, en repoussant constamment les limites pour atteindre l'excellence dans tout ce que nous entreprenons.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-sm">
                  <img src="./icon/Icon.svg" alt="Collaboration" className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Collaboration</h3>
                    <p className="text-gray-600 text-sm text-justify">
                      Nous croyons en la force de la collaboration et du travail en équipe, en favorisant des partenariats qui partagent notre vision pour un avenir meilleur.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;