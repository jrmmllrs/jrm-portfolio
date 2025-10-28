import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "He's the kind of developer who doesn't just code — he finds better ways to build things. Reliable, curious, and always improving.",
      author: "Jun Jun Zaragosa",
      position: "Software Engineer Lead at FullSuite",
    },
  ];

  const techStack = {
    frontend: ["JavaScript", "TypeScript", "React", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PHP", "Laravel", "MySQL", "Firebase"],
    devops: ["AWS", "Vercel", "GitHub Actions"],
  };

  const experiences = [
    { role: "Software Engineer Intern", company: "FullSuite", year: "2025" },
    {
      role: "Thesis Assistant Programmer",
      company: "Pangasinan State University",
      year: "2024",
    },
    {
      role: "BS Information Technology",
      company: "Pangasinan State University",
      year: "2020",
    },
    {
      role: "Hello World!",
      company: "Wrote my first line of code",
      year: "2019",
    },
  ];

  const projects = [
    {
      name: "SuiteTest",
      description: "Online test and quiz platform",
      url: "suite-test-frontend.vercel.app",
    },
    {
      name: "Dental Booking System",
      description: "Dental appointment system",
      url: "diego-dental.vercel.app",
    },
    {
      name: "SuiteLifer",
      description: "Collaborated on this project's development",
      url: "suitelifer.com",
    },
    {
      name: "Application Tracking System",
      description: "Collaborated on this project's improvement",
      url: "ats.kriyahr.com",
    },
  ];

  const certifications = [
    { name: "React Basics", issuer: "Meta / Coursera" },
    { name: "Introduction to Web Accessibility", issuer: "Google" },
    { name: "Introduction to Node.js", issuer: "LinkedIn Learning" },
    { name: "SQL Fundamentals", issuer: "SoloLearn" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      transition: {
        duration: 0.2,
      },
    },
  };

  const timelineDotVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.5, backgroundColor: "#000" },
    active: { scale: 1.2, backgroundColor: "#000" },
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Card */}
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="flex items-center gap-6">
            <motion.div
              className="w-26 h-26 rounded-full overflow-hidden flex-shrink-0"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/me.jpeg"
                alt="Jerome Millares"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex-1">
              <motion.h1
                className="text-2xl font-bold mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Jerome Millares
              </motion.h1>
              <motion.div
                className="text-gray-600 mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Software Engineer
              </motion.div>
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <a
                  href="https://calendly.com/jmillares0945/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Call
                  </motion.button>
                </a>
                <a href="mailto:jmillares0945@gmail.com">
                  <motion.button
                    className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Email
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-4">
            {/* About Card */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-lg font-semibold mb-3"
                variants={itemVariants}
              >
                About
              </motion.h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <motion.p variants={itemVariants}>
                  I'm a Software Engineering Intern currently working with
                  React.js and Node.js, focusing on building and improving
                  modern web applications.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I developed my skills in Python, Flutter, PHP, Laravel, and
                  Tailwind CSS while studying at Pangasinan State University,
                  where I learned the foundations of software development and
                  how to turn ideas into working solutions.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I'm continuously improving my coding practices and exploring
                  new technologies to grow as a developer who can contribute to
                  real-world projects and team goals.
                </motion.p>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-lg font-semibold mb-3"
                variants={itemVariants}
              >
                Tech Stack
              </motion.h2>
              <div className="space-y-4">
                <motion.div variants={itemVariants}>
                  <div className="font-medium mb-2 text-sm">Frontend</div>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.frontend.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-gray-100 px-2.5 py-1 rounded text-xs border border-gray-200 cursor-pointer"
                        variants={techItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        custom={i}
                        transition={{ delay: i * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="font-medium mb-2 text-sm">Backend</div>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.backend.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-gray-100 px-2.5 py-1 rounded text-xs border border-gray-200 cursor-pointer"
                        variants={techItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{
                          delay: (i + techStack.frontend.length) * 0.1,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="font-medium mb-2 text-sm">DevOps & Cloud</div>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.devops.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-gray-100 px-2.5 py-1 rounded text-xs border border-gray-200 cursor-pointer"
                        variants={techItemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{
                          delay:
                            (i +
                              techStack.frontend.length +
                              techStack.backend.length) *
                            0.1,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Projects Card */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-lg font-semibold mb-3"
                variants={itemVariants}
              >
                Projects
              </motion.h2>
              <div className="grid grid-cols-2 gap-3">
                {projects.map((project, i) => (
                  <motion.a
                    key={i}
                    href={
                      project.url.startsWith("http")
                        ? project.url
                        : `https://${project.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-sm transition cursor-pointer flex flex-col justify-between"
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    custom={i}
                  >
                    <div>
                      <div className="font-medium mb-1 text-sm">
                        {project.name}
                      </div>
                      <div className="text-xs text-gray-600 mb-3">
                        {project.description}
                      </div>
                    </div>
                    <div className="text-xs text-blue-500 underline break-all">
                      {project.url.startsWith("http")
                        ? project.url
                        : `https://${project.url}`}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-lg font-semibold mb-3"
                variants={itemVariants}
              >
                Certifications
              </motion.h2>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition"
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    custom={i}
                  >
                    <div className="font-medium text-sm">{cert.name}</div>
                    <div className="text-xs text-gray-600">{cert.issuer}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-4">
            {/* Experience Card */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-lg font-semibold mb-6 text-gray-900"
                variants={itemVariants}
              >
                Experience
              </motion.h2>
              <div className="space-y-1">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 relative"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    {/* Timeline */}
                    <div className="flex flex-col items-center pt-1.5">
                      <motion.div
                        className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-200 z-10 ${
                          i === 0
                            ? "bg-black ring-4 ring-gray-100"
                            : "bg-gray-300"
                        }`}
                        variants={timelineDotVariants}
                        whileHover="hover"
                        animate={i === 0 ? "active" : "initial"}
                      />
                      {i < experiences.length - 1 && (
                        <motion.div
                          className="w-px bg-gray-200 absolute top-3"
                          style={{ height: "calc(100% - 0.5rem)" }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm text-gray-900 leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-gray-600 mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 font-medium flex-shrink-0 mt-0.5">
                          {exp.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* <div className="mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                  Recommendations
                </h2>
              </div> */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTestimonial}
                  className="text-gray-700 italic mb-3 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.p>
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="font-medium text-sm">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-xs text-gray-600">
                  {testimonials[currentTestimonial].position}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-lg font-semibold mb-4"
                variants={itemVariants}
              >
                Contact
              </motion.h2>
              <div className="space-y-2">
                {[
                  {
                    label: "Schedule a Call",
                    href: "https://calendly.com/jmillares0945/30min",
                  },
                  {
                    label: "Join Community",
                    href: "https://discord.gg/your-community",
                  },
                  { label: "View GitHub", href: "https://github.com/jrmmllrs" },
                  {
                    label: "Send an Email",
                    href: "mailto:jmillares0945@gmail.com",
                  },
                  {
                    label: "Visit LinkedIn",
                    href: "https://linkedin.com/in/jrmmllrs",
                  },
                  {
                    label: "View Portfolio",
                    href: "https://vercel.com/jeromes-projects-1b97e0bd",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={
                      !item.href.startsWith("mailto:") ? "_blank" : undefined
                    }
                    rel={
                      !item.href.startsWith("mailto:")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block w-full text-left text-sm py-3 px-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
                    variants={itemVariants}
                    whileHover={{
                      backgroundColor: "#f8fafc",
                      borderColor: "#e2e8f0",
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {item.label}
                      </span>
                      <motion.svg
                        className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </motion.svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center text-xs text-gray-500 mt-8 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          © 2025 Jerome Millares. All rights reserved.
        </motion.div>
      </motion.div>
    </div>
  );
}
