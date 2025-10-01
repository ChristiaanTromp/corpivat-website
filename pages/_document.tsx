import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document component
 * Definieert de HTML structuur van de applicatie
 */
export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        {/* Global meta tags */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CoPrivat",
              "description": "AI-gedreven software voor automatische verwerking van digitale post in huisartsenpraktijken",
              "url": "https://corpivat.nl",
              "logo": "https://corpivat.nl/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+31-6-1234-5678",
                "contactType": "customer service",
                "email": "info@corpivat.nl"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL"
              },
              "sameAs": [
                "https://linkedin.com/company/corpivat"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

