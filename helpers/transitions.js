export const fade = {
	initial: { opacity: 1 },
  enter: { 
    opacity: 1,
    transition: { delay: 0.25, duration: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 1,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { delay: 0.25, duration: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: 0,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealNoTransition = {
	initial: { y: '100%' },
  enter: { 
    y: 0
  },
	exit: {
    y: 0
	}
}

export const scale = {
	initial: { scale: 0.25, rotate: -10 },
  enter: { 
    scale: 1,
    rotate: 13,
  },
	exit: {
    scale: 0.25,
    rotate: -10
	}
}

export const scaleSunny = {
	initial: { scale: 0, rotate: -10 },
  enter: { 
    scale: 1,
    rotate: 13,
    transition: { delay: 0.25, duration: 0.55, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 0,
    rotate: -10,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}

export const imageScale = {
	initial: { scale: 1.075 },
  enter: { 
    scale: 1,
    transition: { delay: 0.25, duration: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 1.075,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}