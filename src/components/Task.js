import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "余英時講座",
    description:
      "邀請富國際聲望、於漢學相關領域做出重要貢獻的學者，蒞臨中心給予系列演講及工作坊。",
    link: "",
  },
  {
    name: "訪問學者",
    description:
      "支持各類訪問學者與本校學者之合作研究。訪問學者將由中心提供辦公空間、研究資源、每個月 6 萬元的獎助津貼。每一期原則上接受 3 名中心訪問學者。",
    link: "",
  },
  {
    name: "研究生研修獎助",
    description:
      "以國內外大學博士候選人為原則，每年預定 3 人，每月獎助新臺幣 4 萬元，獎助期限至少 3 個月、至多 12 個月。研修期間須有本校教師擔任指導老師。",
    link: "",
  },
];

const Services = () => {
  // onClink and open a new tab with url
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="task" className="section lg:mb-[40vh] lg:pb-[40vh]">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row ">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 max-w-[455px]"
          >
            <h2 className="h2 text-carat-pink mb-6 leading-tight">
              核心任務
            </h2>
            <button className="btn btn-sm">查看更多</button>
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
                    className="border-b border-white/20 mb-[38px] flex h-fit"
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
                    <div className="flex flex-col flex-1 items-end ">
                      <a
                        className="btn w-9 h-9 mb-[20px] flex justify-center items-center"
                        onClick={() => openInNewTab(link)}
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        className="text-gradient text-sm"
                        onClick={() => openInNewTab(link)}
                      >
                        Learn more
                      </a>
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
