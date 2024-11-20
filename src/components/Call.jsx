import React from 'react'

const Call = () => {
    return (
        <div className="relative mt-80 w-[1440px] h-[570px] bg-[#757575] mx-auto">
          {/* Overlapping Gray Box */}
          <div className="absolute -mt-20 left-20 w-[427px] h-[300px] bg-[#C4C4C4]"></div>
    
          {/* White Card */}
          <div className="absolute top-32 left-64 w-[427px] h-[221px] bg-white shadow-lg p-8">
            <div className=" items-center mb-4 ">
              {/* Phone Icon */}
              
              <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.6816 32.4414L33.8379 28.2227C33.5742 28.1348 33.3105 28.0469 32.959 28.0469C32.3438 28.0469 31.7285 28.3984 31.377 28.8379L26.9824 34.1992C20.127 30.9473 14.6777 25.498 11.4258 18.6426L16.7871 14.248C17.2266 13.8965 17.5781 13.2812 17.5781 12.5781C17.5781 12.3145 17.4902 12.0508 17.4023 11.7871L13.1836 1.94336C12.832 1.15234 12.041 0.625 11.1621 0.625C11.0742 0.625 10.8984 0.712891 10.7227 0.712891L1.58203 2.82227C0.615234 3.08594 0 3.87695 0 4.84375C0 27.4316 18.1934 45.625 40.7812 45.625C41.748 45.625 42.5391 45.0098 42.8027 44.043L44.9121 34.9023C44.9121 34.7266 44.9121 34.5508 44.9121 34.4629C44.9121 33.584 44.3848 32.793 43.6816 32.4414Z" fill="#757575"/>
</svg>
             
              <p className="text-4xl font-extrabold mt-8">CALL US NOW</p>
            </div>
            <p className="text-gray-900 text-xl">(+02) 123 456 789</p>
          </div>
    
          {/* Right-Aligned Text */}
          <div className="absolute top-32 right-1 w-[655px] h-[270px]">
            <p className="text-7xl text-white font-extrabold leading-tight w-full">
              "WORK HARD & REAT QUALITY IS <br></br> MY PRIORITY"
            </p>
          </div>
        </div>
      );
    
    
}

export default Call