import {createSlice}from '@reduxjs/toolkit'

const initialState=[];
export const cartSlice=createSlice({
  name:'cart',
  initialState,
  reducers:{
    add(state,action){
      state.push(action.payload)
    },
    remove(state,action){
      console.log(state)
return state.filter(item=>item.id!==action.payload)
    },
    increaseqty(state,action){
      state.forEach((item)=>{
          if(item.id===action.payload){
            item.quantity += 1
          }
        })
    },
    decreaseqty(state,action){
      state.forEach((item)=>{
        if(item.id===action.payload && item.quantity>1){
          item.quantity-=1;
        }
      })
    },
    totalAmt(state,action){
      state.forEach((item)=>{
        if(item.id===action.payload){
          item.netAmt+=Number(item.price);
        }
        console.log(state)
        })
    }
  }
})

export const{add,remove,increaseqty,decreaseqty,totalAmt}=cartSlice.actions
export default cartSlice.reducer