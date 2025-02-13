import { create } from "zustand";

const useMyStore = create((set) => ({
  loading: true,
  products: [],
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, count: 1 }] };
      }
    }),
}));

export default useMyStore;
