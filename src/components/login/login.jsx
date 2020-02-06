import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { Loginuser } from "../../redux/action/user/user";
import Spinner from "../spinner/spinner";
import "./login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      EmailId: "",
      Password: ""
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let data = {
        EmailId: this.state.EmailId,
        Password: this.state.Password
      };
      this.props.Loginuser(data);
    } else {
      this.forceUpdate();
      this.validator.showMessages();
    }
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
   
        return (
            <div className="container">
            <h2>LOGIN PAGE</h2>
            {this.props.error ? <div className="alert alert-danger">{this.props.error.message}</div> : null}
                <form onSubmit={this.handleFormSubmit}>

  <div className="container">
    <label htmlFor="uname"><b>EmailId</b></label>
                <input type="text" placeholder="Enter Emailid" name="EmailId"
                  value={this.state.EmailId}
                  onChange={this.handleInput}
                />
               {this.validator.message("EmailId", this.state.EmailId, "required|email")}
    <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="Password"
                  value={this.state.Password}
                  onChange={this.handleInput}
                />
 {this.validator.message("Password", this.state.Password, "required|min:3|max:100")}
    <button type="submit">Login</button> {this.props.error ? <Spinner/>: null}
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
};
const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.login
  }
}

export default connect(mapStateToProps, {Loginuser})(Login);