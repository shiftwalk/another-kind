import { useLenis } from "@studio-freight/react-lenis";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import SunnyIcon from "@/icons/sunny.svg";
import { useEffect } from "react";

export default function Layout({ children }) {
  const lenis = useLenis();
  useEffect(() => { lenis?.scrollTo(0, { immediate: true }) } , [lenis]);
  let colors = ['bg-orange text-yellow', 'bg-yellow text-orange', 'bg-blue text-green', 'bg-green text-blue']
  
  let color = colors[colors.length * Math.random() | 0]
  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div 
          initial={{ y: '-110%', scaleY: 1.2, scaleX: 1.33, borderRadius: '0%' }}
          animate={{ y: '-110%', scaleY: 1.2, scaleX: 1.33, borderRadius: '100%' }}
          exit={{ y: 0, scaleY: 1.2, scaleX: 1.33, borderRadius: '0%' }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 bg-green z-[200] flex items-center justify-center">
            <m.div 
              initial={{ opacity: 0, scaleY: 0, scaleX: 0, rotate: 0 }}
              animate={{ opacity: 0, scaleY: 0, scaleX: 0, rotate: 0 }}
              exit={{ opacity: 1, scaleY: 0.8, scaleX: 0.75, rotate: 12 }}
              transition={{ delay: 0.1, duration: 1, ease: [0.85, 0, 0.15, 1] }}
              className="w-[25%] max-w-[320px]"
            >
              <SunnyIcon className={`w-full text-yellow`} />
            </m.div>
        </m.div>

        <m.div 
          initial={{ y: 0, scaleY: 1.2, scaleX: 1.33, borderRadius: '0%' }}
          animate={{ y: '110%', scaleY: 1.2, scaleX: 1.33, borderRadius: '100%' }}
          exit={{ y: '110%', scaleY: 1.2, scaleX: 1.33, borderRadius: '100%' }}
          transition={{ delay: 0.25, duration: 1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 bg-green z-[200] flex items-center justify-center">
            <m.div 
              initial={{ opacity: 1, scaleY: 0.8, scaleX: 0.75, rotate: 12 }}
              animate={{ opacity: 0, scaleY: 0, scaleX: 0, rotate: -12 }}
              exit={{ opacity: 0, scaleY: 0, scaleX: 0, rotate: -12 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.85, 0, 0.15, 1] }}
              className="w-[25%] max-w-[320px]"
            >
              <SunnyIcon className={`w-full text-yellow`} />
            </m.div>
          </m.div>
      </LazyMotion>

      {children}
    </>
  )
}