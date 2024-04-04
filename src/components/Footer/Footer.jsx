import React from 'react'
import '../Footer/Footer.css'
import {Link} from 'react-router-dom'
function Footer() {
  
  return (
    <div className="container-fluid bg-black text-white">
  <footer className="pb-2 mb-4 d-flex flex-column align-items-center gap-3" >
    <div className='text-black fw-semibold w-75 footer fs-6' >
      <div  className='conatiner text-start  text-center mx-3 my-3'>"Stay connected with us for all your fitness needs! Explore our wide range of high-quality gym equipments,apparel and supplements"</div>
    <ul className="nav justify-content-evenly    mb-3">
      <li className="nav-item"><Link to={'/'} href="#" className="nav-link px-2 text-black">Home</Link></li>
      <li className="nav-item"><Link to={'/'} href="#categories" className="nav-link px-2 text-black">Categories</Link></li>
      <li className="nav-item"><Link to={'products'} href="#product" className="nav-link px-2 text-black">Product</Link></li>
      <li className="nav-item"><Link to={'contactus'} href="#contact" className="nav-link px-2 text-black">Contact</Link></li>
      <li className="nav-item"><Link to={'aboutus'} href="#about" className="nav-link px-2 text-black">About</Link></li>
    </ul>
    </div>
    <div>
      <span>Our Socials</span>
      <ul className="nav justify-content-center  pb-2 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-4 "><i className="  fa-brands fa-whatsapp"></i></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-4"><i className="  fa-brands fa-facebook"></i></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-4"><i className="  fa-brands fa-twitter"></i></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-4"><i className="  fa-brands fa-instagram"></i></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light fs-4"><i className="  fa-brands fa-youtube"></i></a></li>

      </ul>
    </div>
    <div className='d-flex justify-content-between w-100'>
    <p className="text-center text-light">© All rights reserved</p>
    <p className="text-center text-light">Terms&Conditions</p> 
    </div>
  </footer>
</div>
  )
}

export default Footer
