import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Inside() {
  const { id } = useParams();
  const [bosildi, setbosildi] = useState();
  useEffect(() => {
    axios
      .get("https://gw.texnomart.uz/api/web/v1/product/detail?id=" + id)
      .then((res) => {
        setbosildi(res.data.data.data);
        console.log(res.data.data.data);
      });
  }, []);
  if (!bosildi) {
    return <div className="text-5xl flex justify-center mt-48">Loading...</div>;
  }
  return (
    <div className="flex justify-around mt-20 max-w-[1440px] ">
      <div className="m-10 flex gap-8 flex-col ">
        <div className="flex gap-2 w-[700px] overflow-auto ">
          {bosildi.large_images.map((item) => {
            return <img className="w-48" src={item} alt="" />;
          })}
        </div>
        <p>{bosildi.name}</p>
        <p>{bosildi.installment_price} so`m</p>
      </div>
      <div className="flex gap-2 flex-col mt-28 text-2xl">
        {bosildi.main_characters.map((item) => {
          return (
            <div>
              <p>
                {item.name} ....................... {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Inside;
