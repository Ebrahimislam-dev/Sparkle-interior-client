import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Newsletter = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xtwidj9', 'template_u8z284s', e.target, 'user_yCdfqwLdtqJPH2SlMudpe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <div className=" bg-transparent text-left p-10 " data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <p className="text-gray-200 text-2xl text-center font-extrabold mb-2"> NEWSLETTER</p>
                <h3 className='text-center text-gray-400'>Sign up to our newsletter to get the latest articles, lookbooks 	&amp; fashion voucher codes direct to your inbox</h3>
                <div className=" mt-10">
                    <form onSubmit={sendEmail}>
                        <div className="">
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-sm  bg-transparent text-white h-16  text-lg"
                                id="colFormLabelSm"
                                placeholder="&#9993;Enter Your Email Address"
                            />
                            <button className=" btn-outline-warning rounded-xl border-2 border-yellow-100 text-white transition duration-500 bg-transparent transform hover:-translate-y-1 px-3 "
                            >
                                <input
                                    type="submit"
                                    value="Subscribe "
                                    className="  text-white transition duration-500 bg-transparent h-10"
                                />
                                <i className="fas fa-paper-plane text-right text-yellow-300 animate-bounce "></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;