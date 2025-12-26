import React from 'react';
// You can use react-icons for these: npm install react-icons
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="text-center py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-6">
        <span className="text-blue-500">Get In Touch</span>
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
        I am currently looking for full-time opportunities in software engineering. 
        Whether you have a question about my projects or just want to say hi, 
        I'll try my best to get back to you!
      </p>

      {/* The "Mailto" link opens their email app directly */}
      <a 
        href="mailto:your.email@example.com" 
        className="inline-block border-2 border-blue-500 text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 mb-12"
      >
        Say Hello
      </a>

      <div className="flex justify-center gap-8 text-3xl">
        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-500 transition-colors"
        >
          <FaGithub />
        </a>
        
        {/* Email Icon (Alternative to button) */}
        <a 
          href="mailto:your.email@example.com" 
          className="hover:text-blue-500 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
      
      <footer className="mt-20 text-gray-600 text-sm">
        <p>Designed & Built by You</p>
      </footer>
    </section>
  );
};

export default Contact;