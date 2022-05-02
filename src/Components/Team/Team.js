import React from 'react';
import Slider from 'react-slick/lib/slider';
import t1 from '../../Images/t1.jpg'
import t2 from '../../Images/t2.jpg'
import t3 from '../../Images/t3.jpg'
import t4 from '../../Images/t4.jpg'
import t5 from '../../Images/t5.jpg'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './Team.css'



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
        <div className='Team mx-auto'>
            <Slider className='rounded-md'  {...settings}>
                <div className='bg-white mx-3'>
                    <img className='rounded-full ' src={t1} alt="" />
                    <h1>akjbdh</h1>
                    <p>DGVfgvgdgfusyhdfgfh</p>
                    <small><i>manager</i></small>

                </div>
                <div className='bg-white mx-3'>
                    <img className='rounded-full ' src={t2} alt="" />
                    <h1>akjbdh</h1>
                    <p>DGVfgvgdgfusyhdfgfh</p>
                    <small><i>manager</i></small>

                </div>
                <div className='bg-white mx-3'>
                    <img className='rounded-full' src={t3} alt="" />
                    <h1>akjbdh</h1>
                    <p>DGVfgvgdgfusyhdfgfh</p>
                    <small><i>manager</i></small>

                </div>
                <div className='bg-white mx-3'>
                    <img className='rounded-full' src={t4} alt="" />
                    <h1>akjbdh</h1>
                    <p>DGVfgvgdgfusyhdfgfh</p>
                    <small><i>manager</i></small>

                </div>
                <div className='bg-white mx-3'>
                    <img className='rounded-full' src={t5} alt="" />
                    <h1>akjbdh</h1>
                    <p>DGVfgvgdgfusyhdfgfh</p>
                    <small><i>manager</i></small>

                </div>



            </Slider>

        </div>


    );
};

export default Item;