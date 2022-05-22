import React from 'react';

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
    <div class="hero mt-36 py-36  bg-[#fd4475] bg-opacity-5 ">
      <div class="hero-content text-center">
        <div class="">
          <h1 class="text-4xl font-bold mb-10 text-[#fd4475] "> Our Business </h1>
          <p class="pb-20 w-3/5 mx-auto "> The client trusts us for our good quality products. So in a short time, we are reached to level position with our business, and maximum client return for continue business for a long time.  </p>

          <div className='grid md:grid-cols-3 gap-4'>



            <div class=" shadow">
              <div class="stat">
                <div class="stat-title uppercase"> Business relation </div>
                <span class="radial-progress my-3 text-[#FD4475] mx-auto" style={{ '--value': "70", '--size': '4rem', '--thickness': '4px', }}>80%</span>
                <div class="stat-desc"> Our maximum clients last month  <br /> return for Continue Business </div>
              </div>
            </div>

            <div class=" shadow">
              <div class="stat">
                <div class="stat-title uppercase">Total Clients</div>
                <div class="stat-value  my-5 text-[#FD4475]">1920</div>
                <div class="stat-desc"> We are doing business hole world, <br /> maximum country have our clients.  </div>
              </div>
            </div>

            <div class=" shadow">
              <div class="stat">
                <div class="stat-title uppercase"> Clients Satisfy </div>
                <span class="radial-progress  my-3 text-[#FD4475] mx-auto" style={styleValue2}>90%</span>
                <div class="stat-desc"> Our Focus on quality for safety, <br />  So Client totally satisfy with us </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;