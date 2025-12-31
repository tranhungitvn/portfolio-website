import React from 'react'
import { homeImage } from '../assets'
import { AppText } from '../Constants'

const Home = () => {
  return (
    <div className='mt-7 px-4 md:px-20 items-center flex flex-col md:flex-row'>
      <div>
        <h1 className='text-[40px] font-bold'>{AppText.home}</h1>
        <h1 className='text-[40px] font-bold'>{AppText.Iam}
        <span className='text-purple-600'>{AppText.TranHung}</span> </h1>
        <h1 className='text-grey-400 mt-4'>{AppText.aboutMeDescripion}</h1>
        <button className='bg-purple-600 mt-4 p-2 px-3 transition-all ease-in-out hover:scale-110 text-white rounded-md'>Resume</button>
      </div>
      
      <img src={homeImage} className='w-[300px] w-[400px]' />
      </div>
  )
}

export default Home