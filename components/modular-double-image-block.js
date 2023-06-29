import SanityImageScale from "./sanity-image-scale"

export default function ModularDoubleImageBlock({ images }) {
  return (
    <div className="grid grid-cols-2 w-full gap-5 mb-5">
      {images.map((e, i) => { 
        return (
          <div className="col-span-1" key={i}>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[10/14]">
                <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 55vw" image={e} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}