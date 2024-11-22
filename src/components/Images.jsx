import React from 'react'
import img1 from '../assets/images/img1.avif'
import img2 from '../assets/images/img2.avif'
import img3 from '../assets/images/img3.avif'
import img4 from '../assets/images/img4.avif'
import img5 from '../assets/images/img5.avif'

const Images = () => {
  return (
    <div className='mt-16 w-[1687px] h-[252px] mx-auto grid grid-cols-5 gap-7'>
<img className='w-[250px] h-full bg-[#C4C4C4]' src={img1}></img>
<img className='w-[313px] h-full bg-[#C4C4C4]' src={img2}></img>
<img className='w-[313px] h-full bg-[#C4C4C4]' src={img3}></img>
<img className='w-[313px] h-full bg-[#C4C4C4]' src={img4}></img>
<img className='w-[250px] h-full bg-[#C4C4C4] -mr-10 ' src={img5}></img>
    </div>
  )
}

export default Images