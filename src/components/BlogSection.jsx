
import React from 'react'
import SubHeader from '../components/SubHeader'

const BlogSection = () => {
    const Card = ({ title, description}) => {
        return (
          
 <div className='w-[427px] h-[549px] flex flex-col items-center'>
           
           <div className='bg-[#C4C4C4] w-[427px] h-[350px]'>
            
           </div>
   
           {/* Content Section */}
           <div className='bg-white mt-4 w-full h-[169px] p-4'>
             <p className='text-2xl font-extrabold uppercase my-2 leading-tight'>
               {title}
             </p>
             <p className='text-lg text-gray-700 mt-2'>
               {description}
             </p>
           </div>
         </div>
        
         
        );
      };
    


  return (
    
    <>
     <div className='mb-44'>
      
      <SubHeader 
        title="BLOG" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,"
        line2="consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
    </div>

{/* deff compo */}

    <div className="grid grid-cols-3 w-[1340px]  mx-auto gap-8 -mt-16">
     
          <Card
             
               title="10 TRENDS HOME DECORATION For Best House"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
               imageUrl=""
             />
          
     
          <Card
             
             title="HOW TO CLEANING OWN HOME For Best Cleaning"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
             imageUrl=""
           />
     
     <Card
             
             title="TIPS CHOICE BEST AGENCY For House Decoration"
             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
             imageUrl=""
           />
           
     
           
         </div>



         {/* second row */}
         <div className="grid grid-cols-3 w-[1340px]  mx-auto gap-6 mt-16">
     
     <Card
        
          title="HOW TO DRAW HOME DESIGN For Consystency"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          imageUrl=""
        />
     

     <Card
        
        title="TIPS MODELING DECORATION HOME modern"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        imageUrl=""
      />

<Card
        
        title="HOW TO IMPROVE HOME DESIGN For Future"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        imageUrl=""
      />
      

      
    </div>

    </>
   
  )
}


export default BlogSection