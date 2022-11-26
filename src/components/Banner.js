import React from 'react';

const Banner = () => {
    return (
        <div style={{ background: '#15306F 0% 0% no-repeat padding-box' }} className=' h-[550px]'>
            <div className='grid grid-cols-2 mx-16'>
                <div className='w-96 mt-24 ml-5'>
                    <h2 className='text-white text-3xl'>Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence Services</h2>
                    <p className='text-white mt-7'>QuillAudits, Making web3 a safer place</p>
                    <div className='mt-7'>
                        <button className='px-6 py-2 rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] text-white'>Request An Audit</button>
                        <button className='px-6 ml-7 py-2 rounded-md border border-blue-300 text-white'>Request An Audit</button>
                    </div>
                </div>
                <div>
                    <img className='mx-auto' src="https://i.ibb.co/2dd1RQG/qube.png" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-3 ml-20 mt-5'>
                <div className='flex'>
                    <h1 className='text-3xl font-semibold text-[#2D83EE]'>$12.8B</h1>
                    <p className='text-white text-sm w-36 pl-3'>Amount Lost To DeFi Hacks in 2021</p>
                </div>
                <div className='flex'>
                    <h1 className='text-3xl font-semibold text-[#2D83EE]'>600K</h1>
                    <p className='text-white text-sm w-40 pl-3'>Lines of Codes Secured by QuillAudits</p>
                </div>
                <div className='flex'>
                    <h1 className='text-3xl font-semibold text-[#2D83EE]'>$14.6B</h1>
                    <p className='text-white text-sm w-36 pl-3'>Amount Protected By QuillAudits</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
// bg-gradient-to-r from-[#7184FD] via-[#3F7AF0] to-[#15306F] 