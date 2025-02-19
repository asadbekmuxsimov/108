import { Button, message } from "antd";
import React from "react";
import { Link } from "react-router";
import useMyStore from "../../my-store";
import ShoppingCart02Icon from "../imgs/shopping-cart-02-stroke-rounded (1)";

function ProduktCard({ item }) {
  const [messageApi, contextHolder] = message.useMessage();
  const { products, addToCart } = useMyStore();
  const state = useMyStore();

  function onAdd(item) {
    const bormi = state.savatcha.find(
      (item_savat) => item_savat.mahsulot.id === item.id
    );

    if (bormi) {
      useMyStore.setState({
        savatcha: state.savatcha.map((savat) =>
          savat.mahsulot.id === item.id
            ? { ...savat, concat: savat.concat + 1 }
            : savat
        ),
      });
    } else {
      useMyStore.setState({
        savatcha: [...state.savatcha, { concat: 1, mahsulot: item }],
      });
    }
  }

  return (
    <div
      key={item.id}
      className=" w-[250px] flex flex-col bg-white shadow-md rounded-xl p-4  items-center transition transform hover:scale-101 hover:shadow-lg"
    >
      <Link to={`/inside/${item.id}`} onClick={() =>{
        window.scrollTo({
          behavior: "smooth",
          top: 0
        })
      }}>
        <img
          className="w-52 h-52 object-contain rounded-lg"
          src={item.image}
          alt="Product" 
        />
      </Link>

      <p className="text-lg font-semibold mt-3 text-center text-gray-900">
        {item.name.length > 19 ? item.name.slice(0, 19) + "..." : item.name}
      </p>

      <div className="flex justify-between items-center w-full mt-3">
        <p className="text-black  bg-gray-100 mt-2  text-[13px] px-3 py-2 rounded-xl">
          {item.axiom_monthly_price}
        </p>
        {item.discount_value && (
          <p className="line-through opacity-65 text-black">
            {item.discount_value.toLocaleString("ru-RU")}
          </p>
        )}
      </div>
      {contextHolder}
      <div className="flex justify-between mt-7">
        <div>
          <p className="font-bold mr-32 mb-10">
            {item.sale_price.toLocaleString("ru-RU")} So'm
          </p>
        </div>
        <ShoppingCart02Icon
          className="cursor-pointer relative top-8 left-0"
          onClick={() => addToCart(item)}
        />
      </div>
    </div>
  );
}

export default ProduktCard;
