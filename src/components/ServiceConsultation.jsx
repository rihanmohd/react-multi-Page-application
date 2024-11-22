import React from 'react'
import img from '../assets/images/img11.avif'
import img2 from '../assets/images/img12.avif'
import img3 from '../assets/images/img13.avif'



const ServiceConsultation = () => {
  const DesignConsultation = ({ reverse,title,imageUrl }) => {
    return (
      <div className='w-[1390px] h-[515px] mx-auto grid grid-cols-2 gap-28'>
        {/* Left Section */}
        <div className={`w-[705px] ${reverse ? 'order-2' : 'order-1'} bg-cover bg-center`} 
        style={{
          backgroundImage: `url(${imageUrl})`,
          
        }}></div>
  
        {/* Right Section */}
        <div className={`w-[655px] flex flex-col ${reverse ? 'order-1' : 'order-2'}`}>
          <p className='text-xl font-extrabold mb-5 text-gray-500'>Design Consultation</p>
          <p className='text-5xl font-extrabold leading-tight'>{title}</p>
          <p className='mt-6 text-gray-900 text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className='mt-5 text-gray-900 inline-block ml-2 text-xl'>
            <svg className='inline' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
            </svg> Prebuild Home
          </p>
          <p className='text-gray-900 inline-block ml-2 my-4 text-xl'>
            <svg className='inline' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
            </svg> Home Design Planning
          </p>
          <p className='text-gray-900 inline-block ml-2 text-xl'>
            <svg className='inline' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
            </svg> Trend Home Design
          </p>
          <button className='w-[198px] h-[73px] bg-gray-700 mt-9 text-white text-xl'>Contact Us</button>
        </div>
      </div>
    );
  };
  



  return (
    <div className='mt-32 mb-40 flex flex-col gap-32'>
        
       
<DesignConsultation 
imageUrl={img}
title="HOME DESIGN CONSULTATION SERVICES"
 reverse={false} />

{/* Reversed Order */}
<DesignConsultation
imageUrl={img2}
title="HOME DESIGN 3D 2D INTERIOR SERVICES"
 reverse={true} />


<DesignConsultation 
imageUrl={img3}
title="ALL IN ONE HOME INTERIOR DESIGN"
 reverse={false} />
    </div>
  )
}

export default ServiceConsultation