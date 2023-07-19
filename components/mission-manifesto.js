import { AnimatePresence, m  } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react';
import ArrowIcon from "@/icons/arrow.svg";

export default function MissionManifesto( {manifestoOpen, closeManifesto, items} ) {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  useEmblaCarousel.globalOptions = { loop: true, align: 0 }
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  
  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <AnimatePresence>
      {manifestoOpen && (
        <div>
          <m.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85, transition: { duration: 0.6, ease: [0.71,0,0.17,1] }}}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.71,0,0.17,1] }}}
            className="fixed inset-0 bg-black  z-[1000] outline-none border-none"
            key="manifestobg"
            onClick={closeManifesto}
          >
          </m.button>

          <m.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6, ease: [0.71,0,0.17,1] }}}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.71,0,0.17,1] }}}
            className="fixed lg:absolute top-3 right-3 w-[45px] h-[45px] bg-orange text-white rounded-full z-[1000] outline-none border-none items-center justify-center flex lg:hidden"
            key="manifestobg"
            onClick={closeManifesto}
          >
            <svg className="w-[50%] block" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.707107" y1="1.29289" x2="30.7071" y2="31.2929" stroke="currentColor" stroke-width="2"/>
              <line x1="30.7071" y1="2.70711" x2="0.707107" y2="32.7071" stroke="currentColor" stroke-width="2"/>
            </svg>
          </m.button>
          
          <m.div
            initial={{ y: '100%' }}
            animate={{ y: 0, transition: { duration: 0.6, ease: [0.71,0,0.17,1] }}}
            exit={{ y: '100%', transition: { duration: 0.6, ease: [0.71,0,0.17,1] }}}
            className="fixed bottom-0 left-0 right-0 bg-off-white z-[1000] p-3 lg:p-5"
            key="manifesto"
          >
            <m.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6, ease: [0.71,0,0.17,1] }}}
              exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.71,0,0.17,1] }}}
              className="fixed lg:absolute top-5 right-5 w-[70px] h-[70px] bg-orange text-white rounded-full z-[1000] outline-none border-none items-center justify-center hidden lg:flex overflow-hidden group"
              key="manifestobg"
              onClick={closeManifesto}
            >
              <svg className="w-[50%] block z-10 relative transition-transform ease-ak duration-[400ms] group-hover:rotate-[180deg]" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.707107" y1="1.29289" x2="30.7071" y2="31.2929" stroke="currentColor" stroke-width="2"/>
                <line x1="30.7071" y1="2.70711" x2="0.707107" y2="32.7071" stroke="currentColor" stroke-width="2"/>
              </svg>

              <div className="bg-black absolute inset-0 w-full transition-ak transition-transform duration-[400ms] translate-y-full group-hover:translate-y-0"></div>
            </m.button>

            <span className="font-display block w-full text-[12.5vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-[8vh]">What we believe in.</span>
            
            <button onClick={scrollNext} className={`w-[60px] lg:w-[75px] h-[60px] lg:h-[75px] transition-colors ease-ak duration-[350ms] bg-black text-white p-[10px] flex items-center justify-center rounded-full overflow-hidden outline-none lg:hover:outline-none lg:focus:outline-none group absolute top-[55%] 2xl:top-[55%] right-[22%] lg:right-[9.2%] 2xl:right-[15.2%] z-[50]`}>
              <div className="absolute z-[10] inset-0 transition-transform ease-ak duration-[400ms] text-off-white flex items-center justify-center p-[10px]">
                <ArrowIcon className="w-[80%] transition-transform ease-ak duration-[400ms] group-hover:rotate-[360deg]" />
              </div>

              <div className="bg-orange absolute inset-0 w-full transition-ak transition-transform duration-[400ms] translate-y-full group-hover:translate-y-0"></div>
            </button>

            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {items.map((e, i) => {
                  let color = ''

                  if (i==0) { color = 'bg-orange text-yellow' }
                  if (i==1) { color = 'bg-blue text-green' }
                  if (i==2) { color = 'bg-green text-blue' }
                  if (i==3) { color = 'bg-yellow text-orange' }
                  if (i==4) { color = 'bg-orange text-yellow' }
                  if (i==5) { color = 'bg-blue text-green' }
                  if (i==6) { color = 'bg-green text-blue' }
                  return (
                    <div className="embla__slide lg:max-h-[57vh]" key={i}>
                      <div className={`flex flex-col flex-grow-0 mr-5 ${color} rounded-xl p-3 lg:p-5 whitespace-normal aspect-[10/12] md:aspect-[16/10] lg:aspect-[10/11]`} key={i}>
                        <div className="w-full h-32">
                          <span className="font-display block w-full text-[14.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[10vh] lg:mb-[5vh] xl:mb-[5vh] translate-x-[2%] translate-y-[20%]"><em>{i+1}</em></span>
                        </div>

                        <div className="mt-auto w-full">
                          <span className="font-display block w-[80%] lg:w-[70%] xl:w-[80%] text-[10vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.85] md:leading-[0.85] lg:leading-[0.85] xl:leading-[0.85] mb-6 2xl:mb-8">{e.heading}</span>

                          <div className="w-full content text-sm/[1.15] md:text-base/[1.15]">
                            <p>{e.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}