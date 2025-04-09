
import { formatDate } from "@/lib/utils"
import { Dogs } from "@/sanity/types";
import Link from "next/link"

export type AdoptionCardType = Omit<Dogs,"">;

const AdoptionCard = ({post}:{post:AdoptionCardType}) => {
  return (
 <div >
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
 </div>
  )
}

export default AdoptionCard