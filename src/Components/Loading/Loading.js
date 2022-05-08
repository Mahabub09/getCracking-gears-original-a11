import React from 'react';

import { BallTriangle } from 'react-loader-spinner'
const Loading = () => {
    return (

        <div className='d-flex justify-center'>
            <BallTriangle
                height="100"
                width="75"
                color='salmon'
                ariaLabel='loading'
            >
            </BallTriangle>

        </div>
    );
};

export default Loading;