import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rippleContainerRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const isHovering = useRef(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only disable if device definitely does not have fine mouse pointer
    const isCoarseOnly =
      window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(pointer: fine)").matches;

    if (isCoarseOnly) {
      document.documentElement.classList.remove("custom-cursor-active");
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const animate = () => {
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.45;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.45;

      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        const scale = isHovering.current ? 1.5 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${scale})`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current && dotRef.current.style.opacity !== "1") {
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current && ringRef.current.style.opacity !== "1") {
        ringRef.current.style.opacity = "1";
      }
    };

    const spawnRipple = (x, y) => {
      if (!rippleContainerRef.current) return;
      const ripple = document.createElement("div");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      rippleContainerRef.current.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    };

    const onMouseDown = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform += " scale(0.6)";
      }
      spawnRipple(e.clientX, e.clientY);
    };

    const onMouseUp = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = dotRef.current.style.transform.replace(" scale(0.6)", "");
      }
    };

    const onMouseEnterInteractive = () => {
      isHovering.current = true;
      if (dotRef.current) dotRef.current.classList.add("cursor-dot--hover");
      if (ringRef.current) ringRef.current.classList.add("cursor-ring--hover");
    };

    const onMouseLeaveInteractive = () => {
      isHovering.current = false;
      if (dotRef.current) dotRef.current.classList.remove("cursor-dot--hover");
      if (ringRef.current) ringRef.current.classList.remove("cursor-ring--hover");
    };

    const onMouseLeaveWindow = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

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
      document.documentElement.classList.remove("custom-cursor-active");
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
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div ref={rippleContainerRef} className="cursor-ripple-container" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
