import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: "English" },
  { code: 'tr', label: 'Türkiye' },
  { code: 'ar', label: 'العربية' },
  { code: 'ur', label: 'اردو' },
];

const LanguageSelector = () => {
const {i18n}=  useTranslation()
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState( languages.find(l => l.code === i18n.language) || languages[0]);
  const dropdownRef = useRef(null);

useEffect(() => {
  document.documentElement.dir = i18n.dir(i18n.language); 
}, [i18n.language]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lng) => {
    i18n.changeLanguage(lng.code)
    setSelectedLang(lng);
    setIsOpen(false);
    console.log(`Selected language: ${lng.label} (${lng.code})`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 py-2 text-sm sm:text-base px-3 ml-2 sm:px-4 sm:py-2 text-green-800 bg-white hover:bg-green-400 rounded-lg transition-colors "
      >
        <span className="font-medium">{selectedLang.label}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className={`absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10 ${i18n.language === "ur" ? "pl-20" : ""}`}>
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => handleSelect(lng)}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                lng.code === i18n.language ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              {lng.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;