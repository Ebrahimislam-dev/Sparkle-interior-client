import React from 'react';
import './Banner.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="banner overflow-hidden">

            <div className=" md:h-screen h-full md:px-28">
                <div className="md:grid grid-cols-0 md:grid-cols-2  md:h-screen  px-5  md:break-normal break-all col-span-2">

                    <div className="text-left align-middle mt-12 md:mt-48" >


                        <h1 className=" md:text-5xl text-lg text-gray-600 font-bold mb-2 md:mb-6 font-mono w-100 md:w-full h-36 uppercase whitespace">

                            <Typewriter
                                options={{


                                    strings: ['INTERIOR IN YOUR HOUSE', 'Choose For Yourself Something new', 'Picking the right spot for every opportunity'],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 2000,

                                    cursor: '_',
                                }}
                            />

                        </h1>

                        <h4 className="text-white md:text-xl  mt-8 font-sans font-bold "><br /></h4>
                        <Link to="/exploreProducts">
                            <button class="custom-btn btn-12"><span>Click!</span><span>Explore</span></button>
                        </Link>

                    </div>
                </div>
            </div>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="######" fill-opacity="1" d="M0,224L60,224C120,224,240,224,360,240C480,256,600,288,720,288C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
        </div>
    );
};

export default Banner;

