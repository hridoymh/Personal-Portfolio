import React from 'react'
import Logo from '../assets/blue.png'
import { FaGithub } from 'react-icons/fa6'

const Projects = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-10'>
        <div>
            <div className="card p-10 rounded shadow-gray-600 shadow-lg">
                <div className="title font-bold text-blue-600 text-xl m-4 ">This is Project Title.</div>
                <div className="body flex sm:flex-col md:flex-row items-center content-center justify-center md:justify-normal">
                    <div className="cardleft max-w-60 min-w-20">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="cardright felx flex-col text-gray-700">
                        <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                        <div className="tech my-10">-- React, Tailwind, Node</div>
                        <div className="git text-2xl">
                            <FaGithub/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects