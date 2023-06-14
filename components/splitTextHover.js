import React from 'react'

export function SplitTextHover({ children, display, text, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        className="block overflow-hidden"
      >
        <span
          {...rest}
          className={`block overflow-hidden will-change-transform transition-transform ease-ak duration-[650ms] group-hover:delay-[100ms] translate-y-full group-hover:translate-y-0`}
          custom={i}
        >
          <span className={`block mb-0 pb-0 pr-[1px]`}>
            {word + (i !== words.length - 1 ? '\u00A0' : '')}
          </span>
        </span>
      </span>
    )
  })
}