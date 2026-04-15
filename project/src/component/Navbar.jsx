import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#Home" },
  { label: "Projects", href: "#Projects" },
  { label: "Services", href: "#Services" },
  { label: "Experience", href: "#Experience" },
  { label: "Contact", href: "#Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header
        className="
        fixed top-4 inset-x-4
        mx-auto w-[calc(100%-2rem)] max-w-[1250px]

        flex items-center justify-between

        px-6 md:px-10 py-2 md:py-3 rounded-full

        bg-white/20 backdrop-blur-xl border border-white/30
        shadow-lg shadow-black/10

        transform-gpu transition-all duration-500 ease-out
        hover:shadow-xl

        z-[1000]
      "
      >
        {/* LEFT (LOGO + TEXT) */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/logo.webp"
            alt="Logo"
            className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full object-cover flex-shrink-0"
          />

          <a
            href="#Home"
            className="text-[1.5rem] md:text-[2rem] font-bold whitespace-nowrap"
          >
            <span className="text-[#ff7a18]">frametic</span>
            <span className="text-[#222]">studio</span>
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
              text-[1rem] font-medium
              text-[#222]
              hover:text-[#ff7a18]
              transition duration-300
            "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          aria-controls="navbar-menu"
          aria-expanded={open}
          className="md:hidden text-[2rem] flex-shrink-0 z-[1100]"
        >
          {open ? "✖" : "☰"}
        </button>
      </header>

      {/* MOBILE MENU */}
      <nav
        id="navbar-menu"
        className={`
        fixed top-0 right-0 h-screen w-[75%] max-w-[320px]

        bg-white/95 backdrop-blur-xl border-l border-white/30

        p-[100px_25px]

        flex flex-col gap-6

        transform transition duration-300 ease-out z-[1000]

        ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}

        md:hidden
      `}
      >
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="
            text-[1.4rem] font-medium
            text-[#222]
            hover:text-[#ff7a18]

            transition-all duration-300
            hover:translate-x-2

            block w-full
            border-b border-gray-200
            pb-2
          "
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`
        fixed inset-0 bg-black/40 z-[900] transition
        md:hidden
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      />
    </>
  );
}