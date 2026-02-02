import { useTranslation } from "react-i18next";

const DownloadApp = () => {
 const {t,i18n} =  useTranslation("downloadApp")
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 ${(i18n.language) === "ur" ? "mb-8" : "mb-4"}`}>
          {t("simpleUse")}<br />
          <span className="text-green-600">{t("peopleDo")}</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          {t("description")}
        </p>
        
        {/* Download Button */}
        <div className="mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            {t("downloadApp")}
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-green-600">{t("downloadNum")}</div>
            <div className="text-gray-600">{t("downloads")}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">{t("ratesNum")}</div>
            <div className="text-gray-600">{t("rating")}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">{t("countryNum")}</div>
            <div className="text-gray-600">{t("coutries")}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">{t("twentyFourHr")}</div>
            <div className="text-gray-600">{t("support")}</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DownloadApp;