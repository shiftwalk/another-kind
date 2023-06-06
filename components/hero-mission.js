import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ManifestoBadgeIcon from "@/icons/manifesto-badge.svg";
import { reveal } from '@/helpers/transitions';

export default function HeroMission({ image }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "65%"]
  })

  const { scrollY } = useScroll()
  
  const scale = useTransform(
    scrollYProgress,[0, 1],[1, 2.1],{ clamp: true }
  )
  const moveX = useTransform(
    scrollYProgress,[0, 1],['-15.75dvw', '0dvw'],{ clamp: true }
  )
  const moveY = useTransform(
    scrollYProgress,[0, 1],['-50dvh', '0dvh'],{ clamp: true }
  )
  const rotate = useTransform(scrollY, [0, 15], [0, 1], { clamp: false })
  
  return (
    <>
      <div className="w-full h-[300dvh] fixed inset-0 z-[10] bg-off-white" ref={ref}>
        <div className="w-full h-screen flex flex-col pt-[90px] lg:pt-[8dvh] pb-[25px] lg:pb-[5dvh] overflow-hidden absolute inset-0">
          <div className="w-full overflow-hidden relative z-[0]">
            <m.h2 variants={reveal} className="text-[12.5vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[150px] leading-none text-center">Great Spaces.</m.h2>
          </div>

          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10">
            <div className="relative">
              <m.div style={{ scale: scale  }} className={`w-[90dvw] lg:w-[55dvw] h-[50.2dvh] rounded-xl relative overflow-hidden mx-auto`}>
                <img style={{ scale: scale }} src={'/images/mission.jpg'} alt="Temp Home Image" className="will-change-transform w-full absolute inset-0 h-full object-cover object-center" />
              </m.div>
            </div>
          </div>
          
          <div className="w-full mt-auto overflow-hidden relative z-0">
            <m.h2 variants={reveal} className="text-[12.5vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[150px] leading-none text-center">Designed For <em>Life</em>.</m.h2>
          </div>
        </div>
      </div>

      <m.div style={{ x: moveX, y: moveY, rotate: rotate  }} className="fixed w-[30%] lg:w-[15vw] xl:w-[13vw] 2xl:w-[10vw] bottom-5 right-5 z-[100] hidden lg:block">
        <ManifestoBadgeIcon className="w-full" />
      </m.div>
    </>
  )
}