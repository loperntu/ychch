import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboard2Data,
  BsBriefcase,
  BsChatSquareText,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = ({ t }) => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full h-[80px] bg-black/20 backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboard2Data />
          </Link>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
