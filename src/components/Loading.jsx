import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            
            <Triangle
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                />

        </div>
    );
};

export default Loading;