import React from 'react'
import img from '../assets/images/img1.avif'


const SubHeader = ({ title, description, line2 }) => {
    return (
      <div className='mx-auto w-[1440px] h-[373px] flex flex-col pl-16 bg-cover bg-center opacity-90 '
      style={{ backgroundImage: `url(${img})` }}>
        <h1 className='text-6xl font-extrabold text-[#FFFFFF] uppercase mt-28'>{title}</h1>
        
        <p className='text-[#FFFFFF] text-lg mt-9'>{description}</p>
        <p className='text-[#FFFFFF] text-lg '>{line2}</p>
      </div>
  )
}

export default SubHeader