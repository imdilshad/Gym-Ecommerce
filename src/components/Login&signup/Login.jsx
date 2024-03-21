import React from 'react'
import './Login.css'
import login from '../../assets/login.png'
import google from '../../assets/google.svg'
function Login() {
  return (
   <div className="container-fluid   bg-black d-flex justify-content-end py-3 ">
    <div className='w-50 login'>
      {/* <img src={login} className='w-100' alt="" /> */}
    </div>
    
    <div className="w-50  bg-white rounded me-3 d-flex align-items-center">
    <main className="form-signin py-5 mx-3  w-100">
  <form className=''>
    
    <h1 className="h3 mb-3 fw-normal formT ">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control mb-3" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput ">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control mb-3" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
     <p className='text-end text-primary  formT'>Forget Password?</p>
    <button className="btn btn-danger w-100 py-2 mb-2 formT" type="submit" onClick={(e)=>e.preventDefault()}>Sign in</button>
    <button className="btn btn-outline-dark w-100 py-2 formT" type="submit" onClick={(e)=>e.preventDefault()}><img src={google} height='30' alt="" />Log in  with Google</button>
  </form>
</main>
    </div>
    
   </div>
  )
}

export default Login