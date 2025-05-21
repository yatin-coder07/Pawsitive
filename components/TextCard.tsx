"use client"
import { AnimatePresence ,motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import React from 'react'

const TextCard = () => {
  return (
    <AnimatePresence>
        <motion.div 
        initial={{opacity:0.2}}
        animate={{opacity:1}}
        className="bg-[#023047] text-white  m-5  flex flex-col justify-between">
       <div className='p-9 flex flex-col gap-4'>
         <div className='flex items-center gap-3'>
          <h1 className="text-3xl sm:text-4xl font-sans font-bold ">Why Adopt a dog?</h1>
          <h2><Heart/></h2>
         </div>
        <p className="font-sans">Approximately 1478 dogs & cats die every day on road in India. <br /> Pawsitive is on a mission to provide every dog and cat a home before 2035. <br /> It’s just one of the many ways Pawsitive! gives back and helps you <br /> become a part of something larger help by setting up Pet houses <br /> in your surrounding for strays.  <br /> Adoption will always be more convenient than buying a puppy for sale from a pet shop <br /> or finding a kitten for sale from  a litter. Pet adoption brings less stress and more savings! So what are you waiting for? Go find that perfect pet for home! </p>
       </div>
       <div className='flex justify-evenly'>
        <img src={"/image1.png"} className='sm:h-100 sm:w-100' />
        <h2 className='sm:mt-40 font-sans font-medium sm:text-2xl'>Every Dog has feelings <br />Adopt a dog and give them <br /> a loving home.</h2>
       </div>
      </motion.div>
    </AnimatePresence>
    
  )
}

export default TextCard