
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import backgroundImg from "../assets/kalab.jpg";
import profileImg from "../assets/photo_kal.jpg";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-5 py-24 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            {/* Dark transparent overlay keeps the background visible */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-blue-950/65 to-cyan-950/55"></div>

            <motion.div
                className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] items-center gap-10 p-7 md:p-12 rounded-3xl border border-white/20 bg-slate-950/45 backdrop-blur-sm shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Profile image */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-xl opacity-50"></div>
                        <img
                            src={profileImg}
                            alt="Kalab Melese"
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-300 shadow-2xl"
                        />
                    </div>
                </div>

                {/* Hero text */}
                <div className="text-center lg:text-left">
                    <p className="inline-block text-cyan-200 font-semibold tracking-widest uppercase text-sm mb-4 px-4 py-2 rounded-full border border-cyan-300/40 bg-cyan-400/10">
                        Welcome to My Portfolio
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 text-white">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                            Kalab Melese
                        </span>
                    </h1>

                    <div className="text-xl md:text-3xl font-bold text-cyan-200 mb-6 min-h-12">
                        <TypeAnimation
                            sequence={[
                                "Water Engineer",
                                1500,
                                "Primary School Teacher",
                                1500,
                                "Graphic Designer",
                                1500,
                                "Video Editor",
                                1500,
                                "CCTV Installation Technician",
                                1500,
                            ]}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-base md:text-lg text-slate-100 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                        Water Engineering graduate from Arba Minch University
                        with professional experience in primary education,
                        CCTV installation, graphic design, and video editing.
                        I enjoy combining technical knowledge, creativity,
                        and practical skills to solve problems.
                    </p>

                    {/* Experience highlights */}
                    <div className="grid grid-cols-3 gap-3 mb-9">
                        <div className="rounded-xl border border-white/15 bg-white/10 p-3">
                            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300">2023</h3>
                            <p className="text-xs md:text-sm text-slate-200 mt-1">Graduated</p>
                        </div>

                        <div className="rounded-xl border border-white/15 bg-white/10 p-3">
                            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300">2+</h3>
                            <p className="text-xs md:text-sm text-slate-200 mt-1">Years Teaching</p>
                        </div>

                        <div className="rounded-xl border border-white/15 bg-white/10 p-3">
                            <h3 className="text-2xl md:text-3xl font-bold text-cyan-300">1+</h3>
                            <p className="text-xs md:text-sm text-slate-200 mt-1">Year CCTV</p>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <a
                            href="#resume"
                            className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg shadow-blue-900/30 hover:scale-105 hover:shadow-cyan-500/30 transition duration-300"
                        >
                            View Experience
                        </a>

                        <a
                            href="#contact"
                            className="px-7 py-3 rounded-xl border border-cyan-300 text-cyan-100 font-bold hover:bg-cyan-400 hover:text-slate-950 transition duration-300"
                        >
                            Contact Me
                        </a>

                        <a
                            href="/Kalab_Melese_CV.pdf"
                            download
                            className="px-7 py-3 rounded-xl border border-white/50 text-white font-bold hover:bg-white hover:text-slate-900 transition duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;
