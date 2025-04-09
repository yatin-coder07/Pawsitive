'use client'
import { X } from "lucide-react";
import Link from "next/link";

const ResetButton = () => {
    const reset =()=>{
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if(form) form.reset();

    }
  return (
    <button type="reset"  className="search-btn p-3" onClick={reset}>
        <Link href={'/'}>
         <X/>
        </Link>
    </button>
  )
}

export default ResetButton