import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import i18n from "./Language/i18n.js";



const Education = () => {

    const { t, i18n } = useTranslation();
  return (
    <div className='border-b border-neutral-900 pb-4'>
           <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>{t('education.name')}</motion.h1>
           <div>
               <div className='mb-8 flex flex-wrap lg:justify-center'>
                   <motion.div whileInView={{opacity:1 , x:0}}
                   initial={{opacity :0 ,x:-100}}
                   transition={{duration:1}} className='w-full lg:w-1/4'>
                   <p className='mb-2 text-sm text-neutral-400'>
                   2017 - 2018
                   </p>
                   </motion.div>
                   <motion.div whileInView={{ opacity: 1 , x:0}}
                   initial={{opacity:0 , x:100}}
                   transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                       <h6 className='mb-2 font-semibold'>
                       {t("education.education1")} - {" "}
                       </h6>
                       <span className='text-sm text-purple-100'>{t("education.education2")}</span>
                   </motion.div>
               </div>
               <div className='mb-8 flex flex-wrap lg:justify-center'>
                   <motion.div whileInView={{opacity:1 , x:0}}
                   initial={{opacity :0 ,x:-100}}
                   transition={{duration:1}} className='w-full lg:w-1/4'>
                   <p className='mb-2 text-sm text-neutral-400'>
                   2013 - 2014
                   </p>
                   </motion.div>
                   <motion.div whileInView={{ opacity: 1 , x:0}}
                   initial={{opacity:0 , x:100}}
                   transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                       <h6 className='mb-2 font-semibold'>
                      {t("education.education3")}- {" "}
                       </h6>
                       <span className='text-sm text-purple-100'>{t("education.education4")} </span>
                   </motion.div>
               </div>
           </div>
       </div>
  )
}

export default Education