import React from 'react';

const ClientSays = () => {
    return (
        <div className='w-[1200px] mx-auto my-10'>
            <div className='pl-10'>
                <p className='text-xs text-[#2D83EE] pb-2'>TESTIMONIALS</p>
                <div className='grid grid-cols-2'>
                    <h2 className='text-3xl font-semibold'>What our Clients are saying</h2>
                    <button className='px-6 py-2 text-sm rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] text-white w-32 ml-96'>Read More</button>
                </div>
            </div>
            <div className='grid grid-cols-3 ml-10'>
                <div className='w-80 my-9'>
                    <img className='mx-auto my-4' src="https://i.ibb.co/YtvWLVZ/stackos.png" alt="" />
                    <p className='text-center py-3'>Very professional and timed delivery. Also very prompt in responses and queries.</p>
                    <p className='text-center font-semibold'>Vishnu Korde</p>
                    <p className='text-center text-sm '>CEO, StackOS</p>
                </div>
                <div className='w-80 my-9'>
                    <img className='mx-auto my-4' src="https://i.ibb.co/YtvWLVZ/stackos.png" alt="" />
                    <p className='text-center py-3'>Very professional and timed delivery. Also very prompt in responses and queries.</p>
                    <p className='text-center font-semibold'>Vishnu Korde</p>
                    <p className='text-center text-sm '>CEO, StackOS</p>
                </div>
                <div className='w-80 my-9'>
                    <img className='mx-auto my-4' src="https://i.ibb.co/YtvWLVZ/stackos.png" alt="" />
                    <p className='text-center py-3'>Very professional and timed delivery. Also very prompt in responses and queries.</p>
                    <p className='text-center font-semibold'>Vishnu Korde</p>
                    <p className='text-center text-sm '>CEO, StackOS</p>
                </div>
            </div>
        </div>
    );
};

export default ClientSays;