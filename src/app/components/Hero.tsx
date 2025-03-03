"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dp from "@/public/dp.jpeg"

const Hero = () => {
  const words = ["Software Developer","Frontend Developer","UI Designer"]
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length); // Move to next word
    }

    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 100 : 150); // Speed of typing/deleting

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);
  
  return (
    <div className='flex justify-between h-fit p-[10rem]'>
      <div className='flex flex-col gap-10 max-w-[50%]'>
        <h1 className='text-3xl font-bold'>Hi, My name is <span className='text-[#AA7DFC]'>Sai Surya. M</span></h1>
        <p className='font-extrabold text-2xl'>I am an <span className='text-[#AA7DFC]'>{text}</span></p>
        <p className='text-xl font-semibold max-w-[30rem]'>I am specializing in building and designing of different applications . Currently i am focused on building that challenges my skills and helps me upskill myself</p>
      </div>
      <div className='w-full max-w-[20rem] min-w-[10rem] aspect-square rounded-full overflow-hidden'>
        <Image
          alt='Profile Picture'
          src={dp}
          layout='responsive' 
          width={500} 
          height={500} 
          className='object-cover w-full h-full' 
        />
      </div>
    </div>
  )
}

export default Hero