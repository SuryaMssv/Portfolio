/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Github01Icon, Linkedin01Icon, Mail01Icon } from 'hugeicons-react'
import React, { useRef, useState } from 'react'
import { CVbutton } from './Cv'
import emailjs from "@emailjs/browser"
import { Slide, toast } from 'react-toastify'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const SERVICE_ID = process.env.SERVICE_ID
    const TEMPLATE_ID = process.env.TEMPLATE_ID
    const PUBLIC_KEY = process.env.PUBLIC_KEY
    if (SERVICE_ID&&TEMPLATE_ID&&PUBLIC_KEY){
      emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current||"", {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (res) => {
          if (res.status === 200){
            console.log("success")
            toast.success('Message sent Successfully. Thank you', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
            });
          }
        },
        (error) => {
          toast.error('Failed to send the message, please try again.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
        },
      );
    }
  };

  return (
    <div className='h-fit gap-3 px-[10rem]'>
      <h1 className='text-3xl text-[#AA7DFC] font-bold'>Contact</h1>
      <div className='flex w-full p-[2rem] h-fit'>
        <div className='w-[50%] gap-5 flex flex-row justify-start items-start p-8'>
          <a className='text-[#AA7DFC] rounded-full hover:text-[#ba98f9] hover:shadow-xl hover:shadow-[rgba(170,125,252,0.3)]' href="https://github.com/SuryaMssv"><Github01Icon size={40}/></a>
          <a href="https://www.linkedin.com/in/sai-surya-6084a0244/" className='text-[#AA7DFC] rounded-full hover:text-[#ba98f9] hover:shadow-xl hover:shadow-[rgba(170,125,252,0.3)]'><Linkedin01Icon size={40}/></a>
          <CVbutton/>
          </div>
        <div className='w-[50%]'>
        <form ref={form} onSubmit={(e)=>{sendEmail(e)}}
        className="flex flex-col gap-4 max-w-md mx-auto p-6 border border-[rgba(170,125,252,0.5)] rounded-lg shadow-sm">
          <h1 className='text-xl text-[#AA7DFC] flex gap-3 font-bold'>Get In Touch<Mail01Icon/> </h1>
          <label htmlFor="name" className="text-sm text-[#AA7DFC] font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full border-[rgba(170,125,252,0.5)] bg-gray-950  px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#AA7DFC]"
          />
          <label htmlFor="email" className="text-sm text-[#AA7DFC] font-medium">Email *</label>
          <input
            required
            type="email" 
            name="user_email"
            className="w-full border-[rgba(170,125,252,0.5)] bg-gray-950  px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#AA7DFC]"
          />
          <label htmlFor="subject" className="text-sm text-[#AA7DFC] font-medium">Subject *</label>
          <input
            required
            type="text"
            name="user_subject"
            className="w-full border-[rgba(170,125,252,0.5)] bg-gray-950  px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#AA7DFC]"
          />
          <label htmlFor="message" className="text-sm text-[#AA7DFC] font-medium">Message *</label>
          <textarea
            required
            name="message"
            className="w-full min-h-[8rem] border-[rgba(170,125,252,0.5)] bg-gray-950 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#AA7DFC]"
            rows={4}
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="w-full px-4 py-2 bg-[#AA7DFC] text-white font-semibold rounded-md hover:bg-[rgba(170,125,252,0.8)] focus:outline-none focus:ring-2 focus:ring-[#AA7DFC]"
          />
        </form>
       </div>
      </div>
    </div>
  )
}

export default Contact