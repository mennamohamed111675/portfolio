import { useEffect, useRef } from "react";

function Background() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return undefined;

    let frame = 0;
    const onMove = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${event.clientX}px`);
        el.style.setProperty("--y", `${event.clientY}px`);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-32 -top-24 h-[520px] w-[520px] rounded-full bg-rose/20 blur-[140px]" />
      <div className="absolute -bottom-32 -right-24 h-[460px] w-[460px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="bg-grid absolute inset-0" />
      <div ref={spotlightRef} className="spotlight absolute inset-0 hidden md:block" />
      <div className="grain absolute inset-0" />
    </div>
  );
}

export default Background;
