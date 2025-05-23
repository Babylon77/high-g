'use client'

import React from 'react'
import { Shield, ArrowRight, ChevronLeft, Factory, Cpu, Camera, Wrench, Users, Monitor, Globe, Zap, Brain, Eye, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function FacilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Shield className="h-8 w-8 text-primary-600 mr-3" />
              <span className="text-xl font-bold text-dark-900">High G Solutions</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-dark-600 hover:text-primary-600 font-medium">Home</Link>
              <Link href="/#about" className="text-dark-600 hover:text-primary-600 font-medium">About</Link>
              <Link href="/#philosophy" className="text-dark-600 hover:text-primary-600 font-medium">Philosophy</Link>
              <Link href="/business-plan" className="text-dark-600 hover:text-primary-600 font-medium">Business Plan</Link>
              <Link href="/facility" className="text-primary-600 font-medium">Facility</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="gradient-bg text-white pt-24 pb-12">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced R&D Facility
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our cutting-edge physical and virtual environments designed for physics-centric digital engineering. 
              From precision manufacturing to AI-enhanced analysis, discover how we build authoritative models 
              through deep understanding and collaborative innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Hybrid Physical & Virtual Environment</h2>
            <p className="text-xl text-dark-600 max-w-4xl mx-auto">
              Our facility seamlessly integrates physical capabilities with virtual collaboration, 
              enabling worldwide access to cutting-edge R&D capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Factory className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-dark-900">Physical Facility</h3>
              </div>
              <ul className="space-y-3 text-dark-600">
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-3 mt-0.5 rotate-90" />
                  15,000+ sq ft R&D laboratory and manufacturing space
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-3 mt-0.5 rotate-90" />
                  Climate-controlled precision manufacturing environment
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-3 mt-0.5 rotate-90" />
                  Dedicated testing chambers and instrumentation labs
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-3 mt-0.5 rotate-90" />
                  Collaborative war rooms with integrated displays
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-dark-900">Virtual Facility</h3>
              </div>
              <ul className="space-y-3 text-dark-600">
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-3 mt-0.5 rotate-90" />
                  Complete digital twin of physical facility operations
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-3 mt-0.5 rotate-90" />
                  Cloud-based access to all simulation and analysis tools
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-3 mt-0.5 rotate-90" />
                  Virtual reality interfaces for immersive collaboration
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-3 mt-0.5 rotate-90" />
                  Real-time data streaming from physical experiments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Precision Manufacturing</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">5-Axis CNC Machining</h3>
              <p className="text-dark-600 mb-4">
                Precision machining of complex ballistic components with sub-micron accuracy. 
                Specialized tooling for exotic materials used in high-G environments.
              </p>
              <ul className="text-sm text-dark-500 space-y-1">
                <li>• Titanium and hardened steel capabilities</li>
                <li>• Complex internal geometries</li>
                <li>• Tight tolerance manufacturing</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Metal Additive Manufacturing</h3>
              <p className="text-dark-600 mb-4">
                Direct Metal Laser Sintering (DMLS) and Electron Beam Melting (EBM) for rapid prototyping 
                of instrumented projectiles and complex internal structures.
              </p>
              <ul className="text-sm text-dark-500 space-y-1">
                <li>• Inconel and steel alloys</li>
                <li>• Internal cooling channels</li>
                <li>• Rapid iteration capabilities</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">AI-Driven Quality Control</h3>
              <p className="text-dark-600 mb-4">
                Computer vision systems with machine learning algorithms for real-time quality assessment, 
                dimensional verification, and defect detection.
              </p>
              <ul className="text-sm text-dark-500 space-y-1">
                <li>• Automated inspection systems</li>
                <li>• Statistical process control</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Instrumentation */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Testing & Instrumentation Labs</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Comprehensive testing capabilities with AI-enhanced data analysis for ballistic characterization 
              and high-G environment validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Camera className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">High-Speed Imaging</h3>
              <p className="text-slate-300 text-sm mb-3">
                Ultra-high-speed cameras (1M+ fps) with AI-powered video analysis for ballistic trajectory tracking.
              </p>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• Schlieren imaging systems</li>
                <li>• Multi-angle synchronization</li>
                <li>• Automated trajectory analysis</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Zap className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Strain & Pressure</h3>
              <p className="text-slate-300 text-sm mb-3">
                Advanced strain gauge networks and pressure sensors for high-G acceleration measurement.
              </p>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• 50,000+ G capable sensors</li>
                <li>• Wireless telemetry systems</li>
                <li>• Real-time data acquisition</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Eye className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">Thermal Imaging</h3>
              <p className="text-slate-300 text-sm mb-3">
                Infrared cameras with AI-enhanced thermal analysis for heat transfer validation.
              </p>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• LWIR and MWIR capabilities</li>
                <li>• Temperature mapping</li>
                <li>• Thermal signature analysis</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Brain className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">AI Data Analysis</h3>
              <p className="text-slate-300 text-sm mb-3">
                Machine learning algorithms for pattern recognition, anomaly detection, and predictive modeling.
              </p>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• Automated report generation</li>
                <li>• Statistical analysis workflows</li>
                <li>• Predictive failure analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Spaces */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Collaborative Analysis Centers</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                War Rooms & Team Centers
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h4 className="font-bold text-dark-900 mb-3">Immersive Analysis Environment</h4>
                <ul className="space-y-2 text-dark-600">
                  <li className="flex items-start">
                    <Monitor className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span>85" 4K displays for integrated model visualization</span>
                  </li>
                  <li className="flex items-start">
                    <Monitor className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span>Multi-touchscreen interfaces for collaborative design</span>
                  </li>
                  <li className="flex items-start">
                    <Monitor className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span>Real-time simulation results display</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Team-Centered Approach</h4>
                <p className="text-blue-800 text-sm">
                  Dedicated spaces where multidisciplinary teams can visualize complex physics models, 
                  perform Design of Experiments (DOE), conduct Multi-Objective Decision Analysis (MODA), 
                  and execute collaborative trade studies on large displays.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6 flex items-center">
                <Globe className="h-6 w-6 text-green-600 mr-3" />
                Virtual Reality Interfaces
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h4 className="font-bold text-dark-900 mb-3">Immersive Collaboration</h4>
                <ul className="space-y-2 text-dark-600">
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span>VR headsets for 3D model visualization</span>
                  </li>
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span>Haptic feedback for tactile design review</span>
                  </li>
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span>Remote team collaboration in virtual space</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">Global Accessibility</h4>
                <p className="text-green-800 text-sm">
                  Virtual reality enables worldwide access to our facility capabilities. Remote team members 
                  can participate in design reviews, analysis sessions, and collaborative problem-solving 
                  as if they were physically present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twin Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Digital Twin Facility</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Our virtual facility is a complete digital twin that enables hybrid work environments, 
              global collaboration, and 24/7 access to cutting-edge analysis capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud-Based Simulation</h3>
              <p className="text-blue-100">
                Access to high-performance computing clusters for Computational Fluid Dynamics (CFD), 
                Finite Element Analysis (FEA), and Monte Carlo simulations from anywhere in the world.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI-Enhanced Workflows</h3>
              <p className="text-blue-100">
                Artificial intelligence tools for automated code generation, workflow optimization, 
                data analysis, and report generation accessible through web interfaces.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hybrid Collaboration</h3>
              <p className="text-blue-100">
                Seamless integration between physical and virtual environments. Real-time data streaming 
                from physical tests to virtual analysis platforms worldwide.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-primary-800/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Virtual Facility Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Remote Access Tools</h4>
                <ul className="text-blue-100 space-y-2 text-sm">
                  <li>• Web-based simulation interfaces</li>
                  <li>• Virtual desktop environments</li>
                  <li>• Secure cloud data storage</li>
                  <li>• Real-time collaboration platforms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-cyan-300 mb-3">Data Integration</h4>
                <ul className="text-blue-100 space-y-2 text-sm">
                  <li>• Live streaming from physical instruments</li>
                  <li>• Automated data processing pipelines</li>
                  <li>• Version-controlled model repositories</li>
                  <li>• Integrated analysis workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future of Engineering?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a virtual or in-person tour of our facility and discover how physics-centric 
              digital engineering can accelerate your ballistic systems development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/business-plan" className="btn-secondary">
                <Monitor className="mr-2 h-5 w-5" />
                View Financial Model
              </Link>
              <button className="btn-primary">
                Schedule Facility Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 text-gray-400 py-8">
        <div className="container-max section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary-600 mr-2" />
              <span className="text-lg font-bold text-white">High G Solutions</span>
            </div>
            <div className="text-sm">
              © 2024 High G Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 