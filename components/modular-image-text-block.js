import PortableText from "react-portable-text";
import SanityImageScale from "./sanity-image-scale";

export default function ModularImageTextBlock({ image, text, textHeading }) {
  return (
    <div className="grid grid-cols-2 w-full gap-5 mb-5">
      <div className="col-span-2 lg:col-span-1">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="aspect-[10/14]">
            <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 55vw" image={image} />
          </div>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
        <div className="w-[90%] md:w-[90%] lg:w-[80%] py-[10vw] lg:py-0">
          <span className="block mb-8 overflow-hidden relative w-full text-center">
            <span className="block text-lg leading-none lg:text-xl lg:leading-none">{textHeading}</span>
          </span>

          <span className="font-display block w-full text-center text-[7.5vw] md:text-[3.2vw] lg:text-[3vw] xl:text-[2.7vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9]"><PortableText content={text} /></span>
        </div>
      </div>
    </div>
  )
}