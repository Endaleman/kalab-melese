
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
    const form = useRef(null);
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus("Message sent successfully ✅");
                form.current.reset();
            })
            .catch(() => {
                setStatus("Failed to send message ❌");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-6 py-20 bg-white"
        >
            <motion.div
                className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-lg"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-center mb-8">
                    <p className="text-blue-600 uppercase tracking-wider font-semibold">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl font-bold mt-2 text-slate-900">
                        Contact Me
                    </h2>

                    <p className="text-slate-500 mt-3">
                        Have an opportunity or question? Feel free to send me a message.
                    </p>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-5"
                >
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />

                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60"
                    >
                        <FaPaperPlane />
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {status && (
                    <div
                        className={`mt-6 text-center font-medium ${status.includes("successfully")
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                    >
                        {status}
                    </div>
                )}
            </motion.div>
        </section>
    );
}

export default Contact;
