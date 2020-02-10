import React from "react";
import { Card, Button } from "react-bootstrap"; 
import {  } from "react-router-dom";
const Product = (props) => {
    console.log(props);
    const imgurl = "https://via.placeholder.com/150/771796";
    return (
        <div className="row">
            {
                props.product.data.map((item) => (
                    <div className="col-md-4 mt-3" key={item._id} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgurl} />
                        <Card.Body>
                                <Card.Title>{item.FirstName}</Card.Title>
                            <Card.Text>
                             {item.EmailId}
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