import { auth , signIn , signOut} from "@/auth"

import Link from "next/link"


const Navbar = async() => {
  const session= await auth()
  return (
   
    <div className="Header-container bg-deepblue">

      
      <div className="Header inline-flex justify-between">
          {session && session?.user ?(
            <>
              <Link href={"/post/create"}> <button className="create-btn">Post Your Doggo</button>
              </Link>
            

             <Link href={`/user/${session?.id}`}>
              <span className="Username">{session?.user?.name}</span>
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
      
        <div className="page-title-container">
          <h1><span className="color-orange page-title">Paw</span><span className="page-title">sitive</span></h1>
       
        </div>
       <div className="flex justify-center  mt-4 ">
        <p>Adopt a dog and give them a loving home</p>
       </div>
    </div>
  )
}

export default Navbar