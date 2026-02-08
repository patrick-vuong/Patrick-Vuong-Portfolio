import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from 'figma:asset/d566bc6194a2b866a8852cd880bf0fef8bed778b.png';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative">
      {/* Desktop: Overlay Design */}
      <div className="hidden md:block relative h-screen overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay - darker for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-gray-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col items-start gap-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block px-8 py-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-4 border-blue-600"
                >
                  <h1 className="text-gray-900 m-0">Patrick Vuong</h1>
                </motion.div>

                <motion.h2
                  className="text-white bg-blue-600/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg m-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Technical Product Marketer
                </motion.h2>
              </div>

              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a
                  href="https://github.com/patrick-vuong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vuongpatrick/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:pavuon@outlook.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <Mail size={20} />
                </a>
              </motion.div>

              <motion.button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowDown size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile: Stacked Design */}
      <div className="md:hidden">
        {/* Image Section */}
        <div className="h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="bg-gray-900 py-12 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg mx-auto"
          >
            <div className="flex flex-col items-center gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-4 border-blue-600 w-full sm:w-auto"
              >
                <h1 className="text-gray-900 m-0 text-center">Patrick Vuong</h1>
              </motion.div>

              <motion.h2
                className="text-white bg-blue-600/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg m-0 text-center w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Technical Product Marketer
              </motion.h2>
            </div>

            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://github.com/patrick-vuong"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vuongpatrick/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:pavuon@outlook.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
              >
                <Mail size={20} />
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                View My Work
                <ArrowDown size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}