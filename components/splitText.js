import React from 'react'
import { m } from 'framer-motion'

export function SplitText({ children, display, text, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        className="block overflow-hidden"
      >
        <m.span
          {...rest}
          style={{ display: 'block', willChange: 'transform' }}
          className={`${display ? 'translate-y-[-10vw]' : '' } block overflow-hidden`}
          custom={i}
        >
          <span className={`block mb-0 pb-0 pr-[1px] translate-y-[-1px] md:translate-y-[-2px] xl:translate-y-[-10px]`}>
            {word + (i !== words.length - 1 ? '\u00A0' : '')}
          </span>
        </m.span>
      </span>
    )
  })
}