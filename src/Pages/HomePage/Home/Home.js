import React from 'react';
import Header from './../../SubPages/Header/Header';
import Banner from './../banner/Banner';
import ScrollToTop from "react-scroll-to-top";
import VideoSectionPage from '../VideoSectionPage/VideoSectionPage';
import Works from '../Works/Works';
import Banner2 from '../Banner2/Banner2';
import NewProduct from '../Newproduct/NewProduct';
import RoomProduct from '../RoomProduct/RoomProduct';
import Banner3 from '../Banner3/Banner3';
import Newproduct1 from './../Newproduct1/Newproduct1';
import News from './../News/News';
import Banner4 from './../Banner4/Banner4';


const Home = () => {
    return (
        <div className=''>
            <div className=' animate-pulse' >
                <ScrollToTop smooth width='100%' color='gray' top={800} />
            </div>

            <Header></Header>
            <Banner></Banner>
            <Works></Works>
            <VideoSectionPage></VideoSectionPage>
            <Banner2></Banner2>
            <NewProduct></NewProduct>
            <RoomProduct></RoomProduct>
            <Newproduct1></Newproduct1>
          
            <Banner3></Banner3>
              <News></News>
              <Banner4></Banner4>

            {/* 
            <Works></Works>
            <Products></Products>
            <Subscribe></Subscribe>
            <Reviews></Reviews> */}
        </div>
    );
};

export default Home;