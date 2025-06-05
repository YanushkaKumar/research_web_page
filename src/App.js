import React, { useState, useEffect } from 'react';
import './styles.css';
import Picture1 from './Picture1.png';

import Picture2 from './Picture2.png';
import './firebase';
import { Shield, Target, Cpu, Eye, Mail, Users, Award, BookOpen, Activity, Lock, Zap, Database } from 'lucide-react';

const CybersecurityWebsite = () => {
  const [animatedText, setAnimatedText] = useState('');
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const fullText = "AI-Enhanced IDS for Reduced False Positives/Negatives";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setAnimatedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const glitchTimer = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 5000);

    return () => clearInterval(glitchTimer);
  }, []);

  // Scroll to section functionality
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer to update active section
  useEffect(() => {
    const observers = [];
    const sections = ['home', 'objectives', 'methodology', 'results', 'architecture', 'monitoring', 'education', 'acknowledgments'];
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const NavButton = ({ id, icon: Icon, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
        isActive 
          ? 'bg-green-500 text-black shadow-lg shadow-green-500/50' 
          : 'bg-gray-800 text-green-400 hover:bg-gray-700 border border-green-500/30'
      }`}
    >
      <Icon size={18} />
      <span className="font-mono text-sm">{label}</span>
    </button>
  );

  const StatCard = ({ icon: Icon, value, label, color = "green" }) => (
    <div className={`bg-gray-800 p-6 rounded-lg border border-${color}-500/30 hover:border-${color}-500 transition-all duration-300 transform hover:scale-105`}>
      <div className="flex items-center space-x-4">
        <div className={`p-3 bg-${color}-500/20 rounded-full`}>
          <Icon className={`text-${color}-400`} size={24} />
        </div>
        <div>
          <div className={`text-2xl font-bold text-${color}-400 font-mono`}>{value}</div>
          <div className="text-gray-400 text-sm">{label}</div>
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
          <Icon className="text-cyan-400" size={20} />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );

  const ObjectiveItem = ({ children }) => (
    <div className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
      <span className="text-gray-300">{children}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg">
                <Shield className="text-black" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Improving IDS Using AI to Address False positives and False Negative in Network security</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-3">
            <NavButton id="home" icon={Shield} label="Home" isActive={activeSection === 'home'} onClick={scrollToSection} />
            <NavButton id="objectives" icon={Target} label="Objectives" isActive={activeSection === 'objectives'} onClick={scrollToSection} />
            <NavButton id="methodology" icon={Cpu} label="Methodology" isActive={activeSection === 'methodology'} onClick={scrollToSection} />
            <NavButton id="results" icon={Award} label="Results" isActive={activeSection === 'results'} onClick={scrollToSection} />
            <NavButton id="architecture" icon={Lock} label="Architecture" isActive={activeSection === 'architecture'} onClick={scrollToSection} />
            <NavButton id="monitoring" icon={Activity} label="Monitoring" isActive={activeSection === 'monitoring'} onClick={scrollToSection} />
            <NavButton id="education" icon={Users} label="Education" isActive={activeSection === 'education'} onClick={scrollToSection} />
            <NavButton id="acknowledgments" icon={Users} label="Thanks" isActive={activeSection === 'acknowledgments'} onClick={scrollToSection} />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-48">
        {/* Home Section */}
        <section id="home" className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-6 py-12">
              <div className="relative">
                <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent ${glitchEffect ? 'animate-pulse' : ''}`}>
                  {animatedText}
                  <span className="animate-pulse">|</span>
                </h1>
                {glitchEffect && (
                  <div className="absolute inset-0 text-5xl md:text-7xl font-bold text-red-500 opacity-50 transform translate-x-1">
                    {animatedText}
                  </div>
                )}
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Revolutionizing network security with real-time AI-powered threat detection. 
                Lightweight, intelligent, and accessible cybersecurity for the modern digital landscape.
              </p>
              <div className="flex justify-center space-x-4 pt-6">
                <button 
                  onClick={() => scrollToSection('results')}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  View Results
                </button>
                <button 
                  onClick={() => scrollToSection('architecture')}
                  className="px-8 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transform hover:scale-105 transition-all duration-300"
                >
                  Explore System
                </button>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard icon={Award} value="99.96%" label="Accuracy Rate" color="green" />
              <StatCard icon={Zap} value="121K+" label="Predictions/Second" color="cyan" />
              <StatCard icon={Shield} value="0.0001" label="False Positive Rate" color="purple" />
            </div>

            {/* About Section */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <BookOpen className="mr-3 text-cyan-400" />
                About the Project
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                This project focuses on developing an intelligent Intrusion Detection System (IDS) that leverages 
                machine learning and real-time data capture to identify malicious network activity. By utilizing 
                open-source tools such as TShark, Flask, and Grafana, the system offers a cost-effective, flexible, 
                and educational solution tailored for students and small organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Target className="mr-3 text-purple-400" />
                Research Objectives
              </h2>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Main Objective</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To develop an automated, open-source IDS capable of analyzing real-time network traffic 
                and detecting threats using machine learning models.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Specific Objectives</h3>
              <div className="space-y-4">
                <ObjectiveItem>Capture live traffic using TShark</ObjectiveItem>
                <ObjectiveItem>Extract flow-based features and structure them using Python</ObjectiveItem>
                <ObjectiveItem>Train and integrate a Random Forest classifier</ObjectiveItem>
                <ObjectiveItem>Visualize detection results using Grafana</ObjectiveItem>
                <ObjectiveItem>Alert administrators via email for real-time threats</ObjectiveItem>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Cpu className="mr-3 text-cyan-400" />
                Methodology
              </h2>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-cyan-500/30">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The system captures live network traffic using TShark, processes it into feature vectors, 
                and uses a trained Random Forest classifier to detect attacks. Results are sent to Prometheus 
                and visualized with Grafana, while intrusions trigger email alerts via Python's SMTP libraries.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard 
                  icon={Database}
                  title="Data Processing"
                  description="Live traffic capture with TShark and feature extraction using Python for structured analysis."
                />
                <FeatureCard 
                  icon={Cpu}
                  title="ML Classification"
                  description="Random Forest classifier trained on InSDN dataset with SMOTE for class imbalance handling."
                />
                <FeatureCard 
                  icon={Activity}
                  title="Real-time Analysis"
                  description="Prometheus integration for metrics collection and real-time threat detection processing."
                />
                <FeatureCard 
                  icon={Eye}
                  title="Visualization"
                  description="Grafana dashboards for comprehensive monitoring and threat pattern visualization."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Award className="mr-3 text-green-400" />
                Results & Performance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard icon={Award} value="99.96%" label="Accuracy" color="green" />
              <StatCard icon={Shield} value="0.0001" label="False Positive Rate" color="blue" />
              <StatCard icon={Eye} value="0.0004" label="False Negative Rate" color="purple" />
              <StatCard icon={Zap} value="121K+" label="Predictions/Second" color="cyan" />
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Key Achievements</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start">
                  <span className="text-green-400 mr-2">▸</span>
                  Achieved exceptional accuracy of 99.96% with minimal false positives and negatives
                </p>
                <p className="flex items-start">
                  <span className="text-green-400 mr-2">▸</span>
                  Processed over 121,000 predictions per second using modest computing resources
                </p>
                <p className="flex items-start">
                  <span className="text-green-400 mr-2">▸</span>
                  Successfully identified DoS, DDoS, brute force, and web application attacks
                </p>
                <p className="flex items-start">
                  <span className="text-green-400 mr-2">▸</span>
                  Demonstrated feasibility for deployment in resource-constrained environments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Lock className="mr-3 text-blue-400" />
                System Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                    <Database className="text-blue-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold">Data Collection Layer</h3>
                </div>
                <p className="text-gray-300 text-sm">Captures traffic using TShark and Prometheus for real-time data acquisition.</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500/20 p-2 rounded-lg mr-3">
                    <Cpu className="text-green-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold">Feature Extraction Layer</h3>
                </div>
                <p className="text-gray-300 text-sm">Parses and transforms packet data into structured features for analysis.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
                    <Shield className="text-purple-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold">Detection Layer</h3>
                </div>
                <p className="text-gray-300 text-sm">Uses trained Random Forest model for intelligent threat classification.</p>
              </div>

              <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 p-6 rounded-xl border border-red-500/30 hover:border-red-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500/20 p-2 rounded-lg mr-3">
                    <Mail className="text-red-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold">Alerting Layer</h3>
                </div>
                <p className="text-gray-300 text-sm">Sends real-time email alerts for detected attacks and threats.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-500/20 p-2 rounded-lg mr-3">
                    <Eye className="text-cyan-400" size={20} />
                  </div>
                  <h3 className="text-white font-semibold">Visualization Layer</h3>
                </div>
                <p className="text-gray-300 text-sm">Displays real-time statistics using comprehensive Grafana dashboards.</p>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Modular Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Each layer is modular and can be enhanced or replaced depending on future needs. 
                This architecture ensures scalability, maintainability, and easy customization for different deployment scenarios.
              </p>
            </div>
          </div>
        </section>

        {/* Monitoring Section */}
        <section id="monitoring" className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Activity className="mr-3 text-red-400" />
                Real-Time Monitoring & Alerts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-red-500/30">
                <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                  <Eye className="mr-2" />
                  Prometheus & Grafana Integration
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We integrated Prometheus and Grafana to monitor system metrics and threat data in real time. 
                  Dashboards display detected attack types, traffic patterns, and alert frequencies.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Real-time threat detection metrics</li>
                  <li>• Traffic pattern analysis</li>
                  <li>• Alert frequency monitoring</li>
                  <li>• System performance tracking</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-orange-500/30">
                <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                  <Mail className="mr-2" />
                  Instant Alert System
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When malicious activity is detected, the system instantly sends an email alert to the administrator, 
                  ensuring fast and actionable response to potential threats.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Instant email notifications</li>
                  <li>• Detailed threat information</li>
                  <li>• Actionable response guidelines</li>
                  <li>• Configurable alert thresholds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
{/* Dashboard Images Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-cyan-400 mb-6">Live Dashboard Views</h3>
                <p className="text-gray-300 mb-8">Real-time visualization of threat detection and system performance</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Dashboard Image 1 */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
                  <h4 className="text-xl font-bold text-cyan-400 mb-4 text-center">Normal Traffic Dashboard</h4>
                  <div className="relative group">
                    <div className="bg-gray-700/50 rounded-lg p-4 border-2 border-dashed border-gray-600 hover:border-cyan-500 transition-colors duration-300">
                      <img 
                            src={Picture2} 
                            alt="Normal Traffic Performance Dashboard" 
                            className="w-full aspect-video object-cover rounded transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                            />
                      <div className="hidden w-full aspect-video bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded items-center justify-center">
                        <div className="text-center">
                          <Activity className="text-cyan-400 mx-auto mb-2" size={48} />
                          <p className="text-cyan-400 font-semibold">Dashboard Preview</p>
                          <p className="text-gray-400 text-sm">Real-time threat detection metrics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 text-center">
                    Real-time threat classification and attack pattern visualization
                  </p>
                </div>

                {/* Dashboard Image 2 */}
                <div className="bg-gray-800/50 p-6 rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300">
                  <h4 className="text-xl font-bold text-green-400 mb-4 text-center">Doss Attack Detection Dashboard</h4>
                  <div className="relative group">
                    <div className="bg-gray-700/50 rounded-lg p-4 border-2 border-dashed border-gray-600 hover:border-green-500 transition-colors duration-300">
                     <img 
                            src={Picture1} 
                            alt="Doss Attack Detection Dashboard" 
                            className="w-full aspect-video object-cover rounded transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
/>
                      
                      <div className="hidden w-full aspect-video bg-gradient-to-br from-green-900/50 to-green-800/30 rounded items-center justify-center">
                        <div className="text-center">
                          <Eye className="text-green-400 mx-auto mb-2" size={48} />
                          <p className="text-green-400 font-semibold">Performance Metrics</p>
                          <p className="text-gray-400 text-sm">Network traffic analysis dashboard</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 text-center">
                    Real-time threat classification and attack pattern visualization
                  </p>
                </div>
              </div>
            </div>


        {/* Education Section */}
        <section id="education" className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Users className="mr-3 text-yellow-400" />
                Educational Impact
              </h2>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-yellow-500/30">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                This system isn't just for detection — it's also designed to <strong className="text-yellow-400">teach</strong>. 
                Students, researchers, and educators can explore network flows, machine learning models, and real-world 
                intrusion detection workflows in a hands-on, customizable environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard 
                  icon={BookOpen}
                  title="Hands-on Learning"
                  description="Interactive environment for exploring cybersecurity concepts and machine learning applications."
                />
                <FeatureCard 
                  icon={Users}
                  title="Research Platform"
                  description="Comprehensive platform for students and researchers to experiment with IDS technologies."
                />
                <FeatureCard 
                  icon={Cpu}
                  title="Technical Skills"
                  description="Develops practical skills in network security, data analysis, and AI implementation."
                />
                <FeatureCard 
                  icon={Shield}
                  title="Cybersecurity Awareness"
                  description="Enhances understanding of modern cyber threats and defense mechanisms."
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-8 rounded-xl border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Project Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                We hope this project contributes to both cybersecurity awareness and technical skill development 
                among the next generation of IT professionals, providing an accessible pathway to understanding 
                advanced security technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Acknowledgments Section */}
        <section id="acknowledgments" className="max-w-7xl mx-auto p-6 min-h-screen">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Users className="mr-3 text-pink-400" />
                Acknowledgments
              </h2>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-pink-500/30">
              <div className="text-center space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-pink-400">Supervisors</h3>
                  <div className="space-y-2">
                    <p className="text-xl text-white font-semibold">Dr. Nuwan Kuruwitaarachchi</p>
                    <p className="text-xl text-white font-semibold">Dr. Sanika Wijayasekara</p>
                  </div>
                  <p className="text-gray-300">
                    We would like to thank our supervisors for their invaluable guidance and support throughout this research project.
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">Institution</h3>
                  <p className="text-lg text-white font-semibold mb-2">
                    Department of Information and Communication Technology
                  </p>
                  <p className="text-lg text-white font-semibold mb-2">
                    Faculty of Technology
                  </p>
                  <p className="text-lg text-white font-semibold mb-4">
                    University of Sri Jayewardenepura
                  </p>
                  <p className="text-gray-300">
                    We express deep gratitude for providing the resources and environment to carry out this project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
       {/* Students Section */}
        <section className="max-w-7xl mx-auto p-6 min-h-[300px]">
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Users className="mr-3 text-blue-400" />
                Research Team
              </h2>
              <p className="text-gray-400 text-lg">Final Year Undergraduate Students</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="text-blue-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">R.K.Y. Kumar</h3>
                    <p className="text-blue-400 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded-full inline-block">ICT/20/871</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-400 text-sm">ML Implementation</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-8 rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="text-green-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">M.G.S.V. Amarasena</h3>
                    <p className="text-green-400 font-mono text-sm bg-green-500/10 px-3 py-1 rounded-full inline-block">ICT/20/806</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-400 text-sm">Research & Development</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-8 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Users className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">E.A.K. Thathsara</h3>
                    <p className="text-purple-400 font-mono text-sm bg-purple-500/10 px-3 py-1 rounded-full inline-block">ICT/20/946</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-400 text-sm">System Architecture</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-600/30 max-w-2xl mx-auto">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-blue-400 font-semibold">Bachelor of Information and Communication Technology (Honours)</span>
                  <br />
                  Department of Information and Communication Technology
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Improving IDS Using AI to Address False positives and False Negative in Network security Research Project</p>
          <p className="text-sm mt-2">University of Sri Jayewardenepura | Department of ICT</p>
        </div>
      </footer>
    </div>
  );
};

export default CybersecurityWebsite;