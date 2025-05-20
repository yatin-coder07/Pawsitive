
import AdoptionCard, { AdoptionCardType } from "@/components/AdoptionCard";
import Footer from "@/components/Footer";
import SearchInput from "@/components/SearchInput";
import { client } from "@/sanity/lib/client";
import { DOGS_QUERY } from "@/sanity/lib/queries";
import { ArrowBigRight, Heart } from "lucide-react";
import Link from "next/link";



export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
const query = (await searchParams).query
 const params = {search: query || null};
 

  const posts = await client.fetch(DOGS_QUERY ,params);

  


  return (
   <>
    
   
    <section className="Cards-container">
     <ul className="mt-7 cards-grid mr-10">
       {posts?.length > 0 ? (
        posts.map((post:AdoptionCardType , index:number)=>(
          <AdoptionCard key={post.id} post={post}/>
        ))
       ):(<p>No Adoptions Yet </p>)}
     </ul>
      
    </section>

    <section className="flex justify-center">
      <div className="bg-[#FB8500] text-white p-5  m-5 sm:p-10 ">
        <h1 className="text-3xl sm:text-4xl ">Why Adopt a dog?<Heart/></h1>
        <p className="font-sans">Approximately 1478 dogs & cats die every day on road in India. <br /> Pawsitive is on a mission to provide every dog and cat a home before 2035. <br /> It’s just one of the many ways Pawsitive! gives back and helps you <br /> become a part of something larger help by setting up Pet houses <br /> in your surrounding for strays.  <br /> Adoption will always be more convenient than buying a puppy for sale from a pet shop <br /> or finding a kitten for sale from  a litter. Pet adoption brings less stress and more savings! So what are you waiting for? Go find that perfect pet for home! </p>
      </div>
    </section>
     <div className="flex justify-center">
     <div className="mt-5 mb-5">
        <h1 className="text-gray-600  font-bold font-sans text-[25px] sm:text-3xl">Book Pet Care Service With Pawsitive</h1>
        </div>  
     </div>

    <section className="Folder-container">

          
      <div className="folder1">
        <div className="folder-pic">
          <img src="/grooming.svg" alt="pic" />
        </div>
        <div className="folder-description">
          <h1 className="font-sans font-bold text-3xl text-gray-600">Dog Grooming</h1>
          <p className="font-sans text-[17px] text-gray-600">Schedule Professional In-Home Grooming Services for Your Cat or Dog</p>
          <Link href={"https://flyingfur.in/"}>
          <h2 className="font-medium color-orange text-2xl" >Book grooming <ArrowBigRight/></h2>
          </Link>
        </div>
      </div>


      <div className="folder1">
        <div className="folder-pic">
          <img src="/vaccine.svg" alt="pic" />
        </div>
        <div className="folder-description">
          <h1 className="font-sans font-bold text-3xl text-gray-600">Online Vet Consultation</h1>
          <p className="font-sans text-[17px] text-gray-600">Professional Veterinary Service at Your Home or Online</p>
          <Link href={"https://www.vetlive.in/"}>
          <h2 className="font-medium color-orange text-2xl" >Book Online Vet Consultation <ArrowBigRight/></h2>
          </Link>
        </div>
      </div>

      <div className="folder1">
        <div className="folder-pic">
          <img src="/training.svg" alt="pic" />
        </div>
        <div className="folder-description">
          <h1 className="font-apple text-3xl text-gray-600">Dog Training</h1>
          <p className="font-sans text-[17px] text-gray-600">Schedule Professional Dog Training Service at Your Home</p>
          <Link href={"https://dogstrainingindia.com/"}>
          <h2 className="font-medium color-orange text-2xl" >Book Dog Training Service<ArrowBigRight/></h2>
          </Link>
        </div>
      </div>
    </section>

    <Footer/>
   </>
   
  );
}
