import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PageTitle = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = `Zykr | ${t("home", { ns: "navbar" })}`;
        break;

      case "/privacy-policy":
        document.title = `Zykr | ${t("title", { ns: "privacy" })}`;
        break;

      case "/terms":
        document.title = `Zykr | ${t("title", { ns: "terms" })}`;
        break;

      case "/cookies":
        document.title = `Zykr | ${t("title", { ns: "cookiePolicy" })}`;
        break;

      case "/faq":
        document.title = `Zykr | ${t("title", { ns: "faq" })}`;
        break;

      case "/support":
        document.title = `Zykr | ${t("title", { ns: "support" })}`;
        break;

      default:
        document.title = "Zykr";
    }
  }, [location.pathname, t]);

  return null;
};

export default PageTitle;
