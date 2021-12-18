import React from 'react';
import Header from './../../SubPages/Header/Header';
import Banner from './../banner/Banner';
import ScrollToTop from "react-scroll-to-top";
import VideoSectionPage from '../VideoSectionPage/VideoSectionPage';
import Works from '../Works/Works';
import Banner2 from '../Banner2/Banner2';
import NewProduct from '../Newproduct/NewProduct';
import RoomProduct from '../RoomProduct/RoomProduct';


const Home = () => {
    return (
        <div className='z-10'>
            <div className=' animate-pulse z-20 relative ' >
                <ScrollToTop smooth width='100%' color='gray' top={800} />
            </div>

            <Header></Header>
            <Banner></Banner>
            <Works></Works>
            <VideoSectionPage></VideoSectionPage>
            <Banner2></Banner2>
            <NewProduct></NewProduct>
            <RoomProduct></RoomProduct>
            

            {/* 
            <Works></Works>
            <Products></Products>
            <Subscribe></Subscribe>
            <Reviews></Reviews> */}
        </div>
    );
};

export default Home;