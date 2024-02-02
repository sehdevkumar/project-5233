import { useRef, useCallback, useEffect, MouseEvent } from 'react';
import './App.css';
import { LandingPage } from './views/landing-page';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mainDivRef = useRef<HTMLDivElement>(null);

  const onMouseMoveShowCursor = useCallback((event: MouseEvent) => {
    const cursorElement = cursorRef.current;

    event.preventDefault();
    event.stopPropagation();

    console.log(event)

    if (cursorElement) {
      cursorElement.style.top = event.clientY + 'px';
      cursorElement.style.left = event.clientX + 'px';
    }
  }, []);

  useEffect(() => {
    const mainDivElement = mainDivRef.current;

    if (mainDivElement) {
      window.addEventListener('mousemove', onMouseMoveShowCursor);

      return () => {
        window.removeEventListener('mousemove', onMouseMoveShowCursor);
      };
    }
  }, [onMouseMoveShowCursor]);

  return (
    <div ref={mainDivRef} className="main-class grid bg-[#050505]">
      <LandingPage />
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
}

export default App;
