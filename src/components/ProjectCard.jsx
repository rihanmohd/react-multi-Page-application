import React from 'react'
import img from '../assets/images/img9.avif'
import img1 from '../assets/images/img5.avif'
import img2 from '../assets/images/img14.avif'
import img3 from '../assets/images/img6.avif'
import img4 from '../assets/images/img17.avif'
import img5 from '../assets/images/img2.avif'








const ProjectCard = () => {

// InfoBox.js


const Card = ({ title, text1, text2, text3,imgUrl }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-[450px] w-[427px] bg-cover bg-center'
       style={{ backgroundImage: `url(${imgUrl})` }}></div>
      {/* White box */}
      <div className='flex flex-col w-[367px] h-[362px] pl-20 pt-10 bg-white -mt-28'>
        <p className='text-3xl font-extrabold'>{title}</p>

        <p className='text-[#6E6E6E] text-lg inline-block mt-3'>
          <svg className='inline mr-3 my-2' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
          </svg>
          {text1}
        </p>
        
        <p className='text-[#6E6E6E] text-lg inline-block'>
          <svg className='inline mr-3 my-2' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
          </svg>
          {text2}
        </p>
        
        <p className='text-[#6E6E6E] text-lg inline-block'>
          <svg className='inline mr-3 my-2' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
          </svg>
          {text3}
        </p>

        <button className='w-[198px] h-[73px] bg-[#757575] mt-7 text-white text-xl'>Contact Us</button>
      </div>
    </div>
  );
};






  return (
    <section className='w-[1340px] h-[1454px] mx-auto mt-8 mb-72'>
<div className='grid grid-rows-2 gap-12'>
    {/* first row */}
    <div className='grid grid-cols-3 gap-6'>

  
    <Card
    imgUrl={img}
        title="PRE MADE HOME CONSULTATION"
        text1="Office Meeting"
        text2="Working Time Call"
        text3="Come to Place"
      />
   
   <Card
   imgUrl={img1}
        title="INTERIOR DESIGN REPAIR"
        text1="Office Meeting"
        text2="Working Time Call"
        text3="Come to Place"
      />
      <Card
      imgUrl={img2}
      title="EXPERIENCE FRAME DESIGN"
      text1="Office Meeting"
      text2="Working Time Call"
      text3="Come to Place"
    />
    
</div>
 {/* second row */}
 <div className='grid grid-cols-3 gap-6 mt-5'>
    <Card
    imgUrl={img3}
        title="FULL HOUSE DECORATION"
        text1="Office Meeting"
        text2="Working Time Call"
        text3="Come to Place"
      />

<Card
imgUrl={img4}
        title="PRE BUILDING HOME DESIGN"
        text1="Office Meeting"
        text2="Working Time Call"
        text3="Come to Place"
      />

<Card
imgUrl={img5}
        title="FULL PACKAGE DECORATION"
        text1="Office Meeting"
        text2="Working Time Call"
        text3="Come to Place"
      />
    </div>
</div>
    </section>
  )
}

export default ProjectCard