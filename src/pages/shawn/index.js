import {useNavigate} from 'react-router-dom'
import './shawn.styl'
import Header from "../../components/header";
import React from "react";
import {Button} from 'antd'
import WasteLineChart from "./WasteLineChart/WasteLineChart";
import RecyclePieChart from "./RecyclePieChart/RecyclePieChart";
import PlasticsDoughnutChart from "./PlasticsDoughnutChart/PlasticsDoughnutChart";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Shawn() {
    // Routing hook
    const navigate = useNavigate()

    return (
        <div className="P-home">
            <Header/>
            <div className="App">

                {/*<div className="ipt-con">*/}
                {/*    <Button type="primary" onClick={() => {*/}
                {/*        navigate('/shawn')*/}
                {/*    }}>This is the shawn page</Button>*/}
                {/*</div>*/}
                <h2>Waste Management Statistics</h2>
                <h5>Feel free to explore the charts that covers the waste & recycle trends in Victoria for the last 2 decades.</h5>
                <p>As you journey through each chart, don't forget to engage with them. Hover over segments, trace lines, and click on years. The interactive tooltips and legends are there to provide richer context and deeper insights.</p>

                <Tabs defaultActiveKey="wasteLineChart" id="uncontrolled-tab-example">
                    <Tab eventKey="wasteLineChart" title="Garbage">
                        <WasteLineChart />
                    </Tab>
                    <Tab eventKey="recyclePieChart" title="Recyle">
                        <RecyclePieChart />
                    </Tab>
                    <Tab eventKey="plasticsDoughnutChart" title="Plastics">
                        <PlasticsDoughnutChart />
                    </Tab>
                </Tabs>
            </div>
            <div id="footer">
                <div className="container">
                    <div className="fnav">
                        <p>Copyright &copy; 2023.Recycle Nest All rights reserved. By TA10.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shawn