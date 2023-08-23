import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label> Destination </label>
                    <select className='lg:w-[300px] md:w-full border rounded-md ps-2'>
                        <option>Cox Bazar </option>
                        <option>BandarBan </option>
                        <option>Sylhet </option>
                        <option>Nikli </option>
                    </select>                
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
                    <lable>Check In</lable>
                    <input type='date'/>
                </div>
                <label>Check Out</label>
                <input type='date'/>
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 py-2'>
                <label>Search</label>
                <button className='w-full'>Rates & Availibilties </button>
            </div>
        </form>
    </div>
  )
}

export default Booking