import { m, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import SunnyIcon from "@/icons/sunny.svg";
import Image from 'next/image'

export default function ImageScale({ image, w, h, p }) {
  const ref = useRef(null)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1.2, 1],{ clamp: false })
  
  return (
    <m.div style={{ scale: scale }} className="will-change-transform bg-orange relative overflow-hidden">
      <div className={`absolute inset-0 z-10 bg-orange flex items-center justify-center transition-all ease-ak scale-x-[200%] duration-[1200ms] ${imageIsLoaded ? 'translate-y-[100%] rounded-t-[20%]' : 'rounded-t-[100%]' }`}>
        {/* <div className={`w-1/2 max-w-[130px] transition-transform ease-ak duration-[1000ms] ${imageIsLoaded ? 'scale-[0.8]' : 'scale-1' }`}>
          <SunnyIcon className="w-full text-yellow" />
        </div> */}
      </div>

      <Image
        priority={p ? true : false}
        src={image}
        width={w ? w : 100}
        height={h ? h : 100}
        alt="Temp Home Image"
        className={`w-full transition-all ease-ak duration-[1000ms] relative z-1 ${imageIsLoaded ? 'scale-1' : 'scale-105' }`}
        ref={ref}
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
    </m.div>
  )
}