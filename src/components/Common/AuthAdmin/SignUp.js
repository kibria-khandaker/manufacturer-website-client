import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

import useToken from '../../../hooks/useToken';
import LoadingSpinner from './LoadingSpinner';
import auth from './../../../firebase.init';

const SignUp = () => {
    const [userAuth] = useAuthState(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser)

    const navigate = useNavigate()

    let signInError;

    useEffect(() => {
        if (token) {
            navigate('/about')
        }

    }, [token,navigate])

    if (loading || gLoading || updating) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error || gError || updateError) {
        signInError = <p className=' text-red-500 p-1'><small> {error?.message || gError?.message || updateError?.message} </small></p>

        // if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
        //     return alert('Email Used already ' + navigate('/login'))
        // }
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // console.log('updateProfile done');
        // navigate('/')
    }

    return (
        <section className='flex justify-center items-center py-36'>

            {
                userAuth ?
                    <div className='py-5 text-center'>
                        <h5 className='text-2xl pb-5'> You are Login With  : <b> {userAuth?.email}</b> </h5>
                        <p className='textClr'>
                            if you want to sign up with new Account, Place :
                            <button className=' bg-light border-0 font-bold text-start rounded-0 textClr' onClick={() => signOut(auth)}>
                                Logout
                            </button>
                        </p>
                    </div>
                    :
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className=" text-center text-2xl font-bold"> Sign Up </h2>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* xxxxxxxxxxxx Name Field xxxxxxxxxxxx */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Name </span>
                                        </label>
                                        <input
                                            type="name"
                                            placeholder="Type Name"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.name.message} </span>}
                                        </label>
                                    </div>

                                    {/* xxxxxxxxxxxx Email Field xxxxxxxxxxxx */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Email </span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Type Email"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a Valid Email'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.email.message} </span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500"> {errors.email.message} </span>}

                                        </label>
                                    </div>

                                    {/* xxxxxxxxxxxx password Field xxxxxxxxxxxx */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text"> Password </span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Type password"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Password Minimum 6 Characters  '
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.password.message} </span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500"> {errors.password.message} </span>}
                                        </label>
                                    </div>

                                    {signInError}
                                    {/* xxxxxxxxxxxx submit Btn xxxxxxxxxxxx */}
                                    <input className="btn w-full max-w-xs font-light text-xl mt-4" type="submit" value='Sign Up' />

                                </form>
                                <p className='p-1'> <small>  Already Have an Account? <Link className=' text-secondary' to={'/login'}> Please Login </Link></small> </p>
                            </div>
                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-outline"> CONTINUE WITH GOOGLE </button>
                        </div>
                    </div>
            }

        </section>
    );
};

export default SignUp;