import React from 'react';
import useValue from '../../../hooks/useValue';

const DashboardHome = () => {
    const { user } = useValue();
    return (
        <div >
            <h1 className="text-gray-700 md:text-2xl text-sm mt-10 pt-10">Hii, <span className=" text-gray-50">{user.displayName}</span> !! </h1>
            <h1 className="text-gray-100 md:text-4xl font-bold text-xl  pt-8 pb-8">Welcome  To Sparkle</h1>

            <h2  className="text-gray-100 md:text-xl text-xs ">This  is Your  DashBoard and You can handle your Orders and Others features Here. <br />  You can Review Us To about our services and your Satisfaction or Disatifiction  </h2>
        
        </div>
    );
};

export default DashboardHome;