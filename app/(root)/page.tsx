
import AdoptionCard, { AdoptionCardType } from "@/components/AdoptionCard";
import Footer from "@/components/Footer";

import {ServiceCard} from "@/components/ServiceCard";
import {TextCard} from "@/components/TextCard";
import { client } from "@/sanity/lib/client";
import { DOGS_QUERY } from "@/sanity/lib/queries";




export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
const query = (await searchParams).query
 const params = {search: query || null};

 const cards=[{
  id:1,
  title:"Dog Grooming",
  logo:"/grooming.svg",
  description:"Schedule Professional In-Home Grooming Services for Your Cat or Dog",
  link:"https://flyingfur.in/",
  linktitle:"Book Dog Grooming Services",
  image:"/image1.png"
 },{
  id:2,
  title:"Dog Training",
  logo:"/training.svg",
  description:"Schedule Professional Dog Training Service at Your Home",
  link:"https://dogstrainingindia.com/",
  linktitle:"Book Dog Training Sessions",
  image:"/image2.png"
 },{
  id:3,
  title:"Online Vet Consultation",
  logo:"/vaccine.svg",
  description:"Professional Veterinary Service at Your Home or Online",
  link:"https://www.vetlive.in/",
  linktitle:"Book Dog Vaccination Services",
  image:"/image3.png"
 }
]
 

  const posts = await client.fetch(DOGS_QUERY ,params);

  


  return (
   <>
   <div className="sm:text-5xl text-4xl font-sans font-bold text-[#484949] mt-10 mb-10 flex justify-center items-center">
    <h1>Adoption Section!</h1>
   </div>
    <section className="Cards-container">
     <ul className="mt-7 cards-grid mr-10 ">
       {posts?.length > 0 ? (
        posts.map((post:AdoptionCardType , index:number)=>(
          <AdoptionCard key={post.id} post={post}/>
        ))
       ):(<p>No Adoptions Yet </p>)}
     </ul>
      
    </section>

    <section className="flex justify-center mt-10 mb-10">
     <TextCard/>
    </section>
     <div className="flex justify-center">
     <div className="mt-10-5 mb-10">
        <h1 className="text-gray-600  font-bold font-sans text-[25px] sm:text-4xl md:text-5xl">Book Pet Care Service With Pawsitive</h1>
        </div>  
     </div>

    <div className="flex flex-col justify-center items-center  lg:gap-7 gap-10 p-10">
      {cards.map((card,index:number)=>(
        <ServiceCard key={card.id} card={card}/>
      ))}
    </div>

    <Footer/>
   </>
   
  );
}
