import React from 'react'
import about from "../../assets/Frame 28.png"
import './about.css'
function AboutUS() {
  return (
    <div className='d-md-flex py-4 my-3 'id='about'>
     
      <div className='col-md-5 col rectangle-img'>
       <div className="container d-md-flex justify-content-center rectangle-img1 "> 
       <img src={about} className='about-photo mb-5'  alt="" />   
       </div>
      </div>
      <div className='col-md-7 col d-flex flex-column justify-content-evenly px-md-5 px-3 '>
        <h2>About Us</h2>
  <span className=' text-start custom2 mb-2 fs-6' >At Iron haven, we believe that fitness should be accessible to everyone, regardless of their location or schedule. That's why we've created an online platform where you can find everything you need to reach your fitness goals from the comfort of your own home.</span>
  <span className='custom2 text-start mb-3 fs-6'>Our journey began with a simple idea: to provide high-quality fitness equipment and accessories at affordable prices, delivered straight to your doorstep. Whether you're a seasoned athlete or just starting your fitness journey, we're here to support you every step of the way.</span>
  <div className="custom2 text-start mb-2 fs-6">
We're passionate about helping our customers lead healthier, happier lives, and we're committed to providing exceptional service and products that inspire and motivate. From dumbbells to yoga mats, resistance bands to foam rollers, we've got everything you need to create your own personalized workout space.
But we're more than just a store we're a community. Follow us on social media for workout tips, inspiration, and to connect with fellow fitness enthusiasts. Join our newsletter for exclusive offers and updates on the latest products.
Thank you for choosing Iron haven as your partner in fitness. Together, let's make every day a step towards a stronger, healthier you.</div>
      </div>
    </div>
  )
}

export default AboutUS
