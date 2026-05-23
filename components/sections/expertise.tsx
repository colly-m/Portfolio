"use client";
import { motion } from "framer-motion";

const expertise = [
  {
    title: "Blockchain Development",
    skills: ["Rust", "Solidity", "Cairo", "Bitcoin-core", "Logos", "Clarity", "Foundry", "Hardhat", "Stacks", "DeFi", "NFTs"],
    description: "Building smart contracts and decentralized applications",
  },
  {
    title: "Backend Development",
    skills: ["Python", "Flask", "SQLAlchemy", "REST APIs", "Database Design"],
    description: "Creating robust and scalable backend systems",
  },
  {
    title: "Frontend Development",
    skills: ["TypeScript", "Javascript", "React", "Next.js", "Tailwind CSS"],
    description: "Building modern and responsive user interfaces",
  },
  {
    title: "Systems & DevOps",
    skills: ["Linux", "Bash", "Google DevOps", "Shell Scripting", "CI/CD"],
    description: "System engineering and deployment automation",
  },
  {
    title: "AI",
    skills: ["OpenAI", "Gemini", "OpenRouter", "LLMs", "Agentic AI", "Prompt Engineering"],
    description: "Building AI models and applications & AI Research",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My technical skills and areas of specialization
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}