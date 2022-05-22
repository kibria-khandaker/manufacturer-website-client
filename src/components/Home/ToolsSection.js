import React from 'react';
import tools1 from '../../img//tool1.jpg'

const ToolsSection = () => {
    return (
        <div className='  grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 lg:pt-40 px-5 md:px-10 lg:px-20 mx-auto'>

            <div class="card lg:card-side bg-base-100 shadow border">
                <figure><img src={tools1} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotify app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn border-0 bg-[#FD4475]">Listen</button>
                    </div>
                </div>
            </div>

            <div class="card lg:card-side bg-base-100 shadow border">
                <figure><img src={tools1} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn  border-0 bg-[#FD4475]">Listen</button>
                    </div>
                </div>
            </div>

            <div class="card lg:card-side bg-base-100 shadow border">
                <figure><img src={tools1} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn  border-0 bg-[#FD4475]">Listen</button>
                    </div>
                </div>
            </div>

            <div class="card lg:card-side bg-base-100 shadow border">
                <figure><img src={tools1} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn  border-0 bg-[#FD4475]">Listen</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolsSection;