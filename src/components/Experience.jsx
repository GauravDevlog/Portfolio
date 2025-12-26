import React from 'react';

// Simple data structure so you can easily add more jobs later
const experiences = [
  {
    company: "Infoseek Pvt Limited",
    role: "MERN Stack Intern",
    date: "1 Month", // You can add specific dates like "June 2024 - July 2024" if you want
    description: "Worked as a Full Stack Intern developing scalable web applications. Built interactive user interfaces using React.js and developed RESTful APIs with Node.js and Express. Gained hands-on experience in database management using MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-blue-500">Experience</span>
        </h2>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 border-l-2 border-blue-500 pl-6 relative">
              
              {/* Optional: A glowing dot on the timeline */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_#ec4899]"></div>

              {/* Left Side: Company & Date */}
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold">{exp.company}</h3>
                <p className="text-blue-400 font-semibold mt-1">{exp.role}</p>
                <span className="text-sm text-gray-500 mt-2 block">{exp.date}</span>
              </div>

              {/* Right Side: Description & Tech */}
              <div className="md:w-2/3">
                <p className="text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;