"use client"
import { formatDate } from "@/lib/utils"
import { Dogs } from "@/sanity/types";
import { AnimatePresence,motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link"

export type AdoptionCardType = Omit<Dogs,"">;

const AdoptionCard = ({post}:{post:AdoptionCardType}) => {
  return (

 <Link href={`/create/${post._id}`}>
 <AnimatePresence>
  <motion.div layout
  initial={{opacity:0.2}}
  animate={{opacity:1}}
  transition={{duration:0.1 ,}}
  whileHover={{scale:1.1}}
  className="flex flex-col font-sans rounded-lg bg-amber-500 ">
  
      <div className="w-full "><img src={post.image} alt="" className="h-60 w-full rounded-lg"/></div>
      <div className="flex flex-col p-4 text-white gap-3">
        <div><h1 className="font-medium text-">{post._createdAt}</h1></div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl">{post.breed}</h1>
          <Heart/>
        </div>
        <div className="flex justify-between">
          <h1 className="font-medium text-[18px]"> Age:{post.age}</h1>
          <h2 className="font-medium text-[20px]">{post.city}</h2>
        </div>
        <div className="flex justify-center items-center bg-sky-900 rounded-lg">
          <button className="p-3 text-2xl  ">Check Details!</button>
        </div>
      </div>
    
  </motion.div>
 </AnimatePresence>
 </Link>
  )
}

export default AdoptionCard