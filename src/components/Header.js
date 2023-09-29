import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg- py-8">
      <div className="container mx-auto">
        <div className="flex justify-end items-center">
          {/* logo 
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>*/}
          {/* button */}
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
