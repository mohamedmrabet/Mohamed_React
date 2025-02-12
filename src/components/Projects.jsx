import React from "react";
import { motion } from "framer-motion";
import picture1 from "../assets/picture1.jpg"
import image6 from "../assets/image6.jpg"
import image4 from "../assets/image4.jpg"
import { useTranslation } from 'react-i18next';
import i18n from "./Language/i18n.js";

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >{t("project.name")}</motion.h1>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div  whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className="w-full lg:w-1/4">
            <img
              src={image6}
              height={150}
              width={150}
              className="mb-6 rounded"
              alt=""
            />
          </motion.div>
          <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:100}}
                transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{t("project.project0")}</h6>
            <p className="mb-4 text-neutral-400">
            {t("project.sous_project1")}
            </p>
            <p className="mb-4 text-neutral-400">
            {t("project.sous_project2")}
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Nest - Postgres - Swagger - React - Tailwind{" "}
            </span>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div  whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className="w-full lg:w-1/4">
            <img
              src={image4}
              height={150}
              width={150}
              className="mb-6 rounded"
              alt=""
                          />
          </motion.div>
          <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:100}}
                transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{t("project.project00")}</h6>
            <p className="mb-4 text-neutral-400">
            {t("project.sous_project01")}
            </p>
            <p className="mb-4 text-neutral-400">
            {t("project.sous_project02")}
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Node - Express - Sequelize - Next - Tailwind - Materiel UI -
              TypeScript - Stripe{" "}
            </span>
          </motion.div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div  whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className="w-full lg:w-1/4">
            <img
              src={picture1}
              height={50}
              width={150}
              className="mb-6 rounded"
              alt=""
                          />
          </motion.div>
          <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:100}}
                transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{t("project.project000")}</h6>
            <p className="mb-4 text-neutral-400">
            {t("project.sous_project001")}
            </p>
            <p className="mb-4 text-neutral-400">
            {t("project.sous_project002")}
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Node - Express - Sequelize - React - Tailwind - Materiel UI{" "}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
