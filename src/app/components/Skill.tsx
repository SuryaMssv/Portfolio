import { AmazonwebservicesPlainWordmark, AzurePlain, Css3Plain, DockerPlain, FastapiPlain, GitPlain, GolandPlain, Html5Plain, JavaPlain, JavascriptPlain, LinuxPlain, MicrosoftsqlserverPlain, MongodbPlain, MysqlPlainWordmark, NextjsPlain, PostgresqlPlain, PythonPlain, Windows11Original } from 'devicons-react'
import { ReactIcon } from 'hugeicons-react'
import React from 'react'

const Languages = [
  {
    name:"Html",
    image:<Html5Plain color='#AA7DFC' size={'70%'}/>
  },
  {
    name:"Css",
    image:<Css3Plain color='#AA7DFC' size={'70%'}/>
  },
  {
    name:"JavaScript",
    image:<JavascriptPlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name:"Python",
    image:<PythonPlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name:"Java",
    image:<JavaPlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name:"Golang",
    image:<GolandPlain color='#AA7DFC' size={'70%'}/>
  },
]

const frameworks = [
  {
    name: "React Js",
    image : <ReactIcon color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "Next Js",
    image : <NextjsPlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "Gin",
    image : <GitPlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "Fastapi",
    image : <FastapiPlain color='#AA7DFC' size={'70%'}/>
  }
]

const Dbs = [
  {
    name: "Mysql",
    image : <MysqlPlainWordmark color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "Postgre Sql",
    image : <PostgresqlPlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "Microsoft SQL Server",
    image : <MicrosoftsqlserverPlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "MongoDB",
    image : <MongodbPlain color='#AA7DFC' size={'70%'}/>
  },
]

const services = [
  {
    name: "Amazon Web Services",
    image : <AmazonwebservicesPlainWordmark color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "Microsoft Azure",
    image : <AzurePlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "Docker",
    image : <DockerPlain color='#AA7DFC' size={'70%'}/>
  },
  {
    name: "Git",
    image : <GitPlain color='#AA7DFC' size={'70%'}/>
  }
]

const os = [
  {
    name : "Windows",
    image : <Windows11Original color='#AA7DFC' size={'70%'}/>
  },
  {
    name : "Linux",
    image : <LinuxPlain color='#AA7DFC' size={'70%'}/>
  }
]


const Skill = () => {
  return (
    <div className='h-fit gap-3 px-[10rem] mt-10'>
      <h1 className='text-3xl text-[#AA7DFC] font-bold'>Skills</h1>
      <div className='flex flex-col gap-5 justify-center items-center p-[3rem]'>
        <h1 className='text-xl text-[#AA7DFC] font-semibold'>Programming Languages</h1>
        <div className='flex flex-row flex-wrap gap-8 mb-5'> 
          {Languages.map((data) => (
            <Skillcard key={data.name} name={data.name} image={data.image}/>
          ))}
        </div>
        <h1 className='text-xl text-[#AA7DFC] font-semibold'>Frameworks</h1>
        <div className='flex flex-row flex-wrap gap-8 mb-5'> 
          {frameworks.map((data) => (
              <Skillcard key={data.name} name={data.name} image={data.image}/>
            ))}
        </div>
        <h1 className='text-xl text-[#AA7DFC] font-semibold'>Databases</h1>
        <div className='flex flex-row flex-wrap gap-8 mb-5'> 
          {Dbs.map((data) => (
              <Skillcard key={data.name} name={data.name} image={data.image}/>
            ))}
        </div>
        <h1 className='text-xl text-[#AA7DFC] font-semibold'>Services</h1>
        <div className='flex flex-row flex-wrap gap-8 mb-5'> 
          {services.map((data) => (
              <Skillcard key={data.name} name={data.name} image={data.image}/>
            ))}
        </div>
        <h1 className='text-xl text-[#AA7DFC] font-semibold'>Operating System</h1>
        <div className='flex flex-row flex-wrap gap-8 mb-5'> 
          {os.map((data) => (
              <Skillcard key={data.name} name={data.name} image={data.image}/>
            ))}
        </div>
      </div>
    </div>
  )
}

interface Skillcard_prop {
    name: string;
    image: React.JSX.Element;
}

const Skillcard:React.FC<Skillcard_prop> = ({image}) => {
  return (
    <div className='flex hover:cursor-pointer items-center justify-center h-20 w-20 rounded-2xl bg-[rgba(255,255,255,0.003)] border-[rgba(170,125,252,0.5)] hover:shadow-md hover:shadow-[rgb(170,125,252,0.5)] border-2 backdrop:blur-md'>
      {image}
    </div>
  )
}

export default Skill