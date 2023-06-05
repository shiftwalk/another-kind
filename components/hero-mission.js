import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ManifestoBadgeIcon from "@/icons/manifesto-badge.svg";
import { reveal } from '@/helpers/transitions';

export default function HeroMission({ image }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll()
  
  const scale = useTransform(scrollYProgress,[0, 1],[1, 4.4],{ clamp: true })
  const moveX = useTransform(scrollYProgress,[0, 0.36],[-320, 0],{ clamp: true })
  const moveY = useTransform(scrollYProgress,[0, 0.36],[-600, 0],{ clamp: true })
  const rotate = useTransform(scrollYProgress,[0, 1],[0, 360],{ clamp: true })
  
  return (
    <>
    <div className="w-full h-[300vh] sticky top-0" ref={ref}>
      <div className="w-full h-screen flex flex-col pt-[90px] xl:pt-[99px] pb-[45px] xl:pb-[50px] overflow-hidden absolute inset-0">
        <div className="w-full overflow-hidden relative z-[1]">
          <m.h2 variants={reveal} className="text-[9vw] leading-none text-center">Great Spaces.</m.h2>
        </div>

        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
          <div className="relative">
            <m.div style={{ scale: scale  }} className={`w-[50vw] h-[45dvh] rounded-xl relative overflow-hidden mx-auto`}>
              <img style={{ scale: scale }} src={'/images/mission.jpg'} alt="Temp Home Image" className="will-change-transform w-full absolute inset-0 h-full object-cover object-center" />
            </m.div>
          </div>
        </div>
        
        <div className="w-full mt-auto overflow-hidden relative">
          <m.h2 variants={reveal} className="text-[9vw] leading-none text-center">Designed For <em>Life</em>.</m.h2>
        </div>
      </div>
    </div>

    <m.div style={{ x: moveX, y: moveY, rotate: rotate  }} className="fixed w-[180px] bottom-5 right-5 z-[1000]">
      <ManifestoBadgeIcon className="w-full" />
    </m.div>
    </>
  )
}