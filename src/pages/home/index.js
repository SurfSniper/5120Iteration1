import {useNavigate} from 'react-router-dom'
import {Button} from 'antd'
import Header from '../../components/header'
import './home.styl'
import { goto } from '../../api'
import React from "react";

function Home() {

    // 创建路由钩子
    const navigate = useNavigate()

    return (


        <div className="P-home">
            <Header />

            <div className="intro-text">
                <h1>Welcome to <strong>Recycle Nest</strong></h1>

                <div className="focus">
                    <p>We focus on garbage collection</p>
                </div>

                <div className="learn-more">
                    <a href="#services-section" className="btn btn-default btn-lg page-scroll">LEARN MORE
                    </a>
                </div>

                <div className="ipt-con">
                    <Button onClick={() => {
                        goto('/login')
                    }}>组件外跳转</Button>
                </div>

                <div className="ipt-con">
                    <Button type="primary" onClick={() => {
                        navigate('/login')
                    }}>返回登录</Button>
                </div>
            </div>

        </div>
    )
}

export default Home