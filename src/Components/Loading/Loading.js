import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div>
            <Triangle
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            >
            </Triangle>

        </div>
    );
};

export default Loading;