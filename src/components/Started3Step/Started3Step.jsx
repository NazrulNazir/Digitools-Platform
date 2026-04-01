import React from 'react'

const Started3Step = () => {
  return (
<div className='my-25 container mx-auto px-7 md:px-0'>
    <div className='mb-10'>
        <h2 className='text-4xl md:text-5xl font-bold text-center'>Get Started in 3 Steps</h2>
        <p className='text-neutral-500 text-center mt-5 sm:mt-4'>Start using premium digital tools in minutes, not hours</p>
    </div>
    
    <div className='md:container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center h-full'>

        <div className='bg-base-300 p-5 pb-10 rounded-xl sm:col-span-1 lg:col-span-1 mb-5'>
            <div className='flex justify-between items-center mt-2'>
                <p></p>
                <p className='px-3 py-2 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>01</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
                <img className='p-4 bg-purple-200 rounded-full' src="./assets/user.png" alt="" />
                <h3 className = 'text-3xl font-bold mt-5 mb-2'>Create Account</h3>
                <p className='text-neutral-500'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
        </div>

        <div className='bg-base-300 p-5 pb-10 rounded-xl sm:col-span-1 lg:col-span-1 mb-5'>
            <div className='flex justify-between items-center mt-2'>
                <p></p>
                <p className='px-3 py-2 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>02</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
                <img className='p-4 bg-purple-200 rounded-full' src="./assets/package.png" alt="" />
                <h3 className = 'text-3xl font-bold mt-5 mb-2'>Choose Products</h3>
                <p className='text-neutral-500'>Browse our catalog and select the toolsthat fit your needs.</p>
            </div>
        </div>

        <div className='bg-base-300 p-5 pb-10 rounded-xl sm:col-span-1 lg:col-span-1 mb-5'>
            <div className='flex justify-between items-center mt-2'>
                <p></p>
                <p className='px-3 py-2 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>03</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
                <div className='p-4 bg-purple-200 rounded-full'>
                    <img src="assets/rocket.png" alt="" />
                </div>
                <h3 className = 'text-3xl font-bold mt-5 mb-2'>Start Creating</h3>
                <p className='text-neutral-500'>Download and start using your premium tools immediately.</p>
            </div>
        </div>
   </div>
</div>
  )
}

export default Started3Step
