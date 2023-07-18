import React from 'react'
import aiIcon from '../assets/ai-icon.svg'
import light from '../assets/light.svg'
import paper from '../assets/paper.svg'
import data from '../assets/data.svg'
import blue from '../assets/blue.png'
import {motion} from "framer-motion"
import { fadeIn, staggerContainer } from '../utils/motion'

const Platforms = () => {
    return (
        <motion.div background = "blue.png" variants = {staggerContainer} initial = "hidden" whileInView="show" viewport={{once: true}} id = "platforms" className="pt-10 pb-20 bg-[#f7f7f7] text-slate-800 text-center">
            <motion.h1 variants = {fadeIn('up', 'tween', .6, 1)} className="py-4 text-5xl font-bold">Our Services.</motion.h1>
            <motion.div variants = {fadeIn('up', 'tween', .6, 1)} className="p-2 max-w-xl mx-auto">
                <motion.p variants = {fadeIn('up', 'tween', .6, 1)} className="text-[#888888] pt-1 pb-2 font-extralight">
                    Explore IPSoft Digital's many services that can aid in the accelerating your business.
                </motion.p>
            </motion.div>

            <motion.div variants = {staggerContainer} initial = "hidden" whileInView = "show" viewport = {{once: true}} className="pt-8 py-6 mx-auto p-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1240px]">
                <motion.div whileHover = {{scale: 1.05,
                }} variants={fadeIn('right', 'tween', 0.2, 1)}
                className="text-left py-12 px-8 flex-col hover:border-4 border-blue-400 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950">
                    <div className = "rounded-full bg-gradient-to-tl from-cyan-500 to-blue-500 p-2 inline-flex"> <img className = "h-[35px]"src={aiIcon} alt="AI" /> </div>
                    <h3 className = "font-bold text-2xl py-2 text-white">A=nelytics</h3>
                    <p className = "font-extralight text-md text-[#cacacaa7]">Mines data to extract insights about the dynamics of your
                        business automatically, to assist humans in learning and decision making.
                        It's about productive collaboration of human intelligence and artificial intelligence.
                    </p>
                </motion.div>

                <motion.div whileHover = {{scale: 1.05,
                }} variants={fadeIn('right', 'tween', 0.4, 1)}
                className="text-left py-12 px-8 flex-col hover:border-4 border-blue-400 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950">
                <div className = "rounded-full bg-gradient-to-tl from-cyan-500 to-blue-500 p-2 inline-flex"> <img className = "h-[35px]"src={light} alt="AI" /> </div>
                    <h3 className = "font-bold text-2xl py-2 text-white">Outsourcing</h3>
                    <p className = "font-extralight text-md text-[#cacacaa7]">Machine Learning (ML) builds statistical models to make 
                    predictions. A model makes a prediction for an input record. Additionally, it must also explain 
                    the reason for the prediction as a simple rule comprising influential predictors and their thresholds. This is called Explainable AI, one of the essential aspects of Transparent ML.
                    </p>
                </motion.div>
                <motion.div whileHover = {{scale: 1.05,
                }} variants={fadeIn('right', 'tween', 0.6, 1)}
                className="text-left py-12 px-8 flex-col hover:border-4 border-blue-400 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950">
                <div className = "rounded-full bg-gradient-to-tl from-cyan-500 to-blue-500 p-2 inline-flex"> <img className = "h-[35px]"src={paper} alt="AI" /> </div>
                    <h3 className = "font-bold text-2xl py-2 text-white">Consulting</h3>
                    <p className = "font-extralight text-md text-[#cacacaa7]">Analyze positive and negative sentiments in social media, 
                    customer reviews, and other sources to get a pulse on your brand. Organize and understand large 
                    collections of text data, by assigning “tags” or categories according to each individual text’s topic or theme.


                    </p>
                </motion.div>
                <motion.div whileHover = {{scale: 1.05,
                }} variants={fadeIn('right', 'tween', 0.8, 1)}
                className="text-left py-12 px-8 flex-col hover:border-4 border-blue-400 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950">
                <div className = "rounded-full bg-gradient-to-tl from-cyan-500 to-blue-500 p-2 inline-flex"> <img className = "h-[35px]"src={data} alt="AI" /> </div>
                    <h3 className = "font-bold text-2xl py-2 text-white">Staff Augmentation</h3>
                    <p className = "font-extralight text-md text-[#cacacaa7]">Mines data to extract insights about the dynamics of your
                        business automatically, to assist humans in learning and decision making.
                        It's about productive collaboration of human intelligence and artificial intelligence.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Platforms