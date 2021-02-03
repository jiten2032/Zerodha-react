import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import productskite from './Images/productskite.png';
import appstorebadge from './Images/appstorebadge.svg';
import googleplaybadge from './Images/googleplaybadge.svg';
import productsconsole from './Images/productsconsole.png';
import productscoin from './Images/productscoin.png';
import productskiteconnect from './Images/productskiteconnect.png';
import varsityproducts from './Images/varsityproducts.png';
import sentinelproducts from './Images/sentinelproducts.png';
import smallcaselogo from './Images/smallcaselogo.png';
import goldenpilogo from './Images/goldenpilogo.png';
import streaklogo from './Images/streaklogo.png';
import sensibulllogo from './Images/sensibulllogo.svg';

export default function Product() {
    return (
        <div>
            <Navbar />
            <div className="container text-center " style={{ marginTop: '130px' }}>
                <h1 className="text-center " style={{ color: 'rgb(66,66,66)', fontSize: '45px' }}>
                    Technology </h1>
                <h5 className="mt-3 fs-5 fw-normal">
                    Sleek, modern, and intuitive trading platforms
            </h5>
                <p className="mt-4 " style={{fontSize:"17px"}}>Check out our
                <span><a href="product"> investment offerings
                        <i className="material-icons" style={{ fontSize: '17px', color: 'blue' }}>arrow_forward</i>
                    </a> </span>
                </p>

            </div>

            <hr className="container fw-lighter" style={{ marginTop: '130px' }} />
            {/* end of body 1 */}
            <div className="justify-content-evenly d-flex container flex-wrap mt-5 ">
                <div>
                    <img className="img img-fluid" src={productskite} alt="img" width="" height="" srcSet="" />

                </div>
                <div className="mt-5">
                    <h5 className=" fs-2 text-body">Kite</h5>
                    <p style={{ fontSize: '17px', marginTop: ' 30px', lineHeight: '30px' }}>Our ultra-fast flagship trading platform
                    with
                    <br /> streaming market data, advanced charts, an<br />
                    elegant UI, and more. Enjoy the Kite <br />
                    experience seamlessly on your Android and <br />
                    iOS devices.
                </p>
                    <a href="product" id="productLinks" className="link-primary fw-normal">Learn more
                    <i className="material-icons" style={{ fontSize: '17px', color: 'blue' }}>arrow_forward</i>
                    </a>
                    <p className="mt-4">
                        <img src={googleplaybadge} className="img img-fluid" alt="img" srcSet="" />
                        <img src={appstorebadge} className="img img-fluid ms-3" alt="img" srcSet="" />
                    </p>


                </div>
            </div>

            {/* end of body 2  */}
            <div className="justify-content-evenly d-flex container flex-wrap" style={{ marginTop: '90px' }}>

                <div className="mt-5">
                    <h1 className=" fs-2 text-body ">Console</h1>
                    <p style={{ fontSize: '17px', marginTop: ' 30px', lineHeight: '30px' }}>The central dashboard for your Zerodha
                       <br /> account. Gain insights into your trades and<br />
                             investments with in-depth reports and <br />
                             visualisations.

                      </p>
                    <a href="product" id="productLinks">Learn more
                    <i className="material-icons" style={{ fontSize: '17px', color: 'blue' }}>arrow_forward</i>
                    </a>


                   </div>
                    <div className="text-center">
                    <img className="img img-fluid" src={productsconsole} alt="img" width="" height="" srcSet="" />

                </div>
            </div>

            {/* end of body 3 */}
            <div className="justify-content-evenly d-flex container flex-wrap" style={{ marginTop: '90px' }}>
                <div className="text-center">
                    <img className="img img-fluid" src={productscoin} alt="img" width="" height="" srcSet="" />

                </div>
                <div className="mt-5">
                    <h5 className="fs-2 text-body">Coin</h5>
                    <p style={{ fontSize: '17px', marginTop: ' 30px', lineHeight: '30px' }}>Buy direct mutual funds online,
                    commission-
                    <br /> free, delivered directly to your Demat<br />
                    account. Enjoy the investment experience <br />
                    on your Android and iOS devices.
                </p>
                    <a href="product" id="productLinks">Coin
                    <i className="material-icons" style={{ fontSize: '17px', color: 'blue' }}>arrow_forward</i>
                    </a>
                    <p className="mt-4">
                        <img src={googleplaybadge} className="img img-fluid" alt="img" srcSet="" />
                        <img src={appstorebadge} className="img img-fluid ms-3" alt="img" srcSet="" />
                    </p>


                </div>
            </div>
            {/* end of body 4 */}

            <div className="justify-content-evenly d-flex container flex-wrap" style={{ marginTop: '90px' }}>

                <div className="mt-5">
                    <h5 className=" fs-2 text-body ">Kite Connect API</h5>
                    <p style={{ fontSize: '17px', marginTop: ' 30px', lineHeight: '30px' }}>Build powerful trading platforms and
                         <br />experiences with our super simple<br />
                        HTTP/JSON APIs. If you are a startup, build <br />
                        your investment app and showcase it to our <br />
                        clientbase.

                    </p>
                    <a href="product" id="productLinks">Kite Connect
                        <i className="material-icons" style={{ fontSize: '17px', color: 'blue' }}>arrow_forward</i>
                    </a>


                </div>
                     <div className="text-center">
                    <img className="img img-fluid" src={productskiteconnect} alt="img" width="" height="" srcSet="" />

                </div>
            </div>

            {/* end of body 5 */}

            <div className="justify-content-evenly d-flex container flex-wrap" style={{ marginTop: '90px' }}>
                <div className="text-center">
                    <img className="img img-fluid" src={varsityproducts} alt="img" width="" height="" srcSet="" />

                </div>
                <div style={{ marginTop: '120px' }}>
                    <h5 className="text-body fs-2 ">Varsity mobile</h5>
                    <p style={{ fontSize: '17px', marginTop: ' 30px', lineHeight: '30px' }}>An easy to grasp, collection of stock
                    market
                    <br /> lessons with in-depth coverage and<br />
                    illustrations. Content is broken down into<br />
                    bite-size cards to help you learn on the go.
                </p>

                    <p className="mt-5">
                        <img src={googleplaybadge} className="img img-fluid" alt="img" srcSet="" />
                        <img src={appstorebadge} className="img img-fluid ms-3" alt="img" srcSet="" />
                    </p>


                </div>
            </div>

            {/* end of body 6 */}
            <div className="justify-content-evenly d-flex container flex-wrap" style={{ marginTop: '90px' }}>

                <div style={{ marginTop: '90px' }}>
                    <h5 className="text-body fs-2">Sentinel</h5>
                    <p style={{ fontSize: '17px', marginTop: ' 30px', lineHeight: '30px' }}>Create powerful market alerts on the
                    cloud
                     <br />for stocks, futures and options, and more for<br />
                     free.
                      </p>
                    <a href="product" id="productLinks">Sentinel
                    <i className="material-icons" style={{ fontSize: '17px', color: 'blue' }}>arrow_forward</i>
                    </a>


                </div>
                <div className="text-center">
                    <img className="img img-fluid" src={sentinelproducts} alt="img" width="" height="" srcSet="" />

                </div>
            </div>

            {/* end of body 7 */}

            <h5 className="mt-5 text-center text-body fw-normal fs-4 ">Want to know more about our technology stack? Check out
            the
            <span><a href="product">Zerodha.tech</a></span> blog.
        </h5>


            {/* for large & above devices */}
            <div className="container text-center d-none d-xl-block d-lg-block d-xxl-block" style={{ marginTop: '100px' }}>
                <h5 className="fs-2">The Zerodha Universe</h5>
                <p className="mt-4" style={{ fontSize: "18px" }}>Extend your trading and investment experience even further with our
                partner platforms</p>
                <div className="d-flex mt-5" id="ProductImg">

                    <div>
                        <a href="product"><img className="img img-fluid" src={smallcaselogo} height="180px" width="180px"
                            alt="img" srcSet="" /></a>
                        <p className="mt-2"><a href="product" className="text-muted"> Thematic investment platform </a></p>
                    </div>
                    <div>
                        <a href="product"><img className="img img-fluid" src={streaklogo} height="160px" width="160px"
                            alt="img" srcSet="" /></a>
                        <p className="mt-2"><a href="product" className="text-muted"> algo & stratergy platform </a></p>
                    </div>
                    <div>
                        <a href="product"><img className="img img-fluid" src={sensibulllogo} height="150px" width="150px"
                            alt="img" srcSet="" /></a>
                        <p className="mt-2"> <a href="product" className="text-muted">Option trading platform </a></p>
                    </div>
                    <div>
                        <a href="product"><img className="img img-fluid" src={goldenpilogo} height="180px" width="180px"
                            alt="img" srcSet="" /></a>
                        <p className="mt-2"><a href="product" className="text-muted"> Bonds trading platform </a></p>
                    </div>
                </div>
                <button className="btn btn-primary mt-5 fs-4 " id="productbtn">Sign up now</button>
            </div>

            {/* for small devices */}
            <div className="container-fluid d-sm-block d-md-block d-lg-none" style={{ marginTop: '100px' }}>
                <h5 className="fs-2 text-center ">The Zerodha Universe</h5>
                <p className="mt-4 text-center " style={{ fontSize: "18px" }}>Extend your trading and investment experience even
                further
                with our
                partner platforms</p>
                <div className="d-flex justify-content-around mt-5">
                    <div>
                        <div>
                            <a href="product"><img className="img img-fluid" src={smallcaselogo} height="180px"
                                width="180px" alt="img" srcSet="" /></a>
                            <p className="mt-2"><a href="product" className="text-muted"> Thematic investment platform </a></p>
                        </div>
                        <div>
                            <a href="product"><img className="img img-fluid" src={streaklogo} height="160px" width="160px"
                                alt="img" srcSet="" /></a>
                            <p className="mt-2"><a href="product" className="text-muted"> algo & stratergy platform </a></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href="product"><img className="img img-fluid" src={sensibulllogo} height="150px"
                                width="150px" alt="img" srcSet="" /></a>
                            <p className="mt-2"> <a href="product" className="text-muted">Option trading platform </a></p>
                        </div>
                        <div>
                            <a href="product"><img className="img img-fluid" src={goldenpilogo} height="180px"
                                width="180px" alt="img" srcSet="" /></a>
                            <p className="mt-2"><a href="product" className="text-muted"> Bonds trading platform </a></p>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary mt-5 fs-4 d-block mx-auto" id="productbtn">Sign up now</button>
            </div>

            {/* end of body 8 */}
            <Footer />
        </div>
    )
}
