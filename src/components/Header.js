import React from "react";
import Logo from "../assets/logo.svg";
import {Link} from 'react-scroll'

const Header = () => {
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
            <Link to="home" className="desktopMenuListItem">首頁</Link>
            <Link to="about" className="desktopMenuListItem">中心介紹</Link>
            <Link to="task" className="desktopMenuListItem">核心任務</Link>
            <Link to="activity" className="desktopMenuListItem">近期活動</Link>
            <Link to="member" className="desktopMenuListItem">組織架構</Link>
          </div>
          <button
            className="btn btn-sm "
            onClick={() => {
              window.location.href = "#contact";
            }}
          >
            相關申請
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
