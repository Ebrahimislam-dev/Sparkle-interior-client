import React from 'react';
import './Work.css'



const Works = () => {
    return (
        <div className=" bg-gray-100 container-fluid full-width mt-3 overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <div className='grid grid-cols-1 h-56 p-7 text-start'>
                        <img src="https://i.ibb.co/DP205Qq/icon1.png" alt="" />

                        <p className="  mt-1 text-black "><span className=' text-lg font-bold ' >FREE SHIPPING :</span >  All orders of $49 or more of eligible items across any product category qualify.</p>
                    </div>
                </div>
                <div data-aos="flip-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <div className='grid grid-cols-1 h-56 p-7 text-start '>
                        <img src="https://i.ibb.co/cN2rKfh/icon2.png" alt="" />

                        <p className="  mt-1 text-black"> <span className=' text-lg font-bold '>CREDIT CARDS :</span>  We accept Carte Blanche. Diners Club,Discover Master Card, Visa and American Express</p>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <div className='grid grid-cols-1 h-56 p-7 text-start text-black'>
                        <img src="https://i.ibb.co/df1mY23/icon3.png" alt="" />

                        <p className=" mt-1 "> <span className='text-lg font-bold   '>RETURN POLICY :</span>  You are entitled to return goods for refund or exchange within 14 days.</p>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Works;