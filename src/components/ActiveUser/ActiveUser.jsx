import React from 'react'

const ActiveUser = () => {
  return (
    <div className='flex justify-center items-center gap-5 sm:gap-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 text-white my-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>50K</h1>
        <p className=''>Active Users</p>
      </div>
      <hr  className='border border-gray-500 h-20'/>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>200+</h1>
        <p>Premium Tools</p>
      </div>
      <hr  className='border border-gray-500 h-20'/>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>4.9</h1>
        <p>Rating</p>
      </div>
    </div>
  )
}

export default ActiveUser
