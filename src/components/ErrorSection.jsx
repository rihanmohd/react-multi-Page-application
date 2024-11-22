import React from 'react'
import Footer from '../components/Footer'


const ErrorSection = () => {
  return (
    <>
    <section className='mx-auto w-[1440px] h-[1065px] bg-[#959595] text-center py-72 -mb-20'>
        <p className='text-8xl font-bold text-white mb-8 uppercase'>ERROR 404</p>
        <p className='text-white text-xl font-bold uppercase'>PAGE NOT FOUND, PLEASE GO BACK</p>
        <button className='w-[198px] h-[74px] bg-[#757575] text-xl text-center text-white mt-8'>Order Now</button>

    </section>
<div className=''>
<Footer />
</div>
  
    </>
  )
}

export default ErrorSection