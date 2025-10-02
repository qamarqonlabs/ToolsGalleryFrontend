import {useState, useEffect, useRef} from 'react'
 function DropListInput({drops, placeHolders, onChange, value}) {
  const inputRef = useRef(null)
  const [placeHolder, setPlaceHolder] = useState(placeHolders[0])
  useEffect(() => {
    const interval = setInterval(() => {
   if (placeHolder === placeHolders[placeHolders.length -1 ]) {
      setPlaceHolder(placeHolders[0])
    }
    else {
      let prevPlaceHolder = placeHolders.findIndex(p => p === placeHolder)
      setPlaceHolder(placeHolders[prevPlaceHolder + 1])
    }
    }, 1000);
    return () => clearInterval(interval)
  })
  return (
  <div className="relative w-full max-w-lg mx-auto">
    <input ref={inputRef} type="text" onChange={() => {onChange(inputRef.current.value)}} value={value} placeholder={placeHolder} className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
      <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
        {drops.map(i => <p onClick={() => {inputRef.current.value = i}} className="block px-4 py-2 text-gray-300 cursor-pointer hover:bg-gray-700">{i}</p>)}
      </div>
  </div>
  )
}


 export default DropListInput
