import React from "react";
import { Card, Button } from "react-bootstrap";
const Product = (props) => {
    console.log(props);
    return (
        <div className="row">
            {
                props.product.items.map((item) => (
                    <div className="col-md-4 mt-3" key={item._id} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.imgUrl} />
                        <Card.Body>
                                <Card.Title>{item.productname}</Card.Title>
                            <Card.Text>
                             {item.description}
    </Card.Text>
    <Card.Text>
                           PRICE:  {item.price}
    </Card.Text>
                                <Button variant="primary"
                                    onClick={() => props.history.push(`/shopProduct/${item._id}`)}
                                >Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                ))
            } 
       
        </div>
    )
};

export default Product;