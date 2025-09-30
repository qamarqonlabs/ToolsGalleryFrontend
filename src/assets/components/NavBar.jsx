import { useState } from "react";

function NavBar({categories, price, rating, easeOfUse, standard}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Tools Gallery</h1>
        <div className="relative w-full max-w-2xl">
          <input 
            type="text" 
            id="search-bar" 
            className="bg-gray-800 text-white w-full px-12 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 shadow-lg"
            placeholder="Search for tools..."
          />
          <button type="submit" className="absolute left-2 top-1/2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-full transition-colors duration-300">
            Search
          </button>
          <button 
            type="button" 
            onClick={() => setShowFilters(!showFilters)} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-full transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V19l-4 2v-5.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
        <div />
      </div>
    </nav>
  )
}

export default NavBar;
