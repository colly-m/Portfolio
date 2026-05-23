"use client";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQHwdRlzijRGVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702716435399?e=1781136000&v=beta&t=PKfDFRISU6Hjj_Ul-tcLkiwfZubtSMKGob6UrlWsaoA"
              alt="Collins M. Sindani"
              width={96}
              height={96}
              className="rounded-full mx-auto shadow-lg"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Collins M. Sindani
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 mb-8"
          >
            Software & Blockchain Developer specializing in Python, TypeScript,
            JavaScript, C, and blockchain languages like Rust, Solidity, Cairo, Clarity, and
            Cadence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <a
              href="https://github.com/colly-m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://x.com/cndanycollins"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/collins-sindani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
</motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQHwdRlzijRGVg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702716435399?e=1781136000&v=beta&t=PKfDFRISU6Hjj_Ul-tcLkiwfZubtSMKGob6UrlWsaoA"
              alt="Collins M. Sindani"
              width={96}
              height={96}
              className="rounded-full mx-auto shadow-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}