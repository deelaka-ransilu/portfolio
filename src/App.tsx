import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Code2,
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "Technical Support Executive",
      company: "myPOS Software Solutions (Pvt) Ltd",
      location: "Nugegoda, Western Province",
      period: "Jul 2025 - Jan 2026",
      highlights: [
        "Managed Windows Servers on Microsoft Azure for POS and ERP systems",
        "Configured Nginx web servers for load balancing and SSL/SSH certificates",
        "Performed SQL Server troubleshooting and query optimization",
        "Executed system migrations and deployed software patches to live environments",
        "Diagnosed critical downtime incidents as bridge between dev team and clients",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media Manager",
      company: "Skin & Sapphire Hair Transplant",
      location: "Battaramulla, Western Province",
      period: "Sep 2023 - Dec 2023",
      highlights: [
        "Managed social media presence and content strategy",
        "Created engaging content for brand awareness",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const projects = [
    {
      title: "Weather App",
      description:
        "Real-time weather forecasting with 3-day predictions and integrated Poya calendar for Sri Lankan users",
      tech: ["React", "API Integration", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Student Management System",
      description:
        "Command-line application for managing student records and academic performance tracking",
      tech: ["Java", "CLI", "Data Structures"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio showcasing projects and skills with smooth animations",
      tech: ["React", "Tailwind CSS", "shadcn/ui"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Arduino OLED Animations",
      description:
        'Interactive eye animations on 0.96" OLED display with expressive movement patterns',
      tech: ["Arduino", "C++", "Hardware"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const skills = {
    "Backend & Database": [
      "Microsoft SQL Server",
      "Java",
      "Spring Boot",
      ".NET",
    ],
    Frontend: ["React", "TypeScript", "Tailwind CSS", "JavaScript ES6+"],
    Infrastructure: ["Windows Server", "Azure", "Nginx", "System Monitoring"],
    "Tools & Others": [
      "Git",
      "SSL/SSH Certificates",
      "Arduino",
      "UI/UX Design",
    ],
  };

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "University of Moratuwa",
      period: "October 2023 - October 2026",
      status: "In Progress",
    },
    {
      degree: "Certificate In Applied Information Technology (CAIT)",
      institution: "Sri Lanka Telecom",
      period: "January 2020 - July 2020",
      status: "Completed",
    },
  ];

  // Refactored to include full class strings for Tailwind JIT compatibility
  const aboutItems = [
    {
      icon: Code2,
      title: "Developer",
      desc: "Building full-stack applications with modern technologies",
      delay: "delay-100",
      // Pre-defined classes instead of dynamic string interpolation
      classes: {
        hoverBorder: "hover:border-blue-500/50",
        hoverShadow: "hover:shadow-blue-500/10",
        iconBg: "bg-blue-500/10 border-blue-500/20",
        iconColor: "text-blue-400",
      },
    },
    {
      icon: Briefcase,
      title: "Tech Support",
      desc: "Managing cloud infrastructure and solving complex technical issues",
      delay: "delay-200",
      classes: {
        hoverBorder: "hover:border-purple-500/50",
        hoverShadow: "hover:shadow-purple-500/10",
        iconBg: "bg-purple-500/10 border-purple-500/20",
        iconColor: "text-purple-400",
      },
    },
    {
      icon: GraduationCap,
      title: "Learner",
      desc: "Constantly exploring new technologies and best practices",
      delay: "delay-300",
      classes: {
        hoverBorder: "hover:border-white/50",
        hoverShadow: "hover:shadow-white/10",
        iconBg: "bg-white/10 border-white/20",
        iconColor: "text-white",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        
        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899, #60a5fa);
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-lg border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"></div>

            {/* Desktop Menu */}
            <div className="hidden gap-8 md:flex">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "education",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section
                      ? "text-blue-400 font-semibold scale-110"
                      : "text-slate-400 hover:text-blue-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col gap-4 p-4 pb-4 mt-4 rounded-lg md:hidden bg-slate-800/50 animate-fadeIn">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "education",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left capitalize transition-colors text-slate-300 hover:text-blue-400"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-screen px-6 pt-20 overflow-hidden"
      >
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-blue-500/5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute delay-500 rounded-full bottom-20 right-10 w-96 h-96 bg-purple-500/5 blur-3xl animate-pulse-slow"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 gradient-text ${
              isVisible ? "animate-fadeInUp delay-100" : "opacity-0"
            }`}
          >
            Hi, I'm Deelaka Ransilu
          </h1>
          <p
            className={`text-xl md:text-2xl text-slate-300 mb-4 ${
              isVisible ? "animate-fadeInUp delay-200" : "opacity-0"
            }`}
          >
            BIT Undergraduate at University of Moratuwa
          </p>
          <p
            className={`text-lg text-slate-400 mb-12 max-w-2xl mx-auto ${
              isVisible ? "animate-fadeInUp delay-300" : "opacity-0"
            }`}
          >
            I blend code, design & creativity to build things that work. Always
            building. Always learning.
          </p>
          <div
            className={`flex gap-4 justify-center flex-wrap mb-8 ${
              isVisible ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="transition-all bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105"
            >
              <Code2 className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="transition-all bg-transparent border-slate-700 text-slate-100 hover:bg-slate-800 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
          <div
            className={`flex gap-6 justify-center text-slate-400 text-sm ${
              isVisible ? "animate-fadeInUp delay-500" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Piliyandala, Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            About Me
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {aboutItems.map((item, i) => (
              <Card
                key={i}
                className={`bg-slate-800/50 border-slate-700 ${item.classes.hoverBorder} transition-all hover:shadow-lg ${item.classes.hoverShadow} hover:-translate-y-2 duration-300 opacity-0 animate-fadeInUp ${item.delay}`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${item.classes.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110 duration-300`}
                  >
                    <item.icon className={item.classes.iconColor} />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="max-w-2xl mx-auto mt-8 text-lg text-center opacity-0 text-slate-300 animate-fadeIn delay-400">
            Currently pursuing a Bachelor of Information Technology at the
            University of Moratuwa, I combine my technical expertise in cloud
            infrastructure and databases with a passion for creating elegant,
            functional solutions.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 opacity-0 animate-slideInLeft ${
                  index === 0 ? "delay-100" : "delay-300"
                }`}
              >
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                <CardContent className="p-6">
                  <div className="flex flex-col mb-4 md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-slate-100">
                        {exp.title}
                      </h3>
                      <p className="font-medium text-blue-400">{exp.company}</p>
                      <p className="text-sm text-slate-400">{exp.location}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-2 border-slate-600 text-slate-300 md:mt-0"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm transition-colors text-slate-300 hover:text-slate-100"
                      >
                        <span className="mr-2 text-blue-400">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Skills & Technologies
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items], index) => (
              <Card
                key={category}
                className={`bg-slate-800/50 border-slate-700 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 opacity-0 ${
                  index % 2 === 0
                    ? "animate-slideInLeft"
                    : "animate-slideInRight"
                } ${
                  index === 0
                    ? "delay-100"
                    : index === 1
                      ? "delay-200"
                      : index === 2
                        ? "delay-300"
                        : "delay-400"
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold text-slate-100">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 transition-all border cursor-default bg-slate-700/50 text-slate-200 border-slate-600 hover:bg-slate-700 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group overflow-hidden hover:-translate-y-2 opacity-0 animate-fadeInUp ${
                  index === 0
                    ? "delay-100"
                    : index === 1
                      ? "delay-200"
                      : index === 2
                        ? "delay-300"
                        : "delay-400"
                }`}
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient} transition-all duration-300 group-hover:h-3`}
                />
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold transition-colors text-slate-100 group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs transition-all border-slate-600 text-slate-300 hover:border-blue-500/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 hover:bg-slate-700/50 group/btn"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fadeInUp ${
                  index === 0 ? "delay-100" : "delay-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-slate-100">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-400">{edu.institution}</p>
                      <p className="text-sm text-slate-400">{edu.period}</p>
                    </div>
                    <Badge
                      className={`mt-2 md:mt-0 ${
                        edu.status === "In Progress"
                          ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                          : "bg-green-500/10 border-green-500/30 text-green-400"
                      }`}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 delay-300 opacity-0 animate-fadeIn">
            <h3 className="mb-4 text-lg font-bold text-slate-100">
              Certifications
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Introduction to Web Design and Development",
                "Learning Functional Programming with JavaScript ES6+",
              ].map((cert, i) => (
                <Card
                  key={i}
                  className="transition-all bg-slate-800/30 border-slate-700 hover:border-slate-600 hover:shadow-md hover:-translate-y-1"
                >
                  <CardContent className="p-4">
                    <p className="text-sm text-slate-300">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Let's Connect
          </h2>
          <p className="mb-8 text-lg text-slate-300">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <Card className="delay-100 opacity-0 bg-slate-800/50 border-slate-700 animate-fadeInUp">
            <CardContent className="p-8">
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:ransilu.deelaka@gmail.com"
                  className="flex items-center justify-center gap-3 p-4 transition-all border rounded-lg bg-slate-700/50 hover:bg-slate-700 border-slate-600 hover:border-blue-500/50 hover:scale-105"
                >
                  <Mail className="text-blue-400" />
                  <span className="font-medium text-slate-200">
                    ransilu.deelaka@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+94712026132"
                  className="flex items-center justify-center gap-3 p-4 transition-all border rounded-lg bg-slate-700/50 hover:bg-slate-700 border-slate-600 hover:border-purple-500/50 hover:scale-105"
                >
                  <Phone className="text-purple-400" />
                  <span className="font-medium text-slate-200">
                    +94 71 202 6132
                  </span>
                </a>
                <div className="flex justify-center gap-4 mt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="transition-all border-slate-700 hover:bg-slate-700 hover:text-slate-100 hover:border-blue-500/50 hover:scale-110"
                  >
                    <a
                      href="https://github.com/deelaka-ransilu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="transition-all border-slate-700 hover:bg-slate-700 hover:text-slate-100 hover:border-blue-500/50 hover:scale-110"
                  >
                    <a
                      href="https://www.linkedin.com/in/deelaka-ransilu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t bg-slate-950 border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">
            © 2026 Deelaka Ransilu. Built with React, shadcn/ui & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
