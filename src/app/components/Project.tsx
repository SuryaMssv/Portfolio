import Image, { StaticImageData } from 'next/image'
import React from 'react'
import crmix from "@/public/mlmix.jpeg"
import aivr from "@/public/aivr.jpg"
import todo from "@/public/todo.jpeg"
import chatbot from "@/public/aibot.jpg"
import wrkflow from "@/public/wkflow.jpg"
import form from "@/public/form.png"

const projects = [
    {
      title: "Concrete Strength Predictor",
      description: "Developed a machine learning model to predict the strength of concrete mixes.",
      image: crmix
    },
    {
      title: "Voice-Activated PC Assistant",
      description: "Built a voice-controlled virtual assistant using Python and OpenAI for speech-based interactions.",
      image: aivr
    },
    {
      title: "Full-Stack Todo Application",
      description: "Created a personal todo app with both frontend and backend for daily task management.",
      image: todo
    },
    {
      title: "AI-Powered Chatbot",
      description: "Developed a chatbot using Chainlit, OpenAI, Microsoft Bing APIs, and Gemini for advanced conversational AI.",
      image: chatbot
    },
    {
      title: "Compliance & Workflow Automation",
      description: "Contributed to the development of a compliance and workflow system, handling both frontend and backend tasks.",
      image: wrkflow
    },
    {
      title: "Dynamic Form Builder",
      description: "Designed a form application with editable tables, preview functionality, and version control for client forms.",
      image: form
    }
];

const Project = () => {
  return (
    <div className='h-fit gap-3 px-[10rem]'>
        <h1 className='text-3xl text-[#AA7DFC] font-bold'>Projects</h1>
        <div className='flex flex-row flex-wrap w-full justify-around p-[3rem] gap-[2rem]'>
            {projects.map((project)=>(
                    <Project_card key={project.title} title={project.title} description={project.description} image={project.image} />
            ))}
        </div>
    </div>
  )
}

interface Project_card_props {
    title : string;
    description : string ;
    image : StaticImageData
}

const Project_card: React.FC<Project_card_props> =(project) => {
    return(
        <div className='hover:cursor-pointer flex flex-col bg-[rgba(0,0,0,0.5)] w-[30%]  px-3 py-[1rem] rounded-xl gap-2 backdrop-blur-md border-2 border-[rgba(170,125,252,0.5)] hover:shadow-xl hover:shadow-[rgba(170,125,252,0.5)]'>
        <h1 className='text-center text-xl font-semibold' >{project.title}</h1>
        <div className='rounded-lg overflow-hidden'>
            <Image height={'0'} width={'0'} src={project.image} alt={''} className='w-full h-full object-cover'></Image>
        </div>
        <p className='text-md font-medium' >{project.description}</p>
        </div>
    )
}

export default Project