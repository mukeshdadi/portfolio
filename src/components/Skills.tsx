import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNestjs, SiMysql, SiPostman, SiSwagger, SiBootstrap, SiAntdesign } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact color="#61DAFB" />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, level: 90 },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, level: 90 },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" />, level: 80 },
      { name: "Ant Design", icon: <SiAntdesign color="#0170FE" />, level: 85 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" />, level: 80 },
      { name: "NestJS", icon: <SiNestjs color="#E0234E" />, level: 85 },
      { name: "REST APIs", icon: <FaNodeJs color="#68A063" />, level: 90 },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" />, level: 85 },
      { name: "SQL Optimization", icon: <SiMysql color="#F29111" />, level: 80 },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: <FaGithub color="#F05032" />, level: 85 },
      { name: "GitHub", icon: <FaGithub color="#181717" className="dark:text-white" />, level: 85 },
      { name: "Postman", icon: <SiPostman color="#FF6C37" />, level: 90 },
      { name: "Swagger", icon: <SiSwagger color="#85EA2D" />, level: 85 },
      { name: "VS Code", icon: <VscVscode color="#007ACC" />, level: 95 },
    ]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent-color mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="glass-effect rounded-2xl p-6 lg:p-8 premium-shadow"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-accent-color">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="relative h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                          }}
                          style={{ height: "100%" }}
                          className="bg-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
