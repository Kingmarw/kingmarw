import React from "react";
import { motion } from "framer-motion";
import profile from "./assets/kingmarw.png";

export default function App() {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans overflow-x-hidden min-h-screen">
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md border border-gray-700 rounded-2xl px-8 py-4 flex justify-between items-center w-[90%] max-w-5xl shadow-2xl">
        <h1 className="text-2xl font-bold tracking-tight">marw</h1>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 pt-48 pb-32 px-6 text-center">
        <div className="flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={profile}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-purple-500 shadow-2xl mb-6"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            I'm Marwan elbadry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-gray-300 max-w-2xl mx-auto text-xl"
          >
            I build sleek, modern websites & epic games. Clean code. Killer design. Real impact.
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 max-w-4xl mx-auto relative z-10">
        <h3 className="text-4xl font-bold mb-6 border-b border-purple-600 pb-2">About Me</h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          I'm a 14-year-old full stack & game developer from Egypt. I specialize in React, Flask, SQL, and Godot. Whether it's a website or an immersive experience, I bring visions to life with code.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-black/80 px-6 py-24 max-w-6xl mx-auto relative z-10">
        <h3 className="text-4xl font-bold mb-12 text-center text-purple-400">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-purple-500"
          >
            <h4 className="text-xl font-semibold mb-2">React web applications</h4>
            <p className="text-gray-400">i developed a react web app.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-purple-500"
          >
            <h4 className="text-xl font-semibold mb-2">front-end devolper</h4>
            <p className="text-gray-400">i'm front-end devolper.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 text-center relative z-10">
        <h3 className="text-4xl font-bold mb-4">Let's Talk</h3>
        <p className="text-gray-400 mb-6">Have a project in mind? I'm open to collaborations and freelance work.</p>
        <a href="https://wa.me/+201119644023" className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-8 py-3 rounded-full shadow-lg">
          Send me an message
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-10 border-t border-gray-800 relative z-10 bg-black/50">
        <div className="flex flex-col items-center gap-3">
          <div className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Made with 💙 by King Marw
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
