import '../styles/index.css'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollBar() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
    <div className = "w-full max-w-[1240px] mx-auto">
      <ul className = "scroll-ul" ref={ref}>
        <motion.li whileHover = {{scale: 1.05}} className = "scroll-li bg-gradient-to-tl from-slate-950 to-slate-800 rounded-2xl border-4 border-[#cacacaa7]">
            
        </motion.li>
        <motion.li whileHover = {{scale: 1.05}}  className = "scroll-li bg-gradient-to-tl from-slate-950 to-slate-800 rounded-2xl border-4 border-[#cacacaa7]">

        </motion.li>
        <motion.li whileHover = {{scale: 1.05}}  className = "scroll-li bg-gradient-to-tl from-slate-950 to-slate-800 rounded-2xl border-4 border-[#cacacaa7]">

        </motion.li>
        <motion.li whileHover = {{scale: 1.05}}  className = "scroll-li bg-gradient-to-tl from-slate-950 to-slate-800 rounded-2xl border-4 border-[#cacacaa7]">

        </motion.li>
        <motion.li whileHover = {{scale: 1.05}}  className = "scroll-li bg-gradient-to-tl from-slate-950 to-slate-800 rounded-2xl border-4 border-[#cacacaa7]">

        </motion.li>
       
      </ul>
      </div>
    </>
  );
}