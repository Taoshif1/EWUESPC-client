import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaDiscord } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-base-200">
      <div className="absolute inset-0 hero-overlay-glow opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="glow-text text-2xl font-black tracking-wide text-primary">
              EWUESPC
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-base-content/75">
              East West University E-Sports Club — building a competitive,
              creative, and connected gaming community for passionate players,
              organizers, and future champions.
            </p>
          </div>

          {/* Address / Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>

            <div className="space-y-3 text-sm text-base-content/75">
              <div className="group flex items-start gap-3 transition-all duration-300 hover:translate-x-1 hover:text-primary">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <p>East West University, Aftabnagar, Dhaka, Bangladesh</p>
              </div>

              <div className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:text-primary">
                <Phone size={18} className="shrink-0" />
                <a href="tel:+8801XXXXXXXXX">+880 1XXXXXXXXX</a>
              </div>

              <div className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:text-primary">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:ewuespc@gmail.com">ewuespc@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>

            <ul className="space-y-3 text-sm text-base-content/75">
              <li>
                <Link
                  to="/"
                  className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-primary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-primary"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-primary"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Community</h3>

            <div className="space-y-3 text-sm text-base-content/75">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-all duration-300 hover:border-primary/20 hover:bg-base-100 hover:text-primary hover:shadow-md"
              >
                <FaFacebookF className="text-[17px]" />
                <span>Facebook Page</span>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-all duration-300 hover:border-primary/20 hover:bg-base-100 hover:text-primary hover:shadow-md"
              >
                <FaLinkedinIn className="text-[17px]" />
                <span>LinkedIn Page</span>
              </a>

              <a
                href="https://discord.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-all duration-300 hover:border-primary/20 hover:bg-base-100 hover:text-primary hover:shadow-md"
              >
                <FaDiscord className="text-[17px]" />
                <span>Discord Server</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-base-content/60">
            Copyright © 2026 |{" "}
            <span className="font-semibold text-primary">EWUESPC</span> | All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
