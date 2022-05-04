import React from 'react';
import { GiRunningShoe } from "react-icons/gi";
import { GiLightBackpack } from "react-icons/gi";
import { GiSleevelessJacket } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import Items from '../../Components/Items/Items';
import Team from '../../Components/Team/Team';
import Typewriter from 'typewriter-effect';
import './Home.css'


const Home = () => {
    return (

        <div>
            <div>
                <header class="header">
                    <div class="header__logo-box ">

                        <div class="header__logo-box-mid">
                            <img src="https://www.wanderon.in/svg/nav/phone.svg" alt="phone" />
                            <h1>+880145456454</h1>
                        </div>

                        <div class="header__logo-box-last d-flex justify-around">
                            <h1>Home</h1>
                            <h1>WORKCATIONS</h1>
                            <h1>BLOGS</h1>
                        </div>
                    </div>

                    <div class="header__text-box">
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

                    <h1>

                    </h1>
                </div>
                <div>
                    <Items></Items>
                </div>
                <div>
                    <Team></Team>

                </div>

            </div>
        </div>
    );
};

export default Home;