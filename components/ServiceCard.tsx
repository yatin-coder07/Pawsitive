"use client"
import { AnimatePresence,motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

export const ServiceCard = ({card}) => {
    const [isHover,setIsHover]=useState(false)
  return (
    <>
   <Link href={card.link}>
    <AnimatePresence>
        <motion.div
        initial={{opacity:0.2,
            height:100,
            width:100,
        }}
        animate={{opacity:1}}
        whileHover={{
            height:350,
            width:700,
            transition: { duration: 0.3 }
        }}
        onHoverStart={()=>setIsHover(true)}
        onHoverEnd={()=>setIsHover(false)}
        transition={{ duration: 0.3 }}
        className='border-3 border-amber-400 p-4
        rounded-lg  shadow-md overflow-hidden cursor-pointer flex flex-col font-sans gap-4'
        >
           <div>
            <img src={card.logo} alt="logo" />
           </div>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:isHover?1:0}}
          transition={{delay:isHover?0.2:0,
            duration:0.2
          }}
          className='flex gap-2'
          >
         <div className='flex flex-col gap-3'>
              <h1 className='font-bold text-5xl text-[#484949]'>{card.title}</h1>
              <h2 className="font-medium text-gray-600">{card.description}</h2>
              <h3 className="text-2xl text-amber-600">{card.linktitle}</h3>
         </div>
         <div >
            <img src={card.image} alt="" className='h-80 w-100' />
         </div>
          </motion.div>
        </motion.div>
    </AnimatePresence></Link>
    </>
  )
}

