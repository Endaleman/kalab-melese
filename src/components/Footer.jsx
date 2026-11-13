
import { FaTelegram, FaPhone, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
    return (
        <footer className="relative overflow-hidden bg-slate-950 border-t border-cyan-400/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-600/20 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6 py-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center text-center"
                >
                    <a href="#home" className="text-3xl font-extrabold text-white mb-3">
                        Kalab<span className="text-cyan-400">.</span>
                    </a>

                    <p className="text-slate-400 max-w-xl mb-8 leading-relaxed">
                        Water Engineer, educator, and technology enthusiast
                        interested in learning and developing practical skills.
                    </p>

                    <div className="flex gap-4 mb-8">
                        <a
                            href="https://t.me/Kaleab_25"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                            className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-cyan-300 text-xl hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition duration-300"
                        >
                            <FaTelegram />
                        </a>

                        <a
                            href="tel:+251910528376"
                            aria-label="Phone"
                            className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-cyan-300 text-xl hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition duration-300"
                        >
                            <FaPhone />
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300 mb-8">
                        <FaPhone className="text-cyan-400" />
                        <a href="tel:+251910528376" className="hover:text-cyan-300 transition">
                            +251 91 052 8376
                        </a>
                    </div>

                    <a
                        href="#home"
                        className="flex items-center gap-2 text-sm text-cyan-300 hover:text-white transition"
                    >
                        Back to top <FaArrowUp />
                    </a>

                    <div className="w-full h-px bg-slate-800 my-8" />

                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Kalab Melese. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
