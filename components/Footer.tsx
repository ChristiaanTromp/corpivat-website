import React from 'react';
import Link from 'next/link';

/**
 * Footer component met contactinformatie en links
 * Professionele uitstraling met relevante informatie
 */
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-max">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CoPrivat</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Automatische verwerking van digitale post voor huisartsenpraktijken. 
                Bespaar tijd en verhoog de efficiëntie van uw praktijk.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Navigatie
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#product" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                    Hoe het werkt
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                    Ons team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Contact
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Email:</span>{' '}
                  <a 
                    href="mailto:info@corpivat.nl" 
                    className="hover:text-primary-600 transition-colors"
                  >
                    info@corpivat.nl
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Telefoon:</span>{' '}
                  <a 
                    href="tel:+31612345678" 
                    className="hover:text-primary-600 transition-colors"
                  >
                    +31 6 1234 5678
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  Nederland
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2024 CoPrivat. Alle rechten voorbehouden.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                  Voorwaarden
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

