
import React from 'react'
import ProduktCard from "../components/ProductCard";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import useMyStore from "../../my-store";

function HomePage() {
  const { products, addToCart } = useMyStore();

  useEffect(() => {
    axios
      .get(
        "https://gw.texnomart.uz/api/web/v1/home/special-products?type=new_products"
      )
      .then((res) => {
        useMyStore.setState({
          loading: false,
          products: res.data.data.data,
        });
      });
  }, []);
  

  return (
    <>
      <div className="flex flex-wrap my-10 ">
        {products.map((item) => (
            <ProduktCard item={item}/>
        ))}
      </div>
    </>
  );
}



export default HomePage;
