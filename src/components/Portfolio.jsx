import React from "react";
import img1 from '../assets/images/img9.avif'
import img2 from '../assets/images/img8.avif'
import img3 from '../assets/images/img11.avif'


const PortfolioSection = () => {
    return (
        <div className="w-[1340px] h-[760px] mx-auto relative flex mt-40 gap- p-8 bg-white">
          {/* Left Section */}
          <div className="w-[655px] h-[471px] mt-8 flex flex-col items-start ">
            <p className=" text-gray-500 uppercase font-extrabold mb-4">Perfect Partner</p>
            <h1 className="text-4xl font-extrabold mb-4 leading-relaxed">
              WE HAVE PRIORITY FOR <br />
              CAN CREATE DREAM <br />
              HOME DESIGN
            </h1>
            <p className="text-gray-600 mb-6 w-[655px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br></br> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <br></br> inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <button className="px-12 py-4 text-lg bg-[#757575] text-white ">
              Portfolio
            </button>
          </div>
    
          {/* Right Section */}
          <div className="relative w-[655px] h-[760px] -mt-20">
            {/*first*/}
            <div className="absolute bg-gray-200 w-[541px] h-[350px] top-0 left-10"   style={{ backgroundImage: `url(${img1})` }}></div>
            {/* Middle Box */}
            <div className="absolute bg-gray-300 w-[541px] h-[350px] top-[130px] right-40"  style={{ backgroundImage: `url(${img2})` }}></div>
            {/* third Box */}
            <div className="absolute bg-gray-400 w-[541px] h-[350px] top-[410px] right-10 "  style={{ backgroundImage: `url(${img3})` }}></div>
          </div>
        </div>


      );
    
  };
  
  export default PortfolioSection;