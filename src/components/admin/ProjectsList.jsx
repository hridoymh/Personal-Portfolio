import React from 'react'
import logo from '../../assets/blue.png'
const ProjectsList = () => {
  return (
    <div>
        
        <div className="project flex max-w-screen-lg mx-auto bg-blue-50 justify-between m-4 p-4 rounded">
            <div className="flex items-center content-center justify-center gap-4">
                <div className="img w-20"><img src={logo} alt="" /></div>
                <div className="title">test Title</div>
            </div>
            <div className="btns flex items-center content-center justify-center gap-4">
                <div className="edit px-4 py-2 bg-blue-600 rounded-md">Edit</div>
                <div className="delete px-4 py-2 bg-red-600 rounded-md">Delete</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectsList