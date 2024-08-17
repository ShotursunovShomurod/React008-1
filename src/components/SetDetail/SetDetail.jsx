import React, { memo, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import axios from "../../api/Api.jsx";

const SetDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (data?.category) {
      axios
        .get(`/products/category/${data.category}`, { params: { limit: 4 } })
        .then((res) => setRelatedProducts(res.data.products))
        .catch((err) => console.log(err));
    }
  }, [data]);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(prev + increment, 1));
  };

  const images = data?.images?.map((src, index) => (
    <div key={index} className="mt-6 flex items-center justify-center">
      <img className="w-32 h-32 object-contain" src={src} alt="" />
    </div>
  ));

  const relatedProductItems = relatedProducts.map((product) => (
    <Link to={`/product/${product.id}`} key={product.id}>
      <div
        className="overflow-hidden group w-[300px] mt-7 relative duration-300 p-4 gap-1 hover:shadow-lg hover:cursor-pointer flex flex-col rounded-[30px]"
      >
        <img className="w-full h-[300px] object-contain" src={product.images[0]} alt={product.title} />
        <p className="text-[red] font-bold">{product.discountPercentage}%</p>
        <h3 className="text-xl">{product.title}</h3>
        {product.dimensions && (
          <p>{product.dimensions.width}x{product.dimensions.height} cm</p>
        )}
        <del className="text-[#bdbdbd]">7 763,23 Br</del>
        <p className="text-black text-3xl mb-10 mt-5 font-bold">{product.price}$</p>
        <div className="w-[270px] items-center flex absolute transition-all duration-300 -bottom-20 left-4 group-hover:bottom-2">
          <div className="w-1/2 flex items-center gap-3">
            <button
              className="flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]"
              disabled={quantity <= 1}
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <p className="flex items-center justify-center">{quantity}</p>
            <button
              className="flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl"
              onClick={() => handleQuantityChange(1)}
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
    </Link>
  ));

  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="detail_wrap pt-10">
          <p className="text-[#7d7d7d]">Товары  Ванная  Платяные  шкафы</p>
          <hr />
          <div className="flex gap-11 mt-6">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <img src={data?.thumbnail} alt={data?.title} />
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
                помогут организовать удобное хранение.
              </p>
              <div className="flex items-center gap-14">
                <p className="text-black dark:text-white text-3xl mb-10 mt-5 font-bold">
                  {data?.price} <span className="text-xl">Br</span>
                </p>
                <div className="w-1/2 flex items-center gap-3">
                  <button
                    className="flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]"
                    disabled={quantity <= 1}
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl"
                    onClick={() => handleQuantityChange(1)}
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
        <div className="cards w-full mt-9 justify-center items-center">
          <p className="text-3xl font-bold">С этим товаром также заказывают</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {relatedProductItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SetDetail);