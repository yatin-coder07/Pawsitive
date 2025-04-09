
import AdoptionCard, { AdoptionCardType } from "@/components/AdoptionCard";
import SearchInput from "@/components/SearchInput";
import { client } from "@/sanity/lib/client";
import { DOGS_QUERY } from "@/sanity/lib/queries";



export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {

  const query = (await searchParams).query
  const params = {search: query || null};

  const posts = await client.fetch(DOGS_QUERY ,params);

  


  return (
   <>
    
    <SearchInput query={query}/>
    <section className="Cards-container">
     <ul className="mt-7 cards-grid mr-10">
       {posts?.length > 0 ? (
        posts.map((post:AdoptionCardType , index:number)=>(
          <AdoptionCard key={post.id} post={post}/>
        ))
       ):(<p>No Adoptions Yet </p>)}
     </ul>
      
    </section>
   </>
   
  );
}
