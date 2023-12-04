import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="bg-blue-400"> 
      <div className="container h-48 mx-auto flex items-center"> 
        <img src={logo} alt="Logo" className='h-64'/> 
        
        <form> 
          <textarea
            className="rounded-3xl border-2 border-gray-400 p-3 w-[800px]" 
            rows="1"
            placeholder="Search for a city..." 
          />
        </form>
      </div>
    </nav>
  )
}

export default Navbar
