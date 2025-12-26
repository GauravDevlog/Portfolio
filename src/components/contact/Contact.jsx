import React from 'react';
// You can use react-icons for these: npm install react-icons
import { FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
const Contact = () => {

    let email = "gauravonbeat@gmail.com";

  return (
    <section id="contact" className="text-center py-20 bg-black text-white ">
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
        href="mailto:gauravonbeat@gmail.com" 
        className="inline-block border-2 border-blue-500 text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 mb-12"
        onClick={()=>{
            navigator.clipboard.writeText(email);
            alert("Email copied");
          }}
      >
        Say Hello
      </a>

      <div className="flex justify-center gap-8 text-3xl">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/gaurav-mishra-955751230/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/GauravDevlog" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-500 transition-colors"
        >
          <FaGithub />
        </a>
        
        {/* Email Icon (Alternative to button) */}
        <a 
          // href="mailto:gauravonbeat@gmail.com" 
          href='mailto:gauravonbeat@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you'
          className="hover:text-blue-500 transition-colors"
          onClick={()=>{
            navigator.clipboard.writeText(email);
            alert("Email copied");
          }}

        >
          <FaEnvelope />
        </a>


        <a 
          href="https://leetcode.com/u/gauravdevlog" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-yellow-500 transition-colors"
          title="LeetCode Profile"
        >
          <SiLeetcode />
        </a>
      </div>
      
      <footer className="mt-20 text-gray-600 text-sm">
        <p>Designed & Built by Gaurav Mishra</p>
      </footer>
    </section>
  );
};

export default Contact;