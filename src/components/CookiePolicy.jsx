import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
  const { t,i18n } = useTranslation("cookiePolicy");

  return (
    <div className="min-h-screen px-6 py-20 max-w-5xl mx-auto ">
      <Helmet>
        <title>Zykr | {t("title")}</title>
      </Helmet>

      <h1 className={`text-4xl font-bold mb-6 ${i18n.language === "ur" ? "mt-5" : "mt-2"}`} >{t("title")}</h1>
      <p className="text-gray-600 mb-4">{t("welcome")}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">{t("section1.heading")}</h2>
      <p className="text-gray-600">{t("section1.text")}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">{t("section2.heading")}</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        {t("section2.items", { returnObjects: true }).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">{t("section3.heading")}</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        {t("section3.items", { returnObjects: true }).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">{t("section4.heading")}</h2>
      <p className="text-gray-600">{t("section4.text")}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">{t("section5.heading")}</h2>
      <p className="text-gray-600">{t("section5.text")}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">{t("section6.heading")}</h2>
      <p className="text-gray-600">{t("section6.text")}</p>
      <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
        {t("section6.items", { returnObjects: true }).map((item, i) => (
          <li key={i}><a href="/" className="hover:text-sky-500">{item}</a>  </li>
        ))}
      </ul>
    </div>
  );
};

export default CookiePolicy;
