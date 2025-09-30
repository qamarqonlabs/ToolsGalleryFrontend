import {useState} from "react"
function NavBar({categories, price, rating, easeOfUse, standard}) {
  const [opened, setOpened] = useState(false)
  return (
    <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-center items-center">
        <form className="relative">
          <button onClick={() => {setOpened(!opened)}} className=" bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-full transition-colors duration-300">
🔎
          </button>
          <input 
            type="text" 
            id="search-bar" 
            className="bg-gray-800 text-white w-96 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300 shadow-lg"
            placeholder="Search for tools..."
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-full transition-colors duration-300">
            Search
          </button>
          <div className={`fixed h-[100vh] ${opened && "translate-y-1/1"}  scrollbar scrollbar-thumb-purple-500 scrollbar-track-transparent bg-gray-800 right-0 overflow-y-scroll top-0 p-4`}>
            <h1 className="flex justify-between p-3">Filters <span className="cursor-pointer" onClick={() => {setOpened(!opened)}}>❌</span></h1>
<h2 className="bg-violet-600 p-2 font-bold rounded-full">Category</h2>
           {categories.map(i => <label key={i} className="p-4 hover:bg-gray-500 rounded-full flex justify-between" for={i}>{i.toUpperCase()}<input type="checkbox" name={i} value={i} /></label>)}
<h2 className="bg-violet-600 p-2 font-bold rounded-full">Price</h2>
           {price.map(i => <label  key={i}  className="p-4 hover:bg-gray-500 rounded-full flex justify-between"  for={i}>{i.toUpperCase()}<input type="checkbox" name={i} value={i} /></label>)}
<h2 className="bg-violet-600 p-2 font-bold rounded-full">Rating</h2>
           {rating.map(i => <label  key={i}  className="p-4 hover:bg-gray-500 flex rounded-full  justify-between" for={i}>{i.toUpperCase()}<input type="checkbox" name={i} value={i} /></label>)}
<h2 className="bg-violet-600 p-2 font-bold rounded-full">Ease Of Use</h2>
           {easeOfUse.map(i => <label   key={i} className="p-4 hover:bg-gray-500 rounded-full  flex justify-between" for={i}>{i.toUpperCase()}<input type="checkbox" name={i} value={i} /></label>)}
<h2 className="bg-violet-600 p-2 font-bold rounded-full">Standard</h2>
           {standard.map(i => <label  key={i} className="p-4 hover:bg-gray-500 flex rounded-full  justify-between"  for={i}>{i.toUpperCase()}<input type="checkbox" name={i} value={i} /></label>)}
          </div>
        </form>
      </div>
    </nav>
  )
}

export default NavBar;
