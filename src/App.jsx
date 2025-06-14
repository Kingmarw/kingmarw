import React from "react";
import { motion } from "framer-motion";
import profile from "./assets/kingmarw.png";

export default function App() {
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans overflow-x-hidden min-h-screen scroll-smooth">
      {/* Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/40 backdrop-blur-lg border border-gray-700 rounded-2xl px-8 py-3 flex justify-between items-center w-[90%] max-w-5xl transition-colors duration-300 hover:bg-black/60">
        <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">marw</h1>
        <nav className="space-x-8 text-sm uppercase tracking-wide">
          {['about','projects','contact'].map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="relative hover:text-purple-400 transition-colors duration-300 px-1"
            >
              <span className="after:absolute after:content-[''] after:block after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">
                {id}
              </span>
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-32 pb-40 px-6">
        <motion.img
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={profile}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-[0_10px_15px_rgba(102,126,234,0.5)] mb-8"
        />
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight"
        >
          I'm Marwan Elbadry
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 max-w-xl text-lg"
        >
          I build sleek, modern websites & immersive games. Clean code. Killer design. Real impact.
        </motion.p>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="px-6 py-24 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4 border-b-2 border-purple-500 inline-block">About Me</h3>
        <p className="text-gray-300 leading-relaxed text-lg mt-4">
          I'm a passionate full-stack & game developer from Egypt. I specialize in React, Flask, SQL, and Godot. I love turning ideas into beautiful, high-performance apps.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        className="bg-black/80 px-6 py-24 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-4xl font-bold mb-12 text-center text-purple-500">Featured Projects</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Portfolio Website', desc: 'React & Tailwind' },
            { title: 'School App', desc: 'Python, Flask & SQLite' },
            { title: '2D Adventure Game', desc: 'Godot Engine' }
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 border border-purple-500"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">{proj.title}</h4>
              <p className="text-gray-400">{proj.desc}</p>
            </motion.div>
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
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
        <p className="text-gray-400 mb-6">Have a project in mind? I'm open for collaborations and freelance work.</p>
        <motion.a
          href="https://wa.me/+201119644023"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-purple-500 hover:bg-purple-600 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-md"
        >
          Send me a message
        </motion.a>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-800 bg-black/50">
        <p>&copy; {new Date().getFullYear()} Marwan Elbadry. All rights reserved.</p>
      </footer>
    </div>
  );
}
