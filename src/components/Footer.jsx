import { FaLinkedin, FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e7e5] bg-white py-8 text-[#0a2016]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <p className="text-sm text-[#5a7265]">
          © {new Date().getFullYear()} NgureTech Solutions LTD. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#e6ecea] p-2 text-[#5a7265] transition hover:-translate-y-0.5 hover:text-[#0a2016]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/nguretech"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#e6ecea] p-2 text-[#5a7265] transition hover:-translate-y-0.5 hover:text-[#0a2016]"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/NgureTech"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#e6ecea] p-2 text-[#5a7265] transition hover:-translate-y-0.5 hover:text-[#0a2016]"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#e6ecea] p-2 text-[#5a7265] transition hover:-translate-y-0.5 hover:text-[#0a2016]"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
