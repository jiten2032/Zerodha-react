import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import nithinkamath from './Images/nithinkamath.jpg';
import Austin from './Images/Austin.jpg';
import Kailash from './Images/Kailash.jpg';
import Venu from './Images/Venu.jpg';
import Hanan from './Images/Hanan.jpg';
import Seema from './Images/Seema.jpg';


export default function About() {
    return (
        <div>
            <Navbar />
            <div className="container " style={{ marginTop: '140px' }}>
                <h5 className="text-center fs-2">
                       We pioneered the discount broking model in India.
                    </h5>
                <h5 className="text-center fs-2">
                    Now, we are breaking ground with our technology.

                </h5>
            </div>

            {/* end of body1 */}

            <hr className="container" style={{ marginTop: '80px' }} />

            <div className="justify-content-evenly  d-flex container flex-wrap mt-5 ">
                <div>
                    <p style={{ fontSize: '17px', marginTop: '30px' }}>We kick-started operations on the 15th of August, 2010 <br />
                        with the goal of breaking all barriers that traders and <br />
                            investors face in India in terms of cost, support, and <br />
                                technology. We named the company Zerodha, a <br />
                                    combination of Zero and "Rodha", the Sanskrit word for <br />
                                        barrier.
                    </p>
                    <p style={{ fontSize: '17px', marginTop: '30px' }}>Today, our disruptive pricing models and in-house <br />
                                        technology have made us the biggest stock broker in <br />
                                            India in terms of active retail clients.
                    </p>
                    <p style={{ fontSize: '17px', marginTop: '30px' }}>Over 3+ million clients place millions of orders every day <br />
                                            through our powerful ecosystem of investment <br />
                                                platforms, contributing over 15% of all Indian retail <br />
                                                    trading volumes.
                    </p>

                </div>
                <div>
                    <p style={{ fontSize: '17px', marginTop: '30px' }}>In addition, we run a number of popular open online <br />
                                                    educational and community initiatives to empower retail <br />
                                                        traders and investors.
                    </p>
                    <p style={{ fontSize: '17px', marginTop: '30px' }}><span><a id="links" href="ABOUT" >Rainmatter</a></span>, our fintech fund and
                       incubator, has invested <br />
                        in several fintech startups with the goal of growing the <br />
                        Indian capital markets.
                        </p>
                    <p style={{ fontSize: '17px', marginTop: '30px' }}>And yet, we are always up to something new every day.
                    <br />Catch
                      up on the latest updates on our <span ><a id="links" href="about">blog</a></span> or see what
                      <br />
                     the media is <span><a id="links" href="ABOUT">saying about us.</a>
                        </span>
                    </p>
                </div>
            </div>

            {/* end of body2 */}

            <h3 className="text-center mt-5">People</h3>


            <div className="justify-content-evenly d-flex container flex-wrap mt-5 ">
                <div className="text-center">
                    <img className="rounded-circle img-fluid" src={nithinkamath} alt="about" width="300" height="300"
                        srcSet="" />
                    <p className="mt-4 fs-4">Nithin Kamath</p>
                    <p>Founder, CEO</p>
                </div>
                <div>

                    <p style={{ fontSize: '17px', marginTop: '30px' }}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                <br /> hurdles he faced during his decade long stint as a trader. Today,<br />
                                Zerodha has changed the landscape of the Indian broking industry.
            </p>


                    <p style={{ fontSize: '17px', marginTop: '30px' }}>He was named one of the “Top 10 Businessmen to Watch Out for in
                <br /> 2016 in India” by The Economic Times for pioneering and scaling <br />
                                        discount broking in India.
            </p>
                    <p style={{ fontSize: '17px', marginTop: '30px' }}>Playing basketball is his zen.
            </p>
                    <p style={{ fontSize: '17px', marginTop: '30px' }}>
                        Connect on <span><a id="links" href="ABOUT">TradingQnA / Twitter</a></span>
                    </p>
                </div>
            </div>


            {/* end of body3 */}

            <div className="container d-flex justify-content-evenly flex-wrap mt-5">
                <div className="text-center">
                    <img className="rounded-circle img-fluid" src={Austin} alt="IMG" width="300" height="300"
                        srcSet="" />
                    <p className="mt-4 fs-4">Nikhil Kamath</p>
                    <p>Co-founder & CIO </p>
                    <div className="dropdown">
                        <a href="about" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                               <i className="fa fa-angle-down text-secondary" style={{ fontSize: '14px' }}></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><span className="dropdown-item-text">Nikhil is an astute investor with over a decade of experience
                            and an impeccable track record, who specializes in modelling sophisticated long term
                            investment strategies and portfolios. He heads investments and risk management at Zerodha.
                            An avid reader, he always appreciates a good game of chess.</span></li>

                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <img className="rounded-circle img-fluid" src={nithinkamath} alt="img" width="300" height="300" srcSet="" />
                    <p className="mt-4 fs-4">Dr. Kailash Nadh</p>
                    <p>CTO</p>
                    <div className="dropdown">
                        <a href="about" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                                 <i className="fa fa-angle-down text-secondary" style={{ fontSize: '14px' }}></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><span className="dropdown-item-text">Kailash has a PhD in Artificial Intelligence & Computational
                            Linguistics, and is the brain behind all our technology and products. He has been a
                            developer from his adolescence and continues to write code every day.</span></li>

                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <img className="rounded-circle img-fluid" src={ Kailash} alt="img" width="300" height="300" srcSet="" />
                    <p className="mt-4 fs-4">Austin Prakesh</p>
                    <p>Director - Strategy</p>
                    <div className="dropdown">
                        <a href="about" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                                   <i className="fa fa-angle-down text-secondary" style={{ fontSize: '14px' }}></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><span className="dropdown-item-text">Venu is the backbone of Zerodha taking care of operations and
                            ensuring that we are compliant to rules and regulations. He has over a dozen certifications
                            in financial markets and is also proficient in technical analysis. Workouts, cycling, and
                            adventuring is what he does outside of Zerodha.</span></li>

                        </ul>
                    </div>
                </div>

            </div>

            {/* 1st Part IMG  */}
            <div className="container d-flex justify-content-evenly flex-wrap mt-5">
                <div className="text-center">
                    <img className="rounded-circle img-fluid" src={Venu} alt="img" width="300" height="300" srcSet="" />
                    <p className="mt-4 fs-4">Venu Madhav</p>
                    <p>Chief of operations </p>
                    <div className="dropdown">
                        <a href="about" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                    <i className="fa fa-angle-down text-secondary" style={{ fontSize: '14px' }}></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><span className="dropdown-item-text">Venu is the backbone of Zerodha taking care of operations and
                            ensuring that we are compliant to rules and regulations. He has over a dozen certifications
                            in financial markets and is also proficient in technical analysis. Workouts, cycling, and
                            adventuring is what he does outside of Zerodha.</span></li>

                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <img className="rounded-circle img-fluid" src={Hanan} alt="img" width="300" height="300" srcSet="" />
                    <p className="mt-4 fs-4">Hanan Delvi</p>
                    <p>Chief of Client Relation</p>
                    <div className="dropdown">
                        <a href="about" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                         <i className="fa fa-angle-down text-secondary" style={{ fontSize: '14px' }}></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><span className="dropdown-item-text">We take pride in the way we support our clients, and Hanan is
                            responsible for this with his never ending flow of energy. He is the man behind many of our
                            support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be
                             seen posing as one in his free time.</span></li>

                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <img className="rounded-circle img-fluid" src={Seema} alt="img" width="300" height="300" srcSet="" />
                    <p className="mt-4 fs-4">Seema Patil</p>
                    <p>Chief of Quality</p>
                    <div className="dropdown">
                        <a href="about" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Bio
                    <i className="fa fa-angle-down text-secondary" style={{ fontSize: '14px' }}></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><span className="dropdown-item-text">Seema worked with an international airline business for over 6
                            years before joining us. She uses her experience of liasing with people from various
                            backgrounds to ensure that our ever expanding support team maintains highest quality. She is
                            an extremely disciplined fitness enthusiast.</span></li>

                        </ul>
                    </div>
                </div>

            </div>

            {/* 2nd Part IMG  */}

            <Footer />
        </div>
    )
}
