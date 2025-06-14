import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "./assets/kingmarw.png";

export default function App() {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

  // Dummy data for blog posts and testimonials
  const blogPosts = Array.from({ length: 9 }, (_, i) => ({
    title: `Blog Post Title ${i + 1}`,
    date: `2025-${String(i + 1).padStart(2, '0')}-15`,
    excerpt: `This is a brief excerpt for blog post number ${i + 1}. It summarizes the main points and invites the reader to click through and read more.`
  }));

  const testimonials = [
    { name: 'Alice', text: 'Working with Marw was a fantastic experience. His code quality is top-notch!' },
    { name: 'Bob', text: 'Creative, reliable, and fast. Highly recommend for any web or game project.' },
    { name: 'Charlie', text: 'Marw delivered beyond expectations. The animations and design blew me away.' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans overflow-x-hidden min-h-screen scroll-smooth">
      {/* Header */}
      <AnimatePresence>
        <motion.header
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-2xl border border-gray-600 rounded-3xl px-12 py-4 flex items-center w-[90%] max-w-5xl shadow-lg"
        >
          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mr-auto">
            marw
          </h1>
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-sm uppercase tracking-wider"
          >
            {['about','experience','projects','blogs','testimonials','contact'].map((id) => (
              <motion.a
                key={id}
                href={`#${id}`}
                variants={fadeInUp}
                className="relative px-2 py-1 hover:text-purple-400 transition duration-300"
              >
                <span className="after:absolute after:content-[''] after:block after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">
                  {id}
                </span>
              </motion.a>
            ))}
          </motion.nav>
        </motion.header>
      </AnimatePresence>

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-center text-center pt-32 pb-40 px-6">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ duration: 1 }} className="relative">
          <img src={profile} alt="Profile" className="w-48 h-48 rounded-full border-4 border-purple-500 shadow-[0_10px_25px_rgba(102,126,234,0.6)]" />
          <div className="absolute inset-0 animate-ping rounded-full bg-purple-500 opacity-20 blur-2xl" />
        </motion.div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3, duration: 0.8 }} className="mt-8 text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          I'm Marwan Elbadry
        </motion.h2>
        <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.6, duration: 0.8 }} className="mt-4 text-gray-300 max-w-md text-lg lg:max-w-lg">
          I build sleek, modern websites & immersive games. Clean code. Killer design. Real impact.
        </motion.p>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white/5 backdrop-blur-2xl rounded-2xl p-10">
          <h3 className="text-3xl font-bold mb-6 border-b-2 border-purple-500 inline-block">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a passionate full-stack & game developer from Egypt. With expertise in React, Flask, SQL, and Godot Engine, I craft applications that are both performant and visually stunning. My mission is to bring creative ideas to life.
          </p>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-black/80 px-6 py-24 max-w-5xl mx-auto">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center text-purple-500">Experience & Skills</motion.h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'React & Next.js', level: 'Advanced' },
            { title: 'Python & Flask', level: 'Advanced' },
            { title: 'Godot Engine', level: 'Intermediate' },
            { title: 'SQL & Databases', level: 'Intermediate' },
            { title: 'REST APIs', level: 'Advanced' }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} transition={{ delay: idx * 0.2, duration: 0.6 }} whileHover={{ scale: 1.1 }} className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 border border-purple-500">
              <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
              <p className="text-gray-300">{item.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-12 text-center text-purple-500">Featured Projects</motion.h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Portfolio Website', desc: 'React & TailwindCSS' },
            { title: 'School Management App', desc: 'Python, Flask & SQLite' },
            { title: '2D Adventure Game', desc: 'Godot Engine' },
            { title: 'Realtime Chat App', desc: 'Socket.io & Node.js' }
          ].map((proj, idx) => (
            <motion.div key={idx} variants={fadeInUp} transition={{ delay: idx * 0.2, duration: 0.6 }} whileHover={{ scale: 1.08 }} className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 border border-purple-500">
              <h4 className="text-xl font-semibold mb-2 text-white">{proj.title}</h4>
              <p className="text-gray-300">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-12 text-center text-purple-500">Blog Posts</motion.h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.div key={idx} variants={fadeInUp} transition={{ delay: idx * 0.1, duration: 0.5 }} whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 border border-purple-500">
              <h4 className="text-xl font-semibold mb-1 text-white">{post.title}</h4>
              <span className="text-sm text-gray-400 mb-3 block">{post.date}</span>
              <p className="text-gray-300">{post.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-black/80 px-6 py-24 max-w-5xl mx-auto">
        <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-12 text-center text-purple-500">Testimonials</motion.h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <motion.blockquote key={idx} variants={fadeInUp} transition={{ delay: idx * 0.2, duration: 0.6 }} className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-purple-500">
              <p className="italic text-gray-300">"{t.text}"</p>
              <footer className="mt-4 text-sm text-gray-400">- {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 text-center">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white/5 backdrop-blur-2xl rounded-2xl inline-block px-10 py-8">
          <h3 className="text-3xl font-bold mb-4">Let's Talk</h3>
          <p className="text-gray-300 mb-6">Have a project in mind? I'm open for collaborations and freelance work.</p>
          <motion.a href="https://wa.me/+201119644023" whileHover={{ scale: 1.1 }} className="inline-block bg-purple-500 hover:bg-purple-600 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-md">
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
