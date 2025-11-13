import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <i className="fas fa-recycle text-3xl text-green-500"></i>
            <span className="text-2xl font-bold text-white">Clean Community</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">A platform for citizens to report local environmental and cleanliness issues.</p>
        </div>
        <div>
          <h3 className="text-white mb-3 uppercase">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>All Issues</li>
            <li>Report an Issue</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-3 uppercase">Follow Us</h3>
          <div className="flex space-x-4">
            <a className="text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a className="text-gray-400"><i className="fab fa-x-twitter"></i></a>
          </div>
          <p className="text-sm text-gray-500 mt-6">&copy; 2025 Clean Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
