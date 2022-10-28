import React from 'react'
import './Default.css';

export default function ConfirmPassword() {
  return (
    <>
    <div className="box1" id="container">
        <h1 id="heading">Recover<br/>Password</h1>
        <div className="box1" id="container-1">
          <form action="#" method="post" id="login_form">
            <span className="field">
              <input
                type="password"
                name="Password"
                id="Password"
                required=""
                className="input-field"
                placeholder="New Password"
              />
              {/* <label for="Username">Name</label> */}
            </span>
            <span className="field">
              <input
                type="password"
                name="Password"
                id="Password"
                required=""
                className="input-field"
                placeholder="Confirm Passowrd"
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
        </div>
      </div>
    </>
  )
}
