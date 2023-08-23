import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w[1140px] m-auto w-full px-4 py-16'> 
       <h2 className='text-center text-grey-700 p-4'> Gallery </h2>
       <div className='grid sm:grid-cols-5 gap-4'>
    
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover ' src='src\assets\resort.jpg'/>
        </div>
        <div>
            <img className='w-full h-full object-cover ' src='src\assets\ship.jpg'/>
        </div>
        <div>
            <img className='w-full h-full object-cover ' src='src\assets\resort.jpg'/>
        </div>
        <div>
            <img className='w-full h-full object-cover ' src='src\assets\ship.jpg'/>
        </div>
        <div>
            <img className='w-full h-full object-cover ' src='src\assets\resort.jpg'/>
        </div>

       </div>
    </div>
  )
}

export default Gallery