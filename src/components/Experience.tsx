import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import microsoftLogo from 'figma:asset/79f1cb63580018bfb0ca7bd9bbabd5c3109f69ad.png';
import mcmasterLogo from 'figma:asset/1453a7eb04c99ed0be73f1e4817c05e3cd69ceba.png';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: 'work',
      title: 'Global Sr. Technical Product Marketing Manager | Agentic DevOps Lead',
      company: 'Microsoft',
      location: 'Seattle WA',
      period: 'Jul 2024 - Present',
      duration: '6 months',
      logo: microsoftLogo,
      description: 'Technical Product Marketing Lead for Microsoft and GitHub Developer tools',
      achievements: [
        'Leading global technical product marketing strategy for agentic DevOps solutions',
        'Driving go-to-market initiatives for Microsoft and GitHub developer tools',
        'Establishing thought leadership in AI-powered DevOps automation',
        'Collaborating across Microsoft and GitHub product teams',
      ],
    },
    {
      type: 'work',
      title: 'Sr. Product Marketing Manager AMERICAS | Accelerate Developer Productivity Lead',
      company: 'Microsoft',
      location: 'Americas',
      period: 'Jul 2023 - Jul 2024',
      duration: '1 year',
      logo: microsoftLogo,
      description: 'Accelerating developer velocity through AI-Infused development tools of Microsoft and GitHub.',
      achievements: [
        'Winner of the Microsoft Gold Club in 2024',
        'Led product marketing for AI-powered developer productivity tools',
        'Drove adoption of GitHub Copilot and Microsoft dev tools across Americas region',
        'Created compelling narratives showcasing AI-enhanced development workflows',
      ],
    },
    {
      type: 'work',
      title: 'Product Marketing Manager | Microsoft Azure | Developer Audience',
      company: 'Microsoft',
      location: 'Redmond, WA',
      period: 'Feb 2022 - Jul 2023',
      duration: '1 year 5 months',
      logo: microsoftLogo,
      description: 'Fusion Development | Microsoft Azure & Power Platform | Feb 2022 - December 2022. Java on Azure | January 2023 - July 2023',
      achievements: [
        'Launched fusion development initiatives bridging Azure and Power Platform',
        'Drove Java on Azure adoption through targeted developer campaigns',
        'Created technical content and enablement materials for developer audiences',
        'Collaborated with engineering teams to influence product roadmap',
      ],
    },
    {
      type: 'work',
      title: 'Integrated Marketing Lead | Cloud Infrastructure, Applications & Developers',
      company: 'Microsoft',
      location: 'Canada',
      period: 'May 2020 - Feb 2022',
      duration: '1 year 9 months',
      logo: microsoftLogo,
      description: 'Winner of the Canadian Marketing Association gala as they recognize our team with 5 awards for the work we have done on aka.ms/innovationmavericks & aka.ms/devbuilder',
      achievements: [
        'Won 5 Canadian Marketing Association awards for innovation campaigns',
        'Led integrated marketing for cloud infrastructure and developer solutions',
        'Created award-winning campaigns: aka.ms/innovationmavericks & aka.ms/devbuilder',
        'Drove developer engagement and community building initiatives',
      ],
    },
    {
      type: 'work',
      title: 'Integrated Marketing Communications Manager, Hearts and Minds of Developers',
      company: 'Microsoft',
      location: 'Canada',
      period: 'Nov 2018 - May 2020',
      duration: '1 year 6 months',
      logo: microsoftLogo,
      description: 'Led integrated marketing communications focused on engaging the hearts and minds of developers across Microsoft\'s developer platform.',
      achievements: [
        'Developed comprehensive marketing communications strategy for developer audience',
        'Created compelling narratives connecting developers with Microsoft technologies',
        'Managed cross-functional campaigns driving developer community engagement',
        'Established thought leadership programs for Microsoft developer advocates',
      ],
    },
    {
      type: 'work',
      title: 'Experiential Marketing Manager - Cloud and Enterprise',
      company: 'Microsoft',
      location: 'Canada',
      period: 'Jul 2018 - Nov 2018',
      duration: '4 months',
      logo: microsoftLogo,
      description: 'Managed experiential marketing initiatives for Microsoft Cloud and Enterprise solutions, creating immersive experiences for enterprise customers and partners.',
      achievements: [
        'Led experiential marketing programs for cloud and enterprise products',
        'Designed and executed customer engagement events and experiences',
        'Collaborated with sales teams to create impactful customer touchpoints',
        'Drove pipeline generation through innovative experiential campaigns',
      ],
    },
    {
      type: 'education',
      title: 'Honours Bachelor of Commerce',
      company: 'McMaster University',
      location: 'Hamilton, ON',
      period: '2013 - 2018',
      duration: '5 years',
      logo: mcmasterLogo,
      description: 'Concentration in business and focused on Marketing.',
      achievements: [
        'Canada\'s Next Top Ad Exec Chair',
        'MARS Apprentice competitor season 12',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-gray-900">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                {/* Header with Logo */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Job Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 mb-1">{exp.title}</h3>
                      <div className="text-gray-700 mb-2">{exp.company}</div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description & Achievements */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}