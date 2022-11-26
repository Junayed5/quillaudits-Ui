import React from 'react';
import image from '../images/banner.png'

const Security = () => {
    return (
        <div className='w-[1200px] mx-auto'>
            <div>
                <p className='text-xs text-center text-[#2D83EE]'>THE SECURITY</p>
                <h2 className='text-2xl text-center font-semibold'>How We Secure Your Web3 Project</h2>
            </div>
            <div>
                <img className='w-fit mt-10' src={image} alt="" />
            </div>
        </div>
    );
};

export default Security;

// https://i.ibb.co/HgGfC2x/Group-42280.png