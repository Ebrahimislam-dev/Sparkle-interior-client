import React from 'react';

const Banner4 = () => {
    return (
        <div className='my-2 overflow-hidden container'>
            <div className='grid grid-cols-2'>
                <div className=' overflow-hidden ' data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img className='transition duration-1000 transform hover:scale-105 w-screen' src="https://i.ibb.co/02g64F4/img5.jpg" alt="" />
                </div>
                <div className=' overflow-hidden ' data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img className=' transition duration-1000 transform hover:scale-105 w-screen' src=" https://i.ibb.co/fpTPZBG/img6.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner4;