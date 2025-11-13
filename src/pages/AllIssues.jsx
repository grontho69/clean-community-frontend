import React, { useEffect } from 'react'
const dummyIssues = window.__DUMMY_ISSUES__ || []

export default function AllIssues(){
  useEffect(()=>{ document.title = 'Clean Community | All Issues' }, [])
  const all = dummyIssues.slice().reverse()
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">All Reported Issues</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {all.map(i => (
          <div key={i.id} className="bg-white rounded shadow overflow-hidden">
            <img src={i.imageUrl} alt={i.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-bold">{i.title}</h3>
              <p className="text-sm text-gray-600">{i.location}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="font-semibold text-green-700">${i.amount}</span>
                <a className="text-sm bg-green-600 text-white px-3 py-1 rounded" href={`/issues/${i.id}`}>See Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
