import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Common/AuthAdmin/LoadingSpinner';

const MyProfilePortfolio = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className=' py-36 bg-[#fd4475] bg-opacity-10 px-5 text-center'>



            <div className="card  lg:w-8/12 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-center pb-10"> My Portfolio </h2>

                    <div className='text-left pb-10'>
                        <p> <b>My Name : </b> Golam Kibria</p>
                        <p> <b>My Email : </b> kibriakhandaker@gmail.com </p>
                        <p> <b>My Address : </b> Holding No:10, Puratan Court, Kishoregonj Sadar - 2300, Dhaka Bangladesh </p>
                        <p> <b>Educational Background: </b> Msc: (in Physics) from (Jagannath University, Dhaka , Bangladesh) </p>
                    </div>


                    <p className='text-left'> <b>SKILL : </b></p>
                    <hr />
                    <div className='text-left pb-10'>
                        <div className='pl-5'>
                            <p>  React, JavaScript, REST API , Firebase, Netlify, JWT, mongodb(database), Node(express)</p>
                            <p>  CSS framework: Bootstrap, Milligram, Tailwind </p>
                            <p>  WordPress: development, customization, and Any theme-builder</p>
                            <p>  Photoshop CS6, Sketch, Figma</p>
                            <p>  Hosting/cPanel/Server or Website Maintenance. and Git</p>
                        </div>
                    </div>


                    <p className='text-left'><b>Here is my Some Project Link: </b></p>
                    <hr />
                    <div className='text-left  pb-10'>
                        <div>
                            <p className='pl-5 pt-2'> 1) <a className='textClr uppercase' href="https://fruits-stock-house.web.app/"> fruits-stock-house </a>  </p>
                            <a href="https://fruits-stock-house.web.app/">
                                <img className="rounded-xl md:w-2/4 mx-auto" src="https://i.ibb.co/T1WYh6Y/fruits-house-12.jpg" alt="Shoes" />
                            </a>
                        </div>

                        <div>
                            <p className='pl-5 pt-2'> 2) <a className='textClr uppercase' href="https://a-smart-cleaner.web.app/"> SMART CLEANER  </a> </p>
                            <a href="https://a-smart-cleaner.web.app/">
                                <img className="rounded-xl md:w-2/4 mx-auto" src="https://i.ibb.co/b3QwLNZ/smart-cleaner-12.jpg" alt="Shoes" />
                            </a>
                        </div>

                        <p className='px-10 pt-10'> <b> About all the projects </b> All project created with React Js and also used Node Express for server working purposes , For Database used Mongo-DB </p>
                    </div>


                    <p className='text-left'><b>About Me: </b></p>
                    <hr />
                    <div className='text-left'>
                        <p>
                            Hello, I like develop and for learning for this, if I got any resource which helps me I try with this, I am also trying and even I am trying so hard every time, I am doing practice from online internet on others resource,
                            if i got any opportunity to build my career with this, i will take it without any confusion. because i love it and it's my target and I will achieve at any cost.
                            I want to be a full stack developer and I want to build my career in the developing sector.
                            want to learn a all top programming languages like JavaScript python, I also want to learn Web, Android, IOS and all types of application development.
                        </p>

                    </div>









                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>







        </div>
    );
};

export default MyProfilePortfolio;