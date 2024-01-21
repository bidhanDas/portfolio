import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>projects</h2>
            <p className='py-4 max-w-lg'>
              While only that hauntedtell many purple no lent cushions more heart.
              Soul cushions the still if i, hath lamplight mortals the rapping have
              me and.
            </p>

            <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'> {/* sudhu grid dile akta column */}
              <Link href={"/"}>
                <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                <img src="/pro.jpg" alt="" className='rounded-md duration-200 hover:scale-110'/>
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>Use State Explained</h2>
                </div>
              </Link>

              <Link href={"/"}>
                <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                <img src="/pro.jpg" alt="" className='rounded-md duration-200 hover:scale-110'/>
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>Use State Explained</h2>
                </div>
              </Link>

              <Link href={"/"}>
                <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                <img src="/pro.jpg" alt="" className='rounded-md duration-200 hover:scale-110'/>
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>Use State Explained</h2>
                </div>
              </Link>

              <Link href={"/"}>
                <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                <img src="/pro.jpg" alt="" className='rounded-md duration-200 hover:scale-110'/>
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>Use State Explained</h2>
                </div>
              </Link>
            </div>


        </div>
    </div>
  )
}

export default Projects