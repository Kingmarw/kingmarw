import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "./assets/kingmarw.png";

export default function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#youtube", label: "YouTube" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook", link: "https://facebook.com/kingmarw3" },
    { icon: "fab fa-github", link: "https://github.com/KingMarw" },
    { icon: "fab fa-x-twitter", link: "https://x.com/KingMarw17299" },
    { icon: "fab fa-youtube", link: "https://youtube.com/@kingmarw" },
  ];

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${
            import.meta.env.VITE_YOUTUBE_API_KEY
          }&channelId=UCvamsMKdgHHfLhk8wppAJ-g&part=snippet,id&order=date&maxResults=6`
        );
        const data = await res.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error("Failed to fetch videos", err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans overflow-x-hidden min-h-screen scroll-smooth">
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md border border-gray-700 rounded-2xl px-8 py-4 flex justify-between items-center w-[90%] max-w-5xl shadow-2xl">
        <h1 className="text-2xl font-bold tracking-tight">Marw</h1>
        <nav className="space-x-6 text-sm">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="hover:text-purple-400 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center pt-32 pb-40 px-6"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={profile}
            alt="Profile"
            loading="lazy"
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
          I'm a YouTuber and programmer, passionate about sharing my knowledge with others.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex space-x-6 mt-8 text-2xl"
        >
          {socialLinks.map(({ icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              <i className={icon}></i>
            </a>
          ))}
        </motion.div>
      </section>

      <section id="about" className="px-6 py-24 max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl rounded-2xl p-10"
        >
          <h3 className="text-white font-bold mb-6 border-b-2 border-purple-500 inline-block">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a passionate full-stack & game developer from Egypt. With
            expertise in html, css, python and Godot Engine, I craft
            applications that are both performant and visually stunning.
          </p>
        </motion.div>
      </section>

      <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-center text-purple-500"
        >
          Featured Projects
        </motion.h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Portfolio Website", desc: "React & TailwindCSS" },
            { title: "School Management App", desc: "Python, Flask & SQLite" },
            { title: "2D Adventure Game", desc: "Godot Engine" },
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 border border-purple-500"
            >
              <h4 className="text-xl font-semibold mb-2 text-white">
                {proj.title}
              </h4>
              <p className="text-gray-300">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="youtube" className="px-6 py-24 max-w-6xl mx-auto">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-center text-purple-500"
        >
          Latest Videos
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center">
              No videos available or failed to load.
            </p>
          ) : (
            videos.map((video, idx) => {
              if (!video.id.videoId) return null;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-2xl rounded-xl p-4 border border-purple-500"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      loading="lazy"
                      className="rounded-xl mb-4"
                    />
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {video.snippet.title}
                    </h4>
                  </a>
                </div>
              );
            })
          )}
        </div>
      </section>

      <section id="contact" className="px-6 py-24 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl rounded-2xl inline-block px-10 py-8"
        >
          <h3 className="text-white font-bold mb-4">Let's Talk</h3>
          <p className="text-gray-300 mb-6">
            Have a project in mind? I'm open for collaborations and freelance
            work.
          </p>
          <motion.a
            href="https://wa.me/+201119644023"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-purple-500 hover:bg-purple-600 transition-colors duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-md"
          >
            Send me a message
          </motion.a>
        </motion.div>
      </section>

      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-800 bg-black/50">
        <p>
          &copy; {new Date().getFullYear()} Marwan Elbadry. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
