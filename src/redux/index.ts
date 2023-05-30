import { configureStore } from "@reduxjs/toolkit";
import blogslice from "./slices/blogslice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
   reducer :{
    blogslice: blogslice,
    themeSlice: themeSlice
   }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;