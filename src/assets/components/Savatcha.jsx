import React from "react";
import { Button } from "antd";

function Savatcha({ cart, addToCart, onClose }) {
  return (
    <div className="fixed top-0 right-0 w-96 bg-white shadow-lg h-full p-4 overflow-y-auto z-<number> z-10">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-lg font-bold">Savatcha</h2>
        <button onClick={onClose} className="text-xl font-bold">&times;</button>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Savatcha bo‘sh</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-2 mb-2">
            <div className="flex items-center gap-2">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <span className="text-sm">{item.name}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Savatcha;
