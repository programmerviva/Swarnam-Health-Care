// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
       <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
       </div>

       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20 text-sm'>

          <img  className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact image" />

          <div className='flex flex-col justify-center items-start gap-3'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>Jamui station <br /> jamui bihra india - 811307</p>
            <p className='text-gray-500'>Tel: +91 0123456789 <br />E-mail: care@swarnamhealthcare.com</p>
            <p className='font-semibold text-lg text-gray-600'>Careers at Swarnam Health Care</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-gray-500 px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-600'>Explore Jobs</button>

          </div>

       </div>
    </div>
  )
}

export default Contact
