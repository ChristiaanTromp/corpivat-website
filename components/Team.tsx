import React from 'react';

/**
 * Team sectie met teamleden
 * Gebruikt eenvoudige kaarten zonder animaties voor betere performance
 */
const Team = () => {
  const teamMembers = [
    {
      name: 'Christiaan Tromp',
      role: 'Oprichter & CEO',
      description: 'Gepassioneerd over het stroomlijnen van administratieve processen in de zorg met innovatieve technologie.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Anneloes van der Velde',
      role: 'Medisch Adviseur',
      description: 'Ervaren huisarts met diepgaande kennis van praktijkvoering en de uitdagingen van digitale administratie.',
      avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Thomas de Vries',
      role: 'Lead Developer',
      description: 'Software engineer gespecialiseerd in AI en machine learning, bouwt aan de kern van ons platform.',
      avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b73528c311a?w=400&h=400&fit=crop&crop=face',
    },
  ];

  return (
    <section id="team" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container-max">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Ons Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ontmoet de mensen achter CoPrivat, gedreven door een missie om de huisartsenzorg te innoveren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-8 flex flex-col items-center text-center"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                        <img
                          src={member.avatarUrl}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>

                    {/* Member Info */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                      <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                      <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
                    </div>
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