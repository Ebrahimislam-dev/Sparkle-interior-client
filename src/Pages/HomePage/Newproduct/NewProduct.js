import React from 'react';
import './Newproduct.css'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const NewProduct = () => {
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div>
            <div className='newprobg grid grid-cols-3 w-full h-screen w-screen'>
                <div className=' col-span-2 text-left'>
                    <h1 className=' md:mt-28 text-4xl font-mono md:ml-28 font-extrabold text-gray-700 '>NEW ARRIVALS</h1>
                    <p className='mt-2 text-white font-mono md:ml-28 '>
                        A beautiful bedroom will make a home feel more inviting. We gathered our favorite decoration ideas for your inspiration. Maybe you can build your stylish bedroom space.
                    </p>
                    <Slider {...settings} className=' mx-4 my-3  '>
                        <div className=' px-10 py-6  rounded-lg'>
                            <div class="image">
                                <img class="image__img" src="https://i.ibb.co/7J1ZPyn/prd1.jpg" alt="Prdimage" />
                                <div class="image__overlay image__overlay--primary">
                                    <div class="image__title">
                                        <img class="" src="https://i.ibb.co/TRk2y4M/prd1-1.jpg" alt="Prdimage" />


                                    </div>
                                    <p class="image__description">
                                        <div className='-mt-60 flex flex-col ml-40 ' data-aos="fade-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1000" >
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-shopping-cart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-heart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 far fa-images"></i></button>
                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className=' -mt-14 z-10 relative text-center text-mono'>
                                <h3 className='text-sm text-gray-800'>Latest Table Lamp</h3>
                                <Link className='text-black'><p className=' font-bold'>$412.00<span className='text-gray-300 line-through ml-3'>$775.00</span></p>  </Link>
                            </div>
                        </div>
                        <div className=' px-10 py-6 h-52 rounded-lg'>
                            <div class="image">
                                <img class="image__img" src="https://i.ibb.co/D1rP2Qf/prd2-2.jpg" alt="Prdimage" />
                                <div class="image__overlay image__overlay--primary">
                                    <div class="image__title">
                                        <img class="" src="https://i.ibb.co/84nvpn4/prd2.jpg" alt="Prdimage" />


                                    </div>
                                    <p class="image__description">
                                        <div className='-mt-60 flex flex-col ml-40 ' data-aos="fade-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1000" >
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-shopping-cart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-heart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 far fa-images"></i></button>
                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className=' -mt-14 z-10 relative text-center text-mono'>
                                <h3 className='text-sm text-gray-800'>Stylish Container</h3>
                                <Link className='text-black'><p className=' font-bold'>$325.00<span className='text-gray-300 line-through ml-3'>$400.00</span></p>  </Link>
                            </div>
                        </div>
                        <div className=' px-10 py-6 h-52 rounded-lg'>
                            <div class="image">
                                <img class="image__img" src="https://i.ibb.co/4mnqhxZ/prd3.jpg" alt="Prdimage" />
                                <div class="image__overlay image__overlay--primary">
                                    <div class="image__title">
                                        <img class="" src="https://i.ibb.co/cxgyyyt/prd3-1.jpg" alt="Prdimage" />


                                    </div>
                                    <p class="image__description">
                                        <div className='-mt-60 flex flex-col ml-40 ' data-aos="fade-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1000" >
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-shopping-cart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-heart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 far fa-images"></i></button>
                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className=' -mt-14 z-10 relative text-center text-mono'>
                                <h3 className='text-sm text-gray-800'>Pot for Kitchen</h3>
                                <Link className='text-black'><p className=' font-bold'>$300.00<span className='text-gray-300 line-through ml-3'>$450.00</span></p>  </Link>
                            </div>
                        </div>
                        <div className=' px-10 py-6 h-52 rounded-lg'>
                            <div class="image">
                                <img class="image__img" src="https://i.ibb.co/KwZ2d09/prd4.jpg" alt="Prdimage" />
                                <div class="image__overlay image__overlay--primary">
                                    <div class="image__title">
                                        <img class="" src="https://i.ibb.co/D71wBmr/prd4-1.jpg" alt="Prdimage" />


                                    </div>
                                    <p class="image__description">
                                        <div className='-mt-60 flex flex-col ml-40 ' data-aos="fade-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1000" >
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-shopping-cart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-heart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 far fa-images"></i></button>
                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className=' -mt-14 z-10 relative text-center text-mono'>
                                <h3 className='text-sm text-gray-800'>Stylish Flower Pot</h3>
                                <Link className='text-black'><p className=' font-bold'>$250.00<span className='text-gray-300 line-through ml-3'>$300.00</span></p>  </Link>
                            </div>
                        </div>
                        <div className=' px-10 py-6 h-52 rounded-lg'>
                            <div class="image">
                                <img class="image__img" src="https://i.ibb.co/QbttDR1/prd5.jpg" alt="Prdimage" />
                                <div class="image__overlay image__overlay--primary">
                                    <div class="image__title">
                                        <img class="" src="https://i.ibb.co/3rjj7FK/prd5-1.jpg" alt="Prdimage" />


                                    </div>
                                    <p class="image__description">
                                        <div className='-mt-60 flex flex-col ml-40 ' data-aos="fade-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1000" >
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-shopping-cart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-heart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 far fa-images"></i></button>
                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className=' -mt-14 z-10 relative text-center text-mono'>
                                <h3 className='text-sm text-gray-800'>Latest Sofa Chair</h3>
                                <Link className='text-black'><p className=' font-bold'>$2500.00<span className='text-gray-300 line-through ml-3'>$3000.00</span></p>  </Link>
                            </div>
                        </div>
                        <div className=' px-10 py-6 h-52 rounded-lg'>
                            <div class="image">
                                <img class="image__img" src="https://i.ibb.co/zrW8H8V/prd6.jpg" alt="Prdimage" />
                                <div class="image__overlay image__overlay--primary">
                                    <div class="image__title">
                                        <img class="" src="https://i.ibb.co/vcbDgZC/prd6-1.jpg" alt="Prdimage" />


                                    </div>
                                    <p class="image__description">
                                        <div className='-mt-60 flex flex-col ml-40 ' data-aos="fade-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="1000" >
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-shopping-cart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 fas fa-heart"></i></button>
                                            <button><i className="text-gray-700 hover:text-yellow-600 far fa-images"></i></button>
                                        </div>
                                    </p>
                                </div>
                            </div>

                            <div className=' -mt-14 z-10 relative text-center text-mono'>
                                <h3 className='text-sm text-gray-800'>Comportable Pilo</h3>
                                <Link className='text-black'><p className=' font-bold'>$150.00<span className='text-gray-300 line-through ml-3'>$250.00</span></p>  </Link>
                            </div>
                        </div>


                    </Slider>
                </div>
                <div>






                </div>
            </div>
        </div>
    );
};

export default NewProduct;