import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div id="home" className="section lg:pb-[40vh] lg:pt-[20vh]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-primary lg:text-left">
            {/* 名字 */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="text-[50px] font-bold leading-[1] lg:text-[50px] uppercase "
            >
              余英時國際漢學研究中心
            </motion.h1>

            {/* 打字機特效 I am a ... */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="ml-0.5 mb-6 text-[30px] lg:text-[30px] font-primary font-semibold leading-[1.5]"
            >
               <span className="mr-4 text-black">Ying-shih
Yi International Center for History and the Chinese Humanities</span>
              {/*<TypeAnimation
                sequence={["Learner", 2000, "student", 2000, "Human", 2000]}
                wrapper="span"
                repeat={Infinity}
                speed={50}
                className="text-carat-pink"
              /> */}
            </motion.div>

            {/* 一句自我介紹 */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              
            </motion.p>

            {/* 三個按鈕連結 */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              {/* click button to go to the Contact*/}
              <button
                className="btn btn-sm"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Contact
              </button>
              
              {/* social icons 
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                animate={{ opacity: 1 }}
                className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
              >
                <a href="https://github.com/cckk2913">
                  <FaGithub className="text-2xl mr-4" size={40}/>
                </a>
              </motion.div>*/}
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            animate={{ opacity: 1 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <image src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
