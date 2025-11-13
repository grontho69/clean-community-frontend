import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar(){
  // simple local state simulation; later integrate Firebase auth
  const navigate = useNavigate()
  const isLoggedIn = !!localStorage.getItem('cc_user') // placeholder

  function handleLogout(){
    localStorage.removeItem('cc_user')
    navigate('/')
  }

  return (
    <nav className="fixed w-full top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-recycle text-2xl text-green-600"></i>
          <Link to="/" className="text-xl font-bold text-gray-800">Clean Community</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/issues" className="text-gray-700 hover:text-green-600">All Issues</Link>
          {isLoggedIn ? (
            <>
              <Link to="/add-issue" className="text-gray-700 hover:text-green-600">Add Issue</Link>
              <Link to="/my-issues" className="text-gray-700 hover:text-green-600">My Issues</Link>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded">Login</Link>
              <Link to="/register" className="bg-gray-100 text-gray-800 px-4 py-2 rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
