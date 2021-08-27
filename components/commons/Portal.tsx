import { FC, useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props {
    children: ReactNode
}

const Portal: FC<Props> = ({ children }) => {
  const ref = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!document) {
      return
    }

    const dom = document.getElementById('__portal')
    ref.current = dom
    setMounted(true)
  }, [])

  if (ref.current && mounted) {
    return createPortal(children, ref.current)
  }

  return null
}

export default Portal
