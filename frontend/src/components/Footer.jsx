/* eslint-disable no-unused-vars */

import React from 'react';
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* ------ Left Section ------ */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="logo" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Simply browse through our extensive list of trusted doctors,
                    schedule your appointment hassle-free</p>
                </div>

                {/* ------ Center Section --------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p> 
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li  href='/'>Home</li>
                        <li href='/about'>About us</li>
                        <li href='/contact'>Contact us</li>
                        <li href='/privacy'>Privacy policy</li>
                    </ul>
                </div>

                {/* ------- Right Section -------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li> <a href="tel:0000000000">+91 0000000000</a></li>
                        <li> <a href="mailto:care@swarnamhealthcare.com">care@swarnamhealthcare.com</a></li>
                    </ul>
                </div>
            </div>

        {/* ------ Copyright Section ------ */}
            <div>
                <hr />
                <p className='py-4  text-sm text-center'>Copyright 2024@ Swarnam Health Care - All Right Reserved.</p>
                 
            </div>

            {/* ------ Developer Section ------ */}
            <div>
                {/* <hr /> */}
                <p className='pb-8  text-sm text-center'>Developer contact - <a className='bg-primary text-white rounded-full px-2 hover:bg-white hover:text-primary transition-all' href="https://linkedin.com/in/vikasvaibhav">LinkedIn</a> <a className='bg-primary text-white rounded-full px-2 hover:bg-white hover:text-primary transition-all' href="">Instagram</a> <a className='bg-primary text-white rounded-full px-2 hover:bg-white hover:text-primary transition-all' href="">E-mail</a></p>
            </div>
        </div>
    )   
}

export default Footer
