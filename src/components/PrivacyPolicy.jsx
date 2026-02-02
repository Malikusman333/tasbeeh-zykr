import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation("privacy");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6 sm:px-10 lg:px-32">
      <Helmet>
        <title>Zykr | {t("title")}</title>
      </Helmet>

      <h1 className={ `text-4xl font-bold mb-8 text-center text-green-900 ${i18n.language === "ur" ? "mt-9" : "mt-5"}`}>
        {t("title")}
      </h1>

      <p className="mb-4">{t("welcome")}</p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section1.heading")}</h2>
      <ul className="list-disc list-inside space-y-2">
        {t("section1.items", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section2.heading")}</h2>
      <ul className="list-disc list-inside space-y-2">
        {t("section2.items", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section3.heading")}</h2>
      <p className="mb-4">{t("section3.text")}</p>
      <ul className="list-disc list-inside space-y-2">
        {t("section3.items", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section4.heading")}</h2>
      <p className="mb-4">{t("section4.text")}</p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section5.heading")}</h2>
      <ul className="list-disc list-inside space-y-2">
        {t("section5.items", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section6.heading")}</h2>
      <p className="mb-4">{t("section6.text")}</p>

      {/* Section 7 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section7.heading")}</h2>
      <p className="mb-4">{t("section7.text")}</p>

      {/* Section 8 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section8.heading")}</h2>
      <p className="mb-4">{t("section8.text")}</p>
      <ul className="list-disc list-inside space-y-2">
        {t("section8.items", { returnObjects: true }).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <p className="mt-12 text-center text-gray-500 text-sm">
        {t("copyright", { year: new Date().getFullYear() })}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
