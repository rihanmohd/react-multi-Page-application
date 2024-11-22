import React from 'react'

import img from '../assets/images/image.png'
import img1 from '../assets/images/img8.avif'
import img2 from '../assets/images/bg.avif'


const Header = () => {
  return (
    <>
  
    <section className=" w-[1440px] h-[890px] mx-auto  px-10  bg-[#959595] bg-cover bg-center" 
    style={{ backgroundImage: `url(${img1})` }}>

<div className=" w-[1260px] h-[477px] flex gap-32  ml-4">
  {/* left side */}
  <div className="w-[655px] h-[477px] flex flex-col mt-36 ">
<p className=" text-xl font-bold  mb-4 text-gray-600">WELCOME TO HOMCO</p>
<p className="text-7xl font-extrabold text-[#FFFFFF] leading-tight">BUILD YOUR <br></br> ELEGAN DREAM <br></br> HOME INTERIOR</p>
<p className="my-7 text-lg text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>


<button className="w-[198px] h-[73px] p-2 py-5 bg-[#F5] text-lg text-white">Our Project</button>
  </div>

  {/* right side */}
  <div className="w-[427px] h-[427px] mt-40"
  style={{ backgroundImage: `url(${img2})` }}>

  </div>
</div>
  
 </section>


    </>
  )
}

export default Header