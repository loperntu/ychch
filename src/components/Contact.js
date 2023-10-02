import { React, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { GoogleSpreadsheet } from "google-spreadsheet";

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  // Define environment variables
  const GOOGLE_SHEETS_DOCUMENT_ID =
    process.env.REACT_APP_GOOGLE_SHEETS_DOCUMENT_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Initialize the Google Sheets document
    const doc = new GoogleSpreadsheet(GOOGLE_SHEETS_DOCUMENT_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });

    await doc.loadInfo();

    // Select the specific worksheet where you want to store submissions
    const sheet = doc.sheetsByIndex[0]; // Change the index to match your sheet

    // Add a new row with the form data
    await sheet.addRow(formData);

    // Clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      details: "",
    });
  };

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
              <h2 className="text-section-title ">{t("application")}</h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start font-secondary"
          >
            <input
              name="name" // Add the name attribute to each input
              value={formData.name} // Bind input value to state
              onChange={handleInputChange}
              className="bg-transparent border-b py-3 outline-none w-full placeholder-black focus:border-accent transition-all"
              type="text"
              placeholder="姓名 name"
            ></input>

            <input
              name="email" // Add the name attribute
              value={formData.email} // Bind input value to state
              onChange={handleInputChange}
              className="bg-transparent border-b py-3 outline-none w-full placeholder-black focus:border-accent transition-all"
              type="text"
              placeholder="電子郵件 email"
            ></input>

            <textarea
              name="details" // Add the name attribute
              value={formData.details} // Bind input value to state
              onChange={handleInputChange}
              className="bg-transparent border-b py-12 outline-none w-full placeholder-black focus:border-accent transition-all resize-none mb-12"
              type="text"
              placeholder="相關資料 details"
            ></textarea>

            <button type="submit" className="btn btn-sm">
              確認送出 send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
