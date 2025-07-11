import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* {left} */}
            <div>
                <img className='mb-5 w-40'src={assets.logo}/>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, accusantium vitae tempore quisquam, illum placeat fugit magnam velit, harum ullam mollitia officiis! Incidunt, iste doloribus! Tenetur aut earum optio laborum!
            </p>
            </div>

            {/* {Center} */}
            <div className=''>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Private Policy</li>
                    
                </ul>

            </div>
            {/* {Right} */}
            <div>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
              <ul className='flex flex-col gap-2 text-gray-600'l>
                <li>0792748289</li>
                <li>njambim695@gmail.com</li>
              </ul>
            </div>
        </div>

        <div>
            {/* {copyright} */}
            <hr className=''/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto -All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer