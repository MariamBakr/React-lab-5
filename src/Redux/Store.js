import { configureStore } from "@reduxjs/toolkit";
import { wishListReducer } from "./WishListSlice";


export const store= configureStore({
    reducer:{
        wishListReducer
    }
})