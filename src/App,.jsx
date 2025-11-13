import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllIssues from './pages/AllIssues'
import IssueDetails from './pages/IssueDetails'
import AddIssue from './pages/AddIssue'
import MyIssues from './pages/MyIssues'
import MyContributions from './pages/MyContributions'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16 min-h-[calc(100vh-160px)]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/issues" element={<AllIssues/>} />
          <Route path="/issues/:id" element={<IssueDetails/>} />
          <Route path="/add-issue" element={<AddIssue/>} />
          <Route path="/my-issues" element={<MyIssues/>} />
          <Route path="/my-contributions" element={<MyContributions/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<div className="p-12 text-center">404 - Page not found</div>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}


export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white shadow-md p-4 flex justify-between">
        <Link to="/" className="text-xl font-bold text-green-600">CleanCommunity</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/issues" className="text-gray-700 hover:text-green-600">Issues</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues" element={<Issues />} />
      </Routes>

      <footer className="bg-gray-100 text-center py-4 mt-6">
        <p className="text-sm text-gray-500">© 2025 Clean Community | All rights reserved</p>
      </footer>
    </BrowserRouter>
  );
}
