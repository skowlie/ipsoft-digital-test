import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import ServiceInfo from './ServiceInfo'


function ServicePage() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar />
    <ServiceInfo />
    <div className = "gradient-03 -z-10"/>
   </div>
  )
}

export default ServicePage
