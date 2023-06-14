import { useRef } from "react";
import { MouseParallax } from "react-just-parallax";
import ImageScale from "./image-scale";

export default function FlipCard({ image }) {
  const ref = useRef(null)

  return(
    <div className="">
      <MouseParallax lerpEase={1} strength={-0.010} enableOnTouchDevice={false} parallaxContainerRef={ref}>
        <div class="flip-card group" ref={ref}>
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div className="group-hover:scale-[1.5] transition-transform ease-ak duration-[800ms]">
                <ImageScale image={image} w={388} h={510} />
              </div>
            </div>
            <div class="flip-card-back">
                <div className="absolute inset-0 w-full h-full p-5 flex items-center justify-center">
                  <span className="block font-display text-[5.2vw] md:text-[3vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1]">“Passionate about creating positive environments, Nilesh takes a methodical and caring approach to design and detail.”</span>
                </div>
            </div>
          </div>
        </div>
      </MouseParallax>
    </div>
  )
}