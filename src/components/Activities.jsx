import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full
     md:flex mt-[-75px]'>  
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  text-white 		 text-4xl font-bold '> 
            Resorts
            </h3>
            <img src=' src\assets\resort.jpg '  className='w-full h-full object-cover relative border-4 border-white shadow-lg '/>            
        </div>

        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-4xl font-bold drop-shadow-2xl '>
               Ship
               </h3>
            <img src=' src\assets\ship.jpg ' className='w-full h-full object-cover relative border-4 border-white shadow-lg'/>            
        </div>

        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  text-white 	 text-4xl font-bold  '> Resorts</h3>
            <img src=' src\assets\resort.jpg ' className='w-full h-full object-cover relative border-4 border-white shadow-lg' />            
        </div>
    </div>
  )
}

export default Activities