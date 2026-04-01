/* eslint-disable no-irregular-whitespace */
import React from 'react'

const HeroArea = () => {
  return (
    <div className='container mx-auto md:flex justify-between my-10 md:my-20 px-5 sm:px-0'> 
      <section className='flex flex-col justify-center items-center md:items-start'>
        <div className='flex gap-1 bg-gray-200 py-1.5 px-4 rounded-full mb-4'>
          <img src="/assets/Group5.png" alt="" />
          <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
        </div>
        <h1 className='text-[#101727] text-3xl md:text-6xl font-bold leading-10 md:leading-18 text-center sm:text-start'>
            Supercharge Your <br />
            Digital Workflow</h1>
        <div className='w-full md:w-[500px] my-6'>
            <p className = 'text-center sm:text-start'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>
            <p className='text-center md:text-start'>Explore Products</p>
        </div>
        <div className='mt-5 flex gap-5'>
            <button className='btn btn-goest rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
            <button className='cursor-pointer font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex justify-center items-center gap-2 border border-[#9514FA] py-2 px-3 rounded-full text-sm'>
                <img src="/assets/Play.png" /> 
                Watch Demo
            </button>
        </div>
      </section>
      <section className = 'mt-8'>
        <img src="/assets/banner.png" alt="" />
      </section>
    </div>
  )
}

export default HeroArea
