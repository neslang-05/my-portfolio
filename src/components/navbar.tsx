'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-zinc-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg font-sans tracking-tight hover:text-zinc-300 transition-colors flex items-center gap-2">
            <span className="w-2 h-2 bg-white" />
            NE
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-sans transition-colors relative ${
                      isActive
                        ? 'text-white bg-zinc-900 border-b-2 border-white'
                        : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {user && (
              <div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs text-zinc-200">
                <span className="h-6 w-6 bg-white text-black flex items-center justify-center font-bold font-sans">
                  {user.email?.[0]?.toUpperCase() || 'U'}
                </span>
                <span className="max-w-[120px] truncate font-sans">{user.email}</span>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-zinc-200 hover:text-white bg-zinc-900 border border-zinc-800"
              aria-label="Toggle navigation"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu with Framer Motion */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" as const }}
              className="md:hidden mt-3 border border-zinc-800 bg-black shadow-lg overflow-hidden"
            >
              <div className="flex flex-col divide-y divide-zinc-800">
                <div className="flex items-center gap-3 px-4 py-3">
                  {user ? (
                    <>
                      <span className="h-8 w-8 bg-white text-black flex items-center justify-center font-bold font-sans">
                        {user.email?.[0]?.toUpperCase() || 'U'}
                      </span>
                      <div className="text-sm leading-tight">
                        <p className="font-semibold">{user.email}</p>
                        <p className="text-zinc-500 font-sans text-xs">Signed in</p>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm font-sans text-zinc-400">Navigation Menu</p>
                  )}
                </div>

                <div className="flex flex-col">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href ||
                      (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`px-4 py-3 text-sm font-sans flex justify-between items-center ${
                          isActive ? 'text-white bg-zinc-900 border-l-2 border-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                        }`}
                      >
                        {item.label}
                        <span className="text-zinc-600 font-sans">&gt;</span>
                      </Link>
                    );
                  })}
                </div>

                <div className="px-4 py-3 flex flex-col gap-3 text-sm text-zinc-400">
                  <p className="text-xs font-sans text-zinc-500 uppercase tracking-wider">Contact Links</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="mailto:neslang.in@gmail.com" className="flex items-center gap-2 hover:text-white font-sans text-xs">
                      <Mail className="w-3.5 h-3.5 text-zinc-400" /> Email
                    </a>
                    <a href="https://github.com/neslang-05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white font-sans text-xs">
                      <Github className="w-3.5 h-3.5 text-zinc-400" /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/neslang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white font-sans text-xs">
                      <Linkedin className="w-3.5 h-3.5 text-zinc-400" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
