'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  FileText, 
  FolderKanban, 
  User, 
  Settings, 
  LogOut,
  Home,
  Briefcase,
  GraduationCap,
  Code,
  Loader2
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAdmin, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isLoginPage = pathname?.startsWith('/admin/login');

  useEffect(() => {
    if (isLoginPage) return; // Allow the login page to render without redirects

    if (!loading && !user) {
      router.push('/admin/login');
    }
    if (!loading && user && !isAdmin) {
      router.push('/');
    }
  }, [user, isAdmin, loading, router, isLoginPage]);

  if (isLoginPage) {
    // Render login page without admin chrome or auth gating
    return (
      <div className="min-h-screen bg-black text-white">
        {children}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/personal', label: 'Personal Info', icon: User },
    { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
    { href: '/admin/experience', label: 'Experience', icon: Briefcase },
    { href: '/admin/education', label: 'Education', icon: GraduationCap },
    { href: '/admin/skills', label: 'Skills', icon: Code },
    { href: '/admin/blog', label: 'Blog Posts', icon: FileText },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside
        className={`${collapsed ? 'w-20' : 'w-64'} sticky top-0 h-screen border-r border-zinc-800 flex flex-col bg-black/90 backdrop-blur-sm`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg">NE</span>
            {!collapsed && <span className="text-zinc-500 text-sm font-mono">/ admin</span>}
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-zinc-500 hover:text-white p-2"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? '›' : '‹'}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors rounded"
                >
                  <item.icon className="w-4 h-4" />
                  {!collapsed && item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-zinc-800 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors rounded"
          >
            <Home className="w-4 h-4" />
            {!collapsed && 'View Site'}
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-zinc-900 transition-colors rounded"
          >
            <LogOut className="w-4 h-4" />
            {!collapsed && 'Sign Out'}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto min-h-screen">
        {children}
      </main>
    </div>
  );
}
