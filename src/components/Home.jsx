"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Video,
  Camera,
  Smartphone,
  Palette,
  Zap,
  Star,
  Menu,
  X,
  ChevronRight,
  Calendar,
  Eye,
  ExternalLink,
} from "lucide-react";
import ContactForm from "./ContactForm";
import Link from "next/link";

const DigitalServicesLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // redirect user to work section
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description:
        "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile First",
      ],
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing and post-production services",
      features: [
        "Color Grading",
        "Motion Graphics",
        "Audio Mixing",
        "4K Quality",
      ],
    },
    {
      icon: Camera,
      title: "Photo Editing",
      description: "Professional photo retouching and enhancement services",
      features: [
        "Retouching",
        "Color Correction",
        "Background Removal",
        "HDR Processing",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android",
        "React Native",
        "UI/UX Design",
        "App Store Deploy",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative design solutions for your brand identity",
      features: [
        "Logo Design",
        "Brand Identity",
        "Print Design",
        "Digital Assets",
      ],
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaigns",
      features: [
        "Social Media",
        "Content Marketing",
        "PPC Campaigns",
        "Analytics",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Exceptional work on our website. The team delivered beyond our expectations with a modern, fast-loading site that perfectly represents our brand.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332b3c3?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content:
        "Their video editing skills are top-notch. Our promotional videos now have a professional quality that significantly boosted our engagement.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      content:
        "From concept to launch, the entire process was seamless. They transformed our vision into a stunning digital presence.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ];

  const latestWork = [
    {
      id: 1,
      title: "Dholera Times",
      category: "Website Development",
      description:
        "Real Estate Web Platform for Property Listings, Virtual Tours, and Client Management.",
      image:
        "https://res.cloudinary.com/deoknwyfo/image/upload/v1765352114/p-1_sxve45.jpg?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
      completedDate: "2024-12-15",
      projectUrl: "https://www.dholeratimes.com/",
      isExternal: true,
    },
    {
      id: 2,
      title: "Truliyo Digital",
      category: "Website Development",
      description:
        "Branding and Digital Marketing Agency Website with Portfolio and Service Showcase.",
      image:
        "https://res.cloudinary.com/deoknwyfo/image/upload/v1765352236/p-2_chiubp.jpg?w=600&h=400&fit=crop",
      technologies: ["React js", "Tailwind css", "Framer Motion"],
      completedDate: "2024-11-28",
      projectUrl: "https://www.truliyo.com/",
      isExternal: true,
    },
    {
      id: 3,
      title: "Brand Video Production",
      category: "Video Editing",
      description:
        "Professional corporate video with motion graphics, color grading, and sound design.",
      image:
        "https://img.freepik.com/free-photo/empty-office-desk-with-video-editing-software-running-computer_482257-116637.jpg?w=600&h=400&fit=crop",
      technologies: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
      completedDate: "2024-12-01",
      projectUrl: "https://drive.google.com/drive/folders/1Z7kTDPG8gElk29rlTfJApD3bLk962cVJ?usp=drive_link",
      isExternal: true,
    },
    {
      id: 4,
      title: "Digital Growth",
      category: "Digital Marketing",
      description:
        "Comprehensive digital marketing campaign including SEO, social media, and PPC.",
      image:
        "https://img.freepik.com/free-photo/online-shopping-concept_23-2151896811.jpg?w=600&h=400&fit=crop",
      technologies: ["Meta ads", "Google Ads", "SEO Tools"],
      completedDate: "2024-10-20",
      projectUrl: "/",
      isExternal: true,
    },
    
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DigitalCraft
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="hidden md:block">
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Get Started
                </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#services"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <a href="#contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg font-medium">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Digital Services
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your digital presence with our cutting-edge services. From
            stunning websites to captivating videos, we bring your vision to
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              className="px-8 py-4 rounded-lg font-medium text-lg border border-slate-600 hover:border-slate-400 transition-colors"
              onClick={scrollToWork}
            >
              View Our Work
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">123+</div>
              <div className="text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business
              to new heights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-slate-400"
                    >
                      <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work section  */}
      {/* Latest Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Latest Work
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover our recent projects and see how we've helped businesses
              achieve their digital goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {latestWork.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-white text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(project.completedDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                        }
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => window.open(project.projectUrl, "_blank")}
                      className="flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                      {project.isExternal && (
                        <ExternalLink className="w-3 h-3 ml-1" />
                      )}
                    </button>

                    <div className="flex items-center text-slate-400 text-xs">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Let's discuss your project and create something amazing together.
            Get started with a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <a
              href="https://personal-portfolio-rust-zeta.vercel.app/"
              className="px-8 py-4 rounded-lg font-medium text-lg border border-slate-600 hover:border-slate-400 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* contact us form  */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DigitalCraft
                </span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Crafting exceptional digital experiences that drive results and
                inspire growth for businesses worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Website Development</li>
                <li>Video Editing</li>
                <li>Photo Editing</li>
                <li>Mobile Apps</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Fill the form to contact us</li>
                {/* <li>+91 9654439957</li> */}
                <li>Haryana, IN</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 DigitalCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalServicesLanding;
