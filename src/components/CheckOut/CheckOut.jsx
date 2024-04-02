import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {remove, totalAmt} from '../../store/CartSlice'
import { useState } from 'react'
import { useEffect } from 'react'
function CheckOut() {

  const dispatch=useDispatch()

  const handleRemove=(productId)=>{
   dispatch(remove(productId))
  }
  const products=useSelector((state)=>state.cart)


  const TotalPrice=()=>{
    let totalPrice=0;
    products.forEach(item => {
      totalPrice=totalPrice+Number(item.price)*(item.quantity)
    });
    console.log(totalPrice)
    return totalPrice-promocode
  }
  let promocode=400;
   const items= useSelector((state)=>state.cart)
  return (
    <div className="container">
    <main>
        
        <h2 className="py-5 text-center">Checkout </h2>
  
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-danger">Your cart</span>
            <span className="badge bg-danger rounded-pill">{items.length}</span>
          </h4>
          <ul className="list-group mb-3">
          {products.map(product=>{
           return <li className="list-group-item rounded-pill mb-2 d-flex justify-content-between align-items-center lh-sm" key={product.id}>
           <div>
             <h6 className="my-0 ">{product.tittle}</h6>
             <small className="text-body-secondary"></small>
           </div>
           <div className='d-flex justify-content-between align-items-center'>
           <span className="text-body-secondary">₹ {product.netAmt}</span>
           <button className=' btn' onClick={()=>handleRemove(product.id)}>x</button>
           </div>
         </li>
            })}
            <li className="list-group-item rounded-pill mb-2 d-flex justify-content-between bg-body-tertiary">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>FIRSTUSER</small>
              </div>
              <span className="text-success">₹{promocode}</span>
            </li>
            <li className="list-group-item rounded-pill mb-2 d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>₹{TotalPrice()}</strong>
            </li>
          </ul>
        
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code"/>
              <button type="submit" className="btn btn-secondary">Redeem</button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3 text-start">Billing address</h4>
          <form className="needs-validation" noValidate="">
            <div className="row g-3">
              <div className="col-sm-6 text-start">
                <label htmlFor="firstName" className="form-label ">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder=""   required=""/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
  
              <div className="col-sm-6 text-start">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder=""  required=""/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
  
              <div className="col-12 text-start">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>
  
              <div className="col-12 text-start">
                <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
  
              <div className="col-12 text-start">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
  
              <div className="col-12 text-start">
                <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
              </div>
  
              <div className="col-md-5 text-start">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select" id="country" required="">
                  <option >Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
  
              <div className="col-md-4 text-start">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" required="">
                  <option >Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
  
              <div className="col-md-3 text-start">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
  
            <hr className="my-4"/>
  
            <div className="form-check text-start">
              <input type="checkbox" className="form-check-input" id="same-address"/>
              <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
  
            <div className="form-check text-start">
              <input type="checkbox" className="form-check-input" id="save-info"/>
              <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
            </div>
  
            <hr className="my-4"/>
  
            <h4 className="mb-3">Payment</h4>
  
            <div className="my-3 text-start">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input"  required=""/>
                <label className="form-check-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""/>
                <label className="form-check-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required=""/>
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>
  
            <div className="row gy-3 text-start">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                <small className="text-body-secondary">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
  
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
  
              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
  
              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
  
            <hr className="my-4"/>
  
            <button className="w-100 btn btn-danger btn-lg" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </main>
  
    <footer className="my-5 pt-5 text-body-secondary text-center text-small">
      
    </footer>
  </div>
  
  )
}

export default CheckOut
