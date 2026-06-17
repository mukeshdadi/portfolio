import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Code, Database, Clock } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      icon: <Clock size={24} className="text-blue-500" />,
      value: "2+ Years ",
      label: "Experience",
    },
    {
      icon: <Code size={24} className="text-purple-500" />,
      value: "25+",
      label: "Reusable Components",
    },
    {
      icon: <Briefcase size={24} className="text-pink-500" />,
      value: "6+",
      label: "ERP Modules",
    },
    {
      icon: <Database size={24} className="text-green-500" />,
      value: "10000+",
      label: "Records Optimized",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent-color mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-600 dark:text-gray-300"
          >
            <p>
              I am a <span className="font-semibold text-accent-color">Full Stack Developer</span> with 2+ years of experience building production-grade ERP applications.
            </p>
            <p>
              I have successfully delivered <span className="font-semibold text-accent-color">25+ reusable React components</span> and built <span className="font-semibold text-accent-color">6+ ERP modules</span> across Procurement, Production, Logistics, Finance, Warehouse  and Sales domains.
            </p>
            <p>
              My expertise includes React.js, TypeScript, NestJS, Node.js, MySQL, and REST APIs. I am deeply passionate about building scalable business applications, creating seamless user interfaces, and optimizing backend performance to ensure robust software delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect p-6 rounded-2xl border border-white/20 dark:border-white/10 premium-shadow text-center group"
              >
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-white/50 dark:bg-black/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
