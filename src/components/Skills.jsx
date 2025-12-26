import React from 'react';
// Importing icons for your specific stack
import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiC, SiMysql, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#141414] text-white 
    
    rounded-xl border
    border-[#141414] hover:border-blue-500 hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-2
    
    ">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-blue-500">Tech Stack</span>
        </h2>

        {/* Grid Layout for Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-[#111] rounded-xl border border-gray-800 hover:border-blue-500 hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="text-5xl mb-3">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <p className="font-semibold text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;