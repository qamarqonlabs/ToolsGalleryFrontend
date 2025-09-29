function NavBar() {
  return (
    <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-center items-center">
        <div className="relative">
          <input 
            type="text" 
            id="search-bar" 
            className="bg-gray-800 text-white w-96 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 shadow-lg"
            placeholder="Search for tools..."
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-full transition-colors duration-300">
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
