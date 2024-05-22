import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useState } from 'react'
function Headers() {
  const items= useSelector((state)=>state.cart)
  const [active,setActive]=useState('active')
  const currentPath=window.location.pathname;
  return (
    <nav className="navbar navbar-expand-lg bg-body-light " aria-label="Thirteenth navbar example" >
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand col-lg-3 me-0 text-danger fw-bolder d-md-none  " to={'/'}>IronHaven</Link> 
        <div>
        <Link to={'cart'}><button className="btn text-danger d-md-none ">
          <i className="fa-solid fs-3 fa-cart-shopping"></i>
          <span className="badge bg-danger rounded-pill ">{items.length}</span>
          </button></Link>

        <Link to={'login'}><button className="btn btn-danger rounded-pill d-md-none">Login </button></Link>
        <Link to={'signup'}><button className="btn btn-outline-danger rounded-pill ms-1  d-md-none">SignUp</button></Link>
        </div>

        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <Link className="navbar-brand col-lg-3 me-0 text-danger fw-bolder d-none d-md-block " to={'/'}>IronHaven</Link> 
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item ">
              <NavLink className= 'nav-link ' activeClassName='active text-danger' aria-current="page" to={''} >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to={'categories'} >Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link "to={'products'}>Product</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to={"aboutUS"}>About us</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to={"contactUS"}>Contact us</NavLink>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end gap-2 justify-content-center d-flex flex-md-row">
           <Link to={'cart'} className='d-none d-md-block'> <button className="btn text-danger  ">
            <i className="fa-solid fs-3 fa-cart-shopping"></i>
            <span className="badge bg-danger rounded-pill ">{items.length}</span>
            </button></Link>
            <Link to={'login'} className='d-none d-md-block' ><button className="btn btn-danger Nav-button rounded-pill ">Login </button></Link>
        <Link to={'signup'} className='d-none d-md-block'><button className="btn btn-outline-danger rounded-pill     ">SignUp</button></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Headers
