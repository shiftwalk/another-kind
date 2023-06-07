import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SunnyIcon from "@/icons/sunny.svg";
import { reveal } from '@/helpers/transitions';
import Image from 'next/image';

export default function HeroProject({ image }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "100%"]
  })
  const scale = useTransform(scrollYProgress,[0, 1],[1, 1.25],{ clamp: true })
  const move = useTransform(scrollYProgress,[0, 1],['0', '100%'],{ clamp: true })
  
  return (
    <>
      <div className="w-full h-[100dvh] fixed inset-0 z-[10] bg-off-white" ref={ref}>
        <m.div style={{ scale: scale  }} className={`w-full h-full absolute inset-0`}>
          <Image priority fill style={{ scale: scale }} src={'/images/project.jpg'} alt="Temp Project Image" className="will-change-transform w-full absolute inset-0 h-full object-cover object-center z-10" />
        </m.div>

        <div className="absolute inset-0 w-full flex items-center justify-center z-10">
          <div className="relative overflow-hidden mt-[-3vw]">
            <m.h1 style={{ y: move }} className="block font-display text-[23.5vw] lg:text-[20vw] text-yellow leading-[0.85] mb-0 pb-0">The Croft</m.h1>
          </div>
        </div>

        <div className="absolute bottom-14 lg:bottom-6 left-0 right-0 w-full flex items-center justify-center z-10">
          <SunnyIcon className={`w-[15%] lg:w-[5%] max-w-[80px] text-yellow mx-auto opacity-100`} />
        </div>

        <div className="absolute left-0 lg:left-auto bottom-6 right-0 lg:right-6 z-10 w-full text-center lg:text-right lg:w-auto">
          <span className="text-base lg:text-xl text-yellow">Scroll to explore</span>
        </div>
      </div>
    </>
  )
}