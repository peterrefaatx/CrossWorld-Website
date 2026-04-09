import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "الرئيسية", path: "/" },
  { label: "من نحن", path: "/about" },
  {
    label: "خدماتنا",
    children: [
      { label: "تأشيرة الرحل الرقميين", path: "/nomadas-digitales" },
      { label: "تأشيرة الإقامة غير الربحية", path: "/non-lucrativa" },
      { label: "إقامة Arraigo Sociolaboral", path: "/arraigo-sociolaboral" },
      { label: "التسوية الاستثنائية", path: "/regularizacion-excepcional" },
      { label: "قريباً — خدمات أخرى", path: "#", disabled: true },
    ],
  },
  { label: "تواصل معنا", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <>
      <nav
        dir="rtl"
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border))]"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo png.png" alt="CrossWorld" className="h-9 sm:h-12 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <li key={link.label} className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        location.pathname.startsWith("/nomadas") || location.pathname.startsWith("/non-lucrativa") || location.pathname.startsWith("/arraigo") || location.pathname.startsWith("/regularizacion")
                          ? "text-accent"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-border/50 overflow-hidden py-2"
                        >
                          {link.children.map((child) => (
                            <li key={child.label}>
                              {child.disabled ? (
                                <span className="block px-5 py-3 text-sm text-muted-foreground/50">
                                  {child.label}
                                </span>
                              ) : (
                                <Link
                                  to={child.path}
                                  className="block px-5 py-3 text-sm text-foreground/70 hover:text-accent hover:bg-accent/5 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        location.pathname === link.path
                          ? "text-accent"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                استشارة مجانية
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-secondary transition"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Accent line */}
        <div className="h-[2px] bg-gradient-to-l from-accent via-accent/50 to-transparent" />
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              dir="rtl"
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-border">
                <img src="/images/logo png.png" alt="CrossWorld" className="h-9 w-auto" />
              </div>
              <ul className="flex-1 p-6 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <li key={link.label} className="space-y-1">
                      <span className="block px-4 py-3 text-sm font-semibold text-foreground/60">
                        {link.label}
                      </span>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.disabled ? "#" : child.path}
                          className={`block pr-8 py-2.5 text-sm rounded-xl transition ${
                            child.disabled
                              ? "text-muted-foreground/40"
                              : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 text-sm font-medium rounded-xl transition ${
                          location.pathname === link.path
                            ? "text-accent bg-accent/5"
                            : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <div className="p-6 border-t border-border">
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 transition"
                >
                  استشارة مجانية
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}