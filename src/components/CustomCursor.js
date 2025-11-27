'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      
      // Check if hovering over clickable elements
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('pointer');
        
      setHovering(!!isClickable);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Prevent hydration mismatch by not rendering until mounted on client
  if (!mounted) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hovering ? 'hovering' : ''} ${clicked ? 'clicked' : ''} ${hidden ? 'hidden' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="cursor-diamond" />
        <div className="cursor-crosshair-v" />
        <div className="cursor-crosshair-h" />
      </div>

      <style jsx global>{`
        body {
          cursor: none; /* Hide default cursor */
        }
        
        a, button, .pointer {
          cursor: none !important; /* Force hide on links too */
        }

        @media (pointer: coarse) {
            body, a, button {
                cursor: auto !important; /* Restore default on touch devices */
            }
            .custom-cursor {
                display: none !important;
            }
        }
      `}</style>

      <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
          transition: width 0.3s, height 0.3s, opacity 0.2s;
          mix-blend-mode: exclusion; /* Cool effect over different backgrounds */
        }

        .cursor-diamond {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background-color: #7f5af0;
          transform: translate(-50%, -50%) rotate(45deg);
          transition: all 0.2s ease-out;
          box-shadow: 0 0 10px rgba(127, 90, 240, 0.8);
        }

        /* Crosshairs */
        .cursor-crosshair-v {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1px;
          height: 24px;
          background-color: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: all 0.2s ease;
        }

        .cursor-crosshair-h {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 24px;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%);
          transition: all 0.2s ease;
        }

        /* Hover State: Expand and Rotate */
        .custom-cursor.hovering .cursor-diamond {
          width: 16px;
          height: 16px;
          background-color: transparent;
          border: 2px solid #7f5af0;
          transform: translate(-50%, -50%) rotate(225deg); /* Spin */
        }

        .custom-cursor.hovering .cursor-crosshair-v {
            height: 10px; /* Shrink crosshair */
        }
        .custom-cursor.hovering .cursor-crosshair-h {
            width: 10px;
        }

        /* Click State */
        .custom-cursor.clicked .cursor-diamond {
            background-color: #fff;
            transform: translate(-50%, -50%) rotate(45deg) scale(0.8);
        }

        .hidden {
            opacity: 0;
        }
      `}</style>
    </>
  );
}
