import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isCompactNav, setIsCompactNav] = useState(false);

  const navItems = [
    { href: "#about", label: "About", number: "01" },
    { href: "#experience", label: "Experience", number: "02" },
    { href: "#projects", label: "Projects", number: "03" },
    { href: "#audits", label: "Audits", number: "04" },
    { href: "#contact", label: "Contact", number: "05" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 24);

      if (currentScrollY > lastScrollY && currentScrollY > 120 && !isMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    // Keep the desktop header intact longer so 100% zoom still uses the desktop
    // layout and only collapse when the viewport is genuinely narrow.
    const mediaQuery = window.matchMedia("(max-width: 980px)");
    const updateLayoutMode = () => setIsCompactNav(mediaQuery.matches);

    updateLayoutMode();
    mediaQuery.addEventListener("change", updateLayoutMode);

    return () => mediaQuery.removeEventListener("change", updateLayoutMode);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -110, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-[#0a0a0a]/95 shadow-[0_4px_24px_rgba(0,0,0,0.7)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-10 2xl:px-14">
        <Link href="/" className="relative inline-flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative h-14 w-14"
          >
            <svg viewBox="0 0 120 120" className="h-full w-full">
              <path
                d="M60 10 L98 32 L98 78 L60 100 L22 78 L22 32 Z"
                fill="#0a0a0a"
                stroke="rgba(102,255,229,0.45)"
                strokeWidth="3"
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-[#66ffe5]"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              A
            </span>
          </motion.div>
        </Link>

        <div className="flex items-center gap-4 lg:gap-6">
          {!isCompactNav && (
            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-[#66ffe5]"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1], delay: index * 0.08 }}
                >
                  <span className="font-mono text-[#66ffe5]">{item.number}.</span> {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1], delay: navItems.length * 0.08 }}
              >
                <Link href="/archive" className="text-sm text-gray-300 transition-colors duration-200 hover:text-[#66ffe5]">
                  <span className="font-mono text-[#66ffe5]">06.</span> Archive
                </Link>
              </motion.div>
            </div>
          )}

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1], delay: (navItems.length + 1) * 0.08 }}
          >
            {isCompactNav && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mr-1 rounded-md p-2 text-gray-300 transition-colors hover:text-[#66ffe5]"
                aria-label="Toggle mobile menu"
              >
                <i className={`fas ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
              </button>
            )}
          </motion.div>
        </div>
      </div>

      {isCompactNav && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-[#0a0a0a]/98 px-4 py-3 backdrop-blur-md"
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full rounded-md px-3 py-2 text-left text-gray-300 transition-colors hover:bg-[#66ffe5]/10 hover:text-[#66ffe5]"
              >
                <span className="font-mono text-[#66ffe5]">{item.number}.</span> {item.label}
              </button>
            ))}
            <Link href="/archive" className="block w-full rounded-md px-3 py-2 text-left text-gray-300 transition-colors hover:bg-[#66ffe5]/10 hover:text-[#66ffe5]">
              <span className="font-mono text-[#66ffe5]">06.</span> Archive
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
