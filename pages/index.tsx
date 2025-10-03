import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import AdminLoad from '../components/AdminLoad';
import Product from '../components/Product';
import Team from '../components/Team';
import Footer from '../components/Footer';

/**
 * Homepage component
 * Combineert alle secties tot een complete landing page
 */
export default function Home() {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>CoPrivat - Automatiseer digitale post voor huisartsenpraktijken</title>
        <meta 
          name="description" 
          content="CoPrivat gebruikt AI om inkomende post automatisch te verwerken en aan patiëntendossiers te koppelen. Bespaar 90% tijd en verhoog de efficiëntie van uw praktijk." 
        />
        <meta name="keywords" content="huisarts, digitale post, AI, automatisering, EPD, patiëntendossier, zorg, administratie" />
        <meta name="author" content="CoPrivat" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://corpivat.nl/" />
        <meta property="og:title" content="CoPrivat - Automatiseer digitale post voor huisartsenpraktijken" />
        <meta property="og:description" content="CoPrivat gebruikt AI om inkomende post automatisch te verwerken en aan patiëntendossiers te koppelen. Bespaar 90% tijd en verhoog de efficiëntie van uw praktijk." />
        <meta property="og:image" content="https://corpivat.nl/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://corpivat.nl/" />
        <meta property="twitter:title" content="CoPrivat - Automatiseer digitale post voor huisartsenpraktijken" />
        <meta property="twitter:description" content="CoPrivat gebruikt AI om inkomende post automatisch te verwerken en aan patiëntendossiers te koppelen. Bespaar 90% tijd en verhoog de efficiëntie van uw praktijk." />
        <meta property="twitter:image" content="https://corpivat.nl/og-image.jpg" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Main Page Content */}
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Eenvoudige Hero Sectie */}
        <section className="bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200 py-20">
          <div className="container-max">
            <div className="section-padding">
              <div className="max-w-4xl -ml-8 mr-auto text-left text-white">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30">
                  <span className="text-white text-sm font-medium">
                    ✨ AI-gedreven postverwerking
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Automatiseer de{' '}
                  <span className="text-white drop-shadow-lg">digitale post</span>{' '}
                  van uw huisartsenpraktijk
                </h1>
                
                <p className="text-xl sm:text-2xl text-white mb-8 leading-relaxed max-w-3xl">
                  We bouwen momenteel actief aan ons product en betrekken huisartsen in het proces, 
                  zodat onze oplossing perfect aansluit op de praktijk.
                </p>
                
                <div className="flex items-center justify-start gap-6 flex-wrap">
                  <a
                    href="#product"
                    className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-gray-800 shadow-lg"
                  >
                    Bekijk hoe het werkt
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-100 shadow-lg"
                  >
                    Join de wachtlijst
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <main>
          <AdminLoad />
          <Product />
          <Team />
        </main>
        <Footer />
      </div>
    </>
  );
}

