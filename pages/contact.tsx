import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Contact pagina component
 * Professioneel contactformulier met validatie
 */
export default function Contact() {
  // State voor formulier data
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: ''
  });

  // State voor validatie errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Auto-close modal after 5 seconds with countdown
  useEffect(() => {
    if (showSuccessModal) {
      setCountdown(5);
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            setShowSuccessModal(false);
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showSuccessModal]);

  // Close modal when clicking outside
  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowSuccessModal(false);
    }
  };

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Email validatie functie
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validatie
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Naam validatie (verplicht)
    if (!formData.naam.trim()) {
      newErrors.naam = 'Naam is verplicht';
    }

    // Email validatie (verplicht en geldig formaat)
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in';
    }

    // Onderwerp validatie (verplicht)
    if (!formData.onderwerp.trim()) {
      newErrors.onderwerp = 'Onderwerp is verplicht';
    }

    // Bericht validatie (verplicht)
    if (!formData.bericht.trim()) {
      newErrors.bericht = 'Bericht is verplicht';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Direct fallback naar mailto link (API server bestaat nog niet)
      console.log('Gebruik mailto fallback voor contact formulier');
      
      // Fallback: Stuur email via mailto link
      const subject = encodeURIComponent(`CoPrivat Contact: ${formData.onderwerp}`);
      const body = encodeURIComponent(`
Naam: ${formData.naam}
Email: ${formData.email}
Telefoon: ${formData.telefoon || 'Niet opgegeven'}
Onderwerp: ${formData.onderwerp}

Bericht:
${formData.bericht}
      `);
      
      // Open mailto link
      window.open(`mailto:info@coprivat.nl?subject=${subject}&body=${body}`, '_blank');
      
      // Reset form
      setFormData({
        naam: '',
        email: '',
        telefoon: '',
        onderwerp: '',
        bericht: ''
      });
      
      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Fout bij verzenden bericht:', error);
      const errorMessage = error instanceof Error ? error.message : 'Onbekende fout';
      setSubmitMessage(`Er is een fout opgetreden: ${errorMessage}. Probeer het later opnieuw.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact - CoPrivat</title>
        <meta 
          name="description" 
          content="Neem contact op met CoPrivat voor vragen over onze AI-gedreven postverwerking voor huisartsenpraktijken." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero sectie voor contact */}
        <section className="bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200 py-12">
          <div className="container-max">
            <div className="section-padding">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Neem contact met ons op
                </h1>
                
                <p className="text-xl sm:text-2xl text-white mb-8 leading-relaxed">
                  Heb je vragen over CoPrivat of wilt u meer weten over onze oplossing? Neem gerust contact met ons op via onderstaand formulier.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Contact sectie */}
        <section className="py-16 bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Contact formulier */}
              <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
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
                      onChange={handleChange}
                      autoComplete="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                        errors.naam ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Volledige naam"
                    />
                    {errors.naam && (
                      <p className="mt-1 text-sm text-red-600">{errors.naam}</p>
                    )}
                  </div>

                  {/* Email veld */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Email@voorbeeld.nl"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Telefoon veld (optioneel) */}
                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefoonnummer <span className="text-gray-400 font-normal">(optioneel)</span>
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      value={formData.telefoon}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="06-12345678"
                    />
                  </div>

                  {/* Onderwerp veld */}
                  <div>
                    <label htmlFor="onderwerp" className="block text-sm font-semibold text-gray-700 mb-2">
                      Onderwerp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="onderwerp"
                      name="onderwerp"
                      value={formData.onderwerp}
                      onChange={handleChange}
                      autoComplete="off"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                        errors.onderwerp ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Waar gaat uw bericht over?"
                    />
                    {errors.onderwerp && (
                      <p className="mt-1 text-sm text-red-600">{errors.onderwerp}</p>
                    )}
                  </div>

                  {/* Bericht veld */}
                  <div>
                    <label htmlFor="bericht" className="block text-sm font-semibold text-gray-700 mb-2">
                      Bericht <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows={6}
                      value={formData.bericht}
                      onChange={handleChange}
                      autoComplete="off"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical ${
                        errors.bericht ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Vertel ons meer over uw vraag of interesse..."
                    />
                    {errors.bericht && (
                      <p className="mt-1 text-sm text-red-600">{errors.bericht}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Versturen...
                        </span>
                      ) : (
                        'Verstuur bericht'
                      )}
                    </button>
                  </div>

                  {/* Error message */}
                  {submitMessage && (
                    <div className="mt-4 p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>

              {/* Extra contact informatie */}
              <div className="mt-12 text-center">
                <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Liever direct contact?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Voor urgente vragen kunt u ons ook direct bereiken:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a 
                      href="mailto:info@corpivat.nl" 
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      info@corpivat.nl
                    </a>
                    <a 
                      href="tel:+31612345678" 
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +31 624965270
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Modal */}
        {showSuccessModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={handleModalClose}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
              <div className="p-8 text-center">
                {/* Success Icon */}
                <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <svg 
                    className="w-8 h-8 text-green-600 animate-pulse" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>

                {/* Success Message */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Bericht verzonden!
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Bedankt voor uw bericht. Er wordt nu een email client geopend waar u uw bericht kunt verzenden naar info@coprivat.nl.
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  Deze pop-up sluit automatisch over {countdown} seconden
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sluiten
                  </button>
                  <Link
                    href="/"
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Terug naar home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
