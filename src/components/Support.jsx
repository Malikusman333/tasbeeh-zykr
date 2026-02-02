import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Support = () => {
  const { t } = useTranslation("support");

  return (
    <div className="min-h-screen bg-white px-6 py-20 max-w-6xl mx-auto">
      <Helmet>
        <title>Zykr | {t("title")}</title>
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">{t("heading")}</h1>
      <p className="text-gray-600 mb-10">{t("intro")}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        {/* Email */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <MdEmail className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("email.title")}</h3>
          <p className="text-gray-600 mb-2">{t("email.desc")}</p>
          <p className="font-medium">{t("email.value")}</p>
        </div>

        {/* Phone */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <MdPhone className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("phone.title")}</h3>
          <p className="text-gray-600 mb-2">{t("phone.desc")}</p>
          <p className="font-medium">{t("phone.value")}</p>
        </div>

        {/* Location */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <MdLocationOn className="text-green-600 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("location.title")}</h3>
          <p className="text-gray-600 mb-2">{t("location.desc")}</p>
          <p className="font-medium">{t("location.value")}</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">{t("form.title")}</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder={t("form.name")}
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder={t("form.email")}
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder={t("form.subject")}
            className="border rounded-lg px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows="4"
            placeholder={t("form.message")}
            className="border rounded-lg px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition md:col-span-2"
          >
            {t("form.button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
