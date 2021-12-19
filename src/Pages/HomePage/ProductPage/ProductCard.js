import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css'

const ProductCard = ({ product }) => {

    // destructuring
    const { _id, name, description, price, img, rating } = product;

    return (
        <div className="container-fluid">
            {/* products card dynamically */}
            <div className="text-start font-mono " >
                <Col>
                    <Card className=" hvr-float-shadow hvr-grow-shadow productCard  mb-5 px-2 h-full ">
                        <Card.Img variant="top cardsimg" className=" h-72 py-1" src={img} />
                        <Card.Body className="" >
                            <Card.Title className="text-center fw-bold">{name}</Card.Title>
                            <Card.Text>
                                <h5>
                                    Product Description: <small className="pb-3 fs-6 text-start text-gray-400"> {description}</small>
                                </h5>
                                <br />

                                <h2 className='text-xl font-bold '>
                                    Price: $ {price}
                                </h2>
                                <h1 className="md:text-right mr-3">
                                    <Rating
                                        initialRating={rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star text-warning"
                                        readonly
                                    />
                                </h1>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center" >
                            <Link to={`/booking/${_id}`}>
                                <button class="custom-btn btn-7"><span>Order Now</span></button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default ProductCard;