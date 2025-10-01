import React from 'react';
import Head from 'next/head';
import ShaderHero from '../components/ui/hero';
import AdminLoad from '../components/AdminLoad';
import ProblemSolution from '../components/ProblemSolution';
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
        <ShaderHero />
        <main>
          <AdminLoad />
          <ProblemSolution />
          <Product />
          <Team />
        </main>
        <Footer />
      </div>
    </>
  );
}

