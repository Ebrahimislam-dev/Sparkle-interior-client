import React from 'react';

const VideoSectionPage = () => {
    return (
        <div>
            <div style={{}} className="grid grid-cols-3 gap-2 my-2" >

                <div style={{ width: "100%", height: "0px", position: "relative", paddingBottom: "131.743%" }} data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <iframe src="https://streamable.com/e/7pmlou?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style={{ width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", overflow: "hidden" }} title='video1' ></iframe>
                    <p className='text-white font-mono text-xl uppercase z-10 position-relative top-96 mt-36'>Dyning Chairs <br /> <span className=' text-sm hover:text-yellow-500'>Buy Now</span> </p>
                </div>

                <div style={{ width: "100%", height: "0px", position: "relative", paddingBottom: "131.743%" }}>
                    <iframe src="https://streamable.com/e/rzi7bx?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style={{ width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", overflow: "hidden" }} title='video2'></iframe>
                    <p className='text-white font-mono text-xl uppercase z-10 position-relative top-96 mt-36'>Best trending Sofa <br /> <span className=' text-sm hover:text-yellow-500'>Buy Now</span> </p>
                </div>

                <div style={{ width: "100%", height: "0px", position: "relative", paddingBottom: "131.743%" }} data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <iframe src="https://streamable.com/e/ogaepx?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" style={{ width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", overflow: "hidden" }} title='video3'></iframe>
                    <p className='text-white font-mono text-xl uppercase z-10 position-relative top-96 mt-36'>Complete Wall shelves <br /> <span className=' text-sm hover:text-yellow-500'>Buy Now</span> </p>
                </div>

                {/* <div style={{width:"100%",height:"0px",position:"relative",paddingBottom:"131.743%"}}><iframe src="https://streamable.com/e/rzi7bx" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>

                <div style={{width:"100%",height:"0px",position:"relative",paddingBottom:"131.743%"}}><iframe src="https://streamable.com/e/ogaepx" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div> */}
            </div>


        </div>
    );
};

export default VideoSectionPage;