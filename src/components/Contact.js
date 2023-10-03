import { React, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitDataToGoogleSheets } from "./googleSheetsApi";

const Contact = ({ t }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      title: "先生 Mr.",
      terms: "",
    },

    // Validate form (with Yup)
    validationSchema: Yup.object({
      name: Yup.string().required("必填欄位 Required"),
      email: Yup.string()
        .email("無效的電子郵件 Invalid email address")
        .required("必填欄位 Required"),
      terms: Yup.array().required("必填欄位 Required"),
    }),

    // Submit form
    onSubmit: async (values) => {
      console.log(values);

      // Call the function to submit data to Google Sheets
      const submissionResult = await submitDataToGoogleSheets(values);

      if (submissionResult.success) {
        // Handle successful submission (e.g., show a success message)
        console.log("Data submitted successfully.");
      } else {
        // Handle submission error (e.g., show an error message)
        console.error("Error submitting data:", submissionResult.message);
      }
    },
  });

  //console.log(formik.errors);

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
            onSubmit={formik.handleSubmit}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start font-secondary"
          >
            {/* NAME */}
            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="name">
                名字 Name
              </label>
              <div>
                <input
                  className="border-2 border-b p-2 rounded-md
                 focus:border-x-orange-200 transition-all"
                  type="text"
                  name="name"
                  placeholder="輸入名字"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="name">
                電子郵件 E-mail
              </label>
              <div>
                <input
                  className="border-2 border-b p-2 rounded-md
                 focus:border-x-orange-200 transition-all"
                  type="text"
                  name="email"
                  placeholder="輸入E-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* SELECT 選單 */}
            <div>
              <label className="block text-sm pb-2" htmlFor="title">
                稱呼 Title
              </label>
              <select
                value={formik.values.title}
                onChange={formik.handleChange}
                name="title"
                className="border-10 p-2 rounded-md bg-orange-100 w-fit"
              >
                <option value="Mr.">先生 Mr.</option>
                <option value="Ms.">小姐 Ms.</option>
                <option value="Mrs.">女士 Mrs.</option>
                <option value="Dr.">博士 Dr.</option>
              </select>
            </div>

            {/* checkbox */}
            <div className="">
              <label className="block text-sm pb-2" htmlFor="terms"></label>
              同意條款 Terms of Service
              <div className="flex items-center gap-2 pt-2">
                <input
                  className="h-5 w-5"
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onChange={formik.handleChange}
                />
              </div>
            </div>

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
