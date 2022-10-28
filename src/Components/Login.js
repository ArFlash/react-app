import React from "react";
import "./Default.css";
// import { NavLink } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="box1" id="container">
        <h1 id="heading">Login</h1>
        <div className="box1" id="container-1">
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
                type="password"
                name="Password"
                id="Password"
                required=""
                className="input-field"
                placeholder="Password"
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
              Login
            </button>
          </form>
          <hr style={{ width: "300px", color: "white" }} />
          <div id="other-btn">
            <button id="create-account" to="/SignUp">
              Create Account
            </button>
            <button id="forget-password" to="/ForgetPassword">
              Forget Password
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
