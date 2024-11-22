import React from 'react'
import logo from '../assets/images/Logo Homco 1.png'



const Navbar = () => {
  return (
    <>
    <div className="w-[1440px] h-[123px] mx-auto py-8 pl-28 bg-[#1A3E5C] border-b border-[#FFFFFF40] ">
{/* logo & nav */}
<div className="flex gap-20 ">
  <img src={logo}></img>
  <nav className="mt-4 text-[#FFFFFF]">
    <ul className="flex gap-20">
      <li className="text-lg text-[#FFFFFF]">Home</li>
      <li className="text-lg text-[#FFFFFF]">About Us </li>
      <li className="text-lg text-[#FFFFFF]">Our Services</li>
      <li className="text-lg text-[#FFFFFF]">Our projects</li>
      <li className="text-lg text-[#FFFFFF]">Portfolio</li>
      <li className="text-lg text-[#FFFFFF]">Pages</li>

    </ul>
  </nav>

  <svg className="inline" width="84" height="52" viewBox="0 0 84 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.7188 15.2266H60.2812C60.9844 15.2266 61.6875 14.6113 61.6875 13.8203V10.3047C61.6875 9.60156 60.9844 8.89844 60.2812 8.89844H23.7188C22.9277 8.89844 22.3125 9.60156 22.3125 10.3047V13.8203C22.3125 14.6113 22.9277 15.2266 23.7188 15.2266ZM23.7188 29.2891H60.2812C60.9844 29.2891 61.6875 28.6738 61.6875 27.8828V24.3672C61.6875 23.6641 60.9844 22.9609 60.2812 22.9609H23.7188C22.9277 22.9609 22.3125 23.6641 22.3125 24.3672V27.8828C22.3125 28.6738 22.9277 29.2891 23.7188 29.2891ZM23.7188 43.3516H60.2812C60.9844 43.3516 61.6875 42.7363 61.6875 41.9453V38.4297C61.6875 37.7266 60.9844 37.0234 60.2812 37.0234H23.7188C22.9277 37.0234 22.3125 37.7266 22.3125 38.4297V41.9453C22.3125 42.7363 22.9277 43.3516 23.7188 43.3516Z" fill="white"/>
</svg>
</div>
  </div>
    </>
  )
}

export default Navbar