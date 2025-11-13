import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">Clean Community 🌱</h1>
      <p className="text-gray-600 mt-3">
        Report and Track Environmental Issues in Your Area
      </p>
      <Link
        to="/issues"
        className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        View Issues
      </Link>
    </div>
  );
}

function Issues() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">All Issues</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <img
            src="https://placehold.co/400x200"
            alt="Issue"
            className="rounded mb-3"
          />
          <h3 className="font-bold">Garbage Overflow</h3>
          <p className="text-sm text-gray-600">
            Garbage not collected for 5 days.
          </p>
          <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
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
