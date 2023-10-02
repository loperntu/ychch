import React from "react";
import Image from "../assets/tang_wenhuitu_small.png";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = ({ t }) => {
  return (
    <section
      id="home"
      className="lg:min-h-[90vh] flex items-center">
      <div className="container mx-auto my-auto">
        <div className="flex flex-col gap-y-6 gap-x-8 lg:flex-row lg:items-center">          
          {/* Column1: text */}
          <div className="w-3/5 font-primary text-center lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="lg:text-[50px] font-bold"
            >
              余英時國際漢學研究中心
            </motion.h1>

            {/* 一句介紹 */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="lg:text-[28px] max-w-lg lg:mx-0 "
            >
              Ying-shih Yü International Center for History and the Chinese Humanities
            </motion.p>
          </div>

          {/* Column2: image */}
          <div className="w-2/5">
            <img src={Image} alt="" />
          </div>

          {/* <motion.div
            variants={fadeIn("down", 0.5)}
            initial="show"
            whileInView={"show"}
            className="flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <image src={Image} alt="" />
          </motion.div> */}

        </div>
      </div>
    </section>
  );
};

export default Banner;
