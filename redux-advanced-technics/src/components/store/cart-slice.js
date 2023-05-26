import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      console.log(state.items);
      const newItem = action.payload;
      const existingItem = state.items.find((x) => x.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.quantity++;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.items.find((x) => x.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((x) => x.id !== id);
      } else {
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        existingItem.quantity--;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
