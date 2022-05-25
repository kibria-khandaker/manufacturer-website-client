import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='mx-auto z-50 w-100 h-60 d-flex justify-content-center align-items-center'>
            <button type="button" className=" bg-indigo-600 rounded-xl text-white font-bold text-3xl px-10 mt-20 py-36" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                Processing...
            </button>
        </div>
    );
};

export default LoadingSpinner;