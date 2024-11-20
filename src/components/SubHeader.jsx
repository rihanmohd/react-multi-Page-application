import React from 'react'



const SubHeader = ({ title, description }) => {
    return (
      <div className='mx-auto w-[1440px] h-[373px] bg-[#959595] flex flex-col pl-16'>
        <h1 className='text-6xl font-extrabold text-[#FFFFFF] uppercase mt-28'>{title}</h1>
        <p className='text-[#FFFFFF] text-lg mt-9'>{description}</p>
      </div>
  )
}

export default SubHeader