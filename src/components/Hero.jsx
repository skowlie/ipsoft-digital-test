import React from 'react'
import heroVid from '../assets/video.mp4'
import downArrow from '../assets/arrow-down.svg'
import Typed from 'react-typed'
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'


const Hero = () => {
    return (
        <div className="w-full h-[85vh] pt-[85px]">
            <video className="object-cover h-full w-screen absolute -z-10" src={heroVid} autoPlay loop muted></video>
            <div className="w-full h-full flex justify-center items-center flex-col text-white text-center px-4">
                <h1 className="text-5xl py-3 md:text-8xl sm:text-7xl"><motion.span
                    variants={fadeIn('up', 'tween', .5, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    >Predict</motion.span> <motion.span
                        variants={fadeIn('up', 'tween', 1, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                    >Your</motion.span> <motion.span
                        variants={fadeIn('up', 'tween', 1.5, 1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-bold text-transparent">World.</motion.span></h1>
                <div className="flex justify-center items-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: "2",
                            delay: "2",
                        }}
                        className="md:text-4xl sm:text-3xl text-xl font-extralight">Transparent glassbox models that <br />explain their <Typed className="md:text-4xl sm:text-3xl text-xl" strings={["solutions.", "models.", "process."]}
                            typeSpeed={120} backSpeed={140} loop
                        /></motion.p>
                </div>

                <motion.div className="py-6 hover:shadow-blue-500" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a class="scroll-smooth" href="#platforms"><motion.button
                        variants={fadeIn('up', 'tween', 2.5, 1)}
                        initial = "hidden"
                        whileInView = "show" 
                        viewport = {{once: true}}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 rounded-3xl justify-center ">Explore Platforms</motion.button></a>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 'tween', 2.7, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport = {{once: true}}
                >
                    <img className="h-6" src={downArrow} alt="down arrow" />
                </motion.div>
            </div>
        </div>




    )
}

export default Hero

