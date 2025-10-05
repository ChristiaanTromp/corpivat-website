import React from 'react';
import Link from 'next/link';

/**
 * Footer component met contactinformatie en links
 * Professionele uitstraling met relevante informatie
 */
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200 border-t border-white/20">
      <div className="container-max">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/logo-coprivat.png" 
                  alt="CoPrivat Logo" 
                  width={64}
                  height={64}
                  style={{ 
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    borderRadius: '0',
                    padding: '0',
                    margin: '0'
                  }}
                />
                <span className="text-xl font-bold text-white">CoPrivat</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Automatische verwerking van digitale post voor huisartsenpraktijken. 
                Bespaar tijd en verhoog de efficiëntie van uw praktijk.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Navigatie
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#product" className="text-white hover:text-gray-200 transition-colors text-sm">
                    Hoe het werkt
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-white hover:text-gray-200 transition-colors text-sm">
                    Ons team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-white hover:text-gray-200 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Contact
              </h3>
              <div className="space-y-2">
                <p className="text-white text-sm">
                  <span className="font-medium">Email:</span>{' '}
                  <a 
                    href="mailto:info@corpivat.nl" 
                    className="hover:text-gray-200 transition-colors"
                  >
                    info@corpivat.nl
                  </a>
                </p>
                <p className="text-white text-sm">
                  <span className="font-medium">Telefoon:</span>{' '}
                  <a 
                    href="tel:+31612345678" 
                    className="hover:text-gray-200 transition-colors"
                  >
                    +31 624965270
                  </a>
                </p>
                <p className="text-white text-sm">
                  Nederland Den Haag
                </p>
                <p className="text-white text-sm">
                  <span className="font-medium">LinkedIn:</span>{' '}
                  <a 
                    href="https://www.linkedin.com/company/coprivat/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition-colors"
                  >
                    CoPrivat
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white text-sm">
                © 2025 CoPrivat. Alle rechten voorbehouden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

