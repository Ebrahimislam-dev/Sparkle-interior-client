import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"
import { Link } from "react-router-dom";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,

} from "@fortawesome/free-brands-svg-icons";
import {


    faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Newsletter from '../Newsletter/Newsletter';


const Footer = () => {
    return (
        <div className=' '>
            <div className="container-fluid footer-bg text-white-50 md:h-screen  md:px-28">
                {/* <p className="heading-footer footer-menu  fst-italic">
                " The world is a book and those who do not travel get to read only one page! "
            </p> */}

                <div className="container-fluid">
                    <Newsletter></Newsletter>

                    <div className=" row md:pb-12 ">

                        {/* Router/Nav column */}
                        <div className="col-md-2 ">


                            <div className="footer-menu-container text-left">
                                <ul>
                                    <h4 >
                                        Quick Links

                                    </h4>
                                    <li className="footer-menu">
                                        <Link to="/home" className="footer-menu text-decoration-none">
                                            Contact us
                                        </Link>
                                    </li>


                                    <li className="footer-menu">
                                        <Link to="/about" className="footer-menu text-decoration-none">
                                          Help and Advise 
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/contact" className="footer-menu text-decoration-none">
                                        Shipping and Returns
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/exploreProducts" className="footer-menu text-decoration-none">
                                           Terms and Conditions
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/exploreProducts" className="footer-menu text-decoration-none">
                                          Refund Policy
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className='col-md-2'>

                        </div>
                        <div className="col-md-4">

                            <div className=" text-start">
                                <h3 className="font-serif text-xl md:text-4xl text-white md:ml-16 flex "><img className=" w-2/12" src="https://i.ibb.co/6sM8wVN/logo.png" alt="" /> SPARKLE </h3>
                                <p>Our company provides goods of premium quality and at

                                    fair prices. We are sure that these options are the secret

                                    of success.</p>
                                <div className="d-flex  text-center ">
                                    <div className=" me-3 animate-pulse">
                                        <Link to="/contact" className="footer-menu fs-3">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </Link>

                                    </div>
                                    <div className="me-3 fs-3 animate-pulse">
                                        <Link to="/contact" className="footer-menu fs-3">
                                            <FontAwesomeIcon icon={faFacebookSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3 animate-pulse">
                                        <Link to="/contact" className="footer-menu fs-3">
                                            <FontAwesomeIcon icon={faInstagramSquare} />
                                        </Link>

                                    </div>

                                    <div className=" me-3 fs-3 animate-pulse">
                                        <Link to="/about" className="footer-menu  fs-3">
                                            <FontAwesomeIcon icon={faTwitterSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3 animate-pulse">
                                        <Link to="/about" className="footer-menu fs-3">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </Link>

                                    </div>

                                </div>
                                <p className="text-center mr-10">
                                    <small className="  text-xl">Sparkle © All rights reserved.</small>
                                    <br />
                                    <small className=" animate-pulse text-md">Developed by Ebrahim Islam.</small>
                                </p>
                            </div>

                        </div>
                        <div className='col-md-1'>

                        </div>

                        {/* contact */}
                        <div className="col-md-3">
                            <div className=" text-justify">
                                <h3>Contact Us</h3>


                                <div className="footer-menu mt-3 ">
                                    <div>
                                        <i className="fas fa-headset"></i>
                                    </div>
                                    <div>
                                        Hotline: +8801938-881110
                                    </div>
                                </div>



                                <div className="mt-3 footer-menu">
                                    <i className="fas fa-info-circle me-1"></i>
                                    Support: support@sparklebd.com
                                </div>
                                <div className="mt-3 footer-menu">
                                    <p>

                                        <FontAwesomeIcon icon={faMapMarkedAlt} />

                                        119, K.B. Fazlul Kader Road, Chittagong
                                    </p>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;
