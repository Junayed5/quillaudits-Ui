import React from 'react';

const Blog = () => {
    return (
        <div className='w-[1100px] mx-auto'>
            <div>
                <p className='text-xs text-[#2D83EE] pb-2'>OUR BLOG</p>
                <div className='grid grid-cols-2'>
                    <h2 className='text-3xl font-semibold'>Catch up on the news</h2>
                    <button className='px-6 py-2 text-sm rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] text-white w-32 ml-96'>Read More</button>
                </div>
            </div>
            <div className='grid grid-cols-3 my-10'>
                <div className='w-80'>
                    <img src="https://i.ibb.co/KKk3Msr/Mask.png" alt="" />
                    <h4 className='text-xl text-[#2D83EE] font-semibold py-3'>Web3 Security: Classification & Analysis of Web3 Hacks</h4>
                    <p className='text-sm text-gray-600 pb-3'>15 Mar, 2023</p>
                    <p className='text-sm text-gray-600'>At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.</p>
                </div>
                <div className='w-80'>
                    <img src="https://i.ibb.co/KKk3Msr/Mask.png" alt="" />
                    <h4 className='text-xl text-[#2D83EE] font-semibold py-3'>Web3 Security: Classification & Analysis of Web3 Hacks</h4>
                    <p className='text-sm text-gray-600 pb-3'>15 Mar, 2023</p>
                    <p className='text-sm text-gray-600'>At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.</p>
                </div>
                <div className='w-80'>
                    <img src="https://i.ibb.co/KKk3Msr/Mask.png" alt="" />
                    <h4 className='text-xl text-[#2D83EE] font-semibold py-3'>Web3 Security: Classification & Analysis of Web3 Hacks</h4>
                    <p className='text-sm text-gray-600 pb-3'>15 Mar, 2023</p>
                    <p className='text-sm text-gray-600'>At every point in time, the internet keeps changing dimensions to solve the shortcoming of the previous version.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;