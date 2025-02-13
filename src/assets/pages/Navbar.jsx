import React, { useState } from "react";
import useMyStore from "../../my-store.js";
import Menu from "../imgs/menu-01-stroke-rounded (3)";
import Cancel01Icon from "../imgs/cancel-01-stroke-rounded (1)";
import Nav_tagi from "./Nav_tagi.jsx";
import { Link } from "react-router";
import Savatcha from "./Savatcha.jsx";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const { cart, addToCart } = useMyStore();
  const [isOpen, setIsOpen] = useState(false);
  const [savatchaModal, setSavatchaModal] = useState(false);

  const open = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="max-w-[1440px] m-auto">
      <div className="w-full">
        <div className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 text-sm">
          <div className="flex gap-8">
            <span>Toshkent</span>
            <span>Bizning do'konlarimiz</span>
            <span>Yuridik shaxslar uchun</span>
            <span>To'lov usullari</span>
          </div>
          <div className="flex items-center gap-8">
            <span>Aloqa markazi : +99871 209 99 44</span>
            <div className="flex items-center gap-1">
              <span>O'z</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <Link to={'/'}>
            <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">
              texnomart*
            </h1>
          </Link>
          <div className="flex bg-[#fbc100] px-4 py-2 rounded-md">
            <button className="flex gap-3 cursor-pointer" onClick={open}>
              {!isOpen ? <Menu /> : <Cancel01Icon />}
              <span>Katalog</span>
            </button>
          </div>
          <div className="flex-grow mx-4">
            <input
              type="text"
              placeholder="Qidirish"
              className="w-[800px] border border-[#fbc100] rounded p-2 pl-10 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600 cursor-pointer">
                Kirish
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600 cursor-pointer">
                Sevimlilar
              </span>
            </div>

            <div
              className="relative flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setSavatchaModal(true)}
            >
              <span className="text-sm text-gray-600">Savatcha</span>
              <div className="absolute top-[-5px] right-[-15px] bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cart.length}
              </div>

              {isHovered && cart.length > 0 && (
                <div className="absolute top-8 right-0 bg-white shadow-lg rounded-lg w-[200px] p-3 border">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 border-b pb-2 mb-2 last:border-b-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <Nav_tagi />
      </div>
      {savatchaModal && <Savatcha cart={cart} addToCart={addToCart} onClose={() => setSavatchaModal(false)} />}
    </div>
  );
}

export default Navbar;
