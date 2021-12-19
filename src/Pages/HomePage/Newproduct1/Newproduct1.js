import React from 'react';

const Newproduct1 = () => {
    return (
        <div className='container p-14 overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2 border-2 border-opacity-60'>
                <div data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className='mt-20 ml-14 font-mono  text-left'>
                        <h1 className=' font-bold text-xl'>AcozyHom Modern Large Cotton Fabric Lazy Chair</h1>
                        <p className='text-yellow-500 text-2xl font-bold'>  $4000.000 <span className=' text-gray-200 line-through'>$5000.00</span></p>
                        <p className=' text-gray-500 text-justify  '>This chair is a wonderful addation to any rooms such as living room,bedroom and so on.Perfectly match with your furnitures,which brings a sense of modern to your home decor
                            Comfortable seats and armrests creat a comfortable seating experience,so that you get enough relaxation and rest after hard work and study.This chair is designed to relax and enjoy a good book or your favorite tv show
                            Made of sturdy powder coated steel frame and soft sponge,featuring a small pocket on the right side of the chair can hold your mobile</p>
                        <button className='text-sm text-gray-400 hover:text-yellow-500 font-extrabold'>BUY NOW <i className="fas fa-caret-right"></i> </button>
                    </div>
                </div>
                <div className=' overflow-hidden ' data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000">
                    <img className='transition duration-1000 transform hover:scale-105 ml-36 py-10' src="https://i.ibb.co/x5hWV7L/sidesofa.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Newproduct1;