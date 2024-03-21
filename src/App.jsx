import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactUs from './components/contact/ContactUs'
import Headers from './components/Header/Headers'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Headers/>
    {/* <Login/> */}
    
   <ContactUs/>
   <Footer/>
    </>
  )
}

export default App
