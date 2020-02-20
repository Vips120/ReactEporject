import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../redux/action/user/user";
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand as={Link} to="/login">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                    <Nav.Link
                        as={Link}
                        to="/home">Home</Nav.Link>
            
                </Nav>
                <React.Fragment>
                {
                    this.props.loginUser.user
                    ?
                  
                            <Nav inline="true">
                                <i className="fa fa-cart-plus fa-3x" aria-hidden="true"
                                 style={{color:"white"}}
                                >
                                    {
                                        this.props.cartItemsCount.items.length > 0
                                            ?
                                            <h5>
                                                { this.props.cartItemsCount.items.length}
                                            </h5>
                                            :
                                            null
                                }   
                                </i>
                                <Nav.Link
                                onClick={() => this.props.logOut()}
                                >LogOut</Nav.Link>
      
</Nav>
:
<Nav inline="true">
        <Nav.Link
            as={Link}
        to="/signup">Signup</Nav.Link>
        <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
</Nav>
                   

                }
         </React.Fragment>
          </Navbar>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        loginUser: state.login,
        cartData: state.cart,
        cartItemsCount: state.cart
    }
};
export default connect(mapStateToProps, {logOut})(Header);




