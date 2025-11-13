import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const dummyIssues = window.__DUMMY_ISSUES__ || [] // we'll inject if needed

export default function Home(){
  useEffect(()=>{ document.title = 'Clean Community | Home' }, [])
  // For quick demo we can show 6 latest from dummyIssues
  const recent = dummyIssues.slice().reverse().slice(0,6)
  return (
    <div>
      <section className="bg-gray-900 text-white h-[420px] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Report. Resolve. Rejuvenate.</h1>
          <p className="mb-6 max-w-2xl mx-auto">Your eyes on the street, your voice for change.</p>
          <Link to="/add-issue" className="bg-green-600 px-6 py-3 rounded text-white">Report an Issue</Link>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Recent Complaints</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.length === 0 ? <div>No recent issues.</div> :
            recent.map(i => (
              <div key={i.id} className="bg-white p-4 rounded shadow">
                <img src={i.imageUrl} alt={i.title} className="w-full h-40 object-cover rounded" />
                <h3 className="font-bold mt-3">{i.title}</h3>
                <p className="text-sm text-gray-600">{i.description.substring(0,80)}...</p>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}
