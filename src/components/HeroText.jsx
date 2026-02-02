import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const HeroText = () => {
 const {t,i18n} = useTranslation();
  return (
    <div className="z-10 md:ml-4 md:mr-4 md:mt-1 lg:ml-45 lg:mr-40 lg:mt-14 flex flex-col items-center justify-center min-h-[90vh] text-center">
      {/* Main Heading with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={` ${(i18n.language) === "ur" ? "mb-8" : "mb-3"}`}
      >
     <h1 className="text-5xl font-black sm:text-7xl text-green-600 relative">
  <span className="relative z-10">{t('makeZikr')}</span>
  <br />
  <span className="relative z-10 text-green-600">{t('aDailyHabit')}</span>
  
  {/* Text outline for extra thickness */}
  <span className="absolute inset-0 text-transparent text-stroke-green">
    {t('makeZikr')} <br /> {t('aDailyHabit')}
  </span>
</h1>
      </motion.div>

      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-6"
      >
        <h5 className="text-base font-medium sm:text-2xl text-white sm:font-light max-w-3xl mx-auto px-4 ">
        {t('subHeading')}
        </h5>
      </motion.div>

      {/* Get Started Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button className="group relative px-15 py-3 sm:px-14 sm:py-5 text-green-600 lg:text-xl font-bold rounded-lg overflow-hidden transition-all duration-300 bg-amber-50  hover:shadow-2xl">
          <span className="relative z-10">{t("getStarted")}</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        </button>
      </motion.div>
    </div>
  );
};

export default HeroText;