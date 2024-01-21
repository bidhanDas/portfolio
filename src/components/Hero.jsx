import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <div id='hero' className='h-screen w-full text-center'>
        <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center'> {/* pt-24 may be need nai */}
           <div className='w-64 h-64 mx-auto overflow-hidden rounded-xl'>
             <img src="/2.jpg" alt="" />
           </div>
           <h1 className='uppercase font-bold text-gray-700 text-7xl'>frontend developer</h1>
           <p className='text-gray-600 text-xl max-w-sm mx-auto'> {/* max-w-sm box tar width */}
              I have 8 years of experience building and desgining software.
              Currently, I love to work on web application using technologies like
              React, Tailwind, Next JS and GraphQL.
           </p>
           <Link href={"/"}>
              <div className='flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider'>
                know more
              </div>
           </Link>
        </div>  
    </div>
  )
}

export default Hero