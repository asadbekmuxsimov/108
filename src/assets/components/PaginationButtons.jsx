import axios from "axios";
import React, { useEffect, useState } from "react";
import useMyStore from "../../my-store";
import { useParams } from "react-router";
import { Button } from "antd";
import NarhlarProjekt from "./Narxlar";
import SortByDown02Icon from "../imgs/sort-by-down-02-stroke-rounded";
import Haridlar from "./Harid";
import ProduktCard from "./ProductCard";
import DashboardCircleIcon from "../imgs/dashboard-circle-stroke-rounded";
import Menu09Icon from "../imgs/menu-09-stroke-rounded";


function CatalogPage() {
  const state = useMyStore();
  const [cardlar, setCardlar] = useState(null);
  const [pagination, setPagination] = useState(1);
  const { slug } = useParams();
  const { tartibi } = state;

  useEffect(() => {
    setCardlar();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort= ${
          tartibi === true ? "-" : ""
        }${state.currentSort}&page=${pagination}`
      )
      .then((res) => {
        setCardlar(res.data.data);
      })
      .catch((err) => {
        console.error("API xatosi:", err);
        setCardlar(null);
      });
  }, [slug, pagination, state.currentSort ,tartibi]);

  if (!cardlar) {
    return (
      <div className="container mx-auto mt-40 flex justify-center">
        <l-tail-chase size="100" speed="1.75" color="black"></l-tail-chase>
      </div>
    );
  }

  return (
    <div className="container mx-auto  max-w-[1440px]">
      <div className=" flex items-center gap-5 justify-between ">
        <div className="flex items-center gap-5 justify-center">
          <NarhlarProjekt name={"price"} title={"Narh bo'yicha"} />
          <NarhlarProjekt name={"rating"} title={"reyting"} />
          <NarhlarProjekt name={"new"} title={"yangi kelganlar"} />
          <NarhlarProjekt name={"order_count"} title={"omabopligi"} />
        </div>
        <div>
          <div className="flex justify-between gap-4 pb-5"></div>
          <div className=" flex gap-4 pb-5">
            <div>
              <DashboardCircleIcon />
            </div>
            <Menu09Icon />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-1/4 w-full">
          <Haridlar filter={cardlar.filter} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 flex-grow">
          {cardlar.products.map((item) => (
            <ProduktCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: cardlar.pagination.total_page }, (_, i) => {
          const page = i + 1;
          return (
            <Button
              className="mb-10 px-4 py-2"
              type={pagination === page ? "primary" : "default"}
              onClick={() => setPagination(page)}
              key={page}
            >
              
              {page}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default CatalogPage;
