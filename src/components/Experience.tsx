import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    "Built production ERP platform across 6+ business modules.",
    "Designed and integrated REST APIs across 5 business domains.",
    "Developed 25+ reusable React + Ant Design components.",
    "Optimized MySQL queries and reduced API response times.",
    "Implemented lot-wise and operation-wise production tracking.",
    "Built role-based business modules.",
    "Created fallback and recovery mechanisms ensuring zero data loss.",
    "Collaborated with stakeholders and cross-functional teams."
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent-color mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-accent-color/30 pl-8 md:pl-12 py-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent-color shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-effect rounded-2xl p-8 premium-shadow relative group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Full Stack Developer</h3>
                <div className="flex items-center gap-2 mt-2 text-accent-color font-medium">
                  <Building2 size={18} />
                  <span>Schemax Export Techno Craft Pvt Ltd</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/10 rounded-full text-sm font-semibold w-fit">
                <Calendar size={16} />
                <span>July 2024 - Present</span>
              </div>
            </div>

            <div className="space-y-3">
              {achievements.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <ChevronRight size={20} className="text-accent-color shrink-0 mt-0.5" />
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
