import React from 'react';

/**
 * Team sectie met teamleden
 * Gebruikt eenvoudige kaarten zonder animaties voor betere performance
 */
const Team = () => {
  const teamMembers = [
    {
      name: 'Christiaan Tromp',
      role: 'CEO',
      description: 'Gepassioneerd over het stroomlijnen van administratieve processen in de zorg met innovatieve technologie.',
      avatarUrl: 'Christiaan PF.png',
      linkedinUrl: 'https://www.linkedin.com/in/christiaan-tromp-0145772bb/',
    },
    {
      name: 'Floris Revis',
      role: 'Product Manager',
      description: 'Stuurt de ontwikkeling van het product en vertaalt de behoeften van huisartsen naar praktische en gebruiksvriendelijke software-oplossingen.',
      avatarUrl: 'Floris PF.png',
      linkedinUrl: 'https://www.linkedin.com/in/floris-revis-448b95363/',
    },
    {
      name: 'Georg Tromp',
      role: 'AI Developer',
      description: 'Software engineer gespecialiseerd in AI en machine learning, bouwt aan de kern van ons platform.',
      avatarUrl: 'Georg PF.png',
      linkedinUrl: 'https://www.linkedin.com/in/georg-tromp-83a1632bb/',
    },
  ];

  return (
    <section id="team" className="bg-blue-50 py-20">
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
                  className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8 flex flex-col items-center text-center h-full"
                >
                  <div className="flex flex-col items-center text-center h-full">
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
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                      <p className="text-blue-600 text-sm font-medium">{member.role}</p>
                      <p className="text-gray-600 mt-2 text-sm flex-grow">{member.description}</p>
                      
                      {/* LinkedIn Button */}
                      <div className="mt-4">
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      </div>
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