import { Link } from 'react-scroll';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-black/10 dark:bg-black/40 py-12 border-t border-gray-200 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-gradient">MUKESH DADI</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Full Stack Developer specializing in building enterprise ERP solutions and premium web applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent-color cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Socials</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/mukeshdadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent-color transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/mukesh-dadi-6a655a317"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent-color transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-accent-color transition-colors"
                aria-label="Contact"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-white/10">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dadi Mukesh. All rights reserved.
          </p>

          <Link to="home" smooth={true} duration={500}>
            <button className="w-10 h-10 bg-accent-color/10 text-accent-color rounded-full flex items-center justify-center hover:bg-accent-color hover:text-white transition-colors">
              <ArrowUp size={20} />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
