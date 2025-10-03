import React, { useState } from 'react';
import Link from 'next/link';

/**
 * Header component met eenvoudige UI zonder zware animaties
 * Blauw en wit kleurenschema voor professionele uitstraling
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200 shadow-sm">
      {/* Decoratieve gradient lijn bovenaan */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-800 via-blue-300 to-gray-200"></div>
      
             <div className="container-max">
               <div className="flex justify-between items-center py-0.5 px-1 sm:px-2 lg:px-3">
          {/* Logo met hover effect */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="p-1">
                {/* Logo met glow effect */}
                     <img 
                       src="/logo-coprivat.png" 
                       alt="CoPrivat Logo" 
                       width={12}
                       height={12}
                       className="rounded-lg shadow-md"
                       style={{ width: '50px', height: '50px' }}
                     />
              </div>
              <span className="text-xs font-bold text-white">
                CoPrivat
              </span>
            </Link>
          </div>

          {/* Desktop Navigation met moderne hover effecten */}
          <nav className="hidden md:flex items-center space-x-1">
                   <Link 
                     href="#product" 
                     className="text-white hover:text-gray-200 text-xs font-medium px-1 py-0 rounded-full hover:bg-white/20"
                   >
                     Product
                   </Link>
                   <Link 
                     href="#team" 
                     className="text-white hover:text-gray-200 text-xs font-medium px-1 py-0 rounded-full hover:bg-white/20"
                   >
                     Team
                   </Link>
                   <Link 
                     href="#contact" 
                     className="text-white hover:text-gray-200 text-xs font-medium px-1 py-0 rounded-full hover:bg-white/20"
                   >
                     Contact
                   </Link>
          </nav>

          {/* CTA Button met gooey effect styling */}
          <div className="hidden md:block">
            <div className="relative flex items-center group">
              {/* Main CTA button */}
                     <Link 
                       href="#contact" 
                       className="relative px-2 py-0.5 rounded-full bg-white text-gray-800 font-semibold text-xs border border-white hover:bg-gray-100 hover:text-gray-900 shadow-sm hover:shadow-md z-10"
                     >
                       Start vandaag
                     </Link>
            </div>
          </div>

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
                     <Link 
                       href="#product" 
                       className="block text-gray-800 hover:text-gray-600 hover:bg-gray-100 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Product
                     </Link>
                     <Link 
                       href="#team" 
                       className="block text-gray-800 hover:text-gray-600 hover:bg-gray-100 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Team
                     </Link>
                     <Link 
                       href="#contact" 
                       className="block text-gray-800 hover:text-gray-600 hover:bg-gray-100 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Contact
                     </Link>
                     <Link 
                       href="#contact" 
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

