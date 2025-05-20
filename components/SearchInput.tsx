import { Search } from "lucide-react"
import Form from "next/form"
import ResetButton from "./ResetButton"

const SearchInput = ({query}:{query?:string}) => {
    

   
  return (
    <Form action={'/'} scroll={false} className="search-form">
        <input 
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Sort By City name"
        />

         <div className="flex gap-2">
           {query && 
            <><ResetButton/></>

            }

            <button className="search-btn pl-3 transition transform duration-200 ease-in-out hover:bg-blue-200 text-[10px]">
                <Search/>
            </button>
         </div>
         </Form>
  )
}

export default SearchInput