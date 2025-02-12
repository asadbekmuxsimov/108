import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import useMyStore from "./my-store";
import ShoppingCart02Icon from "./assets/imgs/shopping-cart-02-stroke-rounded (1)";

function App() {
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
          <div
            key={item.id}
            className="w-[300px] flex flex-col mt-10"
          >
            <Link to={`/inside/${item.id}`}>
              <div>
                <img className="flex w-250" src={item.image} alt="" />
                <p className="ml-5 my-5">{item.name}</p>
              </div>
            </Link>
            <div>
              <p className="ml-5 bg-gray-100 inline px-3 rounded-md">
                {item.axiom_monthly_price}
              </p>
            </div>
            <p className="ml-5 my-3">{item.sale_price} so`m</p>
            <ShoppingCart02Icon
              className="cursor-pointer relative top-2 left-65"
              onClick={() => addToCart(item)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
