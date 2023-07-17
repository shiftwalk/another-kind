import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SunnyIcon from "@/icons/sunny.svg";
import SanityImageScale from './sanity-image-scale';
import Div100vh from 'react-div-100vh';

export default function HeroProject({ image, heading }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "100%"]
  })
  const scale = useTransform(scrollYProgress,[0, 1],[1, 1.25],{ clamp: true })
  const move = useTransform(scrollYProgress,[0, 1],['0', '100%'],{ clamp: true })
  
  return (
    <>
      <Div100vh className="w-full h-[100dvh] fixed inset-0 z-[10] bg-off-white" ref={ref}>
        <m.div style={{ scale: scale  }} className={`w-full h-full absolute inset-0`}>
          { image ? (
          <SanityImageScale p fill sizes="(max-width: 1024px) 100vw, 100vw"   image={image} />
          ) : (
            <div className="absolute w-full h-full inset-0 bg-green"></div>
          )}
        </m.div>

        <div className="absolute inset-0 w-full flex items-center justify-center z-10 text-center">
          <div className="relative mt-[-3vw]">
            <m.h1 style={{ y: move }} className="block font-display text-[16.5vw] lg:text-[17.5vw] 2xl:text-[280px] text-yellow leading-[0.75] lg:leading-[0.75] 2xl:leading-[0.75] mb-0 pb-0">{heading}</m.h1>
          </div>
        </div>

        <div className="absolute bottom-14 lg:bottom-6 left-0 right-0 w-full flex items-center justify-center z-10">
          <SunnyIcon className={`w-[15%] lg:w-[5%] max-w-[80px] text-yellow mx-auto opacity-100 animate-spin-slow`} />
        </div>

        <div className="absolute left-0 lg:left-auto bottom-6 right-0 lg:right-6 z-10 w-full text-center lg:text-right lg:w-auto">
          <span className="text-base lg:text-xl text-yellow">Scroll to explore</span>
        </div>
      </Div100vh>
    </>
  )
}