import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductInfobyId } from "../../redux/action/product/product";
export class Product extends Component {
    paraId;
    constructor(props) {
        super(props);
        console.log(props);
       this.paraId =  this.props.match.params.id;
    };
    componentDidMount() {
        this.props.ProductInfobyId(this.paraId);
    }
    render() {
        console.log(this.paraId);
        return (
            <div className="container">
                <h1>SHOP PRODUCT</h1>
            </div>
        )
    }
};
const mapStateToProps = state => {
    console.log(state);
    return state;
};

export default connect(mapStateToProps, {ProductInfobyId})(Product);
