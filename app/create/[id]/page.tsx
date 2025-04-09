
import { client } from '@/sanity/lib/client'
import { ADOPTION_BY_ID_QUERY } from '@/sanity/lib/queries'
import React from 'react'



const page = async({params}:{params:Promise<{id:string}>}) => {
  
const id= (await params).id
  const posts = await client.fetch(ADOPTION_BY_ID_QUERY ,{id});
  const post = posts?.[0]; 
  
  return (
    <>
    <div className="Header-container bg-deepblue flex justify-center items-center ">

        <div className="Dog-image-container bg-yellow">
          <img src={post.image} alt=""className='h-45 sm:h-60  ' />
        </div>
       
    </div>

    <div className="Dog-details-section ">
     <div className='flex justify-center mt-5'> <h1 className="text-7xl"><span className='text-orange-500'>Dog</span > <span className='text-blue-950' >Details</span></h1></div>
     <div className="flex justify-center items-center bg-yellow text-4xl h-30 mt-3 sm:text-5xl">
      <h5> Posted on : {post._createdAt}</h5>
     </div>

     <div className="flex flex-col mt-5 text-2xl sm:text-4xl ml-2 sm:ml-5 font-sans">
      <h2  ><span className='font-jaro'>Dog's Breed :</span> : {post.breed}</h2> 
      <h3> <span className='font-jaro'>Dog's Age :</span>  {post.age} years</h3>
      <h4><span className='font-jaro'>Dog's City :</span>  {post.city}</h4>
      <h5> <span className='font-jaro'>Dog's Location :</span>  <span className='text-blue-950'>{post.location}</span></h5>
      
     </div>

     <div className="ml-2 sm:ml-5 mt-2 sm:mt-3 mr-5 mb-5">
      <h6 className='text-3xl sm:text-4xl'><span className='text-orange-500 text-5xl'>Dog's</span> <span>Description :</span></h6>
      <p className='text-blue-950 text-[18px] sm:text-2xl font-sans'> {post.dogdescription}</p>
     </div>
     <div className="owner-details-section  font-sans ml-2 mr-5 mb-5">
       <h1 className='text-2xl sm:text-4xl'><span className='font-jaro'>Owner Name :</span> {post.Ownername}</h1>
       <h2 className='text-2xl sm:text-4xl'><span className='font-jaro'>Owner's Contact :</span> {post.Phonenumber}</h2>

       <div className="mt-2">
        <h3 className='font-jaro text-3xl'><span className='text-orange-500 text-5xl'>Owner's</span> Description:</h3>
        <p className='text-blue-950 text-[18px] sm:text-2xl'>{post.ownerdetails}</p>
       </div>
     
    </div>
      
    </div>
   
    </>
  )
}

export default page