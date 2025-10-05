import {useState} from "react"
import DropListInput from './DropListInput.jsx'
function NavBar({categories, price, rating, easeOfUse, standard}) {
  const [opened, setOpened] = useState(true)
  const [drops, setDrops] = useState([])
  const stockPlaceHolders =  ["hello", "Worls", "how are", "the days", "going ", "of all", "you"];
  const stockDrops =  ["drop item 1", "drop item 2", "drop item 3", "drop item 4"];
  const onChange = (nq) => {
 setDrops(
      stockDrops.filter(i => {
        if (i.includes(nq) && nq != "") {
          return true
        }
      })
    )
  }
  return (
    <nav className="bg-opacity-50 backdrop-blur-md p-4 fixed w-full top-0 z-10">
      <div className="mx-auto flex justify-center items-center">
        <form className="flex" onSubmit={(e) => {e.preventDefault()}}>
          <button onClick={() => {setOpened(!opened)}} className=" bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-l-full transition-colors duration-300">
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.60848 4C6.03761 4 5.07993 5.7279 5.91249 7.06L8.08798 10.5408C8.68397 11.4944 8.99999 12.5963 8.99999 13.7208V16.7639C8.99999 17.5215 9.42799 18.214 10.1056 18.5528L13.5528 20.2764C14.2177 20.6088 15 20.1253 15 19.382V13.7208C15 12.5963 15.316 11.4944 15.912 10.5408L18.0875 7.06C18.9201 5.7279 17.9624 4 16.3915 4H7.60848Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
          <DropListInput  placeHolders={stockPlaceHolders}  drops={drops} onChange={onChange} />
          <button className=" bg-violet-600 hover:bg-violet-700 text-white font-bold py-1 px-4 rounded-r-full transition-colors duration-300">
            Search
          </button>
          <div className={`fixed h-[100vh] ${opened && "translate-x-1/1"} transition-all scrollbar scrollbar-thumb-purple-500 scrollbar-track-transparent bg-gray-800 right-0 overflow-y-scroll top-0 p-4`}>
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
