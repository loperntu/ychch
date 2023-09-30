import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = ({ t }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section ref={ref} id="about" className="section lg:pb-[40vh]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">

          {/* image row */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 2 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]  bg-top"
          ></motion.div>

          {/* text row */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1"
          >
            <h2 className="text-section-title">{t("about_us")}</h2>
            <h3 className="h3 mb-4">
            {t("about_us_sub")}
            </h3>
            <p className="mb-6 tracking-wider">
            {t("aboout_us_content")}
            </p>
            
            {/*  stats  一列有 3 columns */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient my-2 pt-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-secondary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient my-2 pt-2">
                  {inView ? <CountUp start={0} end={9} duration={3} /> : null}
                </div>
                <div className="font-secondary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient my-2 pt-2">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className="font-secondary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button
                className="btn btn-lg"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Contact me
              </button>
              {/*<a href="#" className="text-gradient btn-link">
                My Portfolio</a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
