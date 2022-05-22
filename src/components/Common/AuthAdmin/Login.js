// import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import auth from './../../../firebase.init';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const [token] =useToken(user || gUser)

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    // useEffect(() => {
    //     if (token) {
    //         navigate(from, { replace: true });
    //         // console.log(user || gUser);
    //     }
    // }, [token,from,navigate])

    let signInError;

    // if ( true || loading || gLoading) {
    if (loading || gLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error || gError) {
        signInError = <p className=' text-red-500 p-1'><small>{error?.message || gError?.message}</small></p>
    }

    if (user || gUser) {
        navigate(from, { replace: true });
        // console.log(user || gUser);
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <section className='flex justify-center items-center py-44 '>
            <div className="card w-96 bg-base-100 shadow-xl border-x min-h-screen">
                <div className="card-body">
                    <h2 className=" text-center text-2xl font-bold"> Login </h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

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
                            <input className="btn btnBgClr w-full max-w-xs font-light text-xl mt-4" type="submit" value='LOGIN' />

                        </form>

                        <p className='p-1'> <small>New to Doctors Portal? <Link className=' text-secondary' to={'/signup'}> Create new account </Link></small> </p>
                    </div>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline textClr"> CONTINUE WITH GOOGLE </button>
                </div>
            </div>
        </section>
    );
};

export default Login;