import React, { useEffect } from 'react'
export default function AddIssue(){
  useEffect(()=>{ document.title = 'Clean Community | Add Issue' }, [])
  function handleSubmit(e){
    e.preventDefault()
    // For now just show alert stored in localStorage or console
    alert('Issue submitted (demo). Integrate backend to save.');
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Report a New Issue</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required placeholder="Issue Title" className="w-full p-2 border rounded" />
          <select required className="w-full p-2 border rounded">
            <option value="">Select category</option>
            <option>Garbage</option>
            <option>Illegal Construction</option>
            <option>Broken Public Property</option>
            <option>Road Damage</option>
          </select>
          <input required placeholder="Location" className="w-full p-2 border rounded" />
          <input placeholder="Image URL" className="w-full p-2 border rounded" />
          <input type="number" required placeholder="Amount" className="w-full p-2 border rounded" />
          <textarea required placeholder="Description" className="w-full p-2 border rounded" />
          <div className="text-right">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Submit Report</button>
          </div>
        </form>
      </div>
    </div>
  )
}
