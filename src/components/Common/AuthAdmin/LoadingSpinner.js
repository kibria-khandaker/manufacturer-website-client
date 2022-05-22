import React from 'react';

const LoadingSpinner = () => {
    return (
        <>
<div class="flex items-center justify-center ">
    <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
</div>
        </>
        // <div style={{ height: '300px' }} className='w-100 d-flex justify-content-center align-items-center'>
        //     <Button variant="success" disabled>
        //         <Spinner
        //             as="span"
        //             animation="grow"
        //             size="sm"
        //             role="status"
        //             aria-hidden="true"
        //         />
        //         Loading...
        //     </Button>
        // </div>


    );
};

export default LoadingSpinner;