import React, { Component } from "react";
import { connect } from "react-redux";
import { ProductInfobyId,AddToCart } from "../../redux/action/product/product";
import Spinner from "../spinner/spinner";
import { Card, Button } from "react-bootstrap";
export class Product extends Component {
    paraId;
   imgurl = "https://via.placeholder.com/150/771796";
    constructor(props) {
        super(props);
        console.log(props);
       this.paraId =  this.props.match.params.id;
    };
    componentDidMount() {
        this.props.ProductInfobyId(this.paraId);
    };
    AddCart = (id) => {
        this.props.AddToCart(id);
        this.props.history.push("/cart");
    };
    render() {
        console.log(this.paraId);
     if (this.props.loading) { return <Spinner /> }
        if (!this.props.product) { return null;}
        return (
            <div className="container">
                <h1>SHOP PRODUCT DETAILS</h1>
                <div className="row">
            {
                    <div className="col-md-4 mt-3" key={this.props.product.item._id} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.product.item.imgUrl} />
                        <Card.Body>
                                <Card.Title>{this.props.product.item.productname}</Card.Title>
                            <Card.Text>
                             {this.props.product.item.description}
    </Card.Text>
    <Card.Text>
                           PRICE:  {this.props.product.item.price}
    </Card.Text>
                                <Button variant="primary"
                                    onClick={() => this.AddCart(this.props.product.item._id)}
                                >Go To Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            } 
       
        </div>
            </div>
        )
    }
};
const mapStateToProps = state => {
    console.log(state);
    return {
        product: state.shopProduct.item,
        loading: state.shopProduct.loading
    };
};

export default connect(mapStateToProps, {ProductInfobyId,AddToCart})(Product);
