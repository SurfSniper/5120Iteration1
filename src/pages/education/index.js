import {useNavigate} from 'react-router-dom'
import './education.styl'
import Header from '../../components/header'
import React, {useState} from "react";
import imgUrl1 from './Picture_1.jpg'
import imgUrl2 from './Picture_2.jpg'
import imgUrl3 from './Picture_3.jpg'
import imgUrl4 from './Picture_4.jpg'


function Education() {
    return (
        <div className="P-home">
            <Header/>
            <div className="App">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Minimise Single-use Items</h2>
                        <div className="clearfix"></div>
                    </div>

                    <div className="text-center center">
                        <div className="col-md-4 div-img1"><img src={imgUrl1} className="img-responsive"/></div>
                        <div className="col-md-4">
                            <div className="img-text">
                                <div className="div-p">
                                    <p>Single-use items or disposable items are products and packaging that we throw out
                                        after only one use. These items are used for only minutes but their impact on
                                        our environment can last thousands of years. Sustainability Victoria shows what
                                        common single-use items we could avoid using to achieve a more sustainable
                                        Victoria.
                                    </p>
                                    <div className="education-a">
                                        <a target="_blank"
                                           href="https://www.sustainability.vic.gov.au/recycling-and-reducing-waste/at-home/avoid-waste/minimise-single-use-items">More
                                            information ...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-title text-center center div-title">
                        <h2>Seven Top Tips to Reduce Your Waste</h2>
                        <div className="clearfix"></div>
                    </div>
                    <div className="text-center center">
                        <div className="col-md-4 div-img1"><img src={imgUrl2} className="img-responsive"/></div>
                        <div className="col-md-4">
                            <div className="img-text">
                                <div className="div-p">
                                    <p>Melbourne is rapidly growing, and with it, the challenge of waste management
                                        looms large. But there's hope! By following seven easy steps offered by City of
                                        Melbourne, not only can you reduce waste, but also save money, promote healthier
                                        living, and support eco-friendly businesses. Dive into this article to discover
                                        how saying no to single-use plastics, embracing composting, and supporting
                                        sustainable businesses can pave the way for a cleaner, greener Melbourne.
                                        Together, we can shape a future where our city thrives, waste is minimized, and
                                        sustainability is at the forefront. Join us in this mission!
                                    </p>
                                    <div className="education-a">
                                        <a target="_blank"
                                           href="https://news.melbourne.vic.gov.au/six-top-tips-to-reduce-your-waste/">More
                                            information ...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-title text-center center div-title">
                        <h2>Tips for recycling at home</h2>
                        <div className="clearfix"></div>
                    </div>
                    <div className="text-center center">
                        <div className="col-md-4 div-img1"><img src={imgUrl3} className="img-responsive"/></div>
                        <div className="col-md-4">
                            <div className="img-text">
                                <div className="div-p">
                                    <p>Ever wondered how to make your home a recycling haven? It's not just about
                                        tossing items into a bin. It starts with mindful shopping, understanding product
                                        labels, and knowing the lifespan of items. Dive into this article to learn the
                                        art of recycling, from the questions to ask before a purchase to the myths
                                        surrounding recycling. Discover how apps like Recycle Mate can guide you, and
                                        how initiatives like the Recycling Modernizations Fund are shaping a greener
                                        future. By embracing these tips, you're not just recycling; you're contributing
                                        to a sustainable ecosystem. Let's recycle right and pave the way for a cleaner
                                        planet!
                                    </p>
                                    <div className="education-a">
                                        <a target="_blank"
                                           href="https://www.dcceew.gov.au/environment/protection/waste/consumers#planet-ark-recycling-near-you">More
                                            information ...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-title text-center center div-title">
                        <h2>A–Z guide to recycling and waste disposal</h2>
                        <div className="clearfix"></div>
                    </div>
                    <div className="text-center center">
                        <div className="col-md-4 div-img1"><img src={imgUrl4} className="img-responsive"/></div>
                        <div className="col-md-4">
                            <div className="img-text">
                                <div className="div-p">
                                    <p>The City of Melbourne has meticulously crafted a comprehensive guide outlining
                                        the methods and best practices for recycling or disposing of a wide range of
                                        items. This guide not only covers the utilization of the City of Melbourne's
                                        kerbside bins and collection services but also provides information on specific
                                        drop-off locations within the city. Additionally, for items that may not be
                                        catered to by the city's services, the guide offers insights into alternative
                                        service providers who can assist in the proper disposal or recycling of those
                                        items. This initiative underscores the city's commitment to promoting
                                        sustainable practices and ensuring that residents have clear and accessible
                                        information to make environmentally responsible choices.
                                    </p>
                                    <div className="education-a">
                                        <a target="_blank"
                                           href="https://www.melbourne.vic.gov.au/residents/waste-recycling/Pages/a-z-waste-disposal.aspx">More
                                            information ...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Education;