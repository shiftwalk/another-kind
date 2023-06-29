import SanityImageScale from "./sanity-image-scale";

export default function ModularSingleImageBlock({ image }) {
  return (
    <div className="grid grid-cols-1 w-full gap-5 mb-5">
      <div className="col-span-1">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="aspect-[15/10]">
            <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 90vw" image={image} />
          </div>
        </div>
      </div>
    </div>
  )
}