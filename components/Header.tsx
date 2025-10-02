import React, { useState } from 'react';
import Link from 'next/link';

/**
 * Header component met eenvoudige UI zonder zware animaties
 * Blauw en wit kleurenschema voor professionele uitstraling
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-blue-100/50 shadow-sm">
      {/* Decoratieve gradient lijn bovenaan */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
      
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
              <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                CoPrivat
              </span>
            </Link>
          </div>

          {/* Desktop Navigation met moderne hover effecten */}
          <nav className="hidden md:flex items-center space-x-1">
                   <Link 
                     href="#product" 
                     className="text-gray-700 hover:text-blue-600 text-xs font-medium px-1 py-0 rounded-full hover:bg-blue-50"
                   >
                     Product
                   </Link>
                   <Link 
                     href="#team" 
                     className="text-gray-700 hover:text-blue-600 text-xs font-medium px-1 py-0 rounded-full hover:bg-blue-50"
                   >
                     Team
                   </Link>
                   <Link 
                     href="#contact" 
                     className="text-gray-700 hover:text-blue-600 text-xs font-medium px-1 py-0 rounded-full hover:bg-blue-50"
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
                       className="relative px-2 py-0.5 rounded-full bg-white text-blue-600 font-semibold text-xs border border-blue-600 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md z-10"
                     >
                       Start vandaag
                     </Link>
            </div>
          </div>

          {/* Mobile menu button */}
                 <button
                   className="md:hidden p-0 rounded-lg text-blue-600 hover:bg-blue-50"
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
          <div className="md:hidden border-t border-blue-100 bg-white/95 backdrop-blur-lg">
               <div className="px-1 py-0.5 space-y-0">
                     <Link 
                       href="#product" 
                       className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Product
                     </Link>
                     <Link 
                       href="#team" 
                       className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Team
                     </Link>
                     <Link 
                       href="#contact" 
                       className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-1 py-0.5 rounded-lg transition-all duration-200 text-xs font-medium"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Contact
                     </Link>
                     <Link 
                       href="#contact" 
                       className="block bg-blue-600 text-white hover:bg-blue-700 px-2 py-0.5 rounded-lg text-center text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow-md mt-0.5"
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

