import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { OTP } from './components/OTP'
import { Sidebar } from './answers/Sidebar'
function App() {
  

  return (<>
  <Sidebar />
   <button onClick={()=>{
    document.querySelector("html").classList.toggle("dark");
  }}>Theme</button>
  </>
    
  )
}

export default App
