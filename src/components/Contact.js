import { React, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { GoogleSpreadsheet } from "google-spreadsheet";

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({})

  //Import environmental varialbles
  const {
    REACT_APP_PRIVATE_KEY,
    REACT_APP_CLIENT_EMAIL,
    REACT_APP_SPREADSHEET_ID,
    REACT_APP_SHEET_ID
  } = process.env

  //creating new object of google spreadsheet
  const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

  //Function append spreadsheet to add row into google sheet
  const appendSpreadsheet = async (row) => {
    console.log(REACT_APP_CLIENT_EMAIL);
    try {
      await doc.useServiceAccountAuth({
        client_email: REACT_APP_CLIENT_EMAIL,
        private_key: REACT_APP_PRIVATE_KEY,
      });
      await doc.loadInfo();
      console.log(doc.loadInfo());
      const sheet = doc.sheetsById[REACT_APP_SHEET_ID];
      const result = await sheet.addRow(row);
      return result;
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  //end
  const handleInputChange = (event) =>{
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    appendSpreadsheet(formData)
  }

  return (
    <section id="contact" className="lg:section">
      
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
                {t("application")}
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
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start font-secondary"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder-black focus:border-accent transition-all"
              type="text"
              placeholder="姓名 name"
              onChange={handleInputChange}
            ></input>

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder-black focus:border-accent transition-all"
              type="text"
              placeholder="電子郵件 email"
              onChange={handleInputChange}
            ></input>
            
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder-black focus:border-accent transition-all resize-none mb-12"
              type="text"
              placeholder="相關資料 details"
              onChange={handleInputChange}
            ></textarea>

            <button type="submit" className="btn btn-sm">確認送出 send</button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
