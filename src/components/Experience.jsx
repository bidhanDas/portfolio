import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="w-full">
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
            <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>experience</h2>
            <p className='py-4 max-w-lg'>
              While only that hauntedtell many purple no lent cushions more heart.
              Soul cushions the still if i, hath lamplight mortals the rapping have
              me and.
            </p>

            <div className='grid lg:grid-cols-4 gap-8'>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/html.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>HTML</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/css.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>CSS</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/javascript.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>JavaScript</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/react.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>React</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/nextjs.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>Next.js</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/tailwind.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>Tailwind CSS</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/node.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>Node.js</h3>
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
                    <img src="/github.png" width="64px" height="64px" alt="" />
                    <h3 className='font-light'>GitHub</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience