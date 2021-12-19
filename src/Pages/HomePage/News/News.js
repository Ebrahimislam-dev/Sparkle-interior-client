import React from 'react';
import './News.css'


const News = () => {
    return (
        <div>
            <div>
                <h1 className=' font-extrabold font-mono text-3xl mt-8'>LATEST NEWS</h1>
                <p className=' text-gray-400 font-mono'>SPARKLE IS A MODERN iNTERIOR COMPANY, SEE OUR LATEST NEWS'S.</p>
            </div>
            <div className='grid grid-cols-3 gap-14 container py-10 overflow-hidden'>
                <div className='shadow-lg' data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <div className=' overflow-hidden'>
                        <img className='transition duration-1000 transform hover:scale-105 w-screen p-2' src="https://i.ibb.co/GtVT6xN/news3.jpg" alt="" />
                    </div>

                    <div>
                        <div className=' font-mono  text-left p-2 '>
                            <h1 className=' font-bold text-xl'>AcozyHom Modern Large Cotton Fabric Lazy Chair</h1>
                            <p className='text-gray-300  font-bold'><i className="far fa-calendar-alt"></i> 18 Dec 2021 <span className=' text-gray-300 '><i className="far fa-user"></i> By Ebrahim Islam</span></p>
                            <p className=' text-gray-500 text-justify pr-10'>This chairs is a wonderful addation to any rooms such as dyning room and so on.Perfectly match with your furnitures,which brings a sense of modern to your home decor
                                Comfortable seats and armrests creat a comfortable seating experience,so that you get enough relaxation and rest after hard work and study.</p>
                            <button class="custom-btn btn-7"><span>Read More</span></button>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg'>
                    <div className=' overflow-hidden'>
                        <img className='transition duration-1000 transform hover:scale-105 w-screen p-2' src="https://i.ibb.co/9vHHjV4/news2.jpg" alt="" />
                    </div>

                    <div>
                        <div className=' font-mono  text-left p-2 '>
                            <h1 className=' font-bold text-xl'>AcozyHom Modern Large Cotton Fabric Lazy Chair</h1>
                            <p className='text-gray-300  font-bold'><i className="far fa-calendar-alt"></i> 18 Dec 2021 <span className=' text-gray-300 '><i className="far fa-user"></i> By Ebrahim Islam</span></p>
                            <p className=' text-gray-500 text-justify pr-10'>This chairs is a wonderful addation to any rooms such as dyning room and so on.Perfectly match with your furnitures,which brings a sense of modern to your home decor
                                Comfortable seats and armrests creat a comfortable seating experience,so that you get enough relaxation and rest after hard work and study.</p>
                            <button class="custom-btn btn-7"><span>Read More</span></button>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg' data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000">
                    <div className=' overflow-hidden'>

                        <img className='transition duration-1000 transform hover:scale-105 w-screen p-2' src="https://i.ibb.co/D8c4wGG/news1.jpg" alt="" />
                    </div>

                    <div>
                        <div className=' font-mono  text-left p-2 '>
                            <h1 className=' font-bold text-xl'>AcozyHom Modern Large Cotton Fabric Lazy Chair</h1>
                            <p className='text-gray-300  font-bold'><i className="far fa-calendar-alt"></i> 18 Dec 2021 <span className=' text-gray-300 '><i className="far fa-user"></i> By Ebrahim Islam</span></p>
                            <p className=' text-gray-500 text-justify pr-10'>This chairs is a wonderful addation to any rooms such as dyning room and so on.Perfectly match with your furnitures,which brings a sense of modern to your home decor
                                Comfortable seats and armrests creat a comfortable seating experience,so that you get enough relaxation and rest after hard work and study.</p>
                            <button class="custom-btn btn-7"><span>Read More</span></button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default News;