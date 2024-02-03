import { useRef, useCallback, useEffect, MouseEvent } from 'react'
import { LandingPage } from './landing-page'

function CursorPage<T>(props: T) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mainDivRef = useRef<HTMLDivElement>(null)

  const onMouseMoveShowCursor = useCallback(
    (event: MouseEvent | Event | any) => {
      const cursorElement = cursorRef.current

      event.preventDefault()
      event.stopPropagation()

      if (cursorElement) {
        cursorElement.style.top = event.clientY + 'px'
        cursorElement.style.left = event.clientX + 'px'
      }
    },
    [],
  )

  useEffect(() => {
    const mainDivElement = mainDivRef.current

    if (mainDivElement) {
      window.addEventListener('mousemove', onMouseMoveShowCursor)

      return () => {
        window.removeEventListener('mousemove', onMouseMoveShowCursor)
      }
    }
  }, [onMouseMoveShowCursor])

  return (
    <div ref={mainDivRef}  className="main-class grid bg-[#050505]">
      <LandingPage />
      <div className="cursor" ref={cursorRef}></div>
    </div>
  )
}

export default CursorPage
