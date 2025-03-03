import React from 'react'
import "./Styles.css"
import Image from 'next/image'
import logo from "@/public/logo.png"
import { Contact01Icon, File01Icon, Idea01Icon,WebDesign02Icon } from 'hugeicons-react'


const Nav = () => {
  return (
    <div className='fixed flex w-full justify-between bg-black px-6 py-3 items-center z-10 shadow-xl shadow-[rgba(170,125,252,0.3)] '> 
        <a href="#Home">
        <Image
        alt='logo'
        src={logo}
        width={80}
        /></a>
        
        <div className='flex justify-end gap-[5%] w-[50%] font-semibold'>
            <a className='hover:text-[#AA7DFC] flex gap-1' href="#Project"><WebDesign02Icon size="20"/> Projects</a>
            <a className='hover:text-[#AA7DFC] flex gap-1' href="#Skill"><Idea01Icon size="20"/>Skills</a>
            {/* <a className='hover:text-[#AA7DFC] flex gap-1' href="#About"><InformationCircleIcon size="20"/>About</a> */}
            <a className='hover:text-[#AA7DFC] flex gap-1' href="#Contact"><Contact01Icon size="20"/>Contact</a>
            <a className='hover:text-[#AA7DFC] flex gap-1' href="/surya.pdf"><File01Icon size="20" /> Resume </a>
        </div>
    </div>
  )
}

export default Nav