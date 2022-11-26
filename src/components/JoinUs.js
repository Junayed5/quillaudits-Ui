import React from 'react';

const JoinUs = () => {
    return (
        <div className='h-[400px] w-[1000px] rounded-2xl mx-auto grid grid-cols-2 bg-[#2D83EE] p-10 my-10'>
            <div className='my-11 ml-9'>
                <h2 className='text-3xl font-semibold text-white text-justify w-80 mb-6'>Join Hands With us to secure Web3 Together</h2>
                <p className='text-sm text-white w-92 mb-12'>Help us in our journey to secure web3 by joining our team of talented individuals spread across the globe.</p>
                <button className='px-6 py-2 text-sm rounded-md bg-white text-[#391400] w-32'>APPLY NOW!</button>
            </div>
            <div>
                <img className='w-80' src="https://i.ibb.co/4gCpxHY/pic.png" alt="" />
            </div>
        </div>
    );
};

export default JoinUs;