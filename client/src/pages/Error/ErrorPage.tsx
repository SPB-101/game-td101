import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./ErrorPage.scss";

export const ErrorPage = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="error-page">
      <span className="error-page__title">404</span>
      <span className="error-page__text">{t("page404")}</span>
      <Link to="/" className="error-page__link">
        {t("goHome")}
      </Link>
    </div>
  );
};
