import React, { useEffect } from 'react'
import Login from '../components/Login'
import { Outlet, useNavigate } from 'react-router-dom'

const Admin = () => {
    // const getToken = ()=>{
    //     const token = localStorage.getItem('token');
    //     return token;
    // }
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     const token = getToken()
    //     if(!token){
    //         navigate('/admin/login');
    //     }
    // },[])
  return (
    <>
    <Outlet/>
    </>
  )
}

export default Admin