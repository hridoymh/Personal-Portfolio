import React, { useEffect, useState } from 'react'
import AdminNav from './admin/AdminNav'
import Login from './admin/Login'
import Signup from './admin/Signup'

const Dash = () => {
  
  return (
    <>
      <AdminNav/>
      <div className='h-20'>
        
      </div>
      <Login/>
    </>
  )
}

export default Dash