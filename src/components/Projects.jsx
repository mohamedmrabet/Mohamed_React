import React from "react";
import { motion } from "framer-motion";
import picture1 from "../assets/picture1.jpg"
import image6 from "../assets/image6.jpg"
import image4 from "../assets/image4.jpg"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >Projects</motion.h1>
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
              srcset=""
            />
          </motion.div>
          <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:100}}
                transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Jalyss- WEB SITE </h6>
            <p className="mb-4 text-neutral-400">
              Mise en place de systèmes back-end basés sur Nest.js pour gérer
              efficacement les données et faciliter les opérations sans heurts.
            </p>
            <p className="mb-4 text-neutral-400">
              Utilisation de React pour construire des interfaces front-end
              dynamiques et interactives, assurant des expériences utilisateur
              optimales.
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
              srcset=""
            />
          </motion.div>
          <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:100}}
                transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Codini- WEB SITE </h6>
            <p className="mb-4 text-neutral-400">
              Mise en place de systèmes back-end basés sur SQL pour gérer
              efficacement les données et faciliter les opérations sans heurts.
            </p>
            <p className="mb-4 text-neutral-400">
              Utilisation de Next.js pour construire des interfaces front-end
              dynamiques et interactives, assurant des expériences utilisateur
              optimales.
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
              srcset=""
            />
          </motion.div>
          <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:100}}
                transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Market_place- WEB SITE </h6>
            <p className="mb-4 text-neutral-400">
              Développement d'une interface front-end élégante et réactive en
              utilisant Material-UI pour créer des interfaces utilisateur
              modernes et visuellement attrayantes.
            </p>
            <p className="mb-4 text-neutral-400">
              Mise en place d'une infrastructure back-end robuste à l'aide de
              SQL pour gérer et stocker efficacement les données, assurant une
              base sécurisée et évolutive pour la fonctionnalité transparente de
              l'application.
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
