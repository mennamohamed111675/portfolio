import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import siteConfig from "../data/site";

function SocialLinks({ className = "", iconClassName = "text-xl" }) {
  const links = [
    { href: siteConfig.github, label: "GitHub", icon: FaGithub },
    { href: siteConfig.linkedin, label: "LinkedIn", icon: FaLinkedin },
    { href: `mailto:${siteConfig.email}`, label: "Email", icon: FaEnvelope },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-rose/50 hover:text-white hover:shadow-[0_0_24px_rgba(251,113,133,0.25)] ${iconClassName}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
