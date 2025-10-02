import React from 'react';

/**
 * Team sectie met teamleden
 * Gebruikt eenvoudige kaarten zonder animaties voor betere performance
 */
const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah van der Berg",
      title: "CEO & Medisch Directeur",
      description: "Huisarts met 15 jaar ervaring. Gespecialiseerd in digitale innovatie in de zorg.",
      avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Mark Janssen",
      title: "CTO & Co-founder",
      description: "Tech-expert met achtergrond in AI en machine learning. Voormalig Google engineer.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Lisa Chen",
      title: "Head of Product",
      description: "Product manager met focus op gebruikerservaring in de zorgsector.",
      avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container-max">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ontmoet ons team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Een ervaren team van medische professionals en tech-experts 
                die samenwerken om de zorg te digitaliseren.
              </p>
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                        <img
                          src={member.avatarUrl}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>

                    {/* Member Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Contact Button */}
                    <button
                      onClick={() => window.open(member.linkedin, '_blank')}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Contact</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;