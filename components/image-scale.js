import { imageScale } from '@/helpers/transitions'
import { m, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ImageScale({ image, w, h, p }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1.2, 1],{ clamp: false })
  
  return (
    <m.div style={{ scale: scale }} className="will-change-transform">
      <Image priority={p ? true : false} src={image} width={w ? w : 100} height={h ? h : 100} alt="Temp Home Image" className="w-full" ref={ref} />
    </m.div>
  )
}