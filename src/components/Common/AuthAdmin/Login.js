import React from 'react';

const Login = () => {
    return (
        <div className=' bg-red-400 mt-24 flex justify-center items-center '>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-36">
                <div className="card-body">
                    <h1 className='text-2xl text-center' > Login </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-primary "> Login With Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;