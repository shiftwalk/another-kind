import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImageResponsive({ image, className, alt, priority, sizes }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(priority ? priority : false)

  const imageProps = useNextSanityImage(
		sanity.config,
		image
	);

	return (
    <figure className={`image bg-black/10 ${className} relative overflow-hidden`}>
      <Image
        src={imageProps?.src}
        className={`${className} will-change-transform ${imageIsLoaded ? 'opacity-100 scale-1' : 'opacity-100 scale-[1.05]'} ${priority ? 'opacity-100' : 'transition-all ease-in-out duration-[2000ms]'}`}
        sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
        quality={75}
        width={image?.asset.metadata.dimensions.width}
        height={image?.asset.metadata.dimensions.height}
        {...(priority ? {priority: true} : {})}
        alt={alt ? alt : 'MISSING ALT TEXT'}
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
    </figure> 
  )
}