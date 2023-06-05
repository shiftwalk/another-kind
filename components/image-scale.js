import { m, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ImageScale({ image }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1.175, 1],{ clamp: true })
  
  return (
    <div>
      <div ref={ref}>
        <m.img style={{ scale: scale }} src={image} alt="Temp Home Image" className="will-change-transform w-full" />
      </div>
    </div>
  )
}