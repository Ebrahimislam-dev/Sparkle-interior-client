import React from 'react';

const RoomProduct = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-2 '>
                <div className=' overflow-hidden'>
                    <img className='transition duration-1000 transform hover:scale-105' src="https://i.ibb.co/2FgYY2v/bed1.jpg" alt="" />
                </div>
               
                <div className='grid grid-cols-1'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className=' overflow-hidden'>
                            <img className='transition duration-1000 transform hover:scale-110' src="https://i.ibb.co/mT63kz6/bedside.jpg" alt="" />
                        </div>
                        <div className='mt-20 ml-2 font-mono  text-left'>
                            <h1 className=' font-bold text-lg'>KEYSTONE 19" DESK LAMP </h1>
                            <p className='text-yellow-500 text-xl font-bold'>  $400.000</p>
                            <p className=' text-gray-500 text-justify mr-20 '>Bring both function and fashion to any tabletop in your home with this modern table lamp</p>
                            <button className='text-sm text-gray-400 hover:text-yellow-500 font-extrabold'>BUY NOW <i className="fas fa-caret-right"></i> </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='mt-20 font-mono  text-right mr-2'>
                            <h1 className=' font-bold text-lg'>POLO BEDSIDE TABLE</h1>
                            <p className='text-yellow-500 text-xl font-bold'>  $700.000</p>
                            <p className=' text-gray-500 text-justify ml-20'>The Polo bedside table is a fantastic combination of modern design and solid construction</p>
                            <button className='text-sm text-gray-400 hover:text-yellow-500 font-extrabold'>BUY NOW <i className="fas fa-caret-right"></i> </button>
                        </div>
                        <div className=' overflow-hidden'>
                            <img className='transition duration-1000 transform hover:scale-110' src="https://i.ibb.co/Pt1xYKP/bedside2.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomProduct;