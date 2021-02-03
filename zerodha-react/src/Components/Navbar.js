import React from 'react';
import logo from './Images/logo.svg';
import kitelogo from './Images/kitelogo.svg';
import console from './Images/console.svg';
import kiteconnect from './Images/kiteconnect.svg';
import coin from './Images/coin.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navabar">
            <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light container-fluid" >
                <div className="container" >
                    <Link to="/" className="navbar-brand nav-link active">
                        <img src={logo} alt="logo" width="130" height="40" className="d-inline-block align-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="mymenu"
                        aria-controls="mymenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mymenu">
                        <ul className="navbar-nav" id="navitems">

                            <li className="nav-item"><Link to="/About" className="nav-link" id="navlinkcolor">About</Link></li>
                            <li className="nav-item"><Link to="/Product" className="nav-link" id="navlinkcolor">Product</Link></li>
                            <li className="nav-item"><Link to="/Pricing" className="nav-link" id="navlinkcolor">Pricing</Link></li>
                            <li className="nav-item"><Link to="/Support" className="nav-link" id="navlinkcolor">Support</Link></li>
                            <li className="nav-item"><Link to="/open-account" role="button" className="btn btn-primary" type="button" id="buttomcolor">Sign
                            up</Link></li>
                        </ul>
                    </div>

                    <div className="nav-item dropdown d-none d-xxl-block d-xl-block d-md-block " id="menu-area">
                        <a type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" href="mydropdownitem" style={{ color: 'black' }}>
                            <i className="material-icons">&#xe3c7;</i>
                        </a>

                        <div className="dropdown-menu  " id="mega-area" aria-labelledby="navbarDropdown">
                            <div className="row">
                                <div className="col-3">
                                    <ul>
                                        <li> <a className="dropdownitem" href="mydropdownitem"><img src={kitelogo} alt="" width="40"
                                            height="40" /></a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Kite</a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Trading Platform</a></li>

                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li> <a className="dropdownitem" href="mydropdownitem"><img src={console} alt="" width="40"
                                            height="40" /></a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">console</a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Backoffice</a></li>

                                    </ul>

                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li> <a className="dropdownitem" href="mydropdownitem"><img src={kiteconnect} alt=""
                                            width="40" height="40" /></a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Kite Connect</a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Trading APIs</a></li>

                                    </ul>
                                </div>
                                <div className="col-3">
                                    <ul>
                                        <li> <a className="dropdownitem" href="mydropdownitem"><img src={coin} alt="" width="40"
                                            height="40" /></a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Coin</a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Mutual funds</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="row" id="dropdownbar">
                                <div className="col-3">
                                    <h5>Utilities</h5>
                                    <ul>
                                        <li><a className="dropdownitem" href="mydropdownitem">Brerage calculator</a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Margin calculator</a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Holiday calender</a></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <h5>Updates</h5>
                                    <ul>
                                        <li><a className="dropdownitem" href="mydropdownitem">Z-Connect blog</a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Pulse News</a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Circulars/Bulletin</a></li>
                                        <li> <a className="dropdownitem" href="mydropdownitem">IPOs</a> </li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <h5>Education</h5>
                                    <ul>
                                        <li><a className="dropdownitem" href="mydropdownitem"><img src="Images/varsity.png" alt="" width=""
                                            height="" /> </a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">varsity</a></li>

                                    </ul>
                                </div>
                                <div className="col-3" id="lastdropdown">
                                    <ul>
                                        <li><a className="dropdownitem" href="mydropdownitem"><img src="Images/tqna.png" alt="" width=""
                                            height="" /> </a></li>
                                        <li><a className="dropdownitem" href="mydropdownitem">Trading Q & A</a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </nav>
        </div>
    )
}
