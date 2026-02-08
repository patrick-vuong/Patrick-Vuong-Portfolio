import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FileText } from 'lucide-react';
import profileImage from 'figma:asset/f2ebe32b784e6af9ff7fc82fbfefb83ac935750c.png';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Patrick Vuong"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-gray-900">Hello! I'm Patrick.</h3>
              <p className="text-gray-600">
                Bridging the gap between technology and customers through compelling narratives, data-driven strategies, and impactful product launches.
              </p>
              <p className="text-gray-600">
                I'm a passionate technical product marketer who specializes in transforming complex technical products into compelling market narratives. With a deep understanding of both technology and customer needs, I craft go-to-market strategies that drive adoption and growth.
              </p>
              <p className="text-gray-600">
                My expertise spans the entire product marketing lifecycle—from market research and competitive analysis to positioning, messaging, and launch execution. I thrive on translating technical features into customer value and creating marketing campaigns that resonate with target audiences.
              </p>
              <p className="text-gray-600">
                When I'm not crafting product stories or analyzing market trends, you can find me staying current with industry innovations, exploring new marketing technologies, or collaborating with cross-functional teams to bring products to market.
              </p>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-blue-600 mb-1">Specialization</div>
                  <div className="text-gray-900">Technical Product Marketing</div>
                </div>
                <div>
                  <div className="text-blue-600 mb-1">Experience</div>
                  <div className="text-gray-900">7+ Years</div>
                </div>
                <div>
                  <div className="text-blue-600 mb-1">LinkedIn</div>
                  <div className="text-gray-900">linkedin.com/in/vuongpatrick</div>
                </div>
                <div>
                  <div className="text-blue-600 mb-1">Current Company</div>
                  <div className="text-gray-900">Microsoft</div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={`${import.meta.env.BASE_URL}Patrick-Vuong-Resume.pdf`}
                  download="Patrick-Vuong-Resume.pdf"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FileText size={20} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}