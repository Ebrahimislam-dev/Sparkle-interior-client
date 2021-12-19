import React from 'react';
import './Banner2.css'
const Banner2 = () => {
    return (
        <div className='my-2 overflow-hidden'>
            <div className='grid grid-cols-2' data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <div className=' overflow-hidden icon'>
                    <img className='transition duration-1000 transform hover:scale-110' src="https://i.ibb.co/3rtCPGB/img1.jpg" alt="" />
                </div>
                <div className='icon overflow-hidden ' data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img className=' transition duration-1000 transform hover:scale-110' src="https://i.ibb.co/7NdnrpB/img2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner2;