import React, { useState, useEffect, memo } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "../../api/Api.jsx";
import ProductCard from "./ProductCard.jsx";

const API_URL = "https://dummyjson.com";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setLoading(true);
    const categoryUrl = selectedCategory
      ? `/products/category/${selectedCategory}`
      : "/products";
    axios
      .get(`${categoryUrl}`, {
        params: {
          limit: 4 * limit,
        },
      })
      .then((res) => {
        setProducts(res.data.products || []);
        setTotalProducts(res.data.total || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [limit, selectedCategory]);


  useEffect(() => {
    axios
      .get(`/products/category-list`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    const categoryUrl = selectedCategory
      ? `/products/category/${selectedCategory}`
      : "/products";
    axios
      .get(`${categoryUrl}`, {
        params: {
          limit: 4 * limit,
        },
      })
      .then((res) => {
        setProducts(res.data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [limit, selectedCategory]);


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
  
  const handleClick = () => setLimit((prev) => prev + 1);

  const loadingSkeleton = Array(4)
    .fill(0)
    .map((_, index) => (
      <div
        key={index}
        className="product__wrapper overflow-hidden group w-[300px] mt-7 relative duration-300 p-4 gap-1 flex flex-col rounded-[30px] animate-pulse bg-gray-200"
      >
        <div className="w-full h-[300px] bg-gray-300" />
        <p className="h-4 bg-gray-300 w-1/3 mt-4" />
        <h3 className="h-6 bg-gray-300 w-2/3 mt-2" />
        <p className="h-4 bg-gray-300 w-full mt-2" />
        <p className="h-8 bg-gray-300 w-1/2 mt-5 mb-10" />
        <div className="flex justify-between">
          <div className="w-1/4 h-6 bg-gray-300" />
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
        </div>
      </div>
    ));


  const categoryOptions = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));
  return (
    <div id="Product" className="dark:bg-black pt-40 dark:text-white container mx-auto pb-4 px-4">
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
        className="dark:bg-black dark:text-white border-none mb-4 p-2 border rounded"
      >
        <option value="">All</option>
        {categoryOptions}
      </select>
      <ProductCard products={products}/>
      {products.length < totalProducts && (
        <button
          className="border block mx-auto mt-10 pb-3 rounded-[20px] py-2 px-2 bg-gray-800 text-white"
          onClick={handleClick}
        >
          See more
        </button>
      )}
    </div>
  );
};

export default memo(Product)