import { createSlice } from "@reduxjs/toolkit";

const wishListSlice =createSlice({
    name:'wishlist',
    initialState:{wishlist:[]},
    reducers:{
        //logic of actions

        addToWishList:(state,action)=>{
            if(action.payload!=={}){
            state.wishlist.push(action.payload)
            }
        },
        removeFromWishList:(state,action)=>{
         state.wishlist= state.wishlist.filter((item)=>item.id!==action.payload)
        },
        increment:(state,action)=>{
            state.wishlist[action.payload].qt=state.wishlist[action.payload].qt+1
        },
        decrement:(state,action)=>{
            state.wishlist[action.payload].qt=state.wishlist[action.payload].qt-1
        }
    }
})

export const {addToWishList,removeFromWishList,increment,decrement}=wishListSlice.actions

export const wishListReducer=wishListSlice.reducer