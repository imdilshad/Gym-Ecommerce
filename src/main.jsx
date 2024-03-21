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
  path:'cart/checkout',
  element:<CheckOut/>
},
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <RouterProvider  router={router}/>
  </Provider>,
)
