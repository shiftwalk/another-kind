import { m, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import SanityImage from './sanity-image';
import SanityImageResponsive from './sanity-image-responsive';

export default function SanityImageScale({ image, p, alt, fill, sizes, invert, heroOffset, quality }) {
  const ref = useRef(null)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: heroOffset ? ["-20%", "end start"] : ["start end", "end start"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[invert ? 1 : 1.2, invert ? 1.2 : 1],{ clamp: false })
  
  return (
    <m.div style={{ scale: scale }} className={`will-change-transform bg-orange overflow-hidden ${ fill ? 'absolute inset-0 w-full h-full' : 'relative' }`}>
      {/* <div className={`absolute inset-0 z-10 bg-orange flex items-center justify-center transition-all ease-ak scale-x-[200%] duration-[1200ms] ${imageIsLoaded ? 'translate-y-[100%] rounded-t-[20%]' : 'rounded-t-[100%]' }`}>
      </div> */}

      <div ref={ref} className="absolute inset-0 w-full h-full">
        {fill ? (
          <SanityImage
            priority={p ? true : false}
            image={image}
            sizes={sizes ? sizes : null}
            alt={alt ? alt : 'No image description'}
            quality={quality ? quality : false}
            className={`absolute inset-0 h-full w-full transition-all ease-ak duration-[1000ms] z-1`}
          />
        ) : (
          <SanityImageResponsive
            priority={p ? true : false}
            image={image}
            alt={alt ? alt : 'No image description'}
            className={`w-full transition-all ease-ak duration-[1000ms] relative z-1`}
          />
        )}
      </div>
    </m.div>
  )
}