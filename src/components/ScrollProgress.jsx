import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-rose via-gold to-rose transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
