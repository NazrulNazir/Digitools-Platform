import React from 'react'

const Workflow = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
        <div className={`mt-10 flex flex-col gap-4 text-white justify-center items-center py-25 text-center container mx-auto px-5 md:px-0`}>
            <h2 className='text-4xl md:text-5xl font-bold'>Ready to Transform Your Workflow?</h2>
            <p className='text-center w-full md:w-150'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            <div className='flex gap-6 mt-8 font-bold'>
                <button className='cursor-pointer px-4 py-2 rounded-full text-purple-600 bg-white'>Explore Products</button>
                <button className='cursor-pointer px-4 py-2 rounded-full text-white border border-gray-200'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      
    </div>
  )
}

export default Workflow
