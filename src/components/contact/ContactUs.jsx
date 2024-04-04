import React from 'react'

import '../contact/Contact.css'
function ContactUs() {
  return (
    <div className='d-flex  flex-column justify-content-center contact'>
      <div className="container px-5 d-flex  flex-column justify-content-center align-items-center">
        <span className='fw-bold py-3 fs-2'>Reviews</span>
        <div className=" w-75 row w-full d-flex  flex-row justify-content-between">
      <div className="  bg-dark rounded text-white px-2 py-1 h-7 mb-4 review"  style={{width:'18rem'}}>
      <div className="mt-2">
    <p className="">"Fast shipping,grate prices and top-quality gear.Highly recommended!"</p>
   <div className='d-flex justify-content-between'>  
    <p className='text-start text-danger'>★★★★★</p>
   <p className='text-end '>Mark Anderson</p>
    
  </div>
  </div>
       </div>
      <div className="  bg-dark rounded text-white px-2 py-1 h-7 mb-4 review"  style={{width:'18rem'}}>
      <div className="mt-2">
    <p className="">"Fast shipping,grate prices and top-quality gear.Highly recommended!"</p>
   <div className='d-flex justify-content-between'>  
    <p className='text-start text-danger'>★★★★★</p>
   <p className='text-end '>Mark Anderson</p>
    
  </div>
  </div>
       </div>
      </div>
        <div className=" w-75 row w-full d-flex  flex-row justify-content-between">
      <div className="  bg-dark rounded text-white px-2 py-1 h-7 mb-4 review"  style={{width:'18rem'}}>
      <div className="mt-2">
    <p className="">"Fast shipping,grate prices and top-quality gear.Highly recommended!"</p>
   <div className='d-flex justify-content-between'>  
    <p className='text-start text-danger'>★★★★★</p>
   <p className='text-end '>Mark Anderson</p>
    
  </div>
  </div>
       </div>
      <div className="  bg-dark rounded text-white px-2 py-1 h-74 mb-4 review"  style={{width:'18rem'}}>
      <div className="mt-2">
    <p className="">"Fast shipping,grate prices and top-quality gear.Highly recommended!"</p>
   <div className='d-flex justify-content-between'>  
    <p className='text-start text-danger'>★★★★★</p>
   <p className='text-end '>Mark Anderson</p>
    
  </div>
  </div>
       </div>
      </div>
      </div>
    <div className='container-fluid  mb-3 contactUs d-flex flex-column align-items-center justify-content-center' >
      <div className='my-5' id='contact'>
        <h3>Contact us</h3>
      </div>
    <form className='text-center w-50'>
  <div className="mb-3">
    
    <input type="text" className="form-control  text-white"  placeholder='First Name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    
    <input type="text" className="form-control  text-white" placeholder='Last Name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control  text-white" placeholder='Message for Us' id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-outline-danger">Submit</button>
</form>  
</div>  
</div>  
  )
}

export default ContactUs
