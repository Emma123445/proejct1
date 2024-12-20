import React from "react";

const Team = () => {
  const members = [
    {
      id: 1,
      name: "Rody ADOUNSI",
      title: "Fondateur et Directeur Général (CEO)",
      role: "Vision et Stratégie Globale",
      src: "./photos/team_rody.jpeg",
      social: {
        x: "/#",
        linkedin: "https://www.linkedin.com/in/rody-adounsi-7729661b5"
      }
    },
    {
      id: 2,
      name: "Rayane LAGNIDE",
      title: "Co-fondateur et Responsable des Opérations (COO)",
      role: "Coordination des opérations et optimisation des processus",
      src: "./photos/team_rayane.jpeg",
      social: {
        x: "https://x.com/innovquestrl?s=11&t=JjqrLQexaA3IsaNQM_6LiQ",
        linkedin: "/#"
      }
    },
    {
      id: 3,
      name: "Peace ADOKPO",
      title: "Directrice Technique (CTO)",
      role: "Stratégie technologique et innovation continue",
      src: "../photos/team_solanges.jpeg",
      social: {
        x: "/#",
        linkedin: "/#"
      }
    },
    {
      id: 4,
      name: "Emmanuella SODABI",
      title: "Ingénieur Logiciel",
      role: "Développement et maintenance des applications",
      src: "../photos/team_ella.jpg",
      social: {
        x: "/#",
        linkedin: "/#"
      }
    },
    {
      id: 5,
      name: "Murielle KPINSO",
      title: "Chef de Projet (Project Manager)",
      role: "Planification et gestion des projets",
      src: "./icon/user_icon.svg",
      social: {
        x: "/#",
        linkedin: "/#"
      }
    },
    {
      id: 9,
      name: "Jean Jaurès EGOUNLETY",
      title: "Directeur Artistique",
      role: "Identité visuelle et conception graphique",
      src: "./icon/user_icon.svg",
      social: {
        x: "/#",
        linkedin: "/#"
      }
    },
    {
      id: 6,
      name: "Gwladys GBADESSI",
      title: "Responsable de la Sécurité des Systèmes d'Information (RSSI)",
      role: "Sécurité des systèmes et conformité",
      src: "./photos/team_glwadys.jpeg",
      social: {
        x: "/#",
        linkedin: "/#"
      }
    },
    {
      id: 7,
      name: "Célia HOUESSOU",
      title: "Responsable Marketing et Communication (CMO)",
      role: "Développement de la stratégie marketing",
      src: "./photos/team_celia.jpeg",
      social: {
        x: "/#",
        linkedin: "/#"
      }
    },
    {
      id: 8,
      name: "Bénédicte GOUDJANOU",
      title: "Responsable Financier (CFO)",
      role: "Gestion des finances et relations avec les investisseurs",
      src: "./photos/team_benedicte.jpeg",
      social: {
        x: "/#",
        linkedin: "/#"
      }
    },
  ];
  const getImagePosition = (memberId) => {
    switch(memberId) {
      case 6: 
        return "";
       case 7:
        return "top"
      default:
        return "top";
    }
  };

  return (
   <section id="teams" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-4">Notre équipe</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Créons ensemble une vision et donnons vie à vos projets ! Nous mettons
          à votre disposition notre expertise...
        </p>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-72 sm:w-auto bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{
                      objectPosition: getImagePosition(member.id)
                    }}
                    onClick={() => window.open(member.src, "_blank")}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="mt-4 flex space-x-3">
                  {member.social.x && (
                    <a
                      href={member.social.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
            </div>

    </section>
  );
};

export default Team;