import React from 'react';
import { GiRunningShoe } from "react-icons/gi";
import { GiLightBackpack } from "react-icons/gi";
import { GiSleevelessJacket } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";


const Home = () => {
    return (
        <div className='my-5 container'>
            <div>
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

        </div>
    );
};

export default Home;