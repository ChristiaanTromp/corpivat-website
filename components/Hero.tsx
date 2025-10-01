import React from 'react';
import Link from 'next/link';

/**
 * Hero sectie met hoofdboodschap en call-to-action
 * Moderne blauw-wit kleurenschema voor professionele medische uitstraling
 */
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 overflow-hidden">
      {/* Decoratieve achtergrond elementen */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <span className="text-white text-sm font-medium">
                ✨ AI-gedreven postverwerking
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Automatiseer de{' '}
              <span className="text-white drop-shadow-lg">digitale post</span>{' '}
              van uw huisartsenpraktijk
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-blue-50 mb-8 leading-relaxed max-w-3xl mx-auto">
              CoPrivat gebruikt AI om inkomende post automatisch te verwerken, 
              te classificeren en aan het juiste patiëntendossier te koppelen. 
              Bespaar uren per week en verhoog de efficiëntie van uw praktijk.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Start vandaag - Gratis proefperiode
              </Link>
              <Link href="#product" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm">
                Bekijk hoe het werkt
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">90% tijd besparing</h3>
                <p className="text-gray-600 text-sm">
                  Automatische verwerking van alle inkomende post
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">99% nauwkeurigheid</h3>
                <p className="text-gray-600 text-sm">
                  AI-classificatie met menselijke controle
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% veilig</h3>
                <p className="text-gray-600 text-sm">
                  AVG-compliant en volledig beveiligd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

