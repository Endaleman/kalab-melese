
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#resume" },
        { name: "Education", href: "#timeline" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-cyan-400/20 shadow-lg shadow-slate-950/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="text-3xl font-extrabold tracking-wide text-white"
                >
                    Kalab<span className="text-cyan-400">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-semibold text-slate-200 hover:text-cyan-300 transition duration-300 group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="hidden md:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-cyan-950/30 hover:scale-105 transition duration-300"
                >
                    Let's Talk
                </a>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl text-cyan-300 hover:text-white transition"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <div
                id="mobile-navigation"
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col px-6 py-4 gap-4 bg-slate-900 border-t border-cyan-400/20">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-slate-200 font-medium hover:text-cyan-300 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
