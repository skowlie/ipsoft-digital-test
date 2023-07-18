import React from 'react'
import Carousel from './Carousel'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer} from '../utils/motion'
import stars from '../assets/carousel-template.png'
import night from '../assets/night-street.jpg'
import land from '../assets/land-pic.jpg'

const images = [
  stars,
  night,
  land,
]

const Comsumers = () => {
  return (
    <div className = "">
    <div className = "bg-gray-900 py-8">
    <motion.div variants = {staggerContainer} initial = "hidden" whileInView = "show" viewport = {{once: true}}className = "w-full h-full lg:flex mx-auto max-w-[1240px]">
      <motion.div variants = {fadeIn('right', 'tween', 0.4, 1)}className = "mx-auto max-w-[620px]">
        <h3 className = "text-[50px] p-4 text-white font-extralight text-center lg:text-left">Testimonials from <spam className = "font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">REAL</spam> consumers:</h3>
      <div>
        <p className = "px-4 py-2 mx-auto text-white font-extralight lg:text-left text-center max-w-[620px]">IPSoft Digital is recognized by top companies for industry leadership in, 
          services, services, services and service. Don't take our word for it - 
          review our consumers recognition from the past several years. </p>
      </div>
      <div className = "p-4 text-center mx-auto lg:text-left">
        <button className = "p-2 px-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl"><span className = "text-white inline-flex items-center">Explore<svg class="w-4 h-4 ml-2 explore-svg" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className = ""stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span></button>
      </div>
      </motion.div>
      <motion.div variants={fadeIn('up','tween', 0.7, 1)} className = "max-w-[620px] p-4 mx-auto">
        <Carousel>
          {images.map((s) => (
            <img src = {s} />
          ))}
        </Carousel>
      </motion.div>
    </motion.div>
    </div>
    </div>
  )
}

export default Comsumers