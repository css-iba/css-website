'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

const stats = [
  { id: 1, name: 'Active Members', value: '200+' },
  { id: 2, name: 'Average Instagram Reach', value: '10k+' },
  { id: 3, name: 'Resources Created', value: '3+' }
]

// parse a display value like '10k+' or '200+' into a numeric target and formatting info
function parseDisplayValue(value: string) {
  const trimmed = value.trim()
  const hasPlus = trimmed.endsWith('+')
  const core = hasPlus ? trimmed.slice(0, -1) : trimmed
  if (/k$/i.test(core)) {
    // e.g. '10k' -> display target 10, factor 1000
    const num = parseFloat(core.replace(/k$/i, '')) || 0
    return { displayTarget: num, multiplier: 1000, suffix: hasPlus ? '+' : '', isK: true }
  }
  // plain number
  const num = parseFloat(core) || 0
  return { displayTarget: num, multiplier: 1, suffix: hasPlus ? '+' : '', isK: false }
}

const StatItem: React.FC<{ name: string; value: string; start: boolean }> = ({ name, value, start }) => {
  const parsed = parseDisplayValue(value)
  const motion = useMotionValue(0)
  const [display, setDisplay] = useState<string>(() => {
    if (parsed.isK) return `0k${parsed.suffix}`
    return `0${parsed.suffix}`
  })

  useEffect(() => {
    if (!start) return
    // animate the displayed (short) number (e.g., 0 -> 10 for 10k)
    const controls = animate(motion, parsed.displayTarget, {
      duration: Math.max(0.8, Math.min(1.6, parsed.displayTarget / 20)),
      onUpdate(latest) {
        if (parsed.isK) {
          const n = Math.floor(latest)
          setDisplay(`${n}k${parsed.suffix}`)
        } else {
          const n = Math.floor(latest)
          setDisplay(`${n}${parsed.suffix}`)
        }
      }
    })

    return () => controls.stop()
  }, [start, parsed.displayTarget, parsed.isK, parsed.suffix, motion])

  return (
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt className="font-heading font-semibold text-base/7 colour-primary">{name}</dt>
      <dd className="order-first text-3xl font-semibold font-text tracking-tight text-gray-900 sm:text-5xl" aria-live="polite">
        {display}
      </dd>
    </div>
  )
}

const Stats: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })

  return (
    <div className="colour-box-secondary py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.id} name={stat.name} value={stat.value} start={inView} />
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Stats;
