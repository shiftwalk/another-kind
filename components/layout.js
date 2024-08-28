import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence, domAnimation, LazyMotion, m, useReducedMotion } from "framer-motion";
import SunnyIcon from "@/icons/sunny.svg";
import { useEffect } from "react";

export default function Layout({ children }) {
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();
  
  // useEffect(() => { lenis?.scrollTo('#app') } , [lenis]);
  useEffect(() => { lenis?.scrollTo(0, {offset: 0, immediate: true, duration: 1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))})} , [lenis]);
  
  let colors = ['bg-orange text-yellow', 'bg-yellow text-orange', 'bg-blue text-green', 'bg-green text-blue']
  
  let color = colors[colors.length * Math.random() | 0]
  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div 
          initial={{ y: '-100%', borderRadius: '0%' }}
          animate={{ y: '-100%', borderRadius: '100%' }}
          exit={{ y: 0, borderRadius: '0%' }}
          transition={{ duration: 0.66, ease: [0.71,0,0.17,1] }}
          className={`fixed inset-0 bg-green z-[2000] flex items-center justify-center cursor-wait`}>
            <m.div 
              initial={{ opacity: 0, rotate: shouldReduceMotion ? 0 : -90 }}
              animate={{ opacity: 0, rotate: shouldReduceMotion ? 0 :  -90 }}
              exit={{ opacity: 1, rotate: shouldReduceMotion ? 0 : 33 }}
              transition={{ delay: 0.1, duration: 0.66, ease: [0.71,0,0.17,1] }}
              className="w-[20%] max-w-[200px]"
            >
              <SunnyIcon className={`w-full text-yellow`} />
            </m.div>
        </m.div>

        <m.div 
          initial={{ y: 0, borderRadius: '0%' }}
          animate={{ y: '120%', borderRadius: '0%' }}
          exit={{ y: '120%', borderRadius: '0%' }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.71,0,0.17,1] }}
          className="fixed inset-0 bg-green z-[2000] flex items-center justify-center cursor-wait">
            <m.div 
              initial={{ opacity: 1, rotate:shouldReduceMotion ? 0 :  33 }}
              animate={{ opacity: 0, rotate: shouldReduceMotion ? 0 : -90 }}
              exit={{ opacity: 0, rotate:shouldReduceMotion ? 0 :  -90 }}
              transition={{ delay: 0.15, duration: 0.66, ease: [0.71,0,0.17,1] }}
              className="w-[20%] max-w-[200px]"
            >
              <SunnyIcon className={`w-full text-yellow`} />
            </m.div>
          </m.div>
      </LazyMotion>

      {children}
    </>
  )
}