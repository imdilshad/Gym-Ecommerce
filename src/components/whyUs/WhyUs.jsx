import React from 'react'
import './why.css'

function WhyUs() {
  return (
    <div>
      <div className="container-fluid text-white bg-black py-5 px-5">
        <span className='fs-3 my-2'>Why Us</span>
        <div className='row  d-flex justify-content-evenly flex-wrap'>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <span className='fs-1' style={{color:'#dc2626'}}><i className="fa-solid fa-cart-shopping"></i></span>
          <div className='custom'>
          <h5>Order Online</h5>
          <p className=' '>Enjoy our wide range of cardio Equipments Other gym Equipments as well as get expert assistance from our online store</p>
          </div>
          </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <span className='fs-1' style={{color:'#dc2626'}}><i className="fa-solid fa-money-check-dollar"></i></span>
         <div className="custom">
         <h5>Secure Payment</h5>
          <p className=''>Enjoy our wide range of cardio Equipments Other gym Equipments as well as get expert assistance from our online store</p>
         </div>
          </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <span className='fs-1' style={{color:'#dc2626'}}><i className="fa-solid fa-truck"></i></span>
         <div className="custom">
         <h5>On-Time Delivery</h5>
          <p className=''>Enjoy our wide range of cardio Equipments Other gym Equipments as well as get expert assistance from our online store</p>
         </div>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default WhyUs
