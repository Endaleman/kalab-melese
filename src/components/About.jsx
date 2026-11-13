
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaVideo, FaCamera } from "react-icons/fa";

const highlights = [
    {
        icon: <FaGraduationCap />,
        title: "Education",
        description: "BSc in Water Engineering",
    },
    {
        icon: <FaChalkboardTeacher />,
        title: "Teaching",
        description: "2 years at Kal Mahala Academy",
    },
    {
        icon: <FaCamera />,
        title: "CCTV Installation",
        description: "1 year at Koppa Security",
    },
    {
        icon: <FaVideo />,
        title: "Creative Skills",
        description: "Graphic design and video editing",
    },
];

function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 px-6 py-24">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-widest">
                        Get to Know Me
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-5">
                        About <span className="text-blue-600">Me</span>
                    </h2>

                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        My background, professional experience, and interests.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/85 backdrop-blur-md border border-white rounded-3xl shadow-xl p-8 md:p-12"
                >
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                        <div>
                            <p className="text-cyan-600 font-bold uppercase tracking-wider text-sm mb-3">
                                My Story
                            </p>

                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Kalab Melese
                            </h3>

                            <p className="text-slate-600 leading-8 text-lg mb-5">
                                I am a Water Engineering graduate from Ethiopia.
                                I earned my Bachelor's degree from Arba Minch
                                University in 2023.
                            </p>

                            <p className="text-slate-600 leading-8 text-lg">
                                I have two years of experience teaching primary
                                school students at Kal Mahala Academy and one
                                year of experience installing CCTV security
                                camera systems at Koppa Security. I am also
                                developing my skills in graphic design and
                                video editing.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm">
                                    Water Engineering
                                </span>
                                <span className="px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 font-semibold text-sm">
                                    Education
                                </span>
                                <span className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm">
                                    Technology
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.12 }}
                                    className="rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 hover:-translate-y-2 hover:shadow-lg transition duration-300"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white text-xl mb-4">
                                        {item.icon}
                                    </div>

                                    <h4 className="font-bold text-slate-900 mb-2">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
