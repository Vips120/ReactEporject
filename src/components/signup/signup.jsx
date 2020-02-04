import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import {UserRegister} from "../../redux/action/user/user";
class Signup extends Component {
    render() {
        return (
            <div className="container">
                <div class="view full-page-intro">
        <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
          <div class="container">
            <div class="row wow fadeIn">
              <div class="col-md-6 mb-4 white-text text-center text-md-left">
                <h1 class="display-4 font-weight-bold">Sign UP</h1>
                <hr class="hr-light"/>
                <p>
                  <strong>For the more information</strong>
                </p>
                <p class="mb-4 d-none d-md-block">
                  <strong>Quickly get information from new leads and customers by signing up .WIth their information, you can funnel them into new accounts in an instant.Follow us on FACEBOOK</strong>
                                    </p>
                                    <button type="button" class="btn btn-outline-primary"
                                      
                                    >
                                        <Link to="/login"
                                        >Login</Link></button>

              </div>
              <div class="col-md-6 col-xl-5 mb-4">
                <div class="card">
                  <div class="card-body">
                    <form>
                      <p class="h4 text-center mb-4">Sign up</p>
                      <div class="md-form">
                         <i class="fa fa-user prefix grey-text"></i>
                         <input type="text" id="materialFormRegisterNameEx" class="form-control"/>
                         <label for="materialFormRegisterNameEx">Your name</label>
                      </div>
                      <div class="md-form">
                         <i class="fa fa-envelope prefix grey-text"></i>
                         <input type="email" id="materialFormRegisterEmailEx" class="form-control"/>
                         <label for="materialFormRegisterEmailEx">Your email</label>
                      </div>
                      <div class="md-form">
                         <i class="fa fa-exclamation-triangle prefix grey-text"></i>
                         <input type="email" id="materialFormRegisterConfirmEx" class="form-control"/>
                         <label for="materialFormRegisterConfirmEx">Confirm your email</label>
                      </div>
                      <div class="md-form">
                        <i class="fa fa-lock prefix grey-text"></i>
                        <input type="password" id="materialFormRegisterPasswordEx" class="form-control"/>
                        <label for="materialFormRegisterPasswordEx">Your password</label>
                      </div>
                      <div class="md-form">
                            <i class="fa fa-exclamation-triangle prefix grey-text"></i>
                            <input type="password" id="materialFormRegisterConfirmEx" class="form-control"/>
                            <label for="materialFormRegisterPasswordEx">Confirm Your password</label>
                      </div>
                      <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="defaultCheck12"/>                            <label for="defaultCheck12" class="grey-text">Accept the
                                <a href="#" class="blue-text"> Terms and Conditions</a>
                            </label>
                        </div>
                      <div class="text-center mt-4">
                       <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">Register</button>
                       <div class="modal fade" id="myModal" role="dialog">
                         <div class="modal-dialog"> 
                            <div class="modal-content">
                                <div class="modal-header">
                                        <h4 class="modal-title">OOPS!</h4>
                                  <button type="button" class="close" data-dismiss="modal">×</button>
                                </div>
                                <div class="modal-body">
                                  <p>Connection ERROR.........!</p>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
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
        )
    }
}
const mapStateToProps = state => {
  console.log(state);
  return state;
}
export default connect(mapStateToProps, {UserRegister})(Signup);