import React from 'react'


const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center content-center'>
        <div className="flex flex-col items-center justify-center content-center gap-4 h-[calc(100vh-128px)] text-center">
            <div className="name text-5xl font-bold">MD. Mehedi Hasan</div>
            <div className="stack text-6xl font-bold text-blue-600">Full Stack Developer</div>
            <div className="q text-2xl">Web Developer, Cloud enthusiast and Chess lover</div>
            <div className="b flex gap-4">
              <button className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded text-white text-sm font-bold'>Contact</button>
              <button className='bg-cyan-700 hover:bg-cyan-600 px-6 py-2 rounded text-white text-sm font-bold'>Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Banner