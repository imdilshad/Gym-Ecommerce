import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import './cart.css'
import {decreaseqty, increaseqty, remove,totalAmtadd,totalAmtremove} from '../../store/CartSlice'
import { useState } from 'react'

function Cart() {
  const dispatch=useDispatch()

  const handleRemove=(productId)=>{
   dispatch(remove(productId))
  }


 
 const TotalPrice=()=>{
  let totalPrice=0;
  products.forEach(item => {
    totalPrice=totalPrice+Number(item.price)*(item.quantity)
  });
  return totalPrice
 }
  const products=useSelector((state)=>state.cart)

  return (
    <div className='container-fluid bg-black text-white  py-4'>
      <h1 className='mb-md-3'>Shopping Cart</h1>
      <div className="row gap-1 d-md-flex justify-content-evenly px-2 ">
        {products.map(product=>{
           return <div className="col-md-5 mb-3 bg-white text-black rounded py-3 px-3" key={product.id}>
           <div className='d-flex justify-content-between'>
             <h5>orders</h5>
             <button className='btn' onClick={()=>handleRemove(product.id)}><i className="fa-solid fa-xmark"></i></button>
           </div>
           <div className='d-flex '>
             <div className="col-5"><img src={product.image} className='rounded mb-2 cart-image' alt="" /></div>
             <div className="col-7   px-3">
               <div className='w-100 mb-3 text-start'>
               {/* <h5 className=''>Steel Dumble</h5> */}
               <h4 className=' w-100 checkout' >{product.tittle}</h4>
               </div>
              <div className='d-flex flex-column justify-content-start align-items-start'>
              <div className='d-flex justify-content-between px-2 w-100'>
                 <span >
                   Items price:
                 </span>
                 <span className='text-end'>
                 ₹ {product.price}
                 </span>
               </div>
               <div className='d-flex  border my-2'  key={product.id}>
               <button className='border px-2 fa-solid fa-minus' onClick={()=>{
                  dispatch(decreaseqty(product.id))
                  dispatch(totalAmtremove(product.id))
                }}></button>
                 <button className='border px-2'>{product.quantity}</button>
                <button className='border px-2 fa-solid fa-plus' onClick={()=>{
                  dispatch(increaseqty(product.id))
                  dispatch(totalAmtadd(product.id))
                }}>
                </button>
                
               </div>
              </div>
             </div>
           </div>
         </div>
        })

        }
      </div>
      <div className="container bg-white text-danger d-flex py-2 rounded  justify-content-between align-items-center">
        <span className='text-center fs-4 fw-bold'>Subtotal of times:₹ {TotalPrice()}</span>
       <Link to={'checkout'}><button className='btn btn-danger rounded-pill'> proceed to Buy</button></Link> 
      </div>
      
    </div>
  )
}

export default Cart
