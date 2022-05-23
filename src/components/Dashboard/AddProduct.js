import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log('Add Product data',data);
    }

    return (
        <div>
            <h2> Add Product </h2>
            {/* --------------------------- */}

            {/* --------------------------- */}

        </div>
    );
};

export default AddProduct;