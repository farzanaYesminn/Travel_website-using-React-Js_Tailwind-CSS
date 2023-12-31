import React from 'react'
import img1 from "../assets/resort.jpg";
import img2 from "../assets/ship.jpg";


const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full
     md:flex mt-[-75px]'>  
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  text-white 		 text-4xl font-bold '> 
            Resorts
            </h3>
            <img src={img1}  className='w-full h-full object-cover relative border-4 border-white shadow-lg '/>            
        </div>

        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-4xl font-bold drop-shadow-2xl '>
               Ship
               </h3>
            <img src={img2} className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>            
        </div>

        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  text-white 		 text-4xl font-bold '> 
            Hotel
            </h3>
            <img src={img1}  className='w-full h-full object-cover relative border-4 border-white shadow-lg '/>            
        </div>

    </div>
  )
}

export default Activities