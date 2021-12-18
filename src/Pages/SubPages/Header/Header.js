import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

import useValue from './../../../hooks/useValue';
import { FaUserCircle } from 'react-icons/fa';
import { GoGrabber, GoSignOut } from "react-icons/go";



const Header = () => {
    const [navbar, setNavbar] = useState(false)
    // const { admin, user, logOut } = useAuth();
    const { user, logOut } = useValue();
    const changBackground = () => {
        window.scrollY >= 100 ? setNavbar(false) : setNavbar(true)
    }
    window.addEventListener('scroll', changBackground)
    const active = {
        fontWeight: "bold",
        color: "gray",
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <nav className={navbar ? "md:fixed md:w-screen md:flex justify-around items-center w-full " : "md:fixed md:w-screen md:flex justify-around items-center w-full bg-gray-200 shadow-lg z-10 "}>
                <div className=" md:mr-20 ">
                    <NavLink to="/home" className=" text-2xl font-bold no-underline flex md:justify-start justify-center items-center" >
                        <img src="https://i.ibb.co/6sM8wVN/logo.png" alt="" className="w-14" />
                        <span className={navbar ? " md:text-black font-mono mt-2" : " md:text-black font-mono mt-2"}>Sparkle</span>
                    </NavLink>
                </div>
                <div className="flex md:flex-row flex-col-reverse ">
                    <Navbar collapseOnSelect expand="lg" >
                        <Container >
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" >
                                <Nav className='grid grid-cols-3 justify-items-center' >
                                    <NavLink to="/home" activeStyle={active} ><span className={navbar ? " font-bold uppercase md:mr-6 mr-0 no-underline group pt-4 pb-3 px-2 transition-shadow " : "font-bold uppercase md:mr-6 mr-0 no-underline group md:text-black "}>Home</span></NavLink>
                                    <NavLink to="/exploreProducts" activeStyle={active}><span className={navbar ? " text-gray-100 font-bold uppercase md:mr-6 mr-0 no-underline group pt-4 pb-3 px-2 transition-shadow " : "font-bold uppercase md:mr-6 mr-0 no-underline group md:text-black "}>Explore Products</span></NavLink>



                                    <button class="text-2xl no-underline text-black  hover:text-gray-200 font-bold" onClick={handleShow} ><div class="dot"></div>
                                        <GoGrabber />
                                    </button>

                                    <Offcanvas show={show} onHide={handleClose}
                                        placement="end" scroll="true" className='w-2/12 bg-gray-400'
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <NavLink to="/about" activeStyle={active}><span className={navbar ? " font-bold uppercase md:mr-6 mr-0 no-underline group pt-4 pb-3 px-2 transition-shadow " : "font-bold uppercase md:mr-6 mr-0 no-underline group md:text-black "}>AboutUS</span></NavLink>
                                            <br />
                                            <NavLink to="/contact" activeStyle={active}><span className={navbar ? " font-bold uppercase md:mr-6 mr-0 no-underline group pt-4 pb-3 px-2 transition-shadow " : "font-bold uppercase md:mr-6 mr-0 no-underline group md:text-black "}>ContactUS</span></NavLink>
                                        </Offcanvas.Body>
                                    </Offcanvas>


                                    {user.email &&
                                        <span className="flex flex-col md:flex-row">
                                            <NavLink to="/dashboard" activeStyle={active}><span className={navbar ? " font-bold uppercase md:mr-6 mr-0 no-underline group pt-4 pb-3 px-2 transition-shadow " : "font-bold uppercase md:mr-6 mr-0 no-underline group md:text-black "}>DashBoard</span></NavLink>
                                        </span>
                                    }
                                    {/* {admin &&
                                        <span className="flex flex-col md:flex-row">
                                            <NavLink to="/addproduct" ><span className={navbar ? "font-bold uppercase md:mx-6 no-underline md:text-white hover:text-red-600 " : "font-bold uppercase md:mx-6 no-underline md:text-black hover:text-red-700 "}>addproduct</span></NavLink>
                                        </span>



                                    } */}


                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <section className="flex items-center justify-center">
                        {user.email ? <div >
                            <button onClick={logOut} className=" text-2xl no-underline text-gray-600 hover:text-gray-200 font-bold">
                                <GoSignOut />

                            </button>
                        </div>
                            :
                            <div className="flex items-center">

                                <NavLink to="/login" className=" text-2xl no-underline text-gray-600 hover:text-gray-200 font-bold">
                                    <FaUserCircle />
                                </NavLink>

                            </div>}

                        {user.email && <div>

                            <NavLink to="/home" className=" text-2xl text-black">
                                <div className="flex items-center">
                                    <img src={user.photoURL} alt="" className="rounded-full border-2 border-yellow-400 w-12 h-12 mr-1" />
                                    <span className={navbar ? "font-semibold text-xs md:text-white" : "font-semibold text-xs text-black"}>{user.displayName}</span>
                                </div>
                            </NavLink>
                        </div>
                        }
                    </section>
                </div>
            </nav>
        </div>
    );
};


export default Header;