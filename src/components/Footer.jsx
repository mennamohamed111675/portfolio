import { FaArrowUp } from "react-icons/fa";
import siteConfig from "../data/site";
import Container from "./Container";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold">
              {siteConfig.shortName}
              <span className="text-rose">.</span>
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              © {new Date().getFullYear()} {siteConfig.name}. Designed with intent.
            </p>
          </div>

          <SocialLinks />

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            Back to top
            <FaArrowUp className="text-xs" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
