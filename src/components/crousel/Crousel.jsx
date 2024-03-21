import React from 'react'
import hero from '../../assets/hero.png'
import'./crousel.css'
function Crousel() {
  return (
    <div className='  d-md-flex bg-black text-white container-fluid'>
      <div className=" col w-100">
     <div className='d-flex flex-column h-100 justify-content-between py-3 px-4 p-md-5 align-items-start'>
      <span className=' custom3 text-start mb-4'>"Welcome to Iron haven, where strength meets style! Step into a world where fitness isn't just a routine, it's a lifestyle. Explore our collection of premium workout gear, from high-performance activewear to cutting-edge equipment." </span>
      <h4 className='text-start'>Providing World Class</h4>
      <div className='d-flex flex-column'>
        <h1 className='text-danger text-start  gym' >GYM</h1>
        <h1 className='text-danger text-start gym'>EQUIPMENTS</h1>
      </div>
     </div>
      </div>
      <div className="col-5 d-flex align-items-end hero-img ">
        {/* <img src={hero}  className='hero' alt="" /> */}
      </div>
    </div>
  )
}

export default Crousel
