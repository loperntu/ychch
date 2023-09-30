import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from 'react-scroll';
import LanguageSwitcher from "./LanguageSwitcher";

const Header = ({ t }) => {
  return (
    <header className="bg-[#8E2A01] py-8">
      <div className="container mx-auto">
        <div className="flex justify-end items-center space-x-8">
          {/* logo 
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>*/}
          {/* button */}
          <div className="desktopMenu">
            
              <LanguageSwitcher />

            <Link to="home" className="desktopMenuListItem">{t("home_page")}</Link>
            <Link to="about" className="desktopMenuListItem">{t("about_us")}</Link>
            <Link to="task" className="desktopMenuListItem">{t("core_task")}</Link>
            <Link to="activity" className="desktopMenuListItem">{t("recent_activity")}</Link>
            <Link to="group" className="desktopMenuListItem">{t("group_framework")}</Link>
          </div>
          <button
            className="btn btn-sm "
            onClick={() => {
              window.location.href = "#contact";
            }}
          >
            {t("application")}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
