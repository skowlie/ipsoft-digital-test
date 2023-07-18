import React from 'react'
import {useState} from 'react'
import {ChevronLeft, ChevronRight} from 'react-feather'

function Carousel({children : images }) {
    const [curr, setCurr] = useState(0)

    const prev = () => 
        setCurr((curr) => (curr === 0 ? images.length -1 : curr -1))
    const next = () => 
        setCurr((curr) => (curr === images.length -1 ? 0 : curr +1))
    return (
    <>
        <div className="overflow-hidden relative rounded-xl">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={25} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        <ChevronRight size={25} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
    </>
    )
}

export default Carousel