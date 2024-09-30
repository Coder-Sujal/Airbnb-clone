'use client'

import React from 'react'

const StaysAndExp = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-4 font-semibold'>
        <div className='text-xl hidden md:block'>
            Stays
        </div>
        <div className='font-normal text-gray-400 text-lg hidden md:block'>
            Experiences
        </div>
    </div>
  )
}

export default StaysAndExp