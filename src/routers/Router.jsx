import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Banner from '../components/Banner'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import Admin from '../pages/Admin'
import Login from '../components/Login'
import Dash from '../components/Dash'
import ProjectsList from '../components/admin/ProjectsList'

const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Banner/>
            },
            {
                path:'projects',
                element:<Projects/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contacts/>
            }

        ]
    },
    {
        path:'/admin',
        element:<Admin/>,
        children:[
            {
                path:'',
                element:<Dash/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'projects',
                element:<ProjectsList/>
            }
        ]
    }
])

export default Router