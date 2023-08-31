import { createHashRouter, Navigate } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import Education from '../pages/education'
import Search from '../pages/search'
import Shawn from '../pages/shawn'

// global routing
export const globalRouters = createHashRouter([
    // Accurate matching "/about"
    // Jump to "About Us" Page
    {
        path: '/about',
        element: <About />,
    },

    // Accurate matching "/home"
    // Jump to "Home" Page
    {
        path: '/home',
        element: <Home />,
    },

    // Accurate matching "/education"
    // Jump to "Education" Page
    {
        path: '/education',
        element: <Education />,
    },

    // Accurate matching "/search"
    // Jump to "Search" Page
    {
        path: '/search',
        element: <Search />,
    },

    {
        path: '/shawn',
        element: <Shawn />,
    },
    
    // URL is empty
    // Jump to "Home" Page
    {
        path: '/',
        element: <Home />,
    },

])