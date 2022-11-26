import React from 'react';

const Banner3 = () => {
    return (
        <div className='h-[400px] bg-[#15306F] bg-[url("https://i.ibb.co/VvNv6Ky/Union-3.png")] bg-no-repeat bg-right-top grid grid-cols-2'>
            <div className='p-10 w-[800px]'>
                <img className='w-96 mb-8' src="https://i.ibb.co/kS735cN/Group-41717.png" alt="" />
                <p className='text-white pb-5'>DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight to your Inbox.</p>
                <p className='text-white pb-6'>Explore our weekly newsletter: HashingBits. Stay updated on everything we’re publishing. Stand a step ahead.</p>

                <p className='bg-[#0000004D] w-96 text-gray-400 text-xs h-12 rounded-xl pt-3 pl-5'>youremail@gmail.com</p>

                <p className='text-white text-sm pt-8'><span className='px-1 bg-green-600 rounded-full'>✔</span> Your email has been successfully registered, headlines will be sent to you soon.</p>
            </div>
            <div>
                <img className='mx-auto mt-14' src="https://i.ibb.co/HY1zRbj/Union-4.png" alt="" />
            </div>
        </div>
    );
};

export default Banner3;