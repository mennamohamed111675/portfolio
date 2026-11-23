import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import siteConfig from "../data/site";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import { fadeUp, viewport } from "../lib/motion";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in every field.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app…");
    setForm({ name: "", email: "", message: "" });
  };

  const fieldClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm outline-none transition placeholder:text-zinc-500 focus:border-rose/60";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something sharp"
          subtitle="Internships, freelance, or a full-time seat — I’m ready to talk."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="glow-border glass rounded-[2rem] border border-white/10 p-8 md:p-10"
          >
            <h3 className="font-display text-2xl font-bold">Direct line</h3>
            <p className="mt-4 leading-8 text-zinc-400">
              Tell me about the product, the timeline, and the vibe you want. I’ll come back with a clear next step.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-rose/40"
              >
                <FaEnvelope className="text-rose" />
                <span className="break-all text-sm">{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <FaMapMarkerAlt className="text-gold" />
                <span className="text-sm">{siteConfig.location}</span>
              </div>
            </div>

            <SocialLinks className="mt-8" />
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            onSubmit={handleSubmit}
            className="glow-border glass rounded-[2rem] border border-white/10 p-8 md:p-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={fieldClass}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className={fieldClass}
              />
            </div>
            <textarea
              name="message"
              rows="7"
              value={form.message}
              onChange={handleChange}
              placeholder="What should we make?"
              required
              className={`${fieldClass} mt-4 resize-none`}
            />
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-rose px-8 py-4 text-sm font-semibold text-ink transition hover:bg-rose/90 hover:shadow-[0_0_32px_rgba(251,113,133,0.4)] sm:w-auto"
            >
              Send message
            </button>
            {status && (
              <p className="mt-4 text-sm text-gold" role="status">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
