import React from 'react'
import SubHeader from './SubHeader'


const PortfolioNav = () => {
  return (
    <>
   
    <div className='mb-44'>
      
    <SubHeader 
      title="Portfolio Gallery" 
     
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    />
  </div>


<div className='w-[1340px] h-[412px] mx-auto grid grid-cols-2 gap-9 -mt-16'>
    <div className='w-[655px] bg-gray-600'></div>
    {/* right */}
    <div className='w-[655px] flex flex-col mt-10'>
        <p className='text-xl font-extrabold uppercase text-[#757575]'>Team Working</p>
        <p className='text-5xl font-extrabold text-[#1B1717] mt-4 leading-tight'>LETS SEE OUR PERFECT TEAM WORKER</p>
        <p className='text-lg text-[#6E6E6E] my-6'>Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Ut elit tellus <br></br>,
             luctus nec ullamcorper
              mattis, pulvinar dapibus leo.</p>

  <div className='flex flex-col gap-4'>
    <p className='text-lg text-[#6E6E6E] inline-block'><svg className='inline mr-2' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
</svg> Flexible Time</p>
    <p className='text-lg text-[#6E6E6E] inline-block'>
    <svg className='inline mr-2' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
</svg> Perfect Work</p>
    <p className='text-lg text-[#6E6E6E] inline-block'><svg className='inline mr-2' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z" fill="#757575"/>
</svg> Client Priority</p>
  </div>
    </div>
</div>



{/* our recent work section */}
    <section className="max-w-[1340px] mx-auto h-[1331px] mt-28">
    <p className='text-lg font-extrabold uppercase text-[#6E6E6E]'>Portfolio</p>
    <p className='text-4xl font-extrabold uppercase mt-6 mb-20'>OUR RECENT WORK</p> 
     
      {/* First Row */}
      <div className="flex gap-4 mb-4">
        <div className="bg-gray-300 w-[541px] h-[350px]"></div>
        <div className="bg-gray-300 w-[769px] h-[350px]"></div>
      </div>
      {/* Second Row */}
      <div className="flex gap-4 mb-4">
        <div className="bg-gray-300 w-[426px] h-[350px]"></div>
        <div className="bg-gray-300 w-[426px] h-[350px]"></div>
        <div className="bg-gray-300 w-[426px] h-[350px]"></div>
      </div>
      {/* Third Row */}
      <div className="flex gap-4">
        <div className="bg-gray-300 w-[313px] h-[350px]"></div>
        <div className="bg-gray-300 w-[426px] h-[350px]"></div>
        <div className="bg-gray-300 w-[541px] h-[350px]"></div>
      </div>
    </section>
  

</>
  )
}

export default PortfolioNav