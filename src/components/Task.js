import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";

// services data

const Services = ({ t }) => {
  const services = [
    {
      name: t("core_task_a_name"),
      description: t("core_task_a_content"),
      link: "https://www.lib.ntu.edu.tw/",
    },
    {
      name: t("core_task_b_name"),
      description: t("core_task_b_content"),
      link: "https://www.lib.ntu.edu.tw/",
    },
    {
      name: t("core_task_c_name"),
      description: t("core_task_c_content"),
      link: "https://www.lib.ntu.edu.tw/",
    },
  ];

  // onClink and open a new tab with url
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="task" className="section lg:pb-[10vh] lg:mb-[40vh]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mb-12 lg:mb-0 max-w-[455px]"
          >
            {" "}
            {/*img classname= "mix-blend-lighten"  */}
            <h2 className="text-section-title mb-6 leading-tight">
              {t("core_task")}
            </h2>
            <button className="btn btn-lg">{t("see_more")}</button>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1"
          >
            {/** services list 一個 service 一個 card (map) */}
            <div className="flex-1 flex-col lg:flex-row pl-6">
              {services.map((service, index) => {
                // destructuring service object
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 mb-[40px] flex h-fit"
                    key={index}
                  >
                    <div className="max-w-[560px] pb-10">
                      <h4 className="text-[30px] tracking-wider font-primary font-semibold leading-tight mb-6">
                        {name}
                      </h4>
                      <p className="text-[22px] font-secondary leading-tight tracking-wider">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 justify-center items-end">
                      <button
                        className="btn-round bg-mygreen mb-4 flex items-center justify-center"
                        onClick={() => openInNewTab(link)}
                      >
                        <BsArrowUpRight />
                      </button>
                      <p className="text-mygreen">Learn more</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
