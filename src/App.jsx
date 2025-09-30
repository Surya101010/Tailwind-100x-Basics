import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    <div className='grid grid-cols-12'>
      <div className='col-span-12 bg-blue-600  sm:col-span-4'>
        Hey inside blue div
      </div><div className='col-span-12 bg-red-600 sm:col-span-6'>
        Hey inside red div
      </div><div className='col-span-12 bg-green-700 sm:col-span-2'>
        Hey inside green div
      </div>  
    </div>
    
    </>
  )
}

export default App
