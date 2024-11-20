import React from 'react'

const Card = () => {
  return (
   
 <section className="w-[1282px] h-[296px] grid grid-cols-3 mx-auto -mt-20">
  {/* first card */}
  <div className="flex flex-col gap-4 p-9 bg-[#1B1717]">
    <h2 className="text-3xl font-bold text-[#FFFFFF]">HOME DESIGN <br></br> CONSULTATION</h2>
    <p className="w-[368px] h-[78px] text-lg text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
    <svg className="mt-3" width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5098 7.60938H1.05469C0.439453 7.60938 0 8.13672 0 8.66406V13.5859C0 14.2012 0.439453 14.6406 1.05469 14.6406H27.5098V18.7715C27.5098 20.6172 29.7949 21.584 31.1133 20.2656L38.6719 12.6191C39.5508 11.8281 39.5508 10.5098 38.6719 9.71875L31.1133 2.07227C29.7949 0.753906 27.5098 1.7207 27.5098 3.56641V7.60938Z" fill="white"/>
</svg>
  </div>

  {/* second */}
  <div className="flex flex-col gap-4 p-9 bg-[#757575]">
    <h2 className="text-3xl font-bold text-[#FFFFFF]">HOME DESIGN 3D 2D <br></br> INTERIOR SERVICE</h2>
    <p className="w-[368px] h-[78px] text-lg text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
    <svg className="mt-3" width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5098 7.60938H1.05469C0.439453 7.60938 0 8.13672 0 8.66406V13.5859C0 14.2012 0.439453 14.6406 1.05469 14.6406H27.5098V18.7715C27.5098 20.6172 29.7949 21.584 31.1133 20.2656L38.6719 12.6191C39.5508 11.8281 39.5508 10.5098 38.6719 9.71875L31.1133 2.07227C29.7949 0.753906 27.5098 1.7207 27.5098 3.56641V7.60938Z" fill="white"/>
</svg>
  </div>

  {/* third */}
  <div className="flex flex-col gap-4 p-9 bg-[#1B1717]">
    <h2 className="text-3xl font-bold text-[#FFFFFF]">HOME DESIGN 3D 2D <br></br> INTERIOR SERVICE</h2>
    <p className="w-[368px] h-[78px] text-lg text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    
    <svg className="mt-3" width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5098 7.60938H1.05469C0.439453 7.60938 0 8.13672 0 8.66406V13.5859C0 14.2012 0.439453 14.6406 1.05469 14.6406H27.5098V18.7715C27.5098 20.6172 29.7949 21.584 31.1133 20.2656L38.6719 12.6191C39.5508 11.8281 39.5508 10.5098 38.6719 9.71875L31.1133 2.07227C29.7949 0.753906 27.5098 1.7207 27.5098 3.56641V7.60938Z" fill="white"/>
</svg>
  </div>
 </section>

// {/* <section className="w-[1282px] h-[296px] grid grid-cols-3 mx-auto -mt-20 gap-8">

// {/* First Card */}
// <div className="flex flex-col gap-4 p-9 bg-[#E74C3C] rounded-lg shadow-lg">
//   <h2 className="text-3xl font-extrabold text-[#FFFFFF]">
//     HOME DESIGN <br /> CONSULTATION
//   </h2>
//   <p className="w-[368px] h-[78px] text-lg text-[#FFFFFF]">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//   </p>
//   <svg className="mt-3 cursor-pointer hover:scale-110 transition-transform duration-300" width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M27.5098 7.60938H1.05469C0.439453 7.60938 0 8.13672 0 8.66406V13.5859C0 14.2012 0.439453 14.6406 1.05469 14.6406H27.5098V18.7715C27.5098 20.6172 29.7949 21.584 31.1133 20.2656L38.6719 12.6191C39.5508 11.8281 39.5508 10.5098 38.6719 9.71875L31.1133 2.07227C29.7949 0.753906 27.5098 1.7207 27.5098 3.56641V7.60938Z" fill="white"/>
//   </svg>
// </div>

// {/* Second Card */}
// <div className="flex flex-col gap-4 p-9 bg-[#F39C12] rounded-lg shadow-lg">
//   <h2 className="text-3xl font-extrabold text-[#FFFFFF]">
//     HOME DESIGN 3D 2D <br /> INTERIOR SERVICE
//   </h2>
//   <p className="w-[368px] h-[78px] text-lg text-[#FFFFFF]">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//   </p>
//   <svg className="mt-3 cursor-pointer hover:scale-110 transition-transform duration-300" width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M27.5098 7.60938H1.05469C0.439453 7.60938 0 8.13672 0 8.66406V13.5859C0 14.2012 0.439453 14.6406 1.05469 14.6406H27.5098V18.7715C27.5098 20.6172 29.7949 21.584 31.1133 20.2656L38.6719 12.6191C39.5508 11.8281 39.5508 10.5098 38.6719 9.71875L31.1133 2.07227C29.7949 0.753906 27.5098 1.7207 27.5098 3.56641V7.60938Z" fill="white"/>
//   </svg>
// </div>

// {/* Third Card */}
// <div className="flex flex-col gap-4 p-9 bg-[#E74C3C] rounded-lg shadow-lg">
//   <h2 className="text-3xl font-extrabold text-[#FFFFFF]">
//     HOME DESIGN 3D 2D <br /> INTERIOR SERVICE
//   </h2>
//   <p className="w-[368px] h-[78px] text-lg text-[#FFFFFF]">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//   </p>
//   <svg className="mt-3 cursor-pointer hover:scale-110 transition-transform duration-300" width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M27.5098 7.60938H1.05469C0.439453 7.60938 0 8.13672 0 8.66406V13.5859C0 14.2012 0.439453 14.6406 1.05469 14.6406H27.5098V18.7715C27.5098 20.6172 29.7949 21.584 31.1133 20.2656L38.6719 12.6191C39.5508 11.8281 39.5508 10.5098 38.6719 9.71875L31.1133 2.07227C29.7949 0.753906 27.5098 1.7207 27.5098 3.56641V7.60938Z" fill="white"/>
//   </svg>
// </div>

// </section> */}


    
  )
}

export default Card