import React, { PureComponent } from "react";
import "./Default.css";
// import {Link} from "react-router-dom";

export default class Create extends PureComponent {
  render() {
    return (
      <>
        <div className="box1" id="container">
          <h1 id="heading">Sign-up</h1>
          <div className="box1" id="container-1" style={{height:"520px"}}>
            <form action="#" method="post" id="login_form">
              <span className="field">
                <input
                  type="text"
                  name="Username"
                  id="Username"
                  required=""
                  className="input-field"
                  placeholder="Username"
                />
                {/* <label for="Username">Name</label> */}
              </span>
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
                  type="password"
                  name="Password"
                  id="Password"
                  required=""
                  className="input-field"
                  placeholder="Password"
                />
                {/* <label for="Password">Password</label> */}
              </span>
              <span className="field">
                <input
                  type="password"
                  name="Confirm-Password"
                  id="Confirm-Password"
                  required=""
                  className="input-field"
                  placeholder="Confirm Password"
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
                Sign-up
              </button>
            </form>
            <hr style={{ width: "300px" }} />
            <div id="other-btn">
            <button id="forget-password" to="/Login">
              Login
            </button>
            <button id="create-account" to="/ForgetPassword">
              Forget Password
            </button>
          </div>
          </div>
        </div>
      </>
    );
  }
}
