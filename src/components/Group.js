import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Group = ({ t }) => {
  const members = [
    {
      name: t("group_member_a_name"),
      description: t("group_member_a_description"),
      contactinfo: "abc123@gmail.com",
    },
    {
      name: t("group_member_b_name"),
      description: t("group_member_b_description"),
      contactinfo: "abc123@gmail.com",
    },
    {
      name: t("group_member_c_name"),
      description: t("group_member_c_description"),
      contactinfo: "abc123@gmail.com",
    },
    {
      name: t("group_member_d_name"),
      description: t("group_member_d_description"),
      contactinfo: "abc123@gmail.com",
    },
  ];

  return (
    <section id="group" className="section ">
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
            <h2 className="text-section-title">{t("group_framework")}</h2>
            <p className=" mb-4">
              {t("group_framework_sub")}
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
                      <h4 className="memberName">{name}</h4>
                      <p className="memberDescription">{description}</p>
                      <p className="memberContactInfo">{contactinfo}</p>
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

export default Group;
