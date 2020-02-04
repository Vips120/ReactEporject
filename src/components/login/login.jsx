import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";
class Login extends Component {
    render() {
        return (
            <div className="container">
                <h2>LOGIN PAGE</h2>
                <form action="action_page.php">

  <div className="container">
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
  </div>

                    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
    <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
    <span className="psw"><Link to="/signup">go to singup</Link></span>
  </div>
</form>
            </div>
        )
    }
}

export default Login;