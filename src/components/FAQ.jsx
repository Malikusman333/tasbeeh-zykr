import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t ,i18n} = useTranslation("faq");

  const faqs = t("faqs", { returnObjects: true });

  return (
    <div className="min-h-screen bg-white px-6 py-20 max-w-5xl mx-auto">
      <Helmet>
        <title>Zykr | {t("title")}</title>
      </Helmet>

      <h1 className={`text-4xl font-bold mb-8 ${i18n.language === "ur" ? "mt-5" : "mt-3"}`}>{t("heading")}</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-gray-200 rounded-xl p-4 cursor-pointer transition-all hover:shadow-md"
          >
            <summary className="flex justify-between items-center font-semibold text-lg list-none">
              {faq.question}
              <span className="transition-transform group-open:rotate-180">⬇️</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
