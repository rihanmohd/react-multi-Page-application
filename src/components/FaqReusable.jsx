import React from 'react'


const FaqReusable = ({ title,heading, description, faqItems, reverseOrder = false }) => {
    return (
      <div
        className={` flex flex-row justify-center gap-8 ${
          reverseOrder ? "flex-row-reverse" : ""
        }`}
      >
        {/* Image/Placeholder */}
        <div className="w-[655px] h-[469px] bg-gray-300"></div>
  
        {/* Text Content */}
        <div className="w-[655px] h-[469px] ">
            <h2 className='text-lg font-extrabold text-gray-400 mt-2'>{heading}</h2>
          <h2 className="text-5xl font-bold uppercase leading-tight">{title}</h2>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group border-b border-gray-200 py-6 cursor-pointer"
              >
                <summary className="flex justify-between items-center font-extrabold text-lg uppercase">
                  {item.question}
                  <span className="ml-2 text-3xl group-open:rotate-180 transition-transform">
                    ^
                  </span>
                </summary>
                <p className="mt-2 text-gray-500">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    );
}  

export default FaqReusable