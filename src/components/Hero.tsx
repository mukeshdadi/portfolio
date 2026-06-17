import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Download,
  ArrowRight,

  Mail
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiMysql } from 'react-icons/si';
import resumePdf from '../assets/DadiMukesh FullStackDeveloper (1).pdf';
import passphoto from '../assets/pass photo.jpeg';
const floatingIcons = [
  { Icon: FaReact, color: '#61DAFB', delay: 0 },
  { Icon: SiTypescript, color: '#3178C6', delay: 0.2 },
  { Icon: FaNodeJs, color: '#339933', delay: 0.4 },
  { Icon: SiNestjs, color: '#E0234E', delay: 0.6 },
  { Icon: SiMysql, color: '#4479A1', delay: 0.8 },
  { Icon: FaGithub, color: '#ffffff', delay: 1 },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent dark:from-blue-500/5 dark:via-purple-500/5 z-0" />

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20 dark:opacity-10"
            initial={{ y: "100vh", x: Math.random() * 100 + "vw" }}
            animate={{
              y: "-10vh",
              rotate: [0, 360],
              x: Math.random() * 100 + "vw"
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
          >
            <item.Icon size={40} color={item.color} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-accent-color">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Dadi Mukesh
            </h1>
            <div className="text-2xl md:text-3xl font-semibold h-[40px] text-gray-600 dark:text-gray-400">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'ReactJs Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'ReactJs Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Full Stack Developer with 2+ years of experience building enterprise ERP applications using
            React.js, TypeScript, NestJS, Node.js, and MySQL. Delivered scalable solutions across Procurement,
            Production, Logistics, Finance, and Sales modules while optimizing performance, developing REST APIs,
            and creating reusable business-focused components.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="projects" smooth={true} duration={500}>
              <button className="flex items-center gap-2 bg-accent-color text-slate-900 dark:text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors premium-shadow">
                View Projects <ArrowRight size={18} />
              </button>
            </Link>
            <a
              href={resumePdf}
              download="Dadi_Mukesh_Resume.pdf"
              className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Download Resume <Download size={18} />
            </a>
            <Link to="contact" smooth={true} duration={500}>
              <button className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                Contact Me <Mail size={18} />
              </button>
            </Link>
          </div>

          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/mukeshdadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-color transition-colors"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/mukesh-dadi-6a655a317"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-color transition-colors"
            >
              <FaLinkedin size={24} />
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-500 hover:text-accent-color transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 animate-spin-slow opacity-50 blur-xl" style={{ animationDuration: '8s' }} />
            <motion.div
              className="relative w-full h-full rounded-full p-2 glass-effect overflow-hidden border-4 border-white/20 dark:border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={passphoto}
                alt="Dadi Mukesh"
                className="w-full h-full object-cover object-[center_40%] rounded-full"

              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link to="about" smooth={true} duration={500}>
          <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
