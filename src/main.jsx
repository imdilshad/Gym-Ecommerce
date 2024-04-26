import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login&signup/Login'
import SignUp from './components/Login&signup/SignUp.jsx'
import Cart from './components/Cart/Cart.jsx'
import CheckOut from './components/CheckOut/CheckOut.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.js'
import Products from './components/Products/Products.jsx'
import AboutUS from './components/aboutUs/AboutUS.jsx'
import ContactUs from './components/contact/ContactUs.jsx'
import Categories from './components/categories/Categories.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:'',
    element:<Home/>
  },
{
  path:'login',
  element:<Login/>
},
{
  path:'signup',
  element:<SignUp/>
},
{
  path:'cart',
  element:<Cart/>
},
{
  path:'categories',
  element:<Categories/>
},
{
  path:'cart/checkout',
  element:<CheckOut/>
},
{
  path:'products',
  element:<Products/>
},
{
  path:'aboutUS',
  element:<AboutUS/>
},
{
  path:'contactUS',
  element:<ContactUs/>
},
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <RouterProvider  router={router}/>
  </Provider>,
)
