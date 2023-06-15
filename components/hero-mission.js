import { m, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { reveal } from '@/helpers/transitions';
import Image from 'next/image';

export default function HeroMission({ image }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "100%"]
  })
  const { scrollY } = useScroll()
  const scale = useTransform(scrollYProgress,[0, 0.7],[1, 2.5],{ clamp: true })
  const radius = useTransform(scrollYProgress,[0, 1],[20, 0],{ clamp: true })
  const moveY = useTransform(scrollYProgress,[0, 0.55],['40px', '0px'],{ clamp: false })
  const moveTextTop = useTransform(scrollYProgress,[0, 1],['0', '-300%'],{ clamp: true })
  const moveTextBottom = useTransform(scrollYProgress,[0, 1],['0', '300%'],{ clamp: true })
  const rotate = useTransform(scrollY, [0, 15], [0, 1], { clamp: false })
  
  return (
    <>
      <div className="w-full h-[300dvh] fixed inset-0 z-[10] bg-off-white" ref={ref}>
        <div className="w-full h-[100vh] flex flex-col overflow-hidden absolute inset-0 pt-[0px] xl:pt-[0px]">
          <div className="w-full h-full flex flex-col relative">
            <div className="w-full overflow-hidden relative z-[1] pt-[82px] mt-[7dvh]">
              <div className="relative overflow-hidden ">
                <m.div style={{ y: moveTextTop }}>
                  <m.h2 variants={reveal} className="text-[calc(5.5vw+5.5vmin)] leading-[0.85] text-center">
                    <span className="block translate-y-[-15%]">Great spaces.</span>
                  </m.h2>
                </m.div>
              </div>
            </div>

            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10 pointer-events-none">
              <m.div className="relative" style={{ y: moveY }}>
                <m.div style={{ scale: scale, borderRadius: radius  }} className={`w-[90dvw] lg:w-[50dvw] h-[42vh] max-h-[600px] relative overflow-hidden mx-auto`}>
                  <Image priority style={{ scale: scale }} fill src={'/images/mission.jpg'} alt="Temp Home Image" className="will-change-transform w-full absolute inset-0 h-full object-cover object-center" />
                </m.div>
              </m.div>
            </div>
            
            <div className="w-full mt-auto overflow-hidden relative z-[1] mb-[7dvh]">
              <div className="relative overflow-hidden ">
                <m.div style={{ y: moveTextBottom }}>
                  <m.h2 variants={reveal} className="text-[calc(5.5vw+5.5vmin)] leading-[0.85] text-center">
                    <span className="block translate-y-[3%]">Designed for <em>life</em>.</span>
                  </m.h2>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}