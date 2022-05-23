import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='mx-auto z-50 w-100 h-60 d-flex justify-content-center align-items-center'>
            <button type="button" className="bgClr rounded-xl text-white font-bold px-10 py-5" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                Processing...
            </button>
        </div>
    );
};

export default LoadingSpinner;