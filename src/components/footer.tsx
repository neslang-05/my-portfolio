import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Rss } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-zinc-400 text-xs font-sans">
              © {currentYear} NILAMBAR ELANGBAM
            </p>
            <p className="text-zinc-600 text-[11px] font-sans mt-1">
              DevOps & Full Stack Engineer | Manipur Technical University
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/neslang-05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/neslang"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/nilambar_e/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:neslang.in@gmail.com"
              className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <Link
              href="/rss"
              className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="RSS Feed"
            >
              <Rss className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 pt-6 border-t border-zinc-900 flex flex-wrap justify-center md:justify-start gap-6 text-xs font-sans">
          <Link href="/" className="text-zinc-500 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-zinc-500 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/resume" className="text-zinc-500 hover:text-white transition-colors">
            Resume
          </Link>
          <Link href="/blog" className="text-zinc-500 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-zinc-500 hover:text-white transition-colors">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
