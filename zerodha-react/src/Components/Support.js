import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Support() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid" style={{ backgroundColor:'rgb(56,126,209)',marginTop:'70px'}} >

                <div className="d-flex justify-content-between container ">
                    <div className="mt-5"><a href="support" style={{ color:'white', fontSize: '20px', textDecoration: 'none' }}> Support Portal</a>
                    </div>
                    <div className="mt-5"><a href="support"
                        style={{ color: 'white', fontSize: '17px', textDecoration: 'underline', textUnderlinePosition: 'under' }}>Login
                          with Kite</a>
                    </div>
                </div>
                <div className="container mt-5 ">
                    <div className="row ">
                        <div className="col-sm col-md-6 " style={{ marginBottom: '100px' }} >
                            <h2 className="d-none d-md-block " style={{ fontSize: '23px', color: 'white', fontWeight: 'normal' }}>Search for
                            an answer or browse help
                                  topics to create a <br />
                                    ticket
                             </h2>
                            <div className="input-group mt-4">

                                <input type="text" className="form-control " id="searchinput"
                                    placeholder="Eg:how do i activate F&O,why is my order getting rejected ..."
                                    style={{ fontSize: '20px', fontFamily: 'sans-serif' }} />

                            </div>





                            <div className="text-center mt-4" id="supportlinks">
                                <a href="support">
                                    Track account opening</a>
                                <a href="support">
                                    Track segment activation</a>
                                <a href="support">
                                    Intraday margins</a>

                            </div>
                        </div>



                        <div className="col-sm col-md-4 mt-3 " id="secondcolom">
                            <h5 className="fs-4"><a href="support">Featured</a></h5>
                            <ol>
                                <li><a href="support">First Call on ABFRL Party Paid Shares </a></li>
                                <li><a href="support">Latest Intraday Leaverages - MIS,BO & CO</a></li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>

            {/* end of body 1 */}

            <h5 className="container mt-4 fs-4" style={{ color: 'rgb(68,68,68)', fontWeight: 'normal' }}>To create a ticket, select a
                 relevant topic</h5>

            <div className="container mt-5" id="supportbody">
                <div className="row">
                    <div className="col-md-4" id="">
                        <h5 className="fs-5 fw-normal"> <a href="support"> <i className="material-icons">&#xe148;</i>
                        Account Opening
                    </a>
                        </h5>
                        <ul className="mt-3">
                            <li><a href="SUPPORT" className="card-link ">Online Acoount Opening</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Offline Acoount Opening</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Company, Partnership and HUF Account Opening</a></li>
                            <li> <a href="SUPPORT" className="card-link ">NRI Account Opening</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Charges at Zerodha</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Getting Started</a></li>

                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="fs-5 fw-normal"> <a href="support"> <i className="material-icons">&#xe8a6;</i>
                        Your Zerodha Account
                    </a>
                        </h5>
                        <ul className="mt-3">
                            <li><a href="SUPPORT" className="card-link ">Login Credentials</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Account Modification and Segment Addition</a></li>
                            <li> <a href="SUPPORT" className="card-link ">DP ID and bank details</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Your Profile</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Transfer and conversion of shares</a></li>

                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5 className="fs-5 fw-normal"> <a href="support"> <i style={{ fontSize: '24px' }} className="fa">&#xf012;</i>
                        Trading and Markets
                    </a>
                        </h5>
                        <ul className="mt-3">
                            <li><a href="SUPPORT" className="card-link ">Margin/leverage, Product and Order types</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Kite Web and Mobile</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Trading FAQs</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Corporate Actions</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Sentinel</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Kite API</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Pi and other platforms</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Stockreports+</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Margin reporting and margin penalty</a></li>
                            <li> <a href="SUPPORT" className="card-link ">GTT</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mt-5 " id="supportbody1">
                <div className="row">
                    <div className="col-md-4" id="">
                        <h5 className="fs-5 fw-normal"> <a href="support"> <i className="material-icons">&#xe870;</i>
                        Account Opening
                    </a>
                        </h5>
                        <ul className="mt-3">

                            <li> <a href="SUPPORT" className="card-link ">Adding Funds</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Fund Withdrawal</a></li>
                            <li> <a href="SUPPORT" className="card-link ">eMandates</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Adding Bank Accounts</a></li>



                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="fs-5 fw-normal"> <a href="support"> <i style={{ fontSize: '24px' }} className='fas'>&#xf140;</i>

                        Your Zerodha Account
                    </a>
                        </h5>
                        <ul className="mt-3">
                            <li><a href="SUPPORT" className="card-link ">Reports</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Ledger</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Profile</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Portfolio</a></li>
                            <li> <a href="SUPPORT" className="card-link ">60 Day Challenge</a></li>
                            <li> <a href="SUPPORT" className="card-link ">IPO</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Referral Program</a></li>

                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5 className="fs-5 fw-normal"> <a href="support"> <i style={{ fontSize: '24px' }} className='fab'>&#xf383;</i>
                        Trading and Markets
                    </a>
                        </h5>
                        <ul className="mt-3">
                            <li><a href="SUPPORT" className="card-link ">Understanding Mutual Funds</a></li>
                            <li> <a href="SUPPORT" className="card-link ">About Coin</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Buying and Selling through Coin</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Starting an SIPs</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Managing your Portfoliol</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Coin App</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Moving to Coin</a></li>
                            <li> <a href="SUPPORT" className="card-link ">Government Securities</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* end of body 2 */}
            <Footer />
        </div>
    )
}
