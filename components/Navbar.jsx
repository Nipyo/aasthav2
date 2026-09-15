"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md shadow-green-100/60" : "bg-white/95 backdrop-blur"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10">
        {/* Logo */}
<Link
  href="/"
  onClick={() => setOpen(false)}
  className="flex items-center gap-3 group"
>
  <Image
    src="/images/logo11.png"
    alt="Aastha Nature Cure Clinic"
    width={100}
    height={100}
    priority
    className="
      h-14 w-14
      sm:h-16 sm:w-16
      md:h-[90px] md:w-[90px]
      object-contain
      transition-all duration-300
      group-hover:scale-105
    "
  />

  <div>
    <h1 className="
      font-serif
      text-xl sm:text-xl md:text-xl
      font-semibold
      tracking-tight
      text-green-800
    ">
      Aastha Nature Cure Clinic
    </h1>

    <div className="flex items-center gap-2 mt-1 text-center">
      <span className="h-[1px] w-6 bg-[#c99b4a]" />

      <span className="
        text-xs sm:text-sm
        font-medium
        text-green-700
        ml-2
      

      ">
        Pvt. Ltd.
      </span>

      <span className="h-[1px] w-6 bg-[#c99b4a]" />
    </div>

    <p className="
      mt-1 ml-2
      text-xs sm:text-sm
      font-medium
      text-green-700
      tracking-wider
      text-center
    ">
      स्वस्थं जीवनम्
    </p>
  </div>
</Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
  link.href === "/"
    ? pathname === "/"
    : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href}
                className={`focus-ring link-underline font-body text-sm font-600 transition-colors ${active ? "text-green-600 font-700" : "text-gray-700 hover:text-green-600"}`}>
                {link.label}
              </Link>
            );
          })}
          <Link href="/appointment" className="btn-green focus-ring text-sm">
            <span>📅</span> Book Appointment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button type="button" onClick={() => setOpen(o => !o)}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-green-200 text-green-700 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}>
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="border-t border-green-100 bg-white px-5 pb-6 pt-3">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 font-body text-sm font-600 transition-colors ${pathname === link.href ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-green-50 hover:text-green-700"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/appointment" onClick={() => setOpen(false)} className="btn-green focus-ring mt-4 w-full justify-center text-sm">
            📅 Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
