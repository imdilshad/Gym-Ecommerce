import {React,useState} from 'react'
import './Login.css'
import login from '../../assets/login.png'
import google from '../../assets/google.svg'
import {NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      console.log(formData)
      event.preventDefault();
      setErrors({}); // Clear previous errors
      setSuccessMessage(null);
      setIsLoading(true);
  
      const { email, password } = formData;
  
      let newErrors = {};
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!password || password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
  
      setErrors(newErrors);
      if (Object.keys(newErrors).length !== 0) {
      setIsLoading(false)
      }
      if (Object.keys(newErrors).length === 0) {
  
      (async()=>{
          try { 
            const res = await axios.post('/api/v1/user/login',formData)
            console.log("res : ",res.data)
            const data = await res.data;
            if (res) {
              console.log(data)
              setSuccessMessage(data.message || 'User logged in Successfully');
            } else {
              throw new Error('Failed to register user');
            }
            if(data.message=='User logged in Successfully'){
              if(data.data.user.role=='ADMIN'){
                navigate('/')
              }
              else{
                navigate('/')
              }
           
            }
          } catch (error) {
            console.log('this is the error',error)
            if(error.response.data.message==`User with this email doesn't exits.`){
              newErrors.email = "User with this email doesn't exits.";
            }
            if(error.response.data.message==`Invalid user password!!!`){
              newErrors.password = "Please Enter Correct Password.";
            }
            setErrors(newErrors)
            
          } finally {
              
            setIsLoading(false);

           
          }
        })()
      } 
    };
  return (
   <div className="container-fluid   bg-black d-flex justify-content-center py-3 " >
    <div className='col-md-6 login'>
      {/* <img src={login} className='w-100' alt="" /> */}
    </div>
    
    <div className="col-md-6 col-10  ms-3 bg-white rounded me-3 d-flex align-items-center">
    <main className="form-signin py-5 mx-3  w-100">
  <form className='' onSubmit={handleSubmit}>
    
    <h1 className='text-danger'>Iron Heaven</h1>
    <h2 className="h3 mb-3 fw-normal formT ">Please sign in</h2>

    <div className="form-group text-start">
        <label htmlFor="email">Email</label>
        <input
        className="form-control "
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p className="error text-danger">{errors.email}</p>}
      </div>
      <div className="form-group text-start">
        <label htmlFor="password">Password</label>
        <input
        className="form-control "
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <p className="error text-danger">{errors.password}</p>}
      </div>
     <p className='text-end text-primary  formT'>Forget Password?</p>
    <button type="submit" className='btn btn-danger w-100 py-2 mb-2 formT' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Log In'}
      </button>
      {successMessage && <p className="success">{successMessage}</p>}
    
    <p className="sign-up-label py-4">
        Don't have an account?<NavLink to={'/signup'} className="sign-up-link text-danger">Sign up</NavLink>
      </p>
    <button className="btn btn-outline-dark w-100 py-2 formT" type="submit" onClick={(e)=>e.preventDefault()}><img src={google} height='30' alt="" />Log in  with Google</button>
  </form>
</main>
    </div>
    
   </div>
  )
}

export default Login
