import React from 'react';

const Footer = () => {
    return (
        <div className='h-[450px] bg-[#28293E]'>
            <div className='grid grid-cols-4 text-white mx-10 pt-10'>
                <div className='w-52'>
                    <h4 className='font-semibold mb-4'>Parent Company</h4>
                    <ul>
                        <li><img className='w-36 mb-3' src="https://i.ibb.co/MpxjsZn/Final-Vertical-White-2.png" alt="" /></li>
                        <li>Quillhash delivers enterprise grade blockchain technology to leading companies worldwide.   </li>
                    </ul>
                    <div className='bg-white w-36 h-11 flex mt-5'>
                        <img className='p-3' src="https://i.ibb.co/N2YnKWp/england.png" alt="" />
                        <p className='pt-3 text-sm font-semibold text-gray-600'>ENG</p>
                    </div>

                    <div className='flex gap-7 mt-5 ml-3'>
                        <img src="https://i.ibb.co/jhDnwSj/japan.png" alt="" />
                        <img src="https://i.ibb.co/bBL1ByC/Flag-China.png" alt="" />
                    </div>
                </div>
                <div className='w-52'>
                    <h4 className='font-semibold mb-4'>Explore</h4>
                    <ul>
                        <li className='pb-2'>Careers</li>
                        <li className='pb-2'>Courses</li>
                        <li className='pb-2'>Blockchain Security CTF</li>
                        <li className='pb-2'>QuillAudits Partner Program</li>
                        <li className='pb-2'>Referral Program</li>
                    </ul>
                </div>
                <div className='w-52'>
                    <h4 className='font-semibold mb-4'>Services</h4>
                    <ul>
                        <li className='pb-2'>Smart Contract Auditing</li>
                        <li className='pb-2'>Blockchain Pen Testing</li>
                        <li className='pb-2'>Due Diligence</li>
                    </ul>
                </div>
                <div className='w-64'>
                    <h4 className='font-semibold mb-4'>Contact Us</h4>
                    <p>LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur DLF Phase1, Sector 28, Gurugram, Haryana - 122002</p>
                    <p className='pt-5'> ✉<span className='underline italic text-sm '> contact@quillaudits.com</span></p>
                </div>
            </div>

            <div className='mt-[-50px]'>
                <h3 className='text-center text-white text-xl'>Join our Journey</h3>
                <div className='flex justify-center gap-4 mt-4'>
                    <img src="https://i.ibb.co/dfSRkwF/fb.png" alt="" />
                    <img src="https://i.ibb.co/xLDWFx7/twit.png" alt="" />
                    <img src="https://i.ibb.co/B3np62Q/linkedin.png" alt="" />
                    <img src="https://i.ibb.co/ZYSNJbL/insta.png" alt="" />
                    <img src="https://i.ibb.co/D7yrgCD/icon.png" alt="" />
                    <img src="https://i.ibb.co/2KfQQcx/icon2.png" alt="" />
                    <img src="https://i.ibb.co/nsfY4r4/icon3.png" alt="" />
                    <img src="https://i.ibb.co/XxH8MYw/discord.png" alt="" />
                    <img src="https://i.ibb.co/qrCS3jL/youtube.png" alt="" />
                </div>
            </div><br /><br />
            <p className='border border-t-0 border-[#3A3C56] '></p>

            <p className='text-[#DFDFDF] text-xs text-center pt-2'>All Rights Reserved. © Copyright 2022. QuillHash Technologies Private Limited</p>
        </div>
    );
};

export default Footer;