import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Aksessuarlar from "../components/Acsesuar";

function ProductPage() {
  const { id } = useParams();
  const [bosildi, setbosildi] = useState();
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/product/detail?id=" + id)
      .then((res) => {
        setbosildi(res.data.data.data);
        console.log(res.data.data.data);
      });
  }, [id]);
  if (!bosildi) {
    return <div className="text-5xl flex justify-center mt-48">Loading...</div>;
  }
  return (
    <>
    <div className=" flex justify-between mt-10 mb-10 max-w-[1440px] ">
      <div className="mx-10 my-5 flex gap-5 flex-col ">
        <p className="text-2xl mb-16 w-[400px]">{bosildi.name}</p>

        <div className="flex gap-2 w-[400px] h-[300px] overflow-auto ">
          {bosildi.large_images.map((item) => {
            return <img className="w-48" src={item} alt="" />;
          })}
        </div>
      </div>
      <div className="flex gap-2 flex-col mt-28 text-xl">
        {bosildi.main_characters.map((item) => {
          return (
            <div>
              <p className="mt-5">
                {item.name} ....................... {item.value}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-[400px] mt-28">
        <h1 className="text-2xl">{bosildi.installment_price} so`m</h1>
        <p className="text-xl bg-gray-200 rounded-md py-2 mt-7 px-5"> 
          Muddatli tolov
          <span className="text-2xl bg-blue-400 text-white rounded-md px-4 py-1 mx-3">
            {bosildi.minimal_loan_price.min_monthly_price}
          </span>
          {bosildi.minimal_loan_price.month_number}/oy
        </p>
        <p className="text-xl mt-5">{bosildi.minimal_loan_price.description}</p>
        <div className="mt-5 flex justify-around">
          <button className="bg-yellow-500 rounded-md px-2 py-1 cursor-pointer w-[180px] text-[18px]">Savatchaga</button>
          <button className="bg-gray-200 rounded-md px-2 py-1 cursor-pointer w-[180px] text-[18px]">Birgina klik orqali harid</button>
        </div>
      </div>
    </div>
    <div>
    <Aksessuarlar id={id}  />  
    </div>
    </>
  );
}

export default ProductPage;
