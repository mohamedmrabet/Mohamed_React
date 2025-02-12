import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import i18n from "./Language/i18n.js";

const Contact = () => {

  const { t, i18n } = useTranslation();
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
       {t("Contact.name")}
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t("Contact.adress")}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {t("Contact.tlf")}
        </motion.p>
        <a href="#"  className="border-b">
        {t("Contact.gmail")}
        </a>
      </div>
    </div>
  );
};

export default Contact;
