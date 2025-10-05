import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
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
  // Scroll to top on mount
  useEffect(() => {
    // Force scroll to top immediately
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };
    
    // Prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Force scroll multiple times to ensure it sticks
    forceScrollToTop();
    
    const interval = setInterval(() => {
      forceScrollToTop();
    }, 10);
    
    // Stop interval after a short time
    const timer = setTimeout(() => {
      clearInterval(interval);
    }, 100);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

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
        <link rel="icon" type="image/png" sizes="16x32" href="/favicon-16x16.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        
      </Head>

      {/* Script voor scroll preventie */}
      <Script
        id="scroll-prevention"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Prevent scroll restoration immediately
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'manual';
            }
            
            // Force scroll to top immediately
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            if (document.body) {
              document.body.scrollTop = 0;
            }
          `,
        }}
      />

      {/* Main Page Content */}
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Eenvoudige Hero Sectie */}
        <section className="bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200 pt-8 pb-6 sm:pt-16 sm:pb-8 lg:py-20">
          <div className="container-max">
            <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Tekst links */}
                <div className="text-center lg:text-left text-white lg:-ml-16 order-1 lg:order-1">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 border border-white/30">
                    <span className="text-white text-sm font-medium">
                      ✨ AI-gedreven postverwerking
                    </span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                    <span className="text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>Automatiseer</span> de{' '}
                    <span className="text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>digitale post</span>{' '}
                    van uw <span className="text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>huisartsenpraktijk</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed px-2">
                    We bouwen momenteel actief aan ons product en betrekken huisartsen in het proces, 
                    zodat onze oplossing perfect aansluit op de praktijk.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 flex-wrap">
                    <a
                      href="#product"
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-gray-800 shadow-lg text-sm sm:text-base"
                    >
                      Bekijk hoe het werkt
                    </a>
                    <a
                      href="/wachtlijst"
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-100 shadow-lg hover:shadow-white/50 hover:shadow-2xl transition-all duration-300 border-2 border-blue-500 text-sm sm:text-base"
                      style={{boxShadow: '0 0 20px rgba(255,255,255,0.3)'}}
                    >
                      Join de wachtlijst
                    </a>
                  </div>
                </div>
                
                {/* Video rechts */}
                <div className="relative lg:ml-8 order-2 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20 w-full max-w-[70rem] mx-auto">
                    <video
                      className="w-full h-auto"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/hero image.png"
                    >
                      <source src="/website version.mp4?v=2" type="video/mp4" />
                      Je browser ondersteunt de video tag niet.
                    </video>
                    
                    {/* Overlay voor betere integratie */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
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

