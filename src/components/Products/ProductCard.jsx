import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useState } from 'react';

const ProductCard = ({ products, handleClick, limit, loading, loadingSkeleton }) => {


  const [theme, setTheme] = useState("dark")
      
  useEffect(()=>{
      if(theme == "light"){
          document.body.classList.remove("dark")
      }else{  
          document.body.classList.add("dark")   
      }
  },[theme])

  const darkHandler = () =>{
      document.body.classList.toggle("dark")
  }

  const productItems = products.map((product) => (
    <div
      key={product.id}
      className="overflow-hidden group w-[300px] mt-7 relative duration-300 p-4 gap-1 hover:shadow-lg  flex flex-col rounded-[30px]"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images?.[0]}
          className="w-full h-[300px] hover:cursor-pointer object-contain"
          alt={product.title}
        />
      </Link>
      <p className="text-[red] font-bold">{product.discountPercentage}%</p>
      <h3 className="text-xl">{product.title}</h3>
      <p className="line-clamp-1">{product.description}</p>
      {product.dimensions && (
        <p>
          {product.dimensions.width}x{product.dimensions.height} cm
        </p>
      )}
      <p className="text-black text-3xl mb-10 mt-5 font-bold">
        {product.price} $
      </p>
      <div className="w-[270px] items-center flex absolute transition-all duration-300 -bottom-20 left-4 group-hover:bottom-2">
        <div className="w-1/2 flex items-center gap-3">
          <button
            disabled
            className="flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]"
          >
            -
          </button>
          <p className="dark:text-white">0</p>
          <button
            onClick={handleClick}
            className="flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl"
          >
            +
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          <button className="w-[48px] h-[48px] bg-yellow-400 rounded-[50%] flex items-center justify-center text-white text-3xl">
            <MdOutlineAddShoppingCart />
          </button>
        </div>
      </div>
    </div>
  ));


  return (
    <div className="flex flex-wrap justify-between">
      {loading ? loadingSkeleton : productItems}
    </div>
  );
};

export default ProductCard;



// import React from 'react'
// import { Link } from 'react-router-dom';

// const ProductCard = ({product}) => {
//   const productItem = products.map((product) => (
//     <div
//       key={product.id}
//       className="overflow-hidden group w-[300px] mt-7 relative duration-300 p-4 gap-1 hover:shadow-lg hover:cursor-pointer flex flex-col rounded-[30px]"
//     >
//       <Link to={`/product/${product.id}`}>
//       <img
//         src={product.images?.[0]}
//         className="w-full h-[300px] object-contain"
//         alt={product.title}
//       />
//       </Link>
//       <p className="text-[red] font-bold">{product.discountPercentage}%</p>
//       <h3 className="text-xl">{product.title}</h3>
//       <p className="line-clamp-1">{product.description}</p>
//       {product.dimensions && (
//         <p>
//           {product.dimensions.width}x{product.dimensions.height} cm
//         </p>
//       )}
//       <p className="text-black text-3xl mb-10 mt-5 font-bold">
//         {product.price} $
//       </p>
//       <div className="w-[270px] items-center flex absolute transition-all duration-300 -bottom-20 left-4 group-hover:bottom-2">
//         <div className="w-1/2 flex items-center gap-3">
//           <button
//             disabled
//             className="flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]"
//           >
//             -
//           </button>
//           <p className="text-black">{limit}</p>
//           <button
//             onClick={handleClick}
//             className="flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl"
//           >
//             +
//           </button>
//         </div>
//         <div className="w-1/2 flex justify-end">
//           <button className="w-[48px] h-[48px] bg-yellow-400 rounded-[50%] flex items-center justify-center text-white text-3xl">
//             <MdOutlineAddShoppingCart />
//           </button>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="flex flex-wrap justify-between">
//     {loading ? loadingSkeleton : productItem}
//   </div>
//   )
// }

// export default ProductCard