import React from 'react';
import CountUp from 'react-countup';
import { FcBusinessman } from 'react-icons/fc';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

const OurUsers = () => {
    return (
        <div className='container'>
            <hr />
            <div className='d-flex align-items-center justify-evenly '>

                <div className='fs-1 ' ><FcBusinessman className='mx-auto'></FcBusinessman>
                    <small><i>SUPPLIER</i></small><br />
                    <div className='d-flex align-items-center'> <CountUp className='mx-auto text-red-500' end={100} duration={5}></CountUp><AiOutlinePlus></AiOutlinePlus></div>
                </div>
                <div className='fs-1'><MdProductionQuantityLimits className='mx-auto' ></MdProductionQuantityLimits>
                    <small><i>PRODUCTS</i></small><br />
                    <div className='d-flex align-items-center'> <CountUp className='mx-auto text-red-500' end={6700} duration={5}></CountUp><AiOutlinePlus></AiOutlinePlus></div>
                </div>
                <div className='fs-1'><FaUsers className='mx-auto'></FaUsers>
                    <small><i>USERS</i></small><br />
                    <div className='d-flex align-items-center'> <CountUp className='mx-auto text-red-500' end={3000} duration={5}></CountUp><AiOutlinePlus></AiOutlinePlus></div>
                </div>


            </div>
            <hr />


        </div>
    );
};

export default OurUsers;