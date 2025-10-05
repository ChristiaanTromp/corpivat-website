import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Header component met eenvoudige UI zonder zware animaties
 * Blauw en wit kleurenschema voor professionele uitstraling
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Functie om naar sectie te scrollen
  const scrollToSection = (sectionId: string) => {
    if (router.pathname === '/') {
      // Als we al op de homepage zijn, scroll direct naar de sectie
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      // Als we op een andere pagina zijn, ga naar homepage en scroll dan
      router.push(`/#${sectionId}`);
    }
  };

  // Effect om te scrollen naar sectie na navigatie
  useEffect(() => {
    const handleRouteChange = () => {
      if (router.pathname === '/' && router.asPath.includes('#')) {
        const hash = router.asPath.split('#')[1];
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
    };

    // Ook direct checken bij mount
    if (router.pathname === '/' && router.asPath.includes('#')) {
      const hash = router.asPath.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200 shadow-sm">
      {/* Decoratieve gradient lijn bovenaan */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200"></div>
      
             <div className="container-max">
               <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo met hover effect */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Logo zonder achtergrond vakje */}
              <img 
                src="/logo-coprivat.png" 
                alt="CoPrivat Logo" 
                width={80}
                height={80}
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
              <span className="text-lg font-bold text-white">
                CoPrivat
              </span>
            </Link>
          </div>

          {/* Desktop Navigation met moderne hover effecten - gecentreerd */}
          <nav className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
                   <button 
                     onClick={() => scrollToSection('product')}
                     className="text-white hover:text-gray-200 text-sm font-medium px-3 py-2 rounded-full hover:bg-white/20"
                   >
                     Product
                   </button>
                   <button 
                     onClick={() => scrollToSection('team')}
                     className="text-white hover:text-gray-200 text-sm font-medium px-3 py-2 rounded-full hover:bg-white/20"
                   >
                     Team
                   </button>
                   <Link 
                     href="/contact" 
                     className="text-white hover:text-gray-200 text-sm font-medium px-3 py-2 rounded-full hover:bg-white/20"
                   >
                     Contact
                   </Link>
          </nav>


          {/* Mobile menu button */}
                 <button
                   className="md:hidden p-0 rounded-lg text-white hover:bg-white/20"
                   onClick={() => setIsMenuOpen(!isMenuOpen)}
                   aria-label="Toggle menu"
                 >
                   {isMenuOpen ? (
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   ) : (
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                   )}
                 </button>
        </div>

        {/* Mobile Navigation met glasmorfisme */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-white/95 backdrop-blur-lg">
               <div className="px-1 py-0.5 space-y-0">
                     <button 
                       onClick={() => {
                         scrollToSection('product');
                         setIsMenuOpen(false);
                       }}
                       className="block text-gray-800 hover:text-gray-600 hover:bg-gray-100 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium w-full text-left"
                     >
                       Product
                     </button>
                     <button 
                       onClick={() => {
                         scrollToSection('team');
                         setIsMenuOpen(false);
                       }}
                       className="block text-gray-800 hover:text-gray-600 hover:bg-gray-100 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium w-full text-left"
                     >
                       Team
                     </button>
                     <Link 
                       href="/contact" 
                       className="block text-gray-800 hover:text-gray-600 hover:bg-gray-100 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Contact
                     </Link>
                     <Link 
                       href="/contact" 
                       className="block bg-gray-800 text-white hover:bg-gray-700 px-2 py-0.5 rounded-lg text-center text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md mt-0.5"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Start vandaag
                     </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

