import {useNavigate} from 'react-router-dom'
import './shawn.styl'
import Header from "../../components/header";
import React from "react";
import {Button} from 'antd'

function Shawn() {
    // Routing hook
    const navigate = useNavigate()

    return (
        <div className="P-home">
            <Header/>
            <div className="App">

                <div className="ipt-con">
                    <Button type="primary" onClick={() => {
                        navigate('/shawn')
                    }}>This is the shawn page</Button>
                </div>
            </div>
        </div>
    );
}

export default Shawn