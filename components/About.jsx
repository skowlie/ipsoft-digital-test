import React from 'react'
import { motion } from "framer-motion"
import styles from '../styles/index.js'
import { fadeIn } from '../utils/motion.js'

const About = () => {
    return (
        <>
            <section className="relative px-6 pb-[180px]">
                <motion.div variants={fadeIn('up', 'tween', .5, 1)}
                    initial = "hidden"
                    whileInView = "show"
                    viewport={{once: true}}
                className = "bg-transparent from-cyan-500 to-blue-500 rounded-3xl p-4 max-w-[1240px] mx-auto">
                    <p className="text-white text-center font-light">IPsoft Digital is a leading Decision AI software company with a rich history spanning
                        24 years. As the original parent company of Amelia.ai, the market-leading
                        conversational AI platform, IPsoft Digital has consistently demonstrated
                        innovation and excellence in the field. Our mission is to enable businesses
                        across industries to make data-driven decisions with confidence and optimize
                        their operations by leveraging analytical insights that drive tangible business
                        outcomes.</p>
                </motion.div>
            </section>
        </>
    )
}

export default About

{/*



*/}