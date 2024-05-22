import React from 'react'

import './product.css'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import{add} from '../../store/CartSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import pro from '../../store/products'
function Products() {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    // const fetchProducts=async()=>{
    //   const res =await fetch(`https://fakestoreapi.com/products`);
    //   const data =await res.json()
    //   console.log('this is product',data)
    //   setProducts(data)
    //   console.log(products)
    // }
    // fetchProducts()
    setProducts(pro)
  },[])
  console.log(pro)

  const dispatch=useDispatch();
  const handleAdd=(product)=>{
   dispatch(add(product));
  }
  return (
    <div className='bg-black py-3 mb-3' id='product'>
      <h2 className='text-white mb-3'>Products</h2>
      <div className='container-fluid  px-4 d-flex justify-content-center'>
    <div className="row px-2 px-md-4  py-2 container  d-flex justify-content-center ">

    {products.map((product)=>{
      
      return (
        <div className="col-md-2  ms-md-4  col-5 mb-3   bg-white py-2 rounded new product-card" key={product.id}>
       <div className="d-flex flex-column  justify-content-between h-100 align-items-center ">
         <div   className=' rounded d-flex align-items-center  bg-white h-100'>
           <img src={product.image} className=' product-image rounded' alt="" />
         </div>
         <div className='d-flex flex-column product-buttons  mt-3'>
         <span className='text-start  custom1 ms-2 ms-md-0  '  >{product.tittle}</span>
          <span className='text-start custom1 ms-2 ms-md-0'  >$ {product.price}</span>
          <div className='d-flex justify-content-between align-items-center product-buttons  ' >
          <button className='btn btn-danger   cart rounded-pill Nav-button ' onClick={()=>{
            handleAdd(product)
           
          }}><i className="fa-solid fa-cart-shopping"></i> Add</button>
         <Link to={`/product/${product.id}`}> <button className='btn btn-outline-danger rounded-pill fw-bold cart1 px-3'>
          Buy
          </button></Link>
          </div>
          </div>
       </div>
      </div>)
})

    }
    
    </div>
    </div>
    </div>
  )
}

export default Products
 