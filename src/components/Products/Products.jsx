import React from 'react'
import dumble from "../../assets/Frame 152.png"
import stepBoard from "../../assets/Frame 154.png"
import rope from "../../assets/Frame 153.png"
import pushUpBar from "../../assets/Frame 155.png"
import './product.css'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import{add} from '../../store/CartSlice'
import { useState } from 'react'
import { useEffect } from 'react'
function Products() {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    const fetchProducts=async()=>{
      const res =await fetch(`https://fakestoreapi.com/products`);
      const data =await res.json()
      console.log('this is product')
      setProducts(data)
      console.log(products)
    }
    fetchProducts()
  },[])

  const dispatch=useDispatch();
  const handleAdd=(product)=>{
   dispatch(add(product));
  }
  return (
    <div className='bg-black py-3' id='product'>
      <h2 className='text-white mb-3'>Products</h2>
      <div className='container-fluid  px-4 d-flex justify-content-center'>
    <div className="row px-4  py-2 container   ">

    {products.map((product)=>{
      
      return (
        <div className="col-md-2  ms-md-4  col-5 mb-3   bg-white py-2 rounded new" key={product.id}>
       <div className="d-flex flex-column  justify-content-between h-100 align-items-center ">
         <div   className=' rounded d-flex align-items-center bg-white h-100'>
           <img src={product.image} className=' product-image' alt="" />
         </div>
         <div className='d-flex flex-column'>
         <span className='text-start  custom1'  >{product.title}</span>
          <span className='text-start custom1'  >$ {product.price}</span>
          <div className='d-flex justify-content-between align-items-center '>
          <button className='btn btn-danger   cart rounded-pill ' onClick={()=>{
            handleAdd(product)
           
          }}><i className="fa-solid fa-cart-shopping"></i> Add</button>
         <Link to={'cartcheckout'}> <button className='btn btn-outline-danger rounded-pill fw-bold cart1 px-3'>Buy</button></Link>
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
 