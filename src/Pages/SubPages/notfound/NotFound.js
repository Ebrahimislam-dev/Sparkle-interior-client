import React from 'react';
import './NotFound.css'
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (

        <div className="error">
            <div className="">
                {/* Error UI */}
                <div className="mb-12 ">
                    <img className=" " src="https://i.ibb.co/kDKr3Gx/404-1-1920x.png" alt="" />
                    <div className=' -mt-28'>
                        <h1 className=' text-white font-mono mb-3 text-4xl font-extrabold'>
                            PAGE NOT FOUND
                        </h1>
                        <p className=' text-white font-mono text-lg mb-3  font-bold'>
                            Were sorry — something has gone wrong on our end.
                        </p>
                        <p className=' text-white text-sm  mb-12 '>


                            If difficulties persist, please contact the System Administrator of this site and report the error below..
                        </p>
                    </div>
                    <NavLink className=" no-underline font-bold cursor-pointer rounded-full py-3 px-5  bg-green-600 hover:bg-green-700  text-white uppercase mt-24" to="/home"><i className="fas fa-home"></i> Back To Home Page</NavLink>

                </div>
            </div>

        </div>
    );
};

export default NotFound;