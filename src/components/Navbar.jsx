import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import siteConfig from "../data/site";
import SocialLinks from "./SocialLinks";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...siteConfig.navLinks.map((link) => link.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const goTo = (event, id) => {
    event.preventDefault();
    close();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
      <nav
        className={`glass glow-border relative z-50 flex w-full max-w-[1080px] items-center justify-between rounded-full border border-white/10 px-4 py-2.5 transition-all duration-300 md:px-6 ${
          scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        <a href="#home" onClick={(event) => goTo(event, "home")} className="font-display text-lg font-extrabold tracking-tight">
          {siteConfig.shortName}
          <span className="text-rose">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(event) => goTo(event, link.id)}
                className={`relative rounded-full px-4 py-2 text-sm transition duration-300 ${
                  active === link.id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(event) => goTo(event, "contact")}
          className="hidden rounded-full bg-rose px-5 py-2 text-sm font-medium text-ink transition duration-300 hover:bg-rose/90 md:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-2xl md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>
    </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-ink px-6 pt-28 md:hidden">
          <div className="flex flex-col gap-6">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => goTo(event, link.id)}
                className="font-display text-4xl font-bold"
              >
                {link.title}
              </a>
            ))}
            <SocialLinks className="pt-4" />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
