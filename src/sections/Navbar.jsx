import { useState } from "react";
import { motion } from "motion/react";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 const {t, i18n} = useTranslation("navbar");
 
  return (
    <div className="fixed inset-x-0 z-20 w-full h-15 xl:h-21 px-3 backdrop-blur-lg">
      
      <div className={`mx-auto c-space max-w-7xl ${i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"}`}>
       <div className={'flex items-center justify-between py-2 xl:py-6 '}>

          <NavLink to={"/" } className="flex items-center space-x-2">
          <img src="/assets/zykr-logo.png" className="h-9 w-12 cursor-pointer sm:w-18 sm:h-11" />
          </NavLink>
        
      
         

        
          <div className={`hidden xl:flex items-center ${i18n.dir(i18n.language) === "rtl" ? "space-x-reverse" : "space-x-5"}`}>

             <nav className="xl:flex items-center hidden">
            <NavLink 
              to={"/"} 
              className="px-4 py-2 rounded-lg text-green-800 font-medium hover:bg-black/5 transition-all duration-200"
            >
              {t('home')}
            </NavLink>
            <NavLink 
              to={"/"} 
              className="px-4 py-2 rounded-lg text-green-800 font-medium hover:bg-black/5 transition-all duration-200"
            >
              {t('about')}
            </NavLink>
            <NavLink
              to={"/"} 
              className="px-4 py-2 rounded-lg font-medium text-green-800 hover:bg-black/5 transition-all duration-200"
            >
              {t('services')}
            </NavLink>
             <NavLink
              to={"/"} 
              className="px-4 py-2 rounded-lg font-medium text-green-800 hover:bg-black/5 transition-all duration-200"
            >
              {t('contact')}
            </NavLink>
          </nav>
         
            <LanguageSelector/>
            <button className={`hover:bg-green-400 cursor-pointer text-base font-medium py-2 px-10 rounded-lg text-green-800 bg-white ${i18n.dir(i18n.language) === "rtl" ? "mr-5" : "ml-0.1"}`}>
              {t('getStarted')}
            </button>
          </div>

        
          <div className="flex xl:hidden items-center space-x-3">
            <div className="flex items-center space-x-2">
              <LanguageSelector/>
              <button className="hover:bg-green-400 cursor-pointer text-sm sm:text-base font-medium sm:py-2 sm:px-5 sm:mr-1 rounded-lg text-green-800 bg-white p-2">
                {t('gettheApp')}
              </button>
              
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer focus:outline-none xl:hidden p-1 sm:p-2 rounded-lg bg-white transition-colors"
            >
              {isOpen ? (
             
                <svg 
                  className="w-6 h-6 text-green-800" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
            
                <svg 
                  className="w-6 h-6 text-green-800" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <motion.div
          className="fixed inset-x-0 top-[60px] xl:hidden bg-white shadow-xl z-40"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-">
            <nav className="flex flex-col items-center">
              <a href="/" className="py-4 w-full text-center border-b border-gray-100 text-gray-800 hover:text-green-700">Home</a>
              <a href="/about" className="py-4 w-full text-center border-b border-gray-100 text-gray-800 hover:text-green-700">About</a>
              <a href="/features" className="py-4 w-full text-center border-b border-gray-100 text-gray-800 hover:text-green-700">Features</a>
              <a href="/contact" className="py-4 w-full text-center text-gray-800 hover:text-green-700">Contact</a>
            </nav>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;