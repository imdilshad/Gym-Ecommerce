import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'
import pro from '../../store/products'


function ProductDetail() {
  const [products,setProducts]=useState([])
  const {id}=useParams()

  useEffect(()=>{
    setProducts(pro[id-1])
  },[id])
  console.log("this is productd",products)
  return (
    <div>
       {
        <div className="col-md-2  ms-md-4  col-5 mb-3   bg-white py-2 rounded new product-card" key={products.id}>
       <div className="d-flex flex-column  justify-content-between h-100 align-items-center ">
         <div   className=' rounded d-flex align-items-center  bg-white h-100'>
           <img src={products.image} className=' product-image rounded' alt="" />
         </div>
         <div className='d-flex flex-column product-buttons  mt-3'>
         <span className='text-start  custom1 ms-2 ms-md-0  '  >{products.tittle}</span>
          <span className='text-start custom1 ms-2 ms-md-0'  >$ {products.price}</span>
          <div className='d-flex justify-content-between align-items-center product-buttons  ' >
          <button className='btn btn-danger   cart rounded-pill Nav-button ' onClick={()=>{
            handleAdd(products)
           
          }}><i className="fa-solid fa-cart-shopping"></i> Add</button>
         <Link to={`/product/${products.id}`}> <button className='btn btn-outline-danger rounded-pill fw-bold cart1 px-3'>
          Buy
          </button></Link>
          </div>
          </div>
       </div>
      </div>

    }
    </div>
  )
}

export default ProductDetail
