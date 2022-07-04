import React, { Component } from "react";
import Slider from "react-slick";
import slider5 from "../../assets/image/slider5.jpg";
import { Container } from "react-bootstrap";
import "./Simulation.css";

const Simulation = () =>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return(
        <>
            <div className="simulator-main" >
                <Slider {...settings}>
                    <div className="simulator-background" >
                        <img src={slider5} alt="slider1" />
                    </div>
                </Slider>
                <canvas id="canvas"></canvas>
            </div>
        </>
    );
}

export default Simulation;