import React from 'react'
import { motion } from 'framer-motion'


const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:-100}}
                transition={{duration:1}} className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>
                2024 - 2025
                </p>
                </motion.div>
                <motion.div whileInView={{ opacity: 1 , x:0}}
                initial={{opacity:0 , x:100}}
                transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                    Internship - {" "}
                    </h6>
                    <span className='text-sm text-purple-100'>TuniRise Sfax</span>
                </motion.div>
            </div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:-100}}
                transition={{duration:1}} className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>
                2018 - 2023
                </p>
                </motion.div>
                <motion.div whileInView={{ opacity: 1 , x:0}}
                initial={{opacity:0 , x:100}}
                transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                    Technicien - {" "}
                    </h6>
                    <span className='text-sm text-purple-100'>Wintex Ras Jebel</span>
                </motion.div>
            </div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{opacity:1 , x:0}}
                initial={{opacity :0 ,x:-100}}
                transition={{duration:1}} className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>
                2018 - 2019
                </p>
                </motion.div>
                <motion.div whileInView={{ opacity: 1 , x:0}}
                initial={{opacity:0 , x:100}}
                transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                    Caissier - {" "}
                    </h6>
                    <span className='text-sm text-purple-100'>Carrefour-Market Ras Jebel</span>
                </motion.div>
            </div>
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
                    Internship - {" "}
                    </h6>
                    <span className='text-sm text-purple-100'>ROTECTA-FIRE PRO Company Ras Jebel</span>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Experience