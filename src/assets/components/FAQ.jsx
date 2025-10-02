import { useState } from "react"

function FAQEl({ q, a }) {
  const [opened, setOpened] = useState(false)

  return (
    <div className="border-b border-gray-700 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpened(prev => !prev)}
      >
        <p className="font-medium text-violet-300">{q}</p>
        <span className={`transform transition-transform duration-300 ${opened ? 'rotate-45' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </div>
      <div className={`mt-2 text-gray-400 overflow-hidden transition-all  ${opened ? "h-0" : 'h-fit'}`}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default FAQEl

