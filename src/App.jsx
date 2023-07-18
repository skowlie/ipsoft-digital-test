import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Platforms from './components/Platforms'
import Consumers from './components/Consumers'
import NewsComp from './components/NewsComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <div className = "gradient-04 -z-10"/>
     <Platforms />
     <div className = "gradient-02 -z-10"/>
     <Consumers />
     <div className = "gradient-03 -z-10"/>
     <NewsComp />
    </>
  )
}

export default App
