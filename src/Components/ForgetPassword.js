import React from 'react';
import './Default.css';

export default function ForgetPassword() {
  return (
    <div className="box1" id="container">
        <h1 id="heading">Recover<br/>Password</h1>
        <div className="box1" id="container-1">
          <form action="#" method="post" id="login_form">
            <span className="field">
              <input
                type="tel"
                name="Number"
                id="Number"
                required=""
                className="input-field"
                placeholder="Number"
              />
              {/* <label for="Username">Name</label> */}
            </span>
            <span className="field">
              <input
                type="tel"
                name="Otp"
                id="Otp"
                required=""
                maxLength={4}
                className="input-field"
                placeholder="Otp"
              />
              {/* <label for="Password">Password</label> */}
            </span>
            <button
              type="submit"
              style={{
                width: "70px",
                height: "35px",
                fontSize: "20px",
                backgroundColor: "transparent",
                border: "transparent",
                color: "white",
              }}
            >
              Submit
            </button>
          </form>
          <hr style={{ width: "300px", color: "white" }} />
          <div id="other-btn">
            <button id="create-account" to="/Login">
              Login
            </button>
            <button id="forget-password" to="/SignUp">
              Create Account
            </button>
          </div>
        </div>
      </div>
  )
}
