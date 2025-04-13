import PostForm from '@/components/PostForm'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
   <Link href={"/"}>
   <div className='Post-header-container bg-deepblue font-sans font-bold '>
        <h1 className='sm:text-7xl text-4xl'>Create a post for </h1>
        <h2 className='sm:text-9xl text-5xl text-[#FB8500] '>Adoption</h2>
    </div>
   </Link>
    <PostForm/>
    </>
  )
}

export default page