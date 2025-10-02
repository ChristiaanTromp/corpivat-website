import React from 'react';

/**
 * Product sectie - Hoe het werkt
 * Stap-voor-stap uitleg van het proces zonder animaties voor betere performance
 */
const Product = () => {

  const steps = [
    {
      number: 1,
      title: "Post ontvangst",
      description: "Alle digitale post wordt ontvangen en gescand",
      icon: (
        <div className="relative">
          <svg className="w-8 h-8" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            7
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "AI analyse",
      description: "Onze AI analyseert de inhoud en classificeert het type document",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Output wordt gegenereerd",
      description: "De AI geeft de bijhorende output die nodig is voor het type post",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="4"></circle>
          <path className="opacity-75" fill="#2563eb" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )
    },
    {
      number: 4,
      title: "Menselijke controle",
      description: "De out wordt voorgelegd aan de huisarts voor controle",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="none" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4" stroke="#2563eb" fill="none" />
        </svg>
      )
    },
    {
      number: 5,
      title: "Handmatig verwerken",
      description: "Complexe gevallen worden voorgelegd aan uw team voor controle",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          stroke="#2563eb" />
        </svg>
      )
    }
  ];

  return (
    <section id="product" className="bg-gray-50">
      <div className="container-max">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Hoe werkt CoPrivat?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ons AI-systeem verwerkt uw digitale post in 5 eenvoudige stappen. 
                Volledig geautomatiseerd, maar altijd met menselijke controle.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Belangrijkste functies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">AVG-compliant</h4>
                  <p className="text-gray-600 text-sm">
                    Volledig voldoen aan de Algemene Verordening Gegevensbescherming
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">HIS integratie</h4>
                  <p className="text-gray-600 text-sm">
                    Naadloze integratie met alle grote HIS-systemen
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-time verwerking</h4>
                  <p className="text-gray-600 text-sm">
                    Post wordt binnen minuten verwerkt en toegevoegd
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Gedetailleerde rapportage</h4>
                  <p className="text-gray-600 text-sm">
                    Inzicht in verwerkingsstatistieken en efficiëntie
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Automatische updates & onderhoud</h4>
                  <p className="text-gray-600 text-sm">
                    CGeen zorgen over installaties of updates; alles gebeurt automatisch in de cloud
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 ondersteuning</h4>
                  <p className="text-gray-600 text-sm">
                    Altijd beschikbaar voor vragen en ondersteuning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

