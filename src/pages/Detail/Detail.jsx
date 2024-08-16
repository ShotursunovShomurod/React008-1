
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const API_URL = "https://dummyjson.com";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [products, setproduct] = useState(null);
  const [offset, setoffset] = useState(0);
  const [offsett, setoffsett] = useState(0);

  const [total, settottal] = useState(0);
  const [offsetsy, setoffsetsy] = useState(1);
  const [sellect, setSellect] = useState("");
  const handleClick = () => setoffset(offset + 1);
  const onhandleClick = () => setoffsett(offsett + 1);
  console.log(id);

useEffect(()=> {
    window.scrollTo(0,0)
},[])

  useEffect(() => {
    axios
      .get(`${API_URL}/product/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  useEffect(() => {
    axios
      .get(`${API_URL}/products${sellect}`, {
      })
      .then((res) => {
        settottal(res.data.total),
          setproduct(
            res.data.products.map((produc) => ({ ...produc, count: 0 }))
            
          );
      })
      .catch((err) => console.log(err));
  }, [offsetsy, sellect]);
  const images = data?.images?.map((el, inx) => (
    <div className="mt-6 flex items-center justify-center ">
      <img key={inx} className="w-32 h-32 object-contain" src={el} alt="" />
    </div>
  ));
  console.log(images);
  const productItem = products?.map((product) => (
    <div
      key={product.id}
      className=" overflow-hidden group w-[300px] mt-7 relative duration-300 p-4 gap-1 hover:shadow-lg hover:cursor-pointer flex flex-col rounded-[30px]"
    >
      <div className="">
        <img className="w-full h-[300px] object-contain" src={product.images[0]} alt="" />
      </div>
      <p className="text-[red] font-bold">12%</p>
      <h3 className="text-xl">{product.title}</h3>
      {product.dimensions && (
        <p>
          {product.dimensions.width}x{product.dimensions.height} cm
        </p>
      )}
      <del className=" flex-1 text-[#bdbdbd]">7 763,23 Br</del>
      <p className="text-black text-3xl mb-10 mt-5 font-bold">{product.price}$</p>
      <div className="w-[270px] items-center flex absolute transition-all duration-300 -bottom-20 left-4 group-hover:bottom-2">
        <div className="w-1/2 flex items-center gap-3">
        <button
          className=" flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]"
          disabled={offsett <= 0}
          onClick={() => setoffsett(offsett - 1)}
        >
          -
        </button>
        <p className=" w-3 h-3  flex items-center justify-center">{offsett}</p>
        <button
          className="flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl"
          onClick={() => setoffsett(offsett + 1)}
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
  console.log(productItem);
  return (
    <div className="container">
      <div className="detail_wrap  mt-10">
        <p className="text-[#7d7d7d]">Товары  Ванная  Платяные  шкафы</p>
        <hr />
        <div className="flex gap-11 mt-6">
          <div className="w-1/2 flex flex-col items-center justify-center ">
            <img src={data?.thumbnail} alt="" />
            <div className="flex items-center justify-center">{images}</div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <b className="text-2xl">{data?.title}</b>
            <div className="flex items-center">
              <p className="text-xl">Арт. 890.321.44 / </p>
              <p className="text-gray-400">Под заказ на 4.04.2021</p>
            </div>
            <p className="text-gray-400">
              Банка с крышкой и поднос, 5 шт., стекло пробка банки и коробки
              помогут организовать удобное хранение.{" "}
            </p>
            <div className="flex items-center gap-14">
              <p className="text-black text-3xl mb-10 mt-5 font-bold">{data?.price} <span className="text-xl">Br</span></p>
              <div className="w-1/2 flex items-center gap-3">
                <button
                  className="flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]"
                  disabled={offset <= 0}
                  onClick={() => setoffset(offset - 1)}
                >
                  -
                </button>
                <p>{offset}</p>
                <button
                  className="flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl"
                  onClick={() => setoffset(offset + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <button className="bg-orange-500 p-2 rounded-lg text-white pl-4 pr-4">
                Добаить в корзину +
              </button>
              <div className="flex items-center gap-2">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <p className="text-gray-400">{data?.description}</p>
            <div className="flex flex-col gap-3">
              <hr />
              <p>{data?.warrantyInformation}</p>
              <hr />
              <p>{data?.brand}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="cards w-full  mt-9 justify-center items-center">
        <p className="text-3xl font-bold">С этим товаром также заказывают</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {productItem}
        </div>
      </div>
    </div>
  );
};

export default Detail;
