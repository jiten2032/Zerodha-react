import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import pricingeq from './Images/pricingeq.svg';
import othertrades from './Images/othertrades.svg';
import pricingeq1 from './Images/pricingeq1.svg';

export default function Pricing() {
    return (
        <div id="Pricingpage">
            <Navbar />
            <div className="container text-center " style={{ marginTop: '130px' }}>
                <h1 className="text-center " style={{ color: 'rgb(66,66,66)', fontSize: '45px' }}>
                    Pricing </h1>
                <h5 className="mt-3 fs-5 fw-normal">
                    Free equity investments and flat ₹20 intraday and F&O trades</h5>
            </div>
            <hr className="container fw-lighter" style={{ marginTop: '130px' }} />

            {/* end of body 1  */}

            <div className="justify-content-evenly d-flex container flex-wrap mt-5 ">
                <div>
                    <img className="img img-fluid" src={pricingeq} alt="pricingimage" width="250" height="250" srcSet="" />
                    <h5 className=" fs-2 text-body mt-3 mb-2">Free equity delivery</h5>
                    <p style={{ fontSize: '17px', lineHeight: '30px' }}>All equity delivery investments (NSE, BSE),
                    <br />are absolutely free — ₹ 0 brokerage.
                </p>
                </div>
                <div>
                    <img className="img img-fluid" src={othertrades} alt="pricingimage" width="250" height="250" srcSet="" />
                    <h5 className=" fs-2 text-body mt-3 mb-2">Intraday and F&O trades</h5>
                    <p style={{ fontSize: '17px', lineHeight: '30px' }}>Flat Rs. 20 or 0.03% (whichever is lower)
                    <br />per executed order on intraday trades
                    <br />across equity, currency, and commodity
                    <br />trades.
                </p>
                </div>
                <div>
                    <img className="img img-fluid" src={pricingeq1} alt="pricingimage" width="250" height="250" srcSet="" />
                    <h5 className=" fs-2 text-body mt-3 mb-2">Free direct MF</h5>
                    <p style={{ fontSize: '17px', lineHeight: '30px' }}>All direct mutual fund investments are
                    <br />absolutely free — ₹ 0 commissions & DP
                    <br />charges.
                </p>
                </div>
            </div>
            <hr className="container fw-lighter" style={{ marginTop: '120px' }} />

            {/* end of body 2 */}

            <div className="container text-center mt-5">
                <h1 className="text-center fs-2" style={{ color: 'rgb(66,66,66)', fontSize: '45px' }}>
                    Open a Zerodha account </h1>
                <p className="mt-3 text-gray" style={{ fontSize: '17px' }}>
                    Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.</p>
                <button className="btn btn-primary btn-lg mt-4" id="productbtn">Sign up now</button>
            </div>
            {/* end of body 3 */}

            {/* for large & above devices */}
            <div className="container text-center d-none d-lg-flex justify-content-lg-around " style={{ marginTop: '120px' }}>
                <div><a href="PRICING" id="productLinks" className="link-primary fs-4">Brokerage calculator</a></div>
                <div><a href="PRICING" id="productLinks" className="link-primary fs-4 ">List of charges</a></div>
            </div>
            {/* for small devices */}

            <div className="container text-center d-sm-block d-md-block d-lg-none " style={{ marginTop: '120px' }}>
                <div><a href="PRICING" id="productLinks" className="link-primary fs-4">Brokerage calculator</a></div>
                <div className="mt-5"><a href="PRICING" id="productLinks" className="link-primary fs-4">List of charges</a></div>
            </div>

            {/* end of body 4 */}
            <div className="container my-5 ">
                <ul className="fw-normal lh-lg  mx-5" style={{ fontSize: "13px" }}>
                    <li >Call & Trade and RMS auto-squareoff: Additional charges of ₹50 per order.</li>
                    <li >Digital contract notes will be sent via e-mail.</li>
                    <li >Physical copies of contract notes, if required, shall be charged ₹20 per contract note.
                    Courier charges apply.</li>
                    <li >For NRI's: ₹200 or 0.1% (whichever lower) per executed order</li>
                    <li >A brokerage charge of 0.25% will be applied on all trades done in any cash-settled
                    commodity contract in the last two days of trading in any expiry.</li>
                </ul>

            </div>
            <Footer />
        </div>
    )
}
