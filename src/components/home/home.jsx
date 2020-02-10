import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductInfo } from "../../redux/action/product/product";
import Product from "../../pages/product/product";
import Spinner from "../spinner/spinner";
class Home extends Component {
    
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        this.props.ProductInfo();
    };
    render() { 
        if(this.props.loading) {return <Spinner />}
        if (!this.props.productdata) { return null };
        return (
            <div className="container">
                <h2>ALL PRODUCTS</h2>
                <Product product={this.props.productdata} {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    // return state;
    return {
        productdata: state.details.item,
         loading: state.details.loading
    };
}
export default connect(mapStateToProps, {ProductInfo})(Home); 