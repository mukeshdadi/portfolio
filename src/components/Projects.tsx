import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const project = {
    title: "Enterprise ERP System",
    description: "Architected a multi-module ERP platform covering procurement, production, inventory, logistics, quality control, and dispatch. Built scalable NestJS backend APIs, optimized SQL queries on tables with 10000+ records, and implemented role-based access control.",
    techStack: ["React.js", "TypeScript", "Node.js", "NestJS", "MySQL", "Ant Design", "REST APIs"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  };

  return (
    <section id="projects" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent-color mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-2xl overflow-hidden premium-shadow group hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative overflow-hidden h-64 lg:h-auto">
              <div className="absolute inset-0 bg-accent-color/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent-color/10 text-accent-color border border-accent-color/20 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href="https://bmr.schemaxtech.in/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-accent-color text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 w-fit"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Demo Access
                  </p>

                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>
                      <span className="font-medium">Username:</span> bmrin
                    </p>
                    <p>
                      <span className="font-medium">Password:</span> bmrin
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mt-3">
                    Use the above credentials after opening the demo application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
