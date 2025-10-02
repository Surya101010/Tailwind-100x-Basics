import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { OTP } from './components/OTP'

function App() {
  

  return (
    <div className='h-full bg-blue-300 '>
      <div className='flex text-blue-500 p-32 justify-center'>
        Webinar<div className='text-white'>.gg</div>
      </div>
      <div className=' flex justify-center py-4'>
        Verify Your Age
      </div>
      <div className=' flex flex-col justify-center items-center mt-6'>
        <p>Please Confirm your Birth Year</p>
        <input type='integer' placeholder='Your Birth Year' name='Birth'></input>
      </div>
      <div className=' flex justify-center'>
        <button>Continue</button>
        </div>
        <div className='flex justify-center'>
          <OTP />
        </div>
        
    </div>
  )
}

export default App
