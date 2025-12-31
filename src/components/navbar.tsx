'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

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
    <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg tracking-tight hover:text-zinc-300 transition-colors">
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
                    className={`px-3 py-2 text-sm font-mono transition-colors ${
                      isActive
                        ? 'text-white bg-zinc-900'
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
              <div className="hidden md:flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-200">
                <span className="h-7 w-7 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  {user.email?.[0]?.toUpperCase() || 'U'}
                </span>
                <span className="max-w-[120px] truncate font-mono">{user.email}</span>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-zinc-200 hover:text-white bg-zinc-900/70 border border-zinc-800 rounded"
              aria-label="Toggle navigation"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-3 rounded-lg border border-zinc-800 bg-black/90 backdrop-blur-lg shadow-lg overflow-hidden">
            <div className="flex flex-col divide-y divide-zinc-800">
              <div className="flex items-center gap-3 px-4 py-3">
                {user ? (
                  <>
                    <span className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
                      {user.email?.[0]?.toUpperCase() || 'U'}
                    </span>
                    <div className="text-sm leading-tight">
                      <p className="font-semibold">{user.email}</p>
                      <p className="text-zinc-500 font-mono text-xs">Signed in</p>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-zinc-400">Menu</p>
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
                      className={`px-4 py-3 text-sm font-mono flex justify-between items-center ${
                        isActive ? 'text-white bg-zinc-900' : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                      }`}
                    >
                      {item.label}
                      <ArrowOpen />
                    </Link>
                  );
                })}
              </div>

              {/* Collapsed footer content */}
              <div className="px-4 py-3 flex flex-col gap-3 text-sm text-zinc-400">
                <p className="text-xs font-mono text-zinc-500">Links</p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:neslang.in@gmail.com" className="flex items-center gap-2 hover:text-white">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                  <a href="https://github.com/neslang-05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/nilambar-elangbam-524617247/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function ArrowOpen() {
  return <span className="text-zinc-600">›</span>;
}
