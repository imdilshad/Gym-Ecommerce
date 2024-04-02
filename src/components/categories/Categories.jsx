import React from 'react'
import tredmill from '../../assets/tredmill.png'
import dumblep from '../../assets/dumbleL.png'
import cycle from '../../assets/cycle.png'
import cycle2 from '../../assets/elliptical.png'
function Categories() {
  return (
    <div className='py-4 'id='categories'>
      <h2>Categories</h2>
      <div className='container-fluid  px-4 d-flex justify-content-center'>
    <div className="row px-4 py-2 container  d-md-flex justify-content-evenly">
     <div className="col-md-2 ms-md-4  col-6 mb-3 bg-white py-2 rounded   " >
      <div className="d-flex flex-column  justify-content-start ">
        <div className=' rounded mb-2'>
          <img src={tredmill} className='w-100 rounded ' alt="" />
        </div>
        <button className='btn btn-danger rounded-pill Nav-button'>Tredmill</button>
      </div>
     </div>
     <div className="col-md-2 ms-md-4  col-6 mb-3 bg-white py-2 rounded ">
      <div className="d-flex flex-column  justify-content-start ">
       <div className=' rounded mb-2' >
         <img src={dumblep} className='w-100' alt="" />
       </div>
       <button className='btn btn-danger rounded-pill Nav-button'>Weight</button>
      </div>
     </div>
     <div className="col-md-2 ms-md-4  col-6 mb-3 bg-white py-2 rounded ">
      <div className="d-flex flex-column  justify-content-start ">
       <div className=' rounded mb-2' >
         <img src={cycle} className='w-100' alt="" />
       </div>
       <button className='btn btn-danger rounded-pill Nav-button' >Elliptical</button>
      </div>
     </div>
     <div className="col-md-2 ms-md-4  col-6 mb-3 bg-white py-2 rounded ">
      <div className="d-flex flex-column  justify-content-start ">
       <div className=' rounded mb-2' >
         <img src={cycle2} className='w-100' alt="" />
       </div>
       <button className='btn btn-danger rounded-pill Nav-button'>cycles</button>
      </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Categories
