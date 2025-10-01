import React from 'react';

/**
 * Probleem & Oplossing sectie
 * Toont de pijnpunten van huisartsen en hoe CoPrivat dit oplost
 */
const ProblemSolution = () => {
  return (
    <section className="bg-white">
      <div className="container-max">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Het probleem dat wij oplossen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Huisartsenpraktijken verwerken dagelijks honderden digitale berichten. 
                Dit kost veel tijd en leidt tot fouten en vertragingen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Problem Side */}
              <div className="space-y-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Het probleem</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>2-3 uur per dag handmatig sorteren van digitale post</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>Fouten bij toewijzing aan patiëntendossiers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>Vertragingen in patiëntenzorg door administratieve rompslomp</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>Hoge kosten voor administratief personeel</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>Stress en burn-out bij medewerkers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">De cijfers</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">2-3 uur</div>
                      <div className="text-sm text-gray-600">per dag kwijt</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">€15.000</div>
                      <div className="text-sm text-gray-600">per jaar extra kosten</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Side */}
              <div className="space-y-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Onze oplossing</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Automatische AI-classificatie van alle digitale post</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Directe koppeling aan juiste patiëntendossier</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Menselijke controle voor complexe gevallen</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Integratie met bestaande EPD-systemen</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Volledig AVG-compliant en beveiligd</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Het resultaat</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">90%</div>
                      <div className="text-sm text-gray-600">tijd besparing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">€12.000</div>
                      <div className="text-sm text-gray-600">per jaar besparing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

