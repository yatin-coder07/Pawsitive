"use client"
import { formatDate } from "@/lib/utils"
import { Dogs } from "@/sanity/types";
import { AnimatePresence,motion } from "framer-motion";
import Link from "next/link"

export type AdoptionCardType = Omit<Dogs,"">;

const AdoptionCard = ({post}:{post:AdoptionCardType}) => {
  return (
 /*<div >
   <div  >
    <li className="Adoption-card bg-grey group">
     <div className="flex flex-row justify-between">
    <p className="text-2xl ml-5 mt-2 mb-5 text-blue-950" >{post.city}</p>
    <p className=" mr-5 mt-2 mb-5 text-blue-950">{formatDate(post._createdAt)} </p>
   </div>
   <div className="card-image-container">
    <img src={post.image} alt="Dogs image" className="Dog-image" />
   </div>
   <div className="Card-dog-detail">
    <div>
    <p className="text-2xl text-blue-950">{post.breed}</p>
    </div>
    <div>
    <p className="text-2xl text-blue-950">{post.age} Years</p>
    </div>
    <Link href={`/create/${post._id}`}><button className="Card-Details-btn">DETAILS</button></Link>

   </div>
  </li>
  </div>
 </div>*/
 <Link href={`/create/${post._id}`}>
 <AnimatePresence>
  <motion.div layout
  initial={{opacity:0.2}}
  animate={{opacity:1}}
  transition={{duration:0.1 ,}}
  whileHover={{scale:1.2}}
  className="Adoption-card font-sans">
    <div className="flex flex-col justify-between gap-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-[15px]">{post._createdAt}</h1> 
      <h2 className="text-3xl font-bold">{post.breed}</h2>
      </div>
      <div className="flex justify-between">
        <h1 className="font-semibold">Age:{post.age}</h1>
        <h2 className="font-semibold">{post.city}</h2>
      </div>
      
    </div>
    <div><img src={post.image} alt="image" className="h-45 w-55"/></div>
  </motion.div>
 </AnimatePresence>
 </Link>
  )
}

export default AdoptionCard