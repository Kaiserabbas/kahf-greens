import React, { useEffect, useRef, useCallback } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rippleContainerRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const isTouchDevice = useRef(false);

  const animate = useCallback(() => {
    // Dot follows tightly
    dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.35;
    dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.35;

    // Ring trails with softer easing
    ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.08;
    ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.08;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${isHovering.current ? 1.6 : 1})`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };

    const onMouseDown = (e) => {
      // Shrink dot on press
      if (dotRef.current) {
        dotRef.current.style.transform += " scale(0.6)";
      }
      // Spawn ripple
      spawnRipple(e.clientX, e.clientY);
    };

    const onMouseUp = () => {
      // Restore dot
      if (dotRef.current) {
        dotRef.current.style.transform = dotRef.current.style.transform.replace(" scale(0.6)", "");
      }
    };

    const onMouseEnterInteractive = () => {
      isHovering.current = true;
      if (dotRef.current) {
        dotRef.current.classList.add("cursor-dot--hover");
      }
      if (ringRef.current) {
        ringRef.current.classList.add("cursor-ring--hover");
      }
    };

    const onMouseLeaveInteractive = () => {
      isHovering.current = false;
      if (dotRef.current) {
        dotRef.current.classList.remove("cursor-dot--hover");
      }
      if (ringRef.current) {
        ringRef.current.classList.remove("cursor-ring--hover");
      }
    };

    const onMouseLeaveWindow = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    // Attach interactive hover listeners
    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
      return interactives;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeaveWindow);

    let interactives = attachHoverListeners();

    // Re-attach on DOM changes (for lazy-loaded pages)
    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      interactives = attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeaveWindow);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  const spawnRipple = (x, y) => {
    if (!rippleContainerRef.current) return;
    const ripple = document.createElement("div");
    ripple.className = "cursor-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    rippleContainerRef.current.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  // Don't render on touch devices (checked at mount)
  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Trailing dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      {/* Click ripple container */}
      <div ref={rippleContainerRef} className="cursor-ripple-container" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
