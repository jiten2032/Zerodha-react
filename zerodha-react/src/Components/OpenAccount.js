import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import accountopen from './Images/accountopen.png';

export default function OpenAccount() {
    return (
        <div>
            <Navbar />
            <h2 className="container text-center openaccount" >Join 4+ million investors & traders</h2>
            <h5 className="container text-center fw-normal mt-3">Open a trading and Demat account online and start investing for free</h5>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={accountopen} alt="pricingimage" width="" height="" srcSet="" />
                    </div>
                    <div className="col-md-4 mt-5">
                        <h1 className="" >Signup now</h1>
                        <p className="text-secondary">Or track your existing application</p>
                        <div class="input-group">
                            <div className="input-group-text fs-5">+91</div>
                            <input type="text" className="form-control fs-5" id="inlineFormInputGroupUsername" placeholder="Your 10 digit mobile number" />
                        </div>
                        <p className="text-secondary">You will receive an OTP on your number</p>
                        <button className="btn btn-primary btn-lg " id="openaccountbtn">Continue</button>
                        <a href="links" className="link-primary d-block mt-2 text-decoration-none">Want to open an NRI account?</a>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
