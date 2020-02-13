import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { UserRegister } from "../../redux/action/user/user";
import {Alert} from "react-bootstrap";
import "./signup.css";
class Signup extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      FirstName: "",
      LastName: "",
      EmailId: "",
      Password: ""
    };
  };

   Inputdata = e => {
     this.setState({ [e.target.name]: e.target.value });
  };
  InputEmaildata = e => {
    this.setState({ [e.target.value]: e.target.value });
  };
  InputPassworddata = e => {
    this.setState({ [e.target.value]: e.target.value });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let item = {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        UserLogin: {
         emailid: this.state.emailid,
          password: this.state.password
        }
      
      };
      this.props.UserRegister(item);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  render() { 
   
      return (
        <div className="container">
          <div className="view full-page-intro">
            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
              <div className="container">
                <div className="row wow fadeIn">
                  <div className="col-md-6 mb-4 white-text text-center text-md-left">
                    <h1 className="display-4 font-weight-bold">Sign UP</h1>
                    <hr className="hr-light" />
                    <p>
                      <strong>For the more information</strong>
                    </p>
                    <p className="mb-4 d-none d-md-block">
                      <strong>Quickly get information from new leads and customers by signing up .WIth their information, you can funnel them into new accounts in an instant.Follow us on FACEBOOK</strong>
                    </p>
                    <button type="button" className="btn btn-outline-primary"
                                      
                    >
                      <Link to="/login"
                      >Login</Link></button>

                  </div>
                  <div className="col-md-6 col-xl-5 mb-4">
                    <div className="card">
                      <div className="card-body">
                      {this.props.error ? <div className="alert alert-danger">hey, {this.props.error} </div> : null }
                        
                        <form onSubmit={this.handleFormSubmit}>
                          <p className="h4 text-center mb-4">Sign up</p>
                          <div className="md-form">
                            <i className="fa fa-user prefix grey-text"></i>
                            <label htmlFor="materialFormRegisterNameEx">Your Firstname</label>
                            <input type="text" id="materialFormRegisterNameEx" className="form-control"
                              name="FirstName"
                              value={this.state.FirstName}
                              onChange={this.Inputdata}
                            />
                            {this.validator.message("FirstName", this.state.FirstName, "required|min:4|max:100")}
                        
                          </div>
                          <div className="md-form">
                            <i className="fa fa-envelope prefix grey-text"></i>
                            <label htmlFor="materialFormRegisterEmailEx">Your Lastname</label>
                            <input type="text" id="materialFormRegisterEmailEx" className="form-control"
                              name="LastName"
                              value={this.state.LastName}
                              onChange={this.Inputdata}
                            />
                            {this.validator.message("LastName", this.state.LastName, "required|min:4|max:100")}
                        
                          </div>
                          <div className="md-form">
                            <i className="fa fa-exclamation-triangle prefix grey-text"></i>
                            <label htmlFor="materialFormRegisterConfirmEx">Your EmailId</label>
                            <input type="email" id="materialFormRegisterConfirmEx" className="form-control"
                              name="emailid"
                              value={this.state.emailid}
                              onChange={this.InputEmaildata}
                            />
                            {this.validator.message("emailid", this.state.emailid, "required|email")}
                        
                          </div>
                          <div className="md-form">
                            <i className="fa fa-lock prefix grey-text"></i>
                            <label htmlFor="materialFormRegisterPasswordEx">Your password</label>
                            <input type="password" id="materialFormRegisterPasswordEx" className="form-control"
                              name="password"
                              value={this.state.password}
                              onChange={this.InputPassworddata}
                                
                            />
                            {this.validator.message("password", this.state.password, "required|min:4|max:100")}
                    
                          </div>
                          <div className="text-center mt-4">
                            <button className="btn btn-primary" type="submit">Register</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
const mapStateToProps = state => {
  console.log(state);
  return {error: state.register.message_error};
}
export default connect(mapStateToProps, {UserRegister})(Signup);