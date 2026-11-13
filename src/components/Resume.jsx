
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaCamera, FaVideo } from "react-icons/fa";

const experiences = [
    {
        title: "Graphic Design and Video Editing Instructor",
        meta: "Current",
        text: "Learning graphic design and video editing, helping students develop practical skills in visual communication and digital media production.",
        icon: <FaVideo />,
        number: "01",
    },
    {
        title: "Primary School Teacher",
        meta: "2 Years | Kal Mahala Academy",
        text: "Taught primary school students, prepared lessons, delivered classroom instruction, and supported students' learning and development.",
        icon: <FaChalkboardTeacher />,
        number: "02",
    },
    {
        title: "CCTV Installation Technician",
        meta: "1 Year | Koppa Security",
        text: "Installed and configured CCTV security camera systems to support reliable security and surveillance solutions.",
        icon: <FaCamera />,
        number: "03",
    },
];

function Resume() {
    return (
        <section id="resume" className="relative overflow-hidden bg-slate-950 py-24 px-6">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/20 text-sm font-bold uppercase tracking-widest">
                        My Career
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-5">
                        Work <span className="text-cyan-400">Experience</span>
                    </h2>

                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        My professional roles and the experience gained in each position.
                    </p>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-slate-900/90 border border-slate-700 rounded-3xl p-7 md:p-9 hover:border-cyan-400/50 transition duration-300"
                        >
                            <div className="absolute top-0 right-0 text-8xl font-black text-white/[0.03] p-4">
                                {exp.number}
                            </div>

                            <div className="relative flex flex-col md:flex-row gap-6">
                                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl shadow-lg">
                                    {exp.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                                        {exp.title}
                                    </h3>

                                    <p className="text-cyan-300 font-semibold mt-2 mb-4">
                                        {exp.meta}
                                    </p>

                                    <p className="text-slate-300 leading-7">
                                        {exp.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resume;
