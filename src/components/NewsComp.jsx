import React from 'react'
import ScrollBar from '../components/ScrollBar'

const NewsComp = () => {
  return (
    <div className = "text-center px-4 w-full mx-auto pt-[200px]">
        <h3 className = "pb-4 text-white text-center text-[50px] font-light">See how AI could affect <span className = "font-semibold bg-gradient-to-l from-cyan-500 to-blue-500 bg-clip-text text-transparent">YOUR</span> business:</h3>
        <div className = "overflow-x-visible pl-4"><ScrollBar /></div>
    </div>
  )
}

export default NewsComp