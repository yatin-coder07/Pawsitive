import Instagram, { GithubIcon, InstagramIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='footer-container'>
        <div>
            <Link href={"https://services.india.gov.in/service/detail/lodge-cruelty-complaint-for-animal-welfare-board-of-in"}>
            <h1 className='font-sans font-semibold ml-5 text-[20px]'>Report animal abuse</h1>
            </Link>
        </div>

    <div className="social-container">
    <div className=''>
        <Link href={"https://www.instagram.com/_yatin_.sharma/profilecard/?igsh=ZG1ucXpiNHk2bGhi"} >
        <InstagramIcon/>
        </Link>
     </div>
     <div>
     <Link href={"/"}>
        <GithubIcon/>
        </Link>
     </div>
    </div>
    </section>
  )
}

export default Footer