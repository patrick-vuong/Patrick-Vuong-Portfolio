import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import cmaAwardsImage from 'figma:asset/623f3e5eeb2c083401d0918ec3b7b90cdb03c846.png';
import goldClubImage from 'figma:asset/249334f4684cc4767b858b3b6c8f43318711a211.png';
import blackhatImage from 'figma:asset/4d3346d0ddcb51cfd71435748b90e56ce3badca1.png';
import chileKeynoteImage from 'figma:asset/9b99a3bd78223e6b5e8afb671e460af4a9674455.png';
import devSecOpsImage from 'figma:asset/5f1fd5658f9a4573ef270394859051712a244504.png';
import agenticDevOpsImage from 'figma:asset/4b73a8306026ef75edf7d28c91405d16e31c5cfc.png';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Canadian Marketing Awards',
      description: 'Developer GTM team recognized for 3 awards for DevHeroes and Digital Natives',
      image: cmaAwardsImage,
      tags: ['GTM Strategy', 'Launch Planning', 'Sales Enablement'],
      metrics: '30 Dev Influencers across Canada',
      type: '',
    },
    {
      title: 'Circle of Excellence President\'s Gold Club Winner',
      description: 'Awarded the companies top 3% award for the GTM strategy of landing developer tooling',
      image: goldClubImage,
      tags: ['Competitive Analysis', 'Sales Tools', 'Market Research'],
      metrics: 'grew GitHub Copilot 24% MoM and 1420% YoY',
      type: '',
    },
    {
      title: 'BlackHat Conference Session',
      description: 'Delivered a session focused on how to secure code to cloud with agentic remediation',
      image: blackhatImage,
      tags: ['Content Marketing', 'Customer Marketing', 'Storytelling'],
      metrics: '15 case studies, 60% increase in demo requests',
      type: '',
    },
    {
      title: 'Keynote AI tour in Chile',
      description: 'Deliver a keynote in Chile on how Microsoft is helping customers embrace frontier organizations',
      image: chileKeynoteImage,
      tags: ['Messaging', 'Positioning', 'Brand Strategy'],
      metrics: 'Adopted across 5 product lines, 3 regions',
      type: '',
    },
    {
      title: 'Cross Product DevSecOps Session',
      description: 'Cross product Microsoft Ignite session bringing together how to developers and security admins can work together to secure apps, data, and code',
      image: devSecOpsImage,
      tags: ['Sales Enablement', 'Training', 'Content Creation'],
      metrics: '200+ reps trained, 30% faster ramp time',
      type: '',
    },
    {
      title: 'Agentic DevOps Live',
      description: 'See how agents and humans are redefining how software is being created across the SDLC',
      image: agenticDevOpsImage,
      tags: ['Market Research', 'Personas', 'Customer Intelligence'],
      metrics: '8 personas, 4 priority segments identified',
      type: '',
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Launch: 'bg-blue-100 text-blue-700',
      Program: 'bg-purple-100 text-purple-700',
      Campaign: 'bg-orange-100 text-orange-700',
      Framework: 'bg-green-100 text-green-700',
      Research: 'bg-pink-100 text-pink-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-gray-900">Featured Work</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A showcase of product marketing initiatives, campaigns, and programs that drove measurable business impact
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${index === 0 ? 'object-[center_35%]' : ''} ${index === 1 ? 'object-[center_40%]' : ''} ${index === 2 ? 'object-[center_48%]' : ''}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 hover:bg-blue-600 hover:text-white transition-colors">
                      <FileText size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}