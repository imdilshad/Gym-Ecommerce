import React from 'react'

function CheckOut() {
  return (
    <div className="container">
    <main>
        
        <h2 className="py-5 text-center">Checkout </h2>
  
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-danger">Your cart</span>
            <span className="badge bg-danger rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item rounded-pill mb-2 d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0 ">Product name</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item rounded-pill mb-2 d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item rounded-pill mb-2 d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item rounded-pill mb-2 d-flex justify-content-between bg-body-tertiary">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">−$5</span>
            </li>
            <li className="list-group-item rounded-pill mb-2 d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
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
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
  
              <div className="col-sm-6 text-start">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
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
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
  
              <div className="col-md-4 text-start">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" required="">
                  <option value="">Choose...</option>
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
                <label class="form-check-label" htmlFor="credit">Credit card</label>
              </div>
              <div class="form-check">
                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""/>
                <label class="form-check-label" htmlFor="debit">Debit card</label>
              </div>
              <div class="form-check">
                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
                <label class="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>
  
            <div class="row gy-3 text-start">
              <div class="col-md-6">
                <label htmlFor="cc-name" class="form-label">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                <small class="text-body-secondary">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
  
              <div class="col-md-6">
                <label htmlFor="cc-number" class="form-label">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
  
              <div class="col-md-3">
                <label htmlFor="cc-expiration" class="form-label">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
  
              <div class="col-md-3">
                <label htmlFor="cc-cvv" class="form-label">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
  
            <hr class="my-4"/>
  
            <button class="w-100 btn btn-danger btn-lg" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </main>
  
    <footer class="my-5 pt-5 text-body-secondary text-center text-small">
      
    </footer>
  </div>
  
  )
}

export default CheckOut
