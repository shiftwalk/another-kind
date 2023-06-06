import { imageScale } from '@/helpers/transitions'
import { m, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ImageScale({ image }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1.175, 1],{ clamp: false })
  
  return (
    <m.div style={{ scale: scale }} className="will-change-transform">
      <img src={image} alt="Temp Home Image" className="w-full" ref={ref} />
    </m.div>
  )
}