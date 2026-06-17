import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Telugu", level: "Native" },
    { name: "Hindi", level: "Professional" }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Education Section */}
        <div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-accent-color rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 premium-shadow border border-white/20 dark:border-white/10 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-14 h-14 bg-accent-color/10 rounded-full flex items-center justify-center mb-6">
              <GraduationCap size={32} className="text-accent-color" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Diploma in Mechanical Engineering</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">Government Polytechnic, Visakhapatnam</p>
            
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 bg-black/5 dark:bg-white/10 px-4 py-2 rounded-lg">
                <Calendar size={16} className="text-accent-color" />
                <span>2018 - 2021</span>
              </div>
              <div className="flex items-center gap-2 bg-black/5 dark:bg-white/10 px-4 py-2 rounded-lg">
                <Award size={16} className="text-accent-color" />
                <span>Score: 84%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Languages</h2>
            <div className="w-20 h-1 bg-accent-color rounded-full" />
          </motion.div>

          <div className="space-y-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-effect rounded-xl p-4 flex items-center justify-between premium-shadow border border-white/10"
              >
                <span className="text-lg font-bold text-gray-800 dark:text-gray-100">{lang.name}</span>
                <span className="px-4 py-1.5 bg-accent-color/10 text-accent-color rounded-full text-sm font-medium">
                  {lang.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
