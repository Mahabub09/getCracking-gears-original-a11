import React from 'react';
import { GiRunningShoe } from "react-icons/gi";
import { GiLightBackpack } from "react-icons/gi";
import { GiSleevelessJacket } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import Typewriter from 'typewriter-effect';
import './Home.css'
import useItems from '../../hooks/useItems';
import Item from '../../Components/Item/Item';
import Team from '../../Components/Team/Team';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router-dom';


const Home = () => {
    const [items] = useItems();
    return (

        <div>
            <div>
                <header className="header">
                    <div className="header__logo-box ">

                        <div className="header__logo-box-mid">
                            <img src="https://www.wanderon.in/svg/nav/phone.svg" alt="phone" />
                            <h1>+880145456454</h1>
                        </div>

                        <div className="header__logo-box-last d-flex justify-around">
                            <Link to="home">HOME</Link>

                        </div>
                    </div>

                    <div className="header__text-box">
                        <h1 >
                            COMPLETE ALL YOUR OUTDOOR NEEDS HERE
                        </h1>
                        <p className='mt-10'>
                            <Typewriter
                                options={{
                                    strings: [' Spreading Happiness', ' Connecting People', " Creating Memories", " Creating Stories", " Fulfilling Adventure"],
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString()
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .callFunction(() => {
                                            console.log('All strings were deleted');
                                        })
                                        .start();
                                }}
                            />
                        </p>


                        <div className="header__text-box-inputContainer">
                            <input placeholder="Search Whatever You Want" />
                            <div className="header__text-box-inputContainer-imgConatiner">
                                <img src="https://www.wanderon.in/svg/search.svg" alt="phone" />
                            </div>
                        </div>

                    </div>
                </header >
            </div>
            <div className='my-5 container back'>
                <div >
                    <hr className='my-2' />
                    <div className='d-flex justify-evenly'>
                        <div className='text-7xl'>
                            <GiRunningShoe></GiRunningShoe>
                        </div>
                        <div className='text-7xl'>
                            <GiLightBackpack></GiLightBackpack>
                        </div>
                        <div className='text-7xl'>
                            <GiSleevelessJacket></GiSleevelessJacket>
                        </div>
                        <div className='text-7xl'>
                            <GiCampingTent></GiCampingTent>
                        </div>

                    </div>

                    <hr className='my-2' />


                </div>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        items.slice(0, 6).map(item => <Item
                            key={item.id}
                            item={item}
                        ></Item>)
                    }

                </div>

                <div>
                    <Team></Team>
                </div>


            </div>

            <Loading></Loading>

        </div>
    );
};

export default Home;