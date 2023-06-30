import { AnimatePresence, m, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef } from 'react';

export default function MissionManifesto( {manifestoOpen, closeManifesto, items} ) {
  const missionInnerRef = useRef(null)
  const missionOuterRef = useRef(null)

  const { scrollY } = useScroll()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (manifestoOpen) {
      missionInnerRef.current.scrollTo({
        left: `${latest}`
      });
    }
  })

  return (
    <AnimatePresence>
      {manifestoOpen && (
        <div ref={missionOuterRef}>
          <m.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7, transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1], delay: scrollY.current > 100 ? 0.3 : 0 }}}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }}}
            className="fixed inset-0 bg-black  z-[1000] outline-none border-none"
            key="manifestobg"
            onClick={closeManifesto}
          >
          </m.button>
          <m.div
            initial={{ y: '100%' }}
            animate={{ y: 0, transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1], delay: scrollY.current > 100 ? 0.3 : 0 }}}
            exit={{ y: '100%', transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }}}
            className="fixed bottom-0 left-0 right-0 bg-off-white z-[1000] p-5"
            key="manifesto"
          >
            <span className="font-display block w-full text-[12.5vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-[8vw]">What we believe in.</span>
            
            <div className="overflow-x-hidden">
              <div className="whitespace-nowrap overflow-x-scroll" ref={missionInnerRef}>
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
                    <div className={`aspect-[10/13] inline-flex flex-wrap mr-5 w-[80%] lg:w-1/3 2xl:w-[30%] ${color} rounded-xl p-5 whitespace-normal`} key={i}>
                      <div className="w-full">
                        <span className="font-display block w-full text-[10.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[20vw] lg:mb-[15vw] xl:mb-[200px] translate-x-[2%] translate-y-[20%]"><em>{i+1}</em></span>
                      </div>

                      <div className="mt-auto w-full">
                        <span className="font-display block w-[80%] lg:w-[70%] xl:w-[80%] text-[10vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-8">{e.heading}</span>

                        <div className="w-full content text-sm md:text-base xl:text-lg">
                          <p>{e.text}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/* {Array.from(Array(3), (e, i) => {
                  return (
                    <>
                    <div className="aspect-[10/8] inline-flex flex-wrap mr-5 w-1/2 lg:w-1/3 2xl:w-[30%] bg-orange text-yellow rounded-xl p-5 whitespace-normal">
                      <div className="w-full">
                        <span className="font-display block w-full text-[10.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[20vw] lg:mb-[15vw] xl:mb-[200px] translate-x-[2%] translate-y-[20%]"><em>1</em></span>
                      </div>

                      <div className="mt-auto w-full">
                        <span className="font-display block w-[80%] lg:w-[70%] xl:w-[80%] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-8">Putting people first.</span>

                        <div className="w-full content text-sm md:text-base xl:text-lg">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere sollicitudin mauris, at scelerisque lorem pulvinar et. Mauris iaculis auctor imperdiet.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mr-5 w-1/2 lg:w-1/3 2xl:w-[30%] bg-blue text-green rounded-xl p-5 whitespace-normal aspect-[10/8] inline-flex flex-wrap">
                      <div className="w-full">
                        <span className="font-display block w-full text-[10.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[20vw] lg:mb-[15vw] xl:mb-[200px] translate-x-[2%] translate-y-[20%]"><em>2</em></span>
                      </div>

                      <div className="mt-auto w-full">
                        <span className="font-display block w-[80%] lg:w-[70%] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-8">Making a difference.</span>

                        <div className="w-full content text-sm md:text-base xl:text-lg">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere sollicitudin mauris, at scelerisque lorem pulvinar et. Mauris iaculis auctor imperdiet.</p>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-[10/8] inline-flex flex-wrap w-1/2 lg:w-1/3 2xl:w-[30%] bg-green text-blue rounded-xl p-5 whitespace-normal mr-5">
                      <div className="w-full">
                        <span className="font-display block w-full text-[10.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[20vw] lg:mb-[15vw] xl:mb-[200px] translate-x-[2%] translate-y-[20%]"><em>3</em></span>
                      </div>

                      <div className="mt-auto w-full">
                        <span className="font-display block w-[90%] lg:w-[70%] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-8">Great client experiences.</span>

                        <div className="w-full content text-sm md:text-base xl:text-lg">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere sollicitudin mauris, at scelerisque lorem pulvinar et. Mauris iaculis auctor imperdiet.</p>
                        </div>
                      </div>
                    </div>
                    <div className={`aspect-[10/8] inline-flex flex-wrap w-1/2 lg:w-1/3 2xl:w-[30%] bg-yellow text-orange rounded-xl p-5 whitespace-normal ${i == 2 ? 'mr-0' : 'mr-5' }`}>
                      <div className="w-full">
                        <span className="font-display block w-full text-[10.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[20vw] lg:mb-[15vw] xl:mb-[200px] translate-x-[2%] translate-y-[20%]"><em>4</em></span>
                      </div>

                      <div className="mt-auto w-full">
                        <span className="font-display block w-[90%] lg:w-[70%] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-8">Great client experiences.</span>

                        <div className="w-full content text-sm md:text-base xl:text-lg">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere sollicitudin mauris, at scelerisque lorem pulvinar et. Mauris iaculis auctor imperdiet.</p>
                        </div>
                      </div>
                    </div>
                  </>
                  )
                })} */}
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}