import React from 'react';
import landing from './Images/landing.png';
import largestbroker from './Images/largestbroker.svg';
import presslogos from './Images/presslogos.png';
import ecosystem from './Images/ecosystem.png';
import indexeducation from './Images/indexeducation.svg';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Zerodha() {
    return (
        <div >
            <Navbar />
            <div className="text-center  openaccount">
                <img src={landing} width="450PX" height="300PX" srcSet="" alt="zerodhaImage" />
                <h1 className=" mt-5" style={{ fontSize: '50px', fontWeight: 'normal' }}>Invest in everything</h1>
                <p className="fs-4">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className="btn btn-primary mt-4 fs-5" id="body1button">Sign up now </button>
            </div>
            {/* end of body1  */}

            <div className="justify-content-around d-flex container flex-wrap mt-5">
                <div>
                    <img src={largestbroker} className="img img-fluid" alt="zerodhaImage" width="" height="" srcSet="" />
                </div>
                <div className="mt-4">
                    <h1 className=" fs-2">Largest stock broker in India</h1>
                    <p className="d-none d-xxl-block" style={{ fontSize: '18px', marginTop: '30px' }}>3+ million Zerodha clients
                    contribute to over 15% of all retail
                order <br /> volumes in India daily by trading and investing in:</p>
                    <p className=" d-lg-none d-sm-block  d-md-none" style={{ fontSize: '18px', marginTop: '30px' }}>3+ million
                Zerodha clients contribute to over 15% of all <br /> retail
                order volumes in India daily by trading and investing in:</p>
                    <div className="d-flex mt-4" id="body2-li" style={{ fontSize: '18px' }}>
                        <ul>
                            <li> Future and Option</li>
                            <li>Commodity</li>
                            <li>Currency derivatives</li>
                        </ul>
                        <ul>
                            <li> Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </ul>

                    </div>
                    <div className="">
                        <a href="ZERODHA"> <img className="img img-fluid" src={presslogos} width="" height="" srcSet="" alt="zerodhaImage" />
                        </a>
                    </div>
                </div>
            </div>


            {/* end of body2 */}

            <div className="text-center container " style={{ marginTop: '120px' }}>
                <h1 className="fs-2">The Zerodha Universe</h1>
                <p style={{ fontSize: '23px', marginTop: '20px' }}> A whole ecosystem of modern investment apps <br />
                    tailored to specific needs, built from the ground up</p>
                <div className="container">
                    <img className="img img-fluid" src={ecosystem} alt="zerodhaImage" sizes="" srcSet="" />
                </div>
                <a className="text-primary fs-5 mt-5" id="body3a" href="ZERODHA" style={{ textDecoration: 'none' }}>
                    Explore our products
            <i className="material-icons" style={{ fontSize: '15px', color: 'blue' }}>arrow_forward</i>
                </a>
            </div>


            {/* end of body3 */}



            <div className="justify-content-around d-flex container flex-wrap mt-5">
                <div>
                    <h1 className="fs-2">Unbeatable pricing</h1>
                    <p className="mt-4" style={{ fontSize: '18px' }}>We pioneered the concept of discount broking and price <br />
                        transparency in India. Flat fees and no
                         hidden charges.</p>
                    <a className="text-primary  mt-5" id="bodya" href="ZERODHA" style={{ textDecoration: 'none' }}>
                        See pricing
                <i className="material-icons" style={{ fontSize: '15px', color: 'blue' }}>arrow_forward</i>
                    </a>
                </div>
                <div className="">
                    <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title fs-1">₹0</h5>

                                <p className="card-text">Free equity delivery and direct mutual funds</p>

                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title fs-1">₹20</h5>

                                <p className="card-text">Intraday and F&O</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* end of body4 */}

            <div className="justify-content-around d-flex container flex-wrap mt-5 ">
                <div>
                    <img className="img img-fluid" src={indexeducation} alt="zerodhaImage" width="" height="" srcSet="" />
                </div>
                <div className="mt-5">
                    <h1 className="fw-normal fs-3">Free and open market education</h1>
                    <p style={{ fontSize: '18px', marginTop: '30px' }}>Varsity, the largest online stock
                              market education book in the world <br /> covering everything from the basics to advanced trading.</p>

                    <a className="text-primary  mt-5" href="Zerodha" style={{ textDecoration: 'none', fontSize: '18px' }}>
                        Varsity
                <i className="material-icons" style={{ fontSize: '15px', color: 'blue' }}>arrow_forward</i>
                    </a>
                    <p style={{ fontSize: '18px', marginTop: '30px' }}>TradingQ&A, the most active trading and investment community in
                <br /> India for all your market related queries.
            </p>
                    <a className="text-primary  mt-5" href="Zerodha" style={{ textDecoration: 'none', fontSize: '18px' }}>
                        Trading Q & A
                <i className="material-icons" style={{ fontSize: '15px', color: 'blue' }}>arrow_forward</i>
                    </a>
                </div>
            </div>

            {/* end of body5 */}

            <div className="text-center mt-5">
                <h1 className=" " style={{ fontSize: '30px', fontWeight: 'normal' }}>Open a Zerodha account</h1>
                <p className="fs-5 mt-4">Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.</p>
                <button className="btn btn-primary mt-4 fs-5" id="body1button">Sign up now </button>
            </div>

            {/* end of body6 */}


            <Footer />

        </div>
    )
}
