import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 inline-block">Projects</h2>
        <p className="text-lg leading-relaxed mb-8">
          I'm currently building my first real-world projects. Stay tuned — this section will soon showcase AI/ML work like deepfake detection systems and more.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <h3 className="text-xl font-semibold mb-2">Deepfake Detection (Coming Soon)</h3>
            <p className="text-sm mb-3">An AI-powered project using computer vision and deep learning models to detect manipulated media content.</p>
            <a href="https://github.com/Ashokyadav88" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Repository</a>
          </motion.div>
          <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
            <p className="text-sm">I’m actively learning and working on more AI/ML applications. Exciting updates will be added here soon!</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;