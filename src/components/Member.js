import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const members = [
  {
    name: "陳弱水",
    description:
      "一些工作職務",
    contactinfo: "連絡信箱或電話",
  },
  {
    name: "一二三",
    description:
      "一些工作職務",
      contactinfo: "連絡信箱或電話",
  },
  {
    name: "四五六",
    description:
      "一些工作職務",
      contactinfo: "連絡信箱或電話",
  },
  {
    name: "七八九",
    description:
      "一些工作職務",
      contactinfo: "連絡信箱或電話",
  },
];

const Member = ({ t }) => {
  return (
    <section id="member" className="section ">
      <div className="container mx-auto">
        {/* text row */}
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1"
          >
            <h2 className="text-section-title">組織架構</h2>
            <p className=" mb-4">本中心之諮詢委員會，委員 7-11 人，由本校與中研院共同推薦關注研究漢學及相關人文學領域，辦理余先生學術思想相關活動
            </p>          
          </motion.div>
        </div>
        
       {/* memberblock row */}
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1"
          >
            <div className="memberBlock">
              {members.map((member, index) => {
                // destructuring members object
                const { name, description, contactinfo } = member;
                return (
                  <div
                    className="border-b border-white/20 mb-[38px] flex h-fit"
                    key={index}
                  >
                    <div className="max-w-[560px] pb-10 memberBlockItem">
                      <h4 className="memberName">
                        {name}
                      </h4>
                      <p className="memberDescription">
                        {description}
                      </p>
                      <p className="memberContactInfo">
                        {contactinfo}
                      </p>
                    </div>
                    
                  </div>
                );
              }
            )}   
            </div>     
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Member;
