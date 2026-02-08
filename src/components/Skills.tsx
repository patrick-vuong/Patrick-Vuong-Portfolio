import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, TrendingUp, Megaphone, BarChart3, Users, Lightbulb, Presentation, Briefcase, Mic } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Target,
      title: 'Go-to-Market Strategy',
      description: 'Product positioning, market segmentation, competitive analysis',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Megaphone,
      title: 'Product Messaging',
      description: 'Value propositions, messaging frameworks, sales enablement',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Product Launches',
      description: 'Launch planning, cross-functional coordination, campaign execution',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Presentation,
      title: 'Technical Demos',
      description: 'Product demonstrations, technical showcases, live presentations',
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: Briefcase,
      title: 'Executive Briefing Sessions',
      description: 'C-level presentations, strategic discussions, stakeholder alignment',
      color: 'from-gray-500 to-blue-500',
    },
    {
      icon: Mic,
      title: 'Keynote and Conference Talks',
      description: 'Public speaking, industry events, thought leadership presentations',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: BarChart3,
      title: 'Marketing Analytics',
      description: 'KPI tracking, funnel optimization, data-driven insights',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Customer Intelligence',
      description: 'User research, persona development, customer journey mapping',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Lightbulb,
      title: 'Content Strategy',
      description: 'Technical content, case studies, thought leadership',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const tools = [
    'Marketo', 'Power BI', 'GitHub', 'Figma',
    'Adobe Creative Suite', 'Canva', 'Microsoft Office', 'Camtasia',
    'GitHub Copilot', 'Visual Studio Code', 'Microsoft Foundry'
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-gray-900">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="mb-2 text-gray-900">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <h3 className="mb-6 text-gray-900">Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.05 }}
                  className="px-4 py-2 bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}