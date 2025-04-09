import PostForm from '@/components/PostForm'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='Post-header-container bg-deepblue '>
        <h1 className='sm:text-7xl text-4xl'>Create a post for </h1>
        <h2 className='sm:text-9xl text-5xl text-[#FB8500] '>Adoption</h2>
    </div>
    <PostForm/>
    </>
  )
}

export default page