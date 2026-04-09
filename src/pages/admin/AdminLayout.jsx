import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import {
  LayoutDashboard, Newspaper, MessageSquare, Mail, Settings, LogOut, Menu, X, ExternalLink
} from "lucide-react";

const navItems = [
  { label: "Dashboard", labelAr: "لوحة التحكم", path: "/admin", icon: LayoutDashboard, exact: true, roles: ['admin', 'editor'] },
  { label: "Articles", labelAr: "المقالات", path: "/admin/articles", icon: Newspaper, roles: ['admin', 'editor'] },
  { label: "Testimonials", labelAr: "التقييمات", path: "/admin/testimonials", icon: MessageSquare, roles: ['admin'] },
  { label: "Submissions", labelAr: "طلبات التواصل", path: "/admin/submissions", icon: Mail, roles: ['admin', 'editor'] },
  { label: "Settings", labelAr: "الإعدادات", path: "/admin/settings", icon: Settings, roles: ['admin', 'editor'] },
];

export default function AdminLayout() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (item) =>
    item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path);

  const currentPage = navItems.find((n) => isActive(n));
  
  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => 
    !item.roles || item.roles.includes(user?.role)
  );

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-cairo" dir="rtl">
      {/* ── Sidebar ── */}
      <aside className={`fixed top-0 right-0 bottom-0 w-60 bg-[#1c1c1e] z-50 flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      }`}>
        {/* Brand */}
        <div className="px-5 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#e67e22] to-[#f39c12] flex items-center justify-center">
              <span className="text-white text-xs font-black">CW</span>
            </div>
            <div>
              <div className="text-white text-sm font-bold leading-none">CrossWorld</div>
              <div className="text-white/30 text-[10px] mt-0.5">Admin Panel</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
          <div className="text-[9px] font-semibold tracking-[2px] uppercase text-white/20 px-3 pb-2 pt-1">General</div>
          {filteredNavItems.slice(0, 1).map(item => <SideNavItem key={item.path} item={item} active={isActive(item)} onClick={() => setSidebarOpen(false)} />)}
          <div className="text-[9px] font-semibold tracking-[2px] uppercase text-white/20 px-3 pb-2 pt-4">Content</div>
          {filteredNavItems.slice(1, 4).map(item => <SideNavItem key={item.path} item={item} active={isActive(item)} onClick={() => setSidebarOpen(false)} />)}
          <div className="text-[9px] font-semibold tracking-[2px] uppercase text-white/20 px-3 pb-2 pt-4">System</div>
          {filteredNavItems.slice(4).map(item => <SideNavItem key={item.path} item={item} active={isActive(item)} onClick={() => setSidebarOpen(false)} />)}
        </nav>

        {/* User Info */}
        <div className="p-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#e67e22] to-[#f39c12] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
              {user?.full_name?.slice(0,1) || "A"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-white/80 text-xs font-medium truncate">{user?.full_name || "Admin"}</div>
              <div className="text-white/30 text-[10px] truncate">{user?.email || ""}</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Main ── */}
      <div className="min-h-screen flex flex-col lg:mr-60">
        {/* Topbar */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-black/[0.06] px-6 py-0 flex items-center gap-3 sticky top-0 z-20 h-14">
          <button className="lg:hidden p-1.5 rounded-lg hover:bg-black/5 transition" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="w-4 h-4 text-gray-600" /> : <Menu className="w-4 h-4 text-gray-600" />}
          </button>
          <div>
            <span className="text-sm font-semibold text-[#1c1c1e]">{currentPage?.labelAr || "Admin"}</span>
          </div>
          <div className="mr-auto flex items-center gap-2">
            <Link to="/" target="_blank" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition px-3 py-1.5 rounded-lg hover:bg-black/5">
              <ExternalLink className="w-3 h-3" />
              عرض الموقع
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-600 transition px-3 py-1.5 rounded-lg hover:bg-red-50"
            >
              <LogOut className="w-3 h-3" />
              تسجيل الخروج
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8 max-w-6xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SideNavItem({ item, active, onClick }) {
  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
        active
          ? "bg-white/10 text-white"
          : "text-white/40 hover:text-white/70 hover:bg-white/5"
      }`}
    >
      <item.icon className={`w-4 h-4 flex-shrink-0 ${active ? "text-[#e67e22]" : ""}`} />
      {item.labelAr}
    </Link>
  );
}