'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg tracking-tight hover:text-zinc-300 transition-colors">
            NE
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-1">
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
        </div>
      </nav>
    </header>
  );
}
