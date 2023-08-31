import {useNavigate} from 'react-router-dom'
import Header from '../../components/header'
import React from "react";
import './about.styl'
import {Button} from 'antd'

import imgURL from './feige.jpg';
import {Input} from 'antd';

const {TextArea} = Input;


function About() {
    return (
        <div className="P-home">
            <Header/>
            <div className="App">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>About Us</h2>
                        <div className="clearfix"></div>
                        <p> pentatonic-tech Founding Team</p>
                    </div>
                    <div className="row">
                        <div className="container-fluid custom-about-container">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-2 custom-about-text">
                                    <h4>Gengxin Fan</h4>
                                    <img className="custom-img" src={imgURL} alt="Description"/>
                                    <p>Waste is never an option.</p>
                                </div>
                                <div class="col-md-2 custom-about-text">
                                    <h4>Xiaofeng Li</h4>
                                    <img className="custom-img" src={imgURL} alt="Description"/>
                                    <p>Nesting a sustainable future.</p>
                                </div>
                                <div class="col-md-2 custom-about-text">
                                    <h4>Fei Cai</h4>
                                    <img className="custom-img" src={imgURL} alt="Description"/>
                                    <p>Cycle to Recycle: Every Bit Counts for a Better Earth!</p>
                                </div>
                                <div className="col-md-2 custom-about-text">
                                    <h4>Jiaming Liu</h4>
                                    <img className="custom-img" src={imgURL} alt="Description"/>
                                    <p>Recycled waste is not waste anymore but gem.</p>
                                </div>
                                <div className="col-md-2 custom-about-text">
                                    <h4>Chuanyin Wei</h4>
                                    <img className="custom-img" src={imgURL} alt="Description"/>
                                    <p>Recycle Today for a Greener Tomorrow.</p>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="contact-section">
                    <div className="container">
                        <div className="section-title text-center center">
                            <h2>Contact Us</h2>
                            <p> If you are interested in this position, please contact us.</p>
                        </div>

                        <div className="col-md-8 col-md-offset-2">
                            <h3>Leave us a message</h3>
                            <form className="sentMessage" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Input placeholder="Name"/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Input placeholder="Email"/>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-text">
                                    <TextArea placeholder="Message" rows={4}/>
                                    <br/>
                                    <br/>
                                </div>
                                <div className="ipt-con">
                                    <Button type="primary">Send Message</Button>
                                </div>
                            </form>
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

export default About;
