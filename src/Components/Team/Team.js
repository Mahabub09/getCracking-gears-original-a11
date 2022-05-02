import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import banner1 from '../../Images/banner1.jpg'
import banner2 from '../../Images/banner2.jpg'
import banner3 from '../../Images/banner3.jpg'
import bg from '../../Images/bg.jpg'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './Team.css'

const images = [banner1, banner2, banner3, bg]

const Item = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow right' onClick={onClick}>
                <FaArrowRight></FaArrowRight>
            </div>

        )
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow Left' onClick={onClick}>
                <FaArrowLeft></FaArrowLeft>
            </div>

        )
    };

    const settings = {
        infinite: true,
        lazyLand: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    }
    return (
        <div className='Team'>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div>
                        <img src={img} alt={img} />
                        <h1>hello</h1>
                    </div>
                ))}


            </Slider>

        </div>


    );
};

export default Item;