
import ParallaxBackground from "../components/ParallaxBackground";
import HeroText from "../components/HeroText";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Hero = () => {
 
  const {t} = useTranslation("navbar");
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background First */}
      <div className="absolute inset-0">
        <ParallaxBackground />
      </div>
      <Helmet>
      <title>Zykr | {t("home")}</title>
    </Helmet>
    
      
      {/* Hero Text on Top */}
      <div className="relative z-10">
        <HeroText />
      </div>
    </section>
  );
};


export default Hero;