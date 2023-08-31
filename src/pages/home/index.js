import {useNavigate} from 'react-router-dom'
import {Button} from 'antd'
import axios from "axios";
import Header from '../../components/header'
import './home.styl'
import { goto } from '../../api'
import React,{useState, useEffect} from "react";
import {Input} from 'antd';
import sta_logo from './sta_logo.jpg';
import WasteLineChart from "./WasteLineChart/WasteLineChart";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";





const CountUpAnimationl = ({ start, end, duration }) => {
    const [currentNumber, setCurrentNumber] = useState(start);
    const totalSteps = 100; // 可以根据需要调整这个值
    const stepIncrement = (end - start) / totalSteps;
    const stepTime = Math.abs(Math.floor(duration / totalSteps));

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentNumber(prevNumber => {
                if (prevNumber < end) {
                    return prevNumber + 1; // Increment by 1, adjust as needed
                }
                clearInterval(timerId);
                return prevNumber;
            });
        }, stepTime);

        return () => clearInterval(timerId);
    }, [end, stepTime]);

    return (
        <span style={{ fontSize: '50px', color: 'white'  }}>{currentNumber}</span>
    );
};

const CountUpAnimationlb = ({ start, end, duration }) => {
    const [currentNumber, setCurrentNumber] = useState(start);
    const totalSteps = 100; // 可以根据需要调整这个值
    const stepIncrement = (end - start) / totalSteps;
    const stepTime = Math.abs(Math.floor(duration / totalSteps));

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentNumber(prevNumber => {
                if (prevNumber < end) {
                    return prevNumber + 1; // Increment by 1, adjust as needed
                }
                clearInterval(timerId);
                return prevNumber;
            });
        }, stepTime);

        return () => clearInterval(timerId);
    }, [end, stepTime]);

    return (
        <span style={{ fontSize: '50px', color: 'white'  }}>{currentNumber}%</span>
    );
};

const CountUpAnimations = ({ start, end, duration }) => {
    const [currentNumber, setCurrentNumber] = useState(start);
    const totalSteps = 100; // 可以根据需要调整这个值
    const stepIncrement = (end - start) / totalSteps;
    const stepTime = Math.abs(Math.floor(duration / totalSteps));

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentNumber(prevNumber => {
                if (prevNumber < end) {
                    return prevNumber + stepIncrement;
                }
                clearInterval(timerId);
                return end;
            });
        }, stepTime);

        return () => clearInterval(timerId);
    }, [end, stepIncrement, stepTime]);

    return (
        <span style={{ fontSize: '50px', color: 'white' }}>{currentNumber.toFixed(2)}</span>
    );
};

function Home() {

    // Routing hook
    const navigate = useNavigate();


    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };
    // Events triggered by clicking the search button
    const handleSearch = () => {
        // axios
        //     .get(
        //         `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=a19e03e3fe484881805f31ce994dbcd6&pageSize=10`
        //     )
        //     .then((res) => {
        // setData(res.data.articles);
        // searchPage.handleData(res.data.articles)
        // const param1 = encodeURIComponent(JSON.stringify(res.data.articles));
        // console.log(JSON.stringify(res.data.articles));
        // console.log(searchValue)
        navigate(`/search?param1=${searchValue}`);
        // <navigate to={`/search`}>Go to Destination</navigate>
        // console.log(JSON.stringify(res.data.articles.splice(0, 3)));
        // });

    };


    return (

        <div className="P-home">
            <Header />

            <div id="achievements" className="section dark-bg">
                <div className="container">
                    <div className="row">
                        <div style={{ textAlign: 'center' }}>
                            <h4><font size="5">Due to its 76 million tons of garbage production annually, Australia
                                faces a significant waste disposal challenge.</font></h4>
                            <p><font size="4">This amounts to 2.95 tons of garbage produced per person per year, which
                                represents an increase in total waste of over 3% from 2018–19. Even though Australia's
                                recycling rate has stabilized around 60%, there is still much space for improvement
                                given the misconceptions and apprehensions that many Australians have about recycling
                                especially with the fact that 10-15% of the recyclables in recycling bins come from
                                non-Victorian residents, increasing the amount of waste sent to landfills.</font></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <div className="achievement-box">
                                <CountUpAnimationl start={0} end={76} duration={2000} />
                                <h4>Million tons of garbage generated annually in Australia</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="achievement-box">
                                <CountUpAnimations start={0} end={2.95} duration={2000} />
                                <h4>Tons of garbage generated annually per person</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="achievement-box">
                                <CountUpAnimationlb start={0} end={53} duration={2000} />
                                <h4>Annual growth rate of total waste in Australia</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="achievement-box">
                                <CountUpAnimationlb start={0} end={15} duration={2000} />
                                <h4>Percentage of recycled waste from non-victorian</h4>
                            </div>
                        </div>
                        {/* ... other boxes ... */}
                    </div>
                </div>
            </div>


            <div className="App">
                <div className="search text-center">
                    <span>
                    <Input className="input"
                           type="text"
                           value={searchValue}
                           onChange={handleInputChange}/>
                    <Button className="inputbtn" onClick={handleSearch} type="primary">search</Button>
                    </span>
                    {/* Display of requested data */}
                    <div className="text-center center">
                        <div className="col-md-4 div-img1">
                            <img src="https://images.newscientist.com/wp-content/uploads/2023/08/23172508/SEI_168561319.jpg" className="img-responsive"/></div>
                        <div className="col-md-4">
                            <div className="img-text">
                                <div className="div-p">
                                    <h5>Plastic bottles can be recycled into energy-storing supercapacitors</h5>
                                    <p>Supercapacitors are charged like a battery but release their energy more rapidly – and some of their components can now be built from old plastic bottles.
                                    </p>
                                    <p>We throw away billions of plastic bottles each year, but they could be turned into useful electronics components instead.
                                    </p>
                                    <div className="education-a">
                                        <a target="_blank"
                                           href="https://www.newscientist.com/article/2388697-plastic-bottles-can-be-recycled-into-energy-storing-supercapacitors/">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stast">
                            <div className="left-column">
                                <img src={sta_logo} className="img-responsive"/>
                            </div>
                            <div className="right-column">
                                <p></p>
                                <WasteLineChart />
                            </div>
                        </div>
                    </div>
                </div>
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
export default Home;