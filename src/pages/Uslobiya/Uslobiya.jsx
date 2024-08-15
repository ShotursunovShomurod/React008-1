import React from 'react'
import not from '../../assets/not.jpg'
import { Navigate, useNavigate } from 'react-router-dom'

const Uslobiya = () => {
    const Navigate = useNavigate()
  return (
    <div className='container mx-auto  text-center'>
        <img className='inline-block relative w-full mt-[40px] m-auto mb-[-150px]'  src={not} alt="" />
        <button onClick={()=>Navigate("/")} className='px-[120px] absolute top-[834px] left-[735px] text-white font-bold py-[28px] bg-[rgb(0,120,219)] mt-[-00px] rounded-[40px]'>BACK TO HOME</button>
    </div>
  )
}

export default Uslobiya