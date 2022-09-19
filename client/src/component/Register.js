import React from "react";

const Register = () =>{
    return(
        <>
        
      <section>
        <div className="Register-box">
          <div className="header">
            <h1>Laundry Service</h1>
          </div>
          <div className="header-2">
            <h3>Doorstep Wash & Dryclean Service</h3>
          </div>
          <p>Already Have Account</p>
          <button>Sign In</button>
        </div>
        <div className="login-box">
          <div className="header-register">
            <h2>REGISTER</h2>
          </div>
          <form>
            <div classname="column-1">
              <input name="name" placeholder="Name" />
              <input name="phone" placeholder="Phone" />
              <input name="district" placeholder="District" />
              <input name="pincode" placeholder="Pincode" />
            </div>
            <div classname="column-2">
              <input name="email" placeholder="Email" type="email" />
              <input name="password" placeholder="Password" />
              <input name="state" placeholder="State" />
              <input name="address" placeholder="Address" />
            </div>
          </form>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
            <label class="form-check-label" for="flexCheckIndeterminate">
            I agree to Terms & Condition receiving marketing and promotional materials
            </label>
          </div>
        </div>
      </section>
        </>
    )
}

export default Register;