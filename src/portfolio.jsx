import React, { useState } from "react";

export default function Portfolio() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "He’s the kind of developer who doesn’t just code — he finds better ways to build things. Reliable, curious, and always improving.",
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
      url: "booking-system-eight-sigma.vercel.app",
    },
    {
      name: "SuiteLifer",
      description: "Collaborated on this project’s development",
      url: "suitelifer.com",
    },
    {
      name: "Application Tracking System",
      description: "Assisted in building and improving the platform",
      url: "ats.kriyahr.com",
    },
  ];

  const certifications = [
  { name: "React Basics", issuer: "Meta / Coursera" },
  { name: "Introduction to Web Accessibility", issuer: "Google" },
  { name: "Introduction to Node.js", issuer: "LinkedIn Learning" },
  { name: "SQL Fundamentals", issuer: "SoloLearn" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-6">
            <div className="w-26 h-26 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/me.jpeg"
                alt="Jerome Millares"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">Jerome Millares</h1>
              <div className="text-gray-600 mb-3">Software Engineer</div>
              <div className="flex gap-2">
                <a
                  href="https://calendly.com/jmillares0945/30min" // replace with your Calendly or Google Meet link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
                    Schedule Call
                  </button>
                </a>
                <a href="mailto:jmillares0945@gmail.com">
                  <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
                    Send Email
                  </button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-4">
            {/* About Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h2 className="text-lg font-semibold mb-3">About</h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                <p>
                  I’m a Software Engineering Intern currently working with
                  React.js and Node.js, focusing on building and improving
                  modern web applications.
                </p>
                <p>
                  I developed my skills in Python, Flutter, PHP, Laravel, and
                  Tailwind CSS while studying at Pangasinan State University,
                  where I learned the foundations of software development and
                  how to turn ideas into working solutions.
                </p>
                <p>
                  I’m continuously improving my coding practices and exploring
                  new technologies to grow as a developer who can contribute to
                  real-world projects and team goals.
                </p>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
              <div className="space-y-4">
                <div>
                  <div className="font-medium mb-2 text-sm">Frontend</div>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.frontend.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 px-2.5 py-1 rounded text-xs border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2 text-sm">Backend</div>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.backend.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 px-2.5 py-1 rounded text-xs border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-2 text-sm">DevOps & Cloud</div>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.devops.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 px-2.5 py-1 rounded text-xs border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h2 className="text-lg font-semibold mb-3">Projects</h2>
              <div className="grid grid-cols-2 gap-3">
                {projects.map((project, i) => (
                  <a
                    key={i}
                    href={`https://${project.url}`} // or just project.url if it's a full link
                    target="_blank" // opens in new tab
                    rel="noopener noreferrer"
                    className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-sm transition cursor-pointer block"
                  >
                    <div className="font-medium mb-1 text-sm">
                      {project.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      {project.description}
                    </div>
                    <div className="text-xs text-gray-400">{project.url}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h2 className="text-lg font-semibold mb-3">Certifications</h2>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition"
                  >
                    <div className="font-medium text-sm">{cert.name}</div>
                    <div className="text-xs text-gray-600">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-4">
            {/* Experience Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-6 text-gray-900">
                Experience
              </h2>
              <div className="space-y-1">
                {experiences.map((exp, i) => (
                  <div key={i} className="flex gap-4 relative">
                    {/* Timeline */}
                    <div className="flex flex-col items-center pt-1.5">
                      <div
                        className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-200 z-10 ${
                          i === 0
                            ? "bg-black ring-4 ring-gray-100"
                            : "bg-gray-300 hover:bg-black hover:ring-4 hover:ring-gray-100 "
                        }`}
                      />
                      {i < experiences.length - 1 && (
                        <div
                          className="w-px bg-gray-200 absolute top-3"
                          style={{ height: "calc(100% - 0.5rem)" }}
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
                  </div>
                ))}
              </div>
            </div>
            {/* Testimonial Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <div className="font-medium text-sm">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-xs text-gray-600">
                  {testimonials[currentTestimonial].position}
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <div className="space-y-3.5">
                {/* Schedule a Call */}
                <a
                  href="https://calendly.com/jmillares0945/30min" // replace with your Calendly or Google Meet link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-sm py-2 px-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  Schedule a Call
                </a>

                {/* Join Community */}
                <a
                  href="https://discord.gg/your-community" // replace with your Discord or community link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-sm py-2 px-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  Join Community
                </a>

                {/* View GitHub */}
                <a
                  href="https://github.com/jrmmllrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-sm py-2 px-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  View GitHub
                </a>

                {/* Email */}
                <a
                  href="mailto:jmillares0945@gmail.com"
                  className="block w-full text-left text-sm py-2 px-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  Send an Email
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/jrmmllrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-sm py-2 px-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  Visit LinkedIn
                </a>

                {/* Portfolio or Resume */}
                <a
                  href="https://vercel.com/jeromes-projects-1b97e0bd" // optional
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-left text-sm py-2 px-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-8 py-6">
          © 2025 Jerome Millares. All rights reserved.
        </div>
      </div>
    </div>
  );
}
