import React from 'react';

/**
 * AdminLoad Component
 * Toont het probleem dat CoPrivat oplost: de administratieve druk in huisartsenpraktijken
 * Gebruikt een rustige, professionele styling met veel witruimte
 */
const AdminLoad = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Container met rustige achtergrond en veel witruimte */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
          
          {/* Hoofdtitel - opvallend en goed leesbaar */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
            De administratieve druk in de huisartsenpraktijk
          </h2>

          {/* Inleidende tekst */}
          <div className="prose prose-lg max-w-none mb-10 text-center">
            <p className="text-gray-700 leading-relaxed text-lg">
              Huisartsenpraktijken hebben te maken met een steeds grotere administratieve belasting. 
              <br></br>Uit onderzoek blijkt dat veel verschillende taken tijd en aandacht vragen, zoals: 
            </p>
          </div>

          {/* Overzichtelijke lijst met bullets en emoji's */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            
            {/* Post & dossierbeheer */}
            <div className="relative group">
              {/* Blauw-witte glow effect - buiten de unit */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-400/30 via-white/20 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/40 via-white/30 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <div className="relative bg-blue-50 rounded-xl px-8 py-5 border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">📬</span>
                Post & dossierbeheer
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Post openen, lezen en sorteren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Medisch dossier bijwerken na consulten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Brieven verwerken (UWV, bedrijfsarts, letselschade)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Externe brieven & labuitslagen toevoegen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Correspondentie met verzekeraars en verwijzingen opvolgen</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Financiële administratie */}
            <div className="relative group">
              {/* Blauw-witte glow effect - buiten de unit */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-400/30 via-white/20 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/40 via-white/30 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <div className="relative bg-green-50 rounded-xl px-8 py-12 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">💸</span>
                Financiële administratie
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Facturen verwerken</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Administratie bijhouden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Salaris- en personeelszaken regelen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Financiële rapportages opstellen</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Medische verslaglegging */}
            <div className="relative group">
              {/* Blauw-witte glow effect - buiten de unit */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-400/30 via-white/20 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/40 via-white/30 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <div className="relative bg-red-50 rounded-xl px-8 py-12 border-l-4 border-red-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🩺</span>
                Medische verslaglegging
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Consulten registreren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Notities maken</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Verwijsbrieven en verklaringen schrijven</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Medische dossiers archiveren</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Overige taken */}
            <div className="relative group">
              {/* Blauw-witte glow effect - buiten de unit */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-400/30 via-white/20 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/40 via-white/30 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <div className="relative bg-purple-50 rounded-xl px-8 py-12 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">📊</span>
                Overige taken
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Rapportages maken</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Contracten beheren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Inschrijvingen van nieuwe patiënten verwerken</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Medicatie- en verzekeringsvragen afhandelen</span>
                </li>
              </ul>
              </div>
            </div>
          </div>

          {/* Conclusie met nadruk op het probleem */}
          <div className="bg-blue-100 rounded-xl p-8 border border-blue-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Het grootste probleem: Postverwerking
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
                Ondanks deze brede waaier aan administratieve verplichtingen, blijkt uit onderzoeken dat 
                <span className="font-semibold text-blue-800"> postverwerking de grootste administratieve last vormt</span>. 
                Gemiddeld besteden huisartsen en hun assistenten hier ongeveer 
                <span className="font-bold text-blue-800 text-xl"> twee uur per dag</span> aan — 
                kostbare tijd die niet aan directe patiëntenzorg kan worden besteed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdminLoad;
