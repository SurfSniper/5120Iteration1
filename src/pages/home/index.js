import {useNavigate} from 'react-router-dom'
import {Button} from 'antd'
import Header from '../../components/header'
import './home.styl'
import { goto } from '../../api'
import React from "react";

function Home() {

    // Routing hook
    const navigate = useNavigate()

    return (

        <div className="P-home">
            <Header />

            <div className="App">
                <div className="ipt-con">
                    <Button type="primary" onClick={() => {
                        navigate('/home')
                    }}>This is the homepage</Button>
                </div>
            </div>

        </div>
    )
}

export default Home