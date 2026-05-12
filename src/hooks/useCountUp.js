import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  const frame = useRef(null)

  useEffect(() => {
    if (!start) return
    const isFloat = String(target).includes('.')
    const end = parseFloat(target)
    let startTime = null

    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const cur = isFloat
        ? (eased * end).toFixed(1)
        : Math.floor(eased * end)
      setCount(cur)
      if (progress < 1) frame.current = requestAnimationFrame(step)
    }
    frame.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame.current)
  }, [start, target, duration])

  return count
}
