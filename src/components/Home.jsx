import React from 'react'
import Crousel from './crousel/Crousel'
import Categories from './categories/Categories'
import Products from  './Products/Products'
import AboutUS from './aboutUs/AboutUS'
import WhyUs from './whyUs/WhyUs'
import ContactUs from './contact/ContactUs'
function Home() {
  return (
    <div>
      <Crousel/>
    <Categories/>
    <Products/>
    <AboutUS/>
    <WhyUs/>
    <ContactUs/>
    </div>
  )
}

export default Home
