import Image from 'next/image'
import sanity from '@/services/sanity'
import { useContext, useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';
import { IntroContext } from '@/context/intro';

export default function SanityImage({ image, className, alt, priority, widthOverride, quality, focalPoint, sizes }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  const [introContext, setIntroContext] = useContext(IntroContext);

  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      .quality(quality ? quality : 75)
      .fit('clip')
  };

  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  // Generate attributes for Img component
  const attributes = {};

  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }

  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }

	return(
    <figure className={`image bg-black/20 ${className} cover-image absolute inset-0 w-full h-full object-cover object-center`}>
      
      {!priority && (
        <div className={`absolute inset-0 z-10 bg-orange transition-all ease-ak scale-x-[200%] duration-[1200ms] ${imageIsLoaded ? 'translate-y-[100%] rounded-t-[20%]' : 'rounded-t-[100%]' }`}></div>
      )}

		  <Image
        src={imageProps.src}
        loader={imageProps.loader}
        className={`will-change-transform transition-all ease-in-out duration-[1500ms] ${imageIsLoaded ? 'scale-1 opacity-100' : 'scale-[1.05]'} ${priority ? 'opacity-0' : ''}`}
        {...(priority ? {
          priority: true} : {}
        )}
        sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
        fill
        quality={quality ? quality : 75}
        alt={alt ? alt : 'MISSING ALT TEXT'}

        onLoad={event => {
          const target = event.target;
            if (priority) {
              if (introContext) {
                  setImageIsLoaded(true)
              } else {
                setTimeout(() => {
                  setImageIsLoaded(true)
                }, 2000)
              }
            }
            else if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
    </figure>
  )
}