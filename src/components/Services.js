import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Analyzing discourse functions with acoustic features and phone embeddings: non-lexical items in Taiwan Mandarin",
    description:
      "Pin-Er Chen, Yu-Hsiang Tseng, Chi-Wei Wang, Fang-Chi Yeh, and Shu-Kai Hsieh. 2022. In Proceedings of the 34th Conference on Computational Linguistics and Speech Processing (ROCLING 2022), pages 136–146, Taipei, Taiwan. The Association for Computational Linguistics and Chinese Language Processing (ACLCLP).",
    link: "Learn more",
  },
  {
    name: "CxLM: A Construction and Context-aware Language Model",
    description:
      "Yu-Hsiang Tseng, Cing-Fang Shih, Pin-Er Chen, Hsin-Yu Chou, Mao-Chang Ku, and Shu-Kai Hsieh. 2022. In Proceedings of the Thirteenth Language Resources and Evaluation Conference, pages 6361–6369, Marseille, France. European Language Resources Association.",
    link: "Learn more",
  },
  {
    name: "Exploring the Grounding Issues in Image Caption",
    description:
      "Pin-Er Chen, Hsin-Yu Chou, Po-Ya Angela Wang, Yu-Hsiang Tseng, and Shu-Kai Hsieh. 2023.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
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
            <h2 className="h2 text-accent mb-6 leading-tight">
              Research
              <br />
              Publication.
            </h2>
            {/*<h3 className="h3 max-w-[455px] mb-16">
              NLP & <br />
              Computational Linguistics <br />
  </h3>*/}
            <button className="btn btn-sm">View all publications</button>
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
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold leading-tight mb-6">
                        {name}
                      </h4>
                      <p className="text-[14px] font-secondary leading-tight tracking-wider">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[20px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
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
