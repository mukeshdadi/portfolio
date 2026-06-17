import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted", formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-accent-color" size={24} />,
      title: "Email",
      value: "dadimukesh0000@gmail.com",
      link: "mailto:dadimukesh0000@gmail.com"
    },
    {
      icon: <Phone className="text-accent-color" size={24} />,
      title: "Phone",
      value: "+91 7989011283",
      link: "tel:+917989011283"
    },
    {
      icon: <MapPin className="text-accent-color" size={24} />,
      title: "Location",
      value: "Visakhapatnam, Andhra Pradesh, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black/5 dark:bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent-color mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 glass-effect p-4 rounded-xl hover:-translate-y-1 transition-transform border border-white/10"
                >
                  <div className="w-12 h-12 bg-black/5 dark:bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.title}</h4>
                    <p className="text-base font-semibold text-gray-800 dark:text-gray-200">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
              <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
                Social Profiles
              </h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/mukeshdadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/5 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-accent-color hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/mukesh-dadi-6a655a317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black/5 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-accent-color hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 glass-effect p-8 rounded-2xl premium-shadow border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-600 dark:text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-300">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-accent-color text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
