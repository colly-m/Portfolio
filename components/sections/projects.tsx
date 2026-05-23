"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NFT Name Service",
    description: "A decentralized naming service built on Stacks blockchain using Clarity",
    tech: ["Clarity", "Stacks"],
    github: "https://github.com/colly-m/nf-name-service",
    link: "#",
  },
  {
    title: "Cyfrin Startup",
    description: "Solidity smart contracts and DeFi projects following Cyfrin best practices",
    tech: ["Solidity", "Hardhat"],
    github: "https://github.com/colly-m/cyfrin-startup",
    link: "#",
  },
  {
    title: "Stacks Tic Tac Toe Game",
    description: "Tic Tac Toe game implemented in Clarity for the Stacks blockchain",
    tech: ["Clarity", "Stacks"],
    github: "https://github.com/colly-m/stacks-tic-tac-toe",
    link: "https://stacks-tic-tac-toe-woad.vercel.app/",
  },
  {
    title: "AirBnB Clone",
    description: "Full-stack clone of AirBnB with Python and various web technologies",
    tech: ["Python", "Flask", "SQLAlchemy"],
    github: "https://github.com/colly-m/AirBnB_clone",
    link: "#",
  },
  {
    title: "Sorting Algorithms",
    description: "Collection of sorting algorithms implemented in C",
    tech: ["C", "Algorithms"],
    github: "https://github.com/colly-m/sorting_algorithms",
    link: "#",
  },
  {
    title: "ALX System Engineering",
    description: "DevOps and system engineering projects from ALX program",
    tech: ["Shell", "Bash", "Linux"],
    github: "https://github.com/colly-m/alx-system_engineering-devops",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my work in software and blockchain development
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors"
                >
                    <Github size={16} />
                    <span>Code</span>
                </a>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-500/20 hover:bg-blue-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}