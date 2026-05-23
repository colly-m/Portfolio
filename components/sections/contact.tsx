"use client";
import { motion } from "framer-motion";
import { Github, Twitter, Mail, Send, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:sindanicolly@gmail.com?subject=Portfolio Contact&body=Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Reach out to me.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="space-y-4">
              <a
                href="https://github.com/colly-m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors"
              >
                <Github size={24} />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-slate-400">@colly-m</p>
                </div>
              </a>
              <a
                href="https://x.com/cndanycollins"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors"
              >
                <Twitter size={24} />
                <div>
                  <p className="font-medium">Twitter</p>
                  <p className="text-sm text-slate-400">@cndanycollins</p>
                </div>
              </a>
              <a
                href="mailto:sindanicolly@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors"
              >
                <Mail size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-slate-400">sindanicolly@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/collins-sindani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors"
              >
                <Linkedin size={24} />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-slate-400">@collins-sindani</p>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-4">Send a message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-blue-500 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-blue-500 outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-blue-500 outline-none resize-none"
                required
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                <Send size={16} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}