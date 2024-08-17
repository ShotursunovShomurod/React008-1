import React from 'react'
import not from '../../assets/not.jpg'
import { Navigate, useNavigate } from 'react-router-dom'

const Uslobiya = () => {
    const Navigate = useNavigate()
  return (
    <div className='container mx-auto  text-center'>
        <img className='inline-block w-full h-full m-auto'  src={not} alt="" />
        <button onClick={()=>Navigate("/")} className='px-[20px] text-white font-bold py-[14px] bg-[#2b00ff] mt-[-00px] rounded-[40px]'>BACK HOME</button>
    </div>
  )
}

export default Uslobiya