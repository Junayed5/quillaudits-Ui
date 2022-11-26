import React from 'react';

const Featured = () => {
    return (
        <div>
            <div>
                <p className='text-xs text-center text-[#2D83EE]'>MENTIONS</p>
                <h3 className='text-center text-2xl font-semibold'>As Featured In</h3>
            </div>
            <div className='grid grid-cols-3 gap-y-4 w-[1000px] mx-auto mt-8 mb-9'>
                <div className='h-40 w-80 border border-[#2D83EE] rounded-lg shadow-sm'>
                    <img className='w-56 mx-auto mt-6' src="https://i.ibb.co/k3VGZhQ/logo2.png" alt="" />
                    <p className='text-sm font-semibold text-[#2D83EE] text-center mt-11'>Read More</p>
                </div>
                <div className='h-40 w-80 border border-[#2D83EE] rounded-lg shadow-sm'>
                    <img className='w-56 mx-auto mt-6' src="https://i.ibb.co/TmdC29W/logo3.png" alt="" />
                    <p className='text-sm font-semibold text-[#2D83EE] text-center mt-8'>Read More</p>
                </div>
                <div className='h-40 w-80 border border-[#2D83EE] rounded-lg shadow-sm'>
                    <img className='w-56 mx-auto mt-6' src="https://i.ibb.co/8K3rP8R/logo4.png" alt="" />
                    <p className='text-sm font-semibold text-[#2D83EE] text-center mt-4'>Read More</p>
                </div>
                <div className='h-40 w-80 border border-[#2D83EE] rounded-lg shadow-sm'>
                    <img className='w-56 h-20 mx-auto mt-6' src="https://i.ibb.co/8d440t5/logo5.png" alt="" />
                    <p className='text-sm font-semibold text-[#2D83EE] text-center mt-3'>Read More</p>
                </div>
                <div className='h-40 w-80 border border-[#2D83EE] rounded-lg shadow-sm'>
                    <img className='w-56 mx-auto mt-6' src="https://i.ibb.co/VN6GfY4/hn-logo.png" alt="" />
                    <p className='text-sm font-semibold text-[#2D83EE] text-center mt-14'>Read More</p>
                </div>
                <div className='h-40 w-80 border border-[#2D83EE] rounded-lg shadow-sm'>
                    <img className='w-56 mx-auto mt-6' src="https://i.ibb.co/LJvBQkJ/Invest-in-Blockchain-web-logo-copy-4.png" alt="" />
                    <p className='text-sm font-semibold text-[#2D83EE] text-center mt-8'>Read More</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;