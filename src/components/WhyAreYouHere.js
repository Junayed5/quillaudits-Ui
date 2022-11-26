import React from 'react';

const WhyAreYouHere = () => {
    return (
        <div className='grid grid-cols-2 w-[1200px] mx-auto my-10'>
            <div className='mt-20 ml-16'>
                <p className='text-xs text-[#2D83EE] pb-3'>WHY ARE WE HERE</p>
                <h3 className='text-2xl font-semibold w-72'>What is the Need of Smart Contract Audit?</h3>
                <button className='px-6 py-2 text-sm mt-8 rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] text-white'>Talk to an Expert</button>
            </div>
            <div className='ml-[-50px]'>
                <div className='h-16 w-[420px] border border-[#2D83EE] rounded-md ml-40'>
                    <p className='text-center mt-5 text-sm text-[#2D83EE]'>Smart Contract Audits Build Social Authority</p>
                </div>
                <div className='h-16 w-[420px] border border-[#2D83EE] rounded-md ml-28'>
                    <p className='text-center mt-5 text-[#2D83EE]'>Only 52.7% of the Exploited Web3 Projects were Audited.</p>
                </div>
                <div className='h-16 w-[450px] bg-[#4A4BEE] rounded-md'>
                    <p className='text-center text-white pt-2'>47.3% of the Web3 Hacks in First Half of 2022 were due to Smart Contract Vulnerabilities.</p>
                </div>
                <div className='h-16 w-[420px] border border-[#2D83EE] rounded-md ml-28'>
                    <p className='text-center mt-5 text-[#2D83EE]'>Helps in Earning Users/Investors Trust for the Product</p>
                </div>
                <div className='h-16 w-[420px] border border-[#2D83EE] rounded-md ml-40'>
                    <p className='text-center mt-5 text-sm text-[#2D83EE]'>Helps in Earning Users/Investors Trust for the Product</p>
                </div>
            </div>
        </div>
    );
};

export default WhyAreYouHere;