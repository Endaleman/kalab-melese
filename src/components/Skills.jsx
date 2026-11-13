
import { motion } from "framer-motion";
import {
    FaWater,
    FaChalkboardTeacher,
    FaVideo,
    FaCamera,
    FaPalette,
} from "react-icons/fa";

const skills = [
    { name: "Water Engineering", level: 80, icon: <FaWater />, color: "from-blue-600 to-cyan-400" },
    { name: "Teaching", level: 90, icon: <FaChalkboardTeacher />, color: "from-indigo-600 to-blue-400" },
    { name: "CCTV Installation", level: 85, icon: <FaCamera />, color: "from-cyan-600 to-teal-400" },
    { name: "Graphic Design", level: 80, icon: <FaPalette />, color: "from-purple-600 to-pink-400" },
    { name: "Video Editing", level: 80, icon: <FaVideo />, color: "from-blue-700 to-indigo-400" },
];

const areas = [
    "Water Engineering",
    "Teaching",
    "CCTV Installation",
    "Graphic Design",
    "Video Editing",
];

function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden bg-slate-950 py-24 px-6">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/20 text-sm font-bold uppercase tracking-widest">
                        What I Can Do
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-5">
                        My <span className="text-cyan-400">Skills</span>
                    </h2>

                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Professional abilities and areas I have developed through education and experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/80 border border-slate-700/70 rounded-2xl p-6 hover:border-cyan-400/50 hover:-translate-y-1 transition duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center text-xl">
                                    {skill.icon}
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    {skill.name}
                                </h3>

                                <span className="ml-auto text-cyan-300 font-bold">
                                    {skill.level}%
                                </span>
                            </div>

                            <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: index * 0.1 }}
                                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-blue-900/60 to-cyan-900/40 border border-cyan-400/20 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">
                        Professional Areas
                    </h3>

                    <div className="flex flex-wrap justify-center gap-3">
                        {areas.map((area) => (
                            <span
                                key={area}
                                className="px-5 py-3 rounded-full bg-slate-950/60 border border-cyan-300/20 text-cyan-100 text-sm font-medium hover:bg-cyan-500/20 transition"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
