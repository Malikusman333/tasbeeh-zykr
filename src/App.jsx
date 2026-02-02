import React from "react";
import { Routes, Route} from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

import DownloadApp from "./sections/DownloadApp";
import Footer from "./sections/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CookiePolicy from "./components/CookiePolicy";
import FAQ from "./components/FAQ";
import Support from "./components/Support";
import Carousel from "./sections/Carousel";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import PageTitle from "./components/PageTitle";

const App = () => {

  const {i18n }= useTranslation();
 


   const fontClass =
    i18n.language === "ur"
      ? "font-urdu"
      : i18n.language === "ar"
      ? "font-arabic"
      : "font-ui";
  return (
    <HelmetProvider> <div className={fontClass} >
    <PageTitle/>
      <Navbar />
<ScrollToTop/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
             
              <Carousel />
              <DownloadApp />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>

      <Footer />
    </div></HelmetProvider>
   
  );
};

export default App;
