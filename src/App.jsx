import React from "react";
import { motion } from "framer-motion";
import profile from "./assets/kingmarw.png";

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans overflow-x-hidden min-h-screen scroll-smooth">
      {/* Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 backdrop-blur-md border border-gray-700 rounded-2xl px-6 py-3 flex justify-between items-center w-[90%] max-w-6xl shadow-xl">
        <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">marw</h1>
        <nav className="space-x-8 text-sm">
          {['about','projects','experience','contact'].map(id=> (
            <a key={id} href={`#${id}`} className="hover:text-purple-400 transition duration-300 uppercase tracking-wider">{id}</a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-32 pb-40 px-6">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={profile}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-2xl mb-8"
        />
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent sm:text-5xl"
        >
          I'm Marwan elbadry
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-gray-300 max-w-xl text-lg"
        >
          I build sleek, modern websites & immersive games. Clean code. Killer design. Real impact.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex space-x-6 mt-8"
        >
          ))}
        </motion.div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="px-6 py-24 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h3 className="text-3xl font-bold mb-6 border-b-2 border-purple-600 inline-block">About Me</h3>
        <p className="text-gray-300 leading-relaxed text-lg mt-4">
          I'm a 14-year-old full stack & game developer from Egypt. I specialize in React, Flask, SQL, and Godot Engine. My passion is transforming ideas into beautiful, performant applications.
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        className="bg-black/80 px-6 py-24 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h3 className="text-3xl font-bold mb-12 text-center text-purple-400">Experience & Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: 'React & Next.js', level: 'Advanced' },
            { title: 'Python & Flask', level: 'Advanced' },
            { title: 'Godot Engine', level: 'Intermediate' },
            { title: 'SQL & Databases', level: 'Intermediate' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-purple-500"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="px-6 py-24 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h3 className="text-4xl font-bold mb-12 text-center text-purple-400">Featured Projects</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Personal Portfolio', desc: 'Built with React & TailwindCSS', link: '#' },
            { title: 'School Management App', desc: 'Python, Flask & SQLite', link: '#' },
            { title: '2D Adventure Game', desc: 'Godot Engine project', link: '#' },
          ].map((proj, idx) => (
            <motion.a
              key={idx}
              href={proj.link}
              whileHover={{ scale: 1.03 }}
              className="block bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-purple-500"
            >
              <h4 className="text-xl font-semibold mb-2">{proj.title}</h4>
              <p className="text-gray-400 mb-4">{proj.desc}</p>
              <span className="text-sm text-purple-400 hover:underline">View Case Study →</span>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="px-6 py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
        <p className="text-gray-400 mb-6">Have a project in mind? I'm open to collaborations and freelance work.</p>
        <motion.a
          href="https://wa.me/+201119644023"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-8 py-3 rounded-full shadow-lg"
        >
          Send me a message
        </motion.a>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-10 border-t border-gray-800 bg-black/50">
        <div className="flex flex-col items-center gap-2">
          <p className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
            Made with 💙 by King Marw
          </p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
