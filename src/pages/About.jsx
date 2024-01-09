import { FaLinux } from "react-icons/fa"; 
import { SiXampp } from "react-icons/si"; 
import { TbBrandVscode } from "react-icons/tb"; 
import { SiPostman } from "react-icons/si"; 
import { FaJava } from "react-icons/fa"; 
import { SiSqlite } from "react-icons/si"; 
import { SiMongodb } from "react-icons/si"; 
import { AiOutlineConsoleSql } from "react-icons/ai"; 
import { SiMysql } from "react-icons/si"; 
import { FaPython } from "react-icons/fa"; 
import { DiDjango, DiJavascript } from "react-icons/di"; 
import { DiPhp } from "react-icons/di"; 
import { IoLogoJavascript } from "react-icons/io"; 
import { DiCss3 } from "react-icons/di"; 
import { AiFillHtml5 } from "react-icons/ai"; 
import { SiTailwindcss } from "react-icons/si"; 
import React from 'react'
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";

const About = () => {
  return (
    <div className='max-w-screen-lg mx-auto'>
        <div className="flex lg:flex-row flex-col gap-10">
            <div className='flex flex-col text-3xl font-semibold gap-4 min-w-96'>
                <span>Hi, I'm Md. Mehedi Hasan. And <span className='text-blue-600 font-bold'>Hridoy</span> is my nick Name.</span>
                <span>I'm a <span className='text-blue-600 font-bold'>Fullstack web developer</span> with very high intrest in learning new things.</span>    
            </div>
            <div>I am a skilled computer programmer and web developer with a passion for technology and a love for learning new things. My expertise in creating and maintaining software applications and websites, combined with my problem-solving abilities and attention to detail, have allowed me to excel in my career. I have a strong track record of adapting to  new challenges and technologies, making me a valuable asset to any team. In my work,I approach each task with dedication and a desire to deliver the best possible outcome.</div>
        </div>
        <div className="flex flex-col gap-4 mt-10">
        <div className="skillcard flex gap-4 bg-sky-50 rounded-lg min-h-28">
                <div className='text-3xl text-blue-500 flex items-center content-center justify-center mr-4'>Backend</div>
                <div className='text-8xl'><DiNodejs/></div>
                <div className='text-8xl'><DiDjango /></div>
                
                
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><FaLaravel/></div>
                    <div>Laravel</div>
                </div>
                <div className='text-8xl'><DiPhp /></div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><IoLogoJavascript /></div>
                    <div>Javascript</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><FaPython /></div>
                    <div>Python</div>
                </div>
                
                

            </div>
            <div className="skillcard flex gap-4 bg-sky-50 rounded-lg min-h-28">
                <div className='text-3xl text-blue-500 flex items-center content-center justify-center mr-4'>Frontend</div>
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><FaReact/></div>
                    <div>ReactJS</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><SiTailwindcss/></div>
                    <div>Tailwind</div>
                </div>
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><AiFillHtml5 /></div>
                    <div>HTML</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><DiCss3 /></div>
                    <div>CSS</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><IoLogoJavascript /></div>
                    <div>Javascript</div>
                </div>
                
                
                

            </div>
            <div className="skillcard flex gap-4 bg-sky-50 rounded-lg min-h-28">
                <div className='text-3xl text-blue-500 flex items-center content-center justify-center mr-4'>Database</div>
                <div className='text-8xl'><SiMysql /></div>
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'>
                        <AiOutlineConsoleSql />
                    </div>
                    <div>SQL</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><SiSqlite /></div>
                    <div>SQLite</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><SiMongodb /></div>
                    <div>Mongodb</div>
                </div>
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'></div>
                    <div>Mongoose</div>
                </div>
                
            </div>
            <div className="skillcard flex gap-4 bg-sky-50 rounded-lg min-h-28">
                <div className='text-3xl text-blue-500 flex items-center content-center justify-center mr-4'>Language</div>
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'>
                        <FaPython />
                    </div>
                    <div>Python</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><DiJavascript /></div>
                    <div>Javascript</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><DiPhp /></div>
                    <div>PHP</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><FaJava /></div>
                    <div>Java</div>
                </div>
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'></div>
                    <div>C / C++</div>
                </div>
                
            </div>
            <div className="skillcard flex gap-4 bg-sky-50 rounded-lg min-h-28">
                <div className='text-3xl text-blue-500 flex items-center content-center justify-center mr-4'>Tools</div>
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'>
                        <SiPostman />
                    </div>
                    <div>Postman</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><TbBrandVscode /></div>
                    <div>VS Code</div>
                </div>
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><SiXampp /></div>
                    <div>Xampp</div>
                </div>
                
                <div className='text-xl flex flex-col items-center justify-center content-center'>
                    <div className='text-2xl'><FaLinux /></div>
                    <div>Linux</div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default About