import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PaginationButtons from "../components/PaginationButtons";

function CategoryPage() {
  const [cardlar, setCardlar] = useState();
  const { slug } = useParams();
  useEffect(() => {
    setCardlar();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${slug}&sort=-order_count&page=1`
      )
      .then((res) => {
        setCardlar(res.data.data.products);
      });
  }, [slug]);

  if (!cardlar) {
    return (
      <div className="m-auto flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 ">
        <div className="w-16 h-16 border-4  border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
    <div>
    <div>
      <PaginationButtons />
    </div>
    <div className=" container m-auto grid grid-cols-5 items-center gap-5">
      {cardlar.map((item) => {
        // return <ProduktCard key={item.id} item={item} />
      })}
      </div>
      <div>
      </div>
    </div>
    </>
      
  );
}

export default CategoryPage;
