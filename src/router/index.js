import { createHashRouter, Navigate } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import Education from '../pages/education'
import Search from '../pages/search'
import Shawn from '../pages/shawn'

// 全局路由
export const globalRouters = createHashRouter([
    // 对精确匹配"/login"，跳转Login页面
    {
        path: '/about',
        element: <About />,
    },
    // 精确匹配"/home"，跳转Home页面
    {
        path: '/home',
        element: <Home />,
    },
    // 精确匹配"/account"，跳转Account页面
    {
        path: '/education',
        element: <Education />,
    },

    {
        path: '/search',
        element: <Search />,
    },

    {
        path: '/shawn',
        element: <Shawn />,
    },
    
    // 如果URL没有"#路由"，跳转Home页面
    {
        path: '/',
        element: <Home />,
    },
    // // 未匹配，，跳转Login页面
    // {
    //     path: '*',
    //     element: <Navigate to="/home" />,
    // },
])