
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaCamera, FaPalette } from "react-icons/fa";

const timelineData = [
    {
        year: "2023",
        title: "Bachelor's Degree in Water Engineering",
        organization: "Arba Minch University",
        description: "Graduated with a Bachelor's degree in Water Engineering.",
        icon: <FaGraduationCap />,
    },
    {
        year: "2 Years",
        title: "Primary School Teacher",
        organization: "Kal Mahala Academy",
        description: "Taught primary school students and supported their educational development.",
        icon: <FaChalkboardTeacher />,
    },
    {
        year: "1 Year",
        title: "CCTV Installation Technician",
        organization: "Koppa Security",
        description: "Installed and configured CCTV security camera systems.",
        icon: <FaCamera />,
    },
    {
        year: "Current",
        title: "Graphic Design and Video Editing",
        organization: "Current Learning / Teaching Role",
        description: "Developing and applying skills in graphic design and video editing.",
        icon: <FaPalette />,
    },
];

function Timeline() {
    return (
        <section id="timeline" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-100 py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-widest">
                        My Journey
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-5">
                        Education & <span className="text-blue-600">Experience</span>
                    </h2>

                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Important milestones in my academic and professional journey.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-300 rounded-full md:-translate-x-1/2" />

                    <div className="space-y-10">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex pl-16 md:pl-0 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                            >
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 border-4 border-white shadow-lg text-white flex items-center justify-center text-lg z-10">
                                    {item.icon}
                                </div>

                                <div className="w-full md:w-[44%] bg-white border border-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">
                                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-sm font-bold">
                                        {item.year}
                                    </span>

                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-blue-600 font-semibold mt-2">
                                        {item.organization}
                                    </p>

                                    <p className="text-slate-600 mt-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
