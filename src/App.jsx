import React from "react";
import { motion } from "framer-motion";
import profile from "./assets/kingmarw.png";

export default function App() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  const navItems = [
    { icon: 'fas fa-home', href: '#hero', label: 'Home' },
    { icon: 'fas fa-user', href: '#about', label: 'About' },
    { icon: 'fas fa-briefcase', href: '#projects', label: 'Projects' },
    { icon: 'fas fa-envelope', href: '#contact', label: 'Contact' }
  ];

  const social = [
    'fab fa-github',
    'fab fa-linkedin',
    'fab fa-twitter',
    'fab fa-instagram'
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans overflow-x-hidden min-h-screen scroll-smooth">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 backdrop-blur-2xl border-b border-gray-700 w-full max-w-5xl"
      >
        <div className="flex items-center justify-center h-16 px-6">
          <nav className="flex space-x-10 text-xl text-gray-300">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-purple-400 transition-colors duration-300"
                title={item.label}
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-32 pb-40 px-6">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 1 }} className="relative">
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-purple-500 shadow-[0_10px_25px_rgba(102,126,234,0.6)]"
          />
          <div className="absolute inset-0 animate-ping rounded-full bg-purple-500 opacity-20 blur-2xl" />
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          I'm Marwan Elbadry
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-gray-300 max-w-md text-lg lg:max-w-lg"
        >
          I build sleek, modern websites & immersive games. Clean code. Killer design. Real impact.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex space-x-6 mt-8 text-2xl"
        >
          {social.map((cls, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <i className={cls}></i>
            </a>
          ))}
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white/5 backdrop-blur-2xl rounded-2xl p-10">
          <h3 className="text-3xl font-bold mb-6 border-b-2 border-purple-500 inline-block">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a passionate full-stack & game developer from Egypt. With expertise in React, Flask, SQL, and Godot Engine, I craft applications that are both performant and visually stunning.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-12 text-center text-purple-500">Featured Projects</motion.h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Portfolio Website', desc: 'React & TailwindCSS' },
            { title: 'School Management App', desc: 'Python, Flask & SQLite' },
            { title: '2D Adventure Game', desc: 'Godot Engine' }
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 border border-purple-500"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">{proj.title}</h4>
              <p className="text-gray-300">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 text-center">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white/5 backdrop-blur-2xl rounded-2xl inline-block px-10 py-8">
          <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
          <p className="text-gray-300 mb-6">Have a project in mind? I'm open for collaborations and freelance work.</p>
          <motion.a
            href="https://wa.me/+201119644023"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-purple-500 hover:bg-purple-600 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-md"
          >
            Send me a message
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-800 bg-black/50">
        <p>&copy; {new Date().getFullYear()} Marwan Elbadry. All rights reserved.</p>
      </footer>
    </div>
  );
}
