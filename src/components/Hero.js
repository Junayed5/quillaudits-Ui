import React from 'react';

const Hero = () => {
    return (
        <div className='w-[1200px] mx-auto my-5'>
            <div className='mt-10'>
                <p className='text-xs text-[#2D83EE] mb-2'>CLIENTS</p>
                <h2 className='text-xl font-semibold'>Partners</h2>
                <div className="grid grid-cols-6 mt-8 text-xs text-[#2D83EE] font-sans">
                    <p>PATHFUND</p>
                    <p>PATHFUND</p>
                    <p>PATHFUND</p>
                    <p>PATHFUND</p>
                    <p>PATHFUND</p>
                    <p>PATHFUND</p>
                </div>
            </div>
            <div className='grid  grid-cols-2 mt-20'>
                <div>
                    <img className='w-[400px] ml-20' src="https://i.ibb.co/ZXZ7Rhv/search.png" alt="" />
                </div>
                <div className='w-[430px]'>
                    <p className='text-xs text-[#2D83EE] font-semibold'>SERVICE</p>
                    <h2 className='text-xl font-semibold mt-2 mb-4'>Smart Contract Auditing</h2>
                    <p className='text-sm mb-8 text-[#391400]'>Our Audit Process for smart contract is based on the comprehensive approach we follow to investigate the code for security flaws and potential vulnerabilities.</p>
                    <ul>
                        <li>🖍 Ethereum</li>
                        <li>🖍 Polygon</li>
                        <li>🖍 BSC</li>
                        <li>🖍 Solana</li>
                        <li>🖍 EOS</li>
                    </ul>
                    <button className='px-6 py-1 text-sm mt-8 rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] text-white font-semibold'>Explore</button>
                </div>
            </div>
            <div className='grid  grid-cols-2 mt-20'>
                <div className='w-[430px] ml-20 mt-7'>
                    <p className='text-xs text-[#2D83EE] font-semibold'>SERVICE</p>
                    <h2 className='text-xl font-semibold mt-2 mb-4'>Blockchain Penetration Testing</h2>
                    <p className='text-sm mb-8 text-[#391400]'>QuillAudits proven strategy to tackle vulnerabilities specific to blockchain technology comes with a mix-blend of conventional pentesting approach and dynamic blockchain analysis.</p>
                    <button className='px-6 py-1 text-sm mt-8 rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] text-white'>Learn More</button>
                </div>
                <div>
                    <img className='w-[400px] ' src="https://i.ibb.co/nkQDrjR/learn.png" alt="" />
                </div>
            </div>
            <div className='grid  grid-cols-2 mt-20'>
                <div>
                    <img className='w-[400px] ml-20' src="https://i.ibb.co/THXDBDk/teach.png" alt="" />
                </div>
                <div className='w-[430px]'>
                    <p className='text-xs text-[#2D83EE] font-semibold'>SERVICE</p>
                    <h2 className='text-xl font-semibold mt-2 mb-4'>Due Diligence</h2>
                    <p className='text-sm mb-8 text-[#391400]'>QuillAudits acknowledges the significant threats involved in smart contracts, which can lead to many critical possibilities.</p>
                    <ul>
                        <li><span className='text-[#2D83EE] pr-2'>🖌</span>DeFi Due Diligence</li>
                        <li><span className='text-[#2D83EE] pr-2'>🖌</span>NFT Due Diligence</li>
                        <li><span className='text-[#2D83EE] pr-2'>🖌</span>Rug Pull Due Diligence</li>
                    </ul>
                    <button className='px-6 py-1 text-sm mt-8 rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] text-white'>Explore</button>
                </div>
            </div>

        </div>
    );
};

export default Hero;