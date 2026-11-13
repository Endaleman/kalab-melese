import { motion } from "framer-motion";
import { FaWater } from "react-icons/fa";

// TODO: add Kalab's real projects later
const projects = [
    {
        title: "Project Coming Soon",
        description: "Project details will be added here later.",
        icon: <FaWater />,
        tech: ["To be updated"],
    },
    {
        title: "Project Coming Soon",
        description: "Project details will be added here later.",
        icon: <FaWater />,
        tech: ["To be updated"],
    },
    {
        title: "Project Coming Soon",
        description: "Project details will be added here later.",
        icon: <FaWater />,
        tech: ["To be updated"],
    },
];

function Projects() {
    return (
        <section id="projects" className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-blue-400 uppercase tracking-wider font-semibold">
                        Portfolio
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">My Projects</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        This section will be updated soon.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-xl"
                        >
                            <div className="text-5xl text-blue-500 mb-5">{project.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-400 mb-5 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300 border border-blue-400/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
