import React from 'react';
import { GrDeliver, } from "react-icons/gr";
import { FaPeopleCarry, FaRegHandshake, FaUsers } from "react-icons/fa";

const BusinessSummary = () => {
  // const styleValue1 = {
  //   '--value': 80,
  //   '--size': '4rem',
  //   '--thickness': '4px',
  // }
  const styleValue2 = {
    '--value': 90,
    '--size': '4rem',
    '--thickness': '4px',
  }
  return (
    <div className="hero mt-36 py-36  bg-[#fd4475] bg-opacity-5 px-16">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-4xl font-bold mb-10 text-[#fd4475] "> Our Business </h1>
          <p className="pb-20 w-3/5 mx-auto "> The client trusts us for our good quality products. So in a short time, we are reached to level position with our business, and maximum client return for continue business for a long time.  </p>

          <div className='grid md:grid-cols-3 gap-4'>

            <div className=" shadow">
              <div className="stat">
                <div className="flex text-4xl justify-center text-[#fd4475] text-center"> <FaPeopleCarry></FaPeopleCarry> </div>
                <div className="stat-title uppercase"> Handover Tools </div>
                <div className="stat-value text-[#fd4475b5] mb-5 ">59824</div>
                <div className="stat-desc"> We are Supplied huge construction <br />
                  tools, Also Able to manufacture  </div>
              </div>
            </div>

            <div className=" shadow">
              <div className="stat">
              <div className="flex text-4xl justify-center text-[#fd4475] text-center"> <FaRegHandshake></FaRegHandshake> </div>
                <div className="stat-title uppercase"> Business relation </div>
                <span className="radial-progress mb-2 text-[#fd4475b5]  mx-auto" style={{ '--value': "80", '--size': '3rem', '--thickness': '4px', }}>80%</span>
                <div className="stat-desc"> Our maximum clients last month  <br /> return for Continue Business </div>
              </div>
            </div>

            <div className=" shadow">
              <div className="stat">
              <div className="flex text-4xl justify-center text-[#fd4475] text-center"> <FaUsers></FaUsers> </div>
                <div className="stat-title uppercase">Total Clients</div>
                <div className="stat-value text-[#fd4475b5]  mb-5 ">1920</div>
                <div className="stat-desc"> We are doing business hole world, <br /> maximum country have our clients.  </div>
              </div>
            </div>

            {/* <div className=" shadow">
              <div className="stat">
                <div className="stat-title uppercase"> Clients Satisfy </div>
                <span className="radial-progress  my-3 text-[#FD4475] mx-auto" style={styleValue2}>90%</span>
                <div className="stat-desc"> Our Focus on quality for safety, <br />  So Client totally satisfy with us </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;