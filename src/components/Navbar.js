import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#15306F]'>
            <div className='flex space-x-80 w-fit mx-auto'>
                <div>
                    <img className='h-10 ml-14 mt-5' src="https://i.ibb.co/mDj6QQC/Group-46.png" alt="" srcset="" />
                </div>
                <div>
                    <nav className='text-white mt-5 text-sm'>
                        <a className='p-5' href="/">Audit Services</a>
                        <a className='p-5' href="/">Pricing</a>
                        <a className='p-5' href="/">Blogs</a>
                        <a className='p-5' href="/">Resources</a>
                        <button className='px-6 py-1 rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD] mr-5'>Portfolio</button>
                        <button className='px-6 py-1 rounded-md bg-gradient-to-r from-[#4F37EE] via-[#3F7AF0] to-[#7184FD]'>Request An Audit</button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
// space-x-[400px]