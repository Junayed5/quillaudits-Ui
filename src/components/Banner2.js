import React from 'react';
import book from '../images/book.png'

const Banner2 = () => {
    return (
        <div style={{ background: '#15306F 0% 0% no-repeat padding-box' }} className='h-[650px] mt-10'>
            <div>
                <p className='text-sm text-center text-[#2D83EE] pt-10'>PORTFOLIO</p>
                <h3 className='text-2xl text-white text-center font-semibold pt-5'>Latest Work</h3>
                <div className='w-fit mx-auto'>
                    <button className='px-6 py-2 text-sm mt-8 rounded-full bg-[#2D83EE] text-white mr-10'>Ethereum</button>
                    <button className='px-6 py-2 text-sm mt-8 rounded-full border border-white text-white mr-10'>Binance SC</button>
                    <button className='px-6 py-2 text-sm mt-8 rounded-full border border-white text-white mr-10'>NFT</button>
                    <button className='px-6 py-2 text-sm mt-8 rounded-full border border-white text-white'>Solana</button>
                </div>
            </div>

            <div className='grid grid-cols-3 ml-28 mt-16'>
                <div>
                    <img className='h-48 ml-20' src={book} alt="" />
                    <p className='text-white mt-5 ml-20'>StackOS Audit Report</p>
                    <button className='px-8 py-1 text-center text-sm mt-8 rounded-sm border border-blue-800 text-white mr-10'>VIEW</button>
                    <button className='px-8 py-1 text-sm mt-8 rounded-sm border border-blue-800 text-white'>DOWNLOAD</button>
                </div>
                <div>
                    <img className='h-48 ml-20' src={book} alt="" />
                    <p className='text-white mt-5 ml-20'>StackOS Audit Report</p>
                    <button className='px-8 py-1 text-center text-sm mt-8 rounded-sm border border-blue-800 text-white mr-10'>VIEW</button>
                    <button className='px-8 py-1 text-sm mt-8 rounded-sm border border-blue-800 text-white'>DOWNLOAD</button>
                </div>
                <div>
                    <img className='h-48 ml-20' src={book} alt="" />
                    <p className='text-white mt-5 ml-20'>StackOS Audit Report</p>
                    <button className='px-8 py-1 text-center text-sm mt-8 rounded-sm border border-blue-800 text-white mr-10'>VIEW</button>
                    <button className='px-8 py-1 text-sm mt-8 rounded-sm border border-blue-800 text-white'>DOWNLOAD</button>
                </div>
            </div>

            <div className='mx-auto w-fit'>
                <button className='px-8 py-1 text-sm mt-8 rounded-sm border border-blue-800 text-white'>BUTTON</button>
            </div>
        </div>
    );
};

export default Banner2;