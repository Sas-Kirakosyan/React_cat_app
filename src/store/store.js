import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import imagesSlice from "./imagesSlice";

const Store = configureStore({
  reducer: {
    categories: categoriesSlice,
    images: imagesSlice,
  },
});

export default Store;
