import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Projects from './Projects'
import About from './About'
import Contacts from './Contacts'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='pt-16 '>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Home