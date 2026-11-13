
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);

        toggleVisibility();

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollTop}
                    initial={{ opacity: 0, scale: 0.5, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 30 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 shadow-xl shadow-blue-950/30 hover:scale-110 transition-all duration-300 text-white"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="text-lg" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default ScrollToTop;
