import React from 'react';

const Faq = () => {
    return (
        <div className='grid grid-cols-2 w-[1100px] mx-auto my-9'>
            <div className='w-[370px]'>
                <p className='text-xs text-[#2D83EE] pb-2'>FAQ</p>
                <h2 className='text-3xl font-semibold pb-6'>Frequently Asked Questions</h2>
                <p className='pb-8'>Visit our help center to clear out any second thoughts that you may have regarding our services.</p>
                <button className='px-6 py-2 text-sm rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] text-white w-32'>Contact Us</button>
            </div>
            <div>
                <div className='border border-blue-500 rounded-t-md w-[500px] h-60 p-8' >
                    <div className="flex justify-between">
                        <h3 className='text-xl font-bold pb-5 text-gray-700'>What is smart contract security?</h3>
                        <p className='rounded-full'>🔽</p>
                    </div>
                    <p className='font-semibold text-gray-500'>Smart Contract Security is a set of best practices to identify bugs & vulnerabilities in the code that can lead to security breaches. These loopholes have lead to huge financial losses recently.</p>
                </div>
                <div className='border border-blue-500 w-[500px] h-24 p-8'>
                    <div className="flex justify-between">
                        <h3 className='text-xl font-bold pb-5 text-gray-700'>Are smart contracts vulnerable?</h3>
                        <p className='rounded-full'>🔼</p>
                    </div>
                </div>
                <div className='border border-blue-500 w-[500px] h-24 p-8'>
                    <div className="flex justify-between">
                        <h3 className='text-xl font-bold pb-5 text-gray-700'>What is a smart contract audit?</h3>
                        <p className='rounded-full'>🔼</p>
                    </div>
                </div>
                <div className='border border-blue-500 rounded-b-md w-[500px] h-24 p-8'>
                    <div className="flex justify-between">
                        <h3 className='text-xl font-bold pb-5 text-gray-700'>Why do smart contracts fail?</h3>
                        <p className='rounded-full'>🔼</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;