import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const TermsOfService = () => {
  const { t ,i18n} = useTranslation("terms");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      <Helmet>
        <title>Zykr | {t("title")}</title>
      </Helmet>

      <div className="mt-8 max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold mb-6  ${i18n.language === "ur" ? "mt-13" : "mt-0"}` }>
          {t("title")}
        </h1>

        <p className="mb-6 text-gray-700">
          {t("intro")}
        </p>

        {/* 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {t("section1.heading")}
          </h2>
          <p className="text-gray-700">
            {t("section1.text")}
          </p>
        </section>

        {/* 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {t("section2.heading")}
          </h2>
          <p className="text-gray-700 mb-2">
            {t("section2.text")}
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>{t("section2.items.0")}</li>
            <li>{t("section2.items.1")}</li>
            <li>{t("section2.items.2")}</li>
          </ul>
        </section>

        {/* 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {t("section3.heading")}
          </h2>
          <p className="text-gray-700">
            {t("section3.text")}
          </p>
        </section>

        {/* 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {t("section4.heading")}
          </h2>
          <p className="text-gray-700">
            {t("section4.text")}
          </p>
        </section>

        {/* 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {t("section5.heading")}
          </h2>
          <p className="text-gray-700">
            {t("section5.text")}
          </p>
        </section>

        {/* 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {t("section6.heading")}
          </h2>
          <p className="text-gray-700">
            {t("section6.text")}
          </p>
        </section>

        {/* 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {t("section7.heading")}
          </h2>
          <p className="text-gray-700">
            {t("section7.text")}
          </p>
        </section>

        {/* 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {t("section8.heading")}
          </h2>
          <p className="text-gray-700">
            {t("section8.text")}
          </p>
          <p className="mt-2 text-gray-700">
            {t("section8.email")} <br />
            {t("section8.phone")}
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
