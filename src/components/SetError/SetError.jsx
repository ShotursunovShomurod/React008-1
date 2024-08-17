import React from 'react'
import not from '../../assets/Pixar.png'
import { Navigate, useNavigate } from 'react-router-dom'

const SetError = () => {
    const Navigate = useNavigate()
  return (
    <div className=' dark:bg-black dark:text-white text-center'>
      <div className='container mx-auto '>
      <div className='w-full flex items-center justify-center'>
        <div className='w-1/2 flex items-center justify-center'>
        <img className='my-auto w-full h-full mt-10'  src={not} alt="" />
        </div>
        <div className=' flex flex-col gap-4'>
        <p className='font-bold text-7xl text-[#76C0EE]'>AWWW...DON'T CRY.</p>
        <p className='text-2xl font-bold mt-10'>404 ERROR!</p>
        <p className='font-bold'>what you're looking for my have been misplaced in Long Term Memory</p>
        </div>
      </div>
        <button onClick={()=>Navigate("/")} className='px-[20px] text-white font-bold py-[14px] bg-[#2b00ff] rounded-[40px]'>BACK HOME</button>
      </div>
    </div>
  )
}

export default SetError