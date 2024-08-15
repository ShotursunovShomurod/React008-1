import React from 'react'
import user from "../../assets/22222.png";

const CreateProduct = () => {
  return (
    <div className="border w-[300px] bg-black mt-2 inline-block">
    <div className="text-center">
      <img className="inline-block w-full h-full" src={user} alt="" />
    </div>
    <div>
      <div className="flex gap-2">
        <p className="text-[#ff4500] font-bold">NAME :</p>
        <p className="font-bold text-white">SHOMUROD</p>
      </div>
      <div className="flex gap-2">
        <p className="text-[#37c5fd] font-bold">LAST NAME :</p>
        <p className="font-bold text-white">SHOTURSUNOV</p>
      </div>
      <div className="flex gap-2">
        <p className="text-[#47c653] font-bold">TELL NUMBER :</p>
        <p className="font-bold text-white">+998 91 005 26 74</p>
      </div>
      <div className="flex gap-2">
        <p className="text-[#608874] font-bold">TELEGRAM :</p>
        <p className="font-bold text-white">@PRosTOY_4</p>
      </div>
    </div>
  </div>
  )
}

export default CreateProduct