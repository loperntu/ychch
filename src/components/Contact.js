import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:section lg:my-60 lg:pb-80">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h2 className="text-section-title ">
                申請資訊
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder-black focus:border-accent transition-all"
              type="text"
              placeholder="姓名 name"
            ></input>

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder-black focus:border-accent transition-all"
              type="text"
              placeholder="電子郵件 email"
            ></input>
            
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder-black focus:border-accent transition-all resize-none mb-12"
              type="text"
              placeholder="相關資料 details"
            ></textarea>

            <button className="btn btn-sm">確認送出 send</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
