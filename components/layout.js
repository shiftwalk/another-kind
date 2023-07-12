import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import SunnyIcon from "@/icons/sunny.svg";
import { useEffect } from "react";

export default function Layout({ children }) {
  const lenis = useLenis();
  // useEffect(() => { lenis?.scrollTo('#app') } , [lenis]);
  useEffect(() => { lenis?.scrollTo(0, {offset: 0, immediate: true, duration: 1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))})} , [lenis]);
  
  let colors = ['bg-orange text-yellow', 'bg-yellow text-orange', 'bg-blue text-green', 'bg-green text-blue']
  
  let color = colors[colors.length * Math.random() | 0]
  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div 
          initial={{ y: '-135%', scaleY: 1.2, scaleX: 1.33, borderRadius: '0%' }}
          animate={{ y: '-135%', scaleY: 1.2, scaleX: 1.33, borderRadius: '100%' }}
          exit={{ y: 0, scaleY: 1.2, scaleX: 1.33, borderRadius: '0%' }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 bg-green z-[2000] flex items-center justify-center cursor-wait">
            <m.div 
              initial={{ opacity: 0, scaleY: 0, scaleX: 0, rotate: 0 }}
              animate={{ opacity: 0, scaleY: 0, scaleX: 0, rotate: 0 }}
              exit={{ opacity: 1, scaleY: 0.8, scaleX: 0.75, rotate: 750 }}
              transition={{ delay: 0.1, duration: 1, ease: [0.85, 0, 0.15, 1] }}
              className="w-[20%] max-w-[200px]"
            >
              <SunnyIcon className={`w-full text-yellow`} />
            </m.div>
        </m.div>

        <m.div 
          initial={{ y: 0, scaleY: 1.2, scaleX: 1.33, borderRadius: '0%' }}
          animate={{ y: '135%', scaleY: 1.2, scaleX: 1.33, borderRadius: '100%' }}
          exit={{ y: '135%', scaleY: 1.2, scaleX: 1.33, borderRadius: '100%' }}
          transition={{ delay: 0.25, duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 bg-green z-[2000] flex items-center justify-center cursor-wait">
            <m.div 
              initial={{ opacity: 1, scaleY: 0.8, scaleX: 0.75, rotate: 750 }}
              animate={{ opacity: 0, scaleY: 0, scaleX: 0, rotate: 0 }}
              exit={{ opacity: 0, scaleY: 0, scaleX: 0, rotate: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.85, 0, 0.15, 1] }}
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