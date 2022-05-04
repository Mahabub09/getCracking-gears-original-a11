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
                <div >
                    <img className=' w-50 rounded-full mx-auto ' src={t1} alt="" />
                    <h1>akjbdh</h1>
                    <p>DGVfgvgdgfusyhdfgfh</p>
                    <small><i>manager</i></small>

                </div>
                <div>
                    <img className='w-50 rounded-full mx-auto ' src={t2} alt="" />
                    <h1>akjbdh</h1>
                    <p>DGVfgvgdgfusyhdfgfh</p>
                    <small><i>manager</i></small>

                </div>
                <div >
                    <img className='w-50 rounded-full mx-auto' src={t3} alt="" />
                    <div className='text-center'>
                        <h1>Sergio Peinson</h1>
                        <p>DGVfgvgdgfusyhdfgfh</p>
                        <small><i>manager</i></small>
                    </div>

                </div>
                <div>
                    <img className='w-50 rounded-full mx-auto ' src={t4} alt="" />
                    <div className='text-center'>
                        <h1 className='fs-4'>Mario Bangua</h1>
                        <p>DGVfgvgdgfusyhdfgfh</p>
                        <small><i>manager</i></small>
                    </div>

                </div>
                <div >
                    <img className='w-50 rounded-full mx-auto ' src={t5} alt="" />
                    <div className='text-center'>
                        <h1 className='fs-4'>Emma Jackson</h1>
                        <p>DGVfgvgdgfusyhdfgfh</p>
                        <small><i>manager</i></small>
                    </div>

                </div>



            </Slider>

        </div>


    );
};

export default Item;