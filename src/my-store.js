// import { create } from "zustand";

// const useMyStore = create((res) => {
//   return {
//     products: [],
//     loading: false,
//   };
// });
// export default useMyStore;


import { create } from "zustand";

const useMyStore = create((set) => ({
  loading: true,
  products: [],
  cart: [],

  addToCart: (item) =>
    set((state) => ({ cart: [...state.cart, item] })),
}));

export default useMyStore;
