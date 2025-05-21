
import { auth , signIn , signOut} from "@/auth"


import Link from "next/link"
import SearchInput from "./SearchInput"


const Navbar = async({searchParams}:{searchParams:Promise<{query?:string}>}) => {

     const query = (await searchParams)
   
     const session= await auth()
  return (
   
    
      <div className="Header-container bg-amber-500">

      
      <div className="Header inline-flex justify-end items-center">
          {session && session?.user ?(
            <>
             
            

             <Link href={`/user/${session?.id}`}>
              <span className="Username">Hey!, {session?.user?.name}</span>
             </Link>

              <Link href={"/post/create"}> <button className="create-btn">Post Your Doggo</button>
              </Link>

            
              <form action={async()=>{
              "use server";
              await signOut()
             }}>
              <button className="signout-btn">Sign Out</button>
             </form>

             
            </>
          ):(
            <form action={async()=>{
              "use server";
              await signIn('google')
            }}>
              <button className="signup-btn"type="submit">
                Sign-In
              </button>
            </form>
          )}
        </div>
      
        <div className=" flex flex-row gap-2 justify-evenly sm:pl-8">
          <div className="flex flex-col gap-1 sm:gap-4 md:gap-8 lg:gap-5 ">
            <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold">Dog <br />Adoption</h1>
            <h2 className=" text-[10px] sm:text-[19px] lg:text-[21px]">Adopt a dog and give them a warm happy home. <br />
            Book services for your dog and take care of them.</h2>
             <SearchInput query={query}/>
          </div>
          <div className=" h-41 sm:h-87 md:h-107 ">
            <img src={"/headerImg.png"} alt="" className="h-full w-full" />
          </div>
        </div>
    </div>
   
  )
}

export default Navbar