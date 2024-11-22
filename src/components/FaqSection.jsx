import React from 'react'
import SubHeader from './SubHeader'
import FaqReusable from './FaqReusable'



const FaqSection = () => {
  return (
    <>
   
    <div className='mb-44'>
      
    <SubHeader 
      title="FAQ" 
      description="Lorem ipsum dolor sit amet, consectetur telit tellus, luctus nec
       ullamcorper"
      line2=" mattis, pulvinar dapibus  consectetur  Ut elit tellus,  leo."
    />
  </div>




  {/* faqs */}
  <div className="-mt-10">
      {/* First Component: Text on the right */}
      <FaqReusable
      heading="First QUestion Answer"
        title="Question Answer Trending Weekly"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
         luctus nec ullamcorper mattis, pulvinar dapibus leo."
        faqItems={[
          { question: "How long day needed?", answer: "Please contact support" },
          { question: "How to claim insurance?", answer: "Please contact support" },
          { question: "Can I request people working?", answer: "Please contact support" },
        ]}
        reverseOrder={false}
      />

<div className='mt-32'>
 {/* Second Component: Text on the left */}
 <FaqReusable
      heading="Second QUestion Answer"
        title="Usually Asked Question  Clients"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
         ullamcorper mattis, pulvinar dapibus leo."
        faqItems={[
          { question: "Where I get meeting day?", answer: "Check your email for details." },
          { question: "Can Homco pick me to office?", answer: "Please contact support" },
          { question: "Can I credit this price?", answer: "Please contact support." },
        ]}
        reverseOrder={true}
      />
</div>
     
    </div>

  </>
  )
}

export default FaqSection