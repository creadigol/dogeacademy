import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./Buy.css";
import product from "../../assets/image/product_image.png";
import visa from "../../assets/image/visa.svg";

const Buy = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <>
            <div className="subsection-main product_detail_main">
                <Container>
                    <Row>
                        <Col lg={12} >
                            <div className="product_detail">
                                <div className="product_title">
                                    <h5>Dogegenerals - Landing Page</h5>
                                    <h6>By - Eagle Innovation</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} >
                            <div className="product_detail">
                                <div className="product_image" ></div>
                                <Row>
                                    <Col lg={6} >
                                        <div className="product_feature">
                                            <h5>Template Feature</h5>
                                            <hr />
                                            <ul>
                                                <li>Fast, Lightweight & Powerful</li>
                                                <li>Latest React</li>
                                                <li>Developer Friendly Code</li>
                                                <li>Creative Layout</li>
                                                <li>Responsive in Any Device</li>
                                                <li>Based on Bootstrap v5</li>
                                                <li>Fast Loading Speed</li>
                                                <li>Cross Browser Support</li>
                                                <li>Modern Design</li>
                                                <li>Easily Customizable</li>
                                                <li>Google Fonts</li>
                                                <li>Detailed Documentation</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg={6} >
                                        <div className="product_feature used_font">
                                            <h5>Font Used</h5>
                                            <hr />
                                            <ul>
                                                <li>Geomanist - Google Fonts</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={5} >
                            <div className="product_checkout">
                                <div className="checkout_header">
                                    <h5>Price</h5>
                                    <h6>$ 50</h6>
                                </div>
                                <div className="checkout_content">
                                    <ul>
                                        <li>Quality Checked</li>
                                        <li>Future Updates</li>
                                        <li>6 Months Support</li>
                                    </ul>
                                </div>
                                <div className="checkout_option">
                                    <h6>Payment Method</h6>
                                    <ul>
                                        <li><img src={visa} alt="visa" /></li>
                                        <li><img src={visa} alt="visa" /></li>
                                        <li><img src={visa} alt="visa" /></li>
                                        <li><img src={visa} alt="visa" /></li>
                                    </ul>
                                </div>
                                <button>Checkout</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Buy;