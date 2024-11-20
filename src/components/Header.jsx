import React from 'react'

import img from '../assets/images/image.png'


const Header = () => {
  return (
    <>
  
    <section className=" w-[1440px] h-[890px] mx-auto  px-10  bg-[#959595]">

<div className=" w-[1260px] h-[477px] flex gap-32  ml-4">
  {/* left side */}
  <div className="w-[655px] h-[477px] flex flex-col mt-36 ">
<p className=" text-xl font-bold  mb-4 text-gray-600">WELCOME TO HOMCO</p>
<p className="text-7xl font-extrabold text-[#FFFFFF] leading-tight">BUILD YOUR <br></br> ELEGAN DREAM <br></br> HOME INTERIOR</p>
<p className="my-7 text-lg text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>


<button className="w-[198px] h-[73px] p-2 py-5 bg-[#757575] text-lg text-[#FFFFFF]">Our Project</button>
  </div>

  {/* right side */}
  <div className="w-[427px] h-[427px] mt-40">
<img className="" src={img}></img>
  </div>
</div>
  
 </section>

 {/* <section className="w-[1440px] h-[890px] mx-auto px-10 bg-[#f9f9f9]">

<div className="w-[1260px] h-[477px] flex gap-16 ml-4"> */}
  {/* Left Side */}
  {/* <div className="w-[655px] h-[477px] flex flex-col justify-center mt-16">
    <p className="text-xl font-bold mb-4 text-[#E74C3C]">WELCOME TO HOMCO!</p>
    <p className="text-6xl font-extrabold text-[#333333] leading-tight">
      LET'S BUILD YOUR <br /> CRAZY DREAM <br /> HOME INTERIOR!
    </p>
    <p className="my-7 text-lg text-[#555555]">
      No matter how wacky your ideas are, we’ve got you covered! Let’s make your home awesome.
    </p>

    <button className="w-[220px] h-[60px] bg-[#E74C3C] text-[#fff] text-lg font-semibold rounded-full hover:bg-[#C0392B] transition duration-300">
      Our Projects
    </button>
  </div> */}

  {/* Right Side */}
  {/* <div className="w-[427px] h-[427px] mt-16">
    <img className="w-full h-full object-cover rounded-lg " src={img} alt="Interior Design" />
  </div>
</div>

</section> */}


    </>
  )
}

export default Header