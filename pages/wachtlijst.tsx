import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Wachtlijst pagina component
 * Bevat een formulier voor aanmelding op de wachtlijst
 */
export default function Wachtlijst() {
  // State voor formulier data
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '', // NIEUW: Telefoonnummer veld toegevoegd
    praktijk: ''
  });

  // State voor validatie errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // State voor form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Valideert e-mail adres
   */
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Valideert formulier data
   */
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Naam is verplicht
    if (!formData.naam.trim()) {
      newErrors.naam = 'Naam is verplicht';
    }

    // E-mail is verplicht en moet geldig zijn
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Voer een geldig e-mail adres in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handelt formulier input changes af
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error voor dit veld wanneer gebruiker begint te typen
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Handelt formulier submission af
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Probeer eerst API call naar backend
      const apiUrl = 'https://api.coprivat.nl/api/wachtlijst';
        
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setIsSubmitted(true);
          console.log('Wachtlijst aanmelding succesvol:', result);
          return;
        } else {
          throw new Error(result.message || 'API fout');
        }
      } catch (apiError) {
        console.warn('API niet beschikbaar, gebruik fallback:', apiError);
        
        // Fallback: Stuur email via mailto link
        const subject = encodeURIComponent('CoPrivat Wachtlijst Aanmelding');
        const body = encodeURIComponent(`
Naam: ${formData.naam}
Email: ${formData.email}
Telefoon: ${formData.telefoon || 'Niet opgegeven'}
Praktijk: ${formData.praktijk || 'Niet opgegeven'}

Ik wil graag op de wachtlijst voor CoPrivat.
        `);
        
        // Open mailto link
        window.open(`mailto:info@coprivat.nl?subject=${subject}&body=${body}`, '_blank');
        
        // Mark as submitted
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Fout bij aanmelden:', error);
      const errorMessage = error instanceof Error ? error.message : 'Onbekende fout';
      alert(`Er is een fout opgetreden: ${errorMessage}. Probeer het opnieuw.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Wachtlijst - CoPrivat</title>
        <meta 
          name="description" 
          content="Meld je aan voor de CoPrivat wachtlijst en krijg als eerste toegang tot onze AI-gedreven postverwerking voor huisartsenpraktijken." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero sectie voor wachtlijst */}
        <section className="bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200 py-8 sm:py-12">
          <div className="container-max">
            <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                  Meld u aan voor de{' '}
                  <span className="text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
                    wachtlijst
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed px-2">
                  We nemen contact met u op zodra wij starten met de pilot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulier sectie */}
        <section className="py-20 bg-gray-50">
          <div className="container-max">
            <div className="section-padding">
              <div className="max-w-2xl mx-auto">
                {!isSubmitted ? (
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Naam veld */}
                      <div>
                        <label htmlFor="naam" className="block text-sm font-semibold text-gray-700 mb-2">
                          Naam <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="naam"
                          name="naam"
                          value={formData.naam}
                          onChange={handleInputChange}
                          autoComplete="name"
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.naam 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-gray-300 focus:border-blue-500'
                          }`}
                          placeholder="Volledige naam"
                        />
                        {errors.naam && (
                          <p className="mt-1 text-sm text-red-600">{errors.naam}</p>
                        )}
                      </div>

                      {/* E-mail veld */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mail adres <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          autoComplete="email"
                          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.email 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-gray-300 focus:border-blue-500'
                          }`}
                          placeholder="Email@voorbeeld.nl"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>

                      {/* NIEUW: Telefoonnummer veld (optioneel) */}
                      <div>
                        <label htmlFor="telefoon" className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefoonnummer <span className="text-gray-500">(optioneel)</span>
                        </label>
                        <input
                          type="tel"
                          id="telefoon"
                          name="telefoon"
                          value={formData.telefoon}
                          onChange={handleInputChange}
                          autoComplete="tel"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="06-12345678"
                        />
                      </div>

                      {/* Praktijk naam veld (optioneel) */}
                      <div>
                        <label htmlFor="praktijk" className="block text-sm font-semibold text-gray-700 mb-2">
                          Naam praktijk <span className="text-gray-500">(optioneel)</span>
                        </label>
                        <input
                          type="text"
                          id="praktijk"
                          name="praktijk"
                          value={formData.praktijk}
                          onChange={handleInputChange}
                          autoComplete="organization"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Naam van uw huisartsenpraktijk"
                        />
                      </div>

                      {/* Submit knop */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                            isSubmitting
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                          }`}
                        >
                          {isSubmitting ? 'Aanmelden...' : 'Aanmelden'}
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Succes bericht */
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Aanmelding gelukt!
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Bedankt voor je interesse in CoPrivat. Er wordt nu een email client geopend waar u uw aanmelding kunt verzenden naar info@coprivat.nl.
                      </p>
                    </div>
                    
                    <Link 
                      href="/"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Terug naar homepage
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
