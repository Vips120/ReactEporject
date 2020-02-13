import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner";
import { RemoveToCart} from "../../redux/action/product/product";
class Cart extends Component {
    constructor(props) {
		super(props);
	}
	updateQuantity = (item) => {
	
	};
	removeQuantity = (item) => {

	};
    render() {
		if (this.props.loading) { return <Spinner /> }
		if (this.props.cartItem.items.length > 0) {
			return (
				<div className="container">
					<h1> ADD CART</h1>
				  
		<table id="cart" className="table table-hover table-condensed">
						<thead>
							<tr>
								<th>Product Image</th>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th  className="text-center">Subtotal</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							
							{
								this.props.cartItem.items.map(data => (
									<tr key={data.item._id}>
									<td data-th="Product">
										<div className="row">
												<div className="col-sm-2 hidden-xs"><img src={data.item.imgUrl} alt={data.item.productname} className="img-responsive"
												 style={{width:"150px", height:"150px"}}
												/></div>
										
										</div>
										</td>
										<td>
										<div className="col-sm-10">
													<h4 className="nomargin">{data.item.productname}</h4>
													
											</div>
										</td>

										<td data-th="Price">${data.item.price}</td>
									<td data-th="Quantity" style={{padding:"30px"}}>
								    
									<i class="fa fa-chevron-circle-up" aria-hidden="true"
									
												onClick={() => this.updateQuantity(data.item)}
											></i>
											<h3>
											{data.quantity}
											</h3>
											<i class="fa fa-chevron-circle-down" aria-hidden="true"
											onClick={() => this.removeQuantity(data.item)}
											></i>
									</td>
										<td data-th="Subtotal" className="text-center">
											{data.item.price * data.quantity}
									</td>
									<td className="actions" data-th="">
										<button className="btn btn-danger btn-sm"
										onClick={() => this.props.RemoveToCart(data.item._id)}
											><i className="fa fa-trash-o"></i></button>								
									</td>
								</tr>
						  ))
						
						}
						
						</tbody>
						<tfoot>
							<tr>
								<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
								<td colSpan="1" className="hidden-xs"></td>
								<td className="hidden-xs text-center"><strong>Total $150.00</strong></td>
								<td><a href="" className="btn btn-success btn-md" style={{padding:"0px 60px 0px 60px"}}>Checkout <i className="fa fa-angle-right"></i></a></td>
							</tr>
						</tfoot>
				</table>
						</div>
			)	
		} else {
			return <h1>EMPTY CART</h1>
		}
       
    }
};
const mapStateToProps = state => {
    console.log(state);
    return { cartItem: state.cart, loading: state.cart.loading };
}
export default connect(mapStateToProps,{RemoveToCart})(Cart);