import React from 'react'
import { Shield, Target, Users, TrendingUp, CheckCircle, ArrowRight, Mail, Phone, MapPin, BarChart3, Brain, Calculator, FlaskConical } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary-600 mr-3" />
              <span className="text-xl font-bold text-dark-900">High G Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-dark-600 hover:text-primary-600 font-medium">About</a>
              <a href="#philosophy" className="text-dark-600 hover:text-primary-600 font-medium">Philosophy</a>
              <a href="#approach" className="text-dark-600 hover:text-primary-600 font-medium">Approach</a>
              <Link href="/facility" className="text-dark-600 hover:text-primary-600 font-medium">Facility</Link>
              <Link href="/business-plan" className="text-dark-600 hover:text-primary-600 font-medium">Business Plan</Link>
              <a href="#contact" className="text-dark-600 hover:text-primary-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg text-white pt-24 pb-20">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Physics-Centric Digital Engineering
              <span className="block text-blue-200">for Defense & Ballistic Systems</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We deliver quantitative analysis through proven engineering methods, AI-enhanced workflows, 
              and authoritative physics-based models that drive better decisions and superior system performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/business-plan" className="btn-secondary">
                <BarChart3 className="mr-2 h-5 w-5" />
                Interactive Business Plan
              </Link>
              <Link href="/facility" className="btn-primary">
                Explore Our Facility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Mission Statement
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">About High G Solutions</h3>
              <p className="text-dark-600 text-lg mb-6">
                Founded by Jason Foultz, High G Solutions specializes in <strong>physics-centric digital engineering</strong> 
                that delivers measurable results. We leverage proven quantitative methods including Design of Experiments (DOE), 
                Multi-Objective Decision Analysis (MODA), Failure Mode Effects Analysis (FMEA), Monte Carlo simulation, 
                and physics-based modeling & simulation.
              </p>
              <p className="text-dark-600 text-lg mb-6">
                Our approach centers on <strong>authoritative physics-based models and AI-enhanced workflows</strong> 
                that enable superior decision-making in precision fires and ballistic systems. We use artificial intelligence 
                to accelerate analysis, evaluate complex data, and create efficient engineering workflows.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  Physics-centric models grounded in deep understanding
                </li>
                <li className="flex items-center text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  AI-enhanced analysis and workflow automation
                </li>
                <li className="flex items-center text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  Proven quantitative methods (DOE, MODA, FMEA, Monte Carlo)
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-dark-900 mb-4">Measured Success</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-dark-600">Target Revenue Year 1</span>
                  <span className="font-bold text-primary-600">$300K-$500K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Target Revenue Year 2</span>
                  <span className="font-bold text-primary-600">$750K-$1.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Target Revenue Year 5</span>
                  <span className="font-bold text-primary-600">$5M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Our Physics-Centric Approach
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-dark-600 max-w-4xl mx-auto">
              We deliver <strong>better engineering decisions through physics-based understanding</strong>, 
              AI-enhanced analysis, and proven quantitative methods that drive measurable improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Physics-Centric Models</h3>
              <p className="text-dark-600">
                Authoritative models grounded in deep understanding of ballistic phenomena, material properties, 
                and high-G environments. Every model maintains the "explanatory effect" – engineers understand the physics.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">AI-Enhanced Analysis</h3>
              <p className="text-dark-600">
                Artificial intelligence accelerates Design of Experiments (DOE), Multi-Objective Decision Analysis (MODA), 
                video evaluation, and workflow automation while preserving human insight and engineering judgment.
              </p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Proven Methodologies</h3>
              <p className="text-dark-600">
                Six Sigma, Design of Experiments (DOE), Failure Mode Effects Analysis (FMEA), 
                Monte Carlo simulation, and Computational Fluid Dynamics (CFD) – methods that consistently deliver results.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">Our AI-Forward Engineering Philosophy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-800 mb-2">🤖 AI as Engineering Accelerator</h4>
                <ul className="text-dark-600 text-sm space-y-1">
                  <li>• AI-powered code generation for analysis workflows</li>
                  <li>• Computer vision for high-speed camera evaluation</li>
                  <li>• Machine learning for pattern recognition in test data</li>
                  <li>• Automated documentation and report generation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-800 mb-2">🔬 Physics-Based Foundation</h4>
                <ul className="text-dark-600 text-sm space-y-1">
                  <li>• Models that explain cause-and-effect relationships</li>
                  <li>• Uncertainty quantification and risk assessment</li>
                  <li>• Validated against experimental data and observations</li>
                  <li>• Enable trade studies and design optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              The Real Digital Engineering Challenge
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6">The Current State</h3>
              <ul className="space-y-4 text-red-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Fragmented digital efforts focused on modeling formalism over analysis
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Engineers pulled away from proven quantitative methods to manage model complexity
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Loss of "explanatory effect" – understanding <em>why</em> designs work
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Tools that obstruct rather than enable physics-based simulation and analysis
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Our Approach</h3>
              <ul className="space-y-4 text-green-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <strong>Quantitative design optimization</strong> based on performance, cost, and risk data
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <strong>Data-driven architecture trades</strong> with clear, quantifiable insights
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <strong>Proactive risk mitigation</strong> using predictive models and uncertainty quantification
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <strong>Efficient V&V strategies</strong> optimized through modeling and simulation insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Our Business Model
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              A phased approach focused on analysis, insight, and measurable decision quality improvements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Phase 1: Quantitative Foundation
              </h3>
              <p className="text-dark-600 mb-4">
                Assess current analytical capabilities and identify opportunities to apply proven quantitative methods 
                (DOE, MODA, Monte Carlo) to ballistic systems and precision fires.
              </p>
              <div className="text-sm text-primary-600 font-semibold">
                Revenue Target: $300K-$500K
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Phase 2: Physics-Based Integration
              </h3>
              <p className="text-dark-600 mb-4">
                Build authoritative models grounded in deep understanding of high-G environments, ballistic phenomena, 
                and weapon system interactions – not just descriptive structure.
              </p>
              <div className="text-sm text-primary-600 font-semibold">
                Revenue Target: $750K-$1.5M annually
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                Phase 3: Decision Quality Leadership
              </h3>
              <p className="text-dark-600 mb-4">
                Scale proven methodologies across broader defense programs, measuring success by cycle time reduction, 
                cost savings, and improved fielded system performance.
              </p>
              <div className="text-sm text-primary-600 font-semibold">
                Revenue Target: $5M+ per year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Who Benefits from Our Approach
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-dark-600 max-w-4xl mx-auto">
              Organizations frustrated with "digital theater" who want Digital Engineering 
              that actually improves decisions, reduces costs, and accelerates innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6 flex items-center">
                <Target className="h-6 w-6 text-primary-600 mr-3" />
                Primary Customers
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <strong>DEVCOM Armaments Center (AC):</strong> Need quantitative analysis for ballistic systems, 
                    not more SysML diagrams that don't improve weapon performance.
                  </div>
                </li>
                <li className="flex items-start text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <strong>PEO Missiles & Space, PEO Ammunition:</strong> Require physics-based models 
                    that enable better trade-offs and risk mitigation decisions.
                  </div>
                </li>
                <li className="flex items-start text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <strong>OUSD(R&E) Digital Engineering Office:</strong> Want measurable improvements 
                    in decision quality and system performance, not tool adoption metrics.
                  </div>
                </li>
                <li className="flex items-start text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <strong>DARPA:</strong> Need advanced modeling that maintains the "explanatory effect" 
                    for breakthrough innovations and emerging threats.
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-primary-600 mr-3" />
                Industry Partners
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Prime contractors (Raytheon, Northrop Grumman, Boeing):</strong> 
                    Seeking analysis-driven DE that reduces cycle times and improves margins.
                  </div>
                </li>
                <li className="flex items-start text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Emerging defense companies (Anduril, etc.):</strong> 
                    Want to avoid legacy MBSE pitfalls while scaling innovative approaches.
                  </div>
                </li>
                <li className="flex items-start text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Mid-tier contractors:</strong> Need cost-effective DE approaches 
                    that deliver results without massive tool investments.
                  </div>
                </li>
                <li className="flex items-start text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <strong>Physics-based simulation specialists:</strong> 
                    Partners who value deep technical understanding over process compliance.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">The Common Thread</h3>
            <p className="text-lg text-dark-600 max-w-4xl mx-auto">
              All our customers share a fundamental question: <strong>"Has our Digital Engineering initiative 
              actually improved our ability to innovate, produce, and field superior systems faster and cheaper?"</strong> 
              If the answer is no, we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section id="approach" className="py-20 bg-primary-900 text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Competitive Advantage
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Physics-centric models, AI-enhanced analysis, and proven quantitative methods 
              that consistently deliver superior decision quality and system performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quantitative Excellence</h3>
              <p className="text-blue-100">
                Design of Experiments (DOE), Multi-Objective Decision Analysis (MODA), 
                and Monte Carlo simulation expertise that drives measurable improvements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Enhanced Engineering</h3>
              <p className="text-blue-100">
                Artificial intelligence accelerates our analysis workflows while preserving 
                the crucial "explanatory effect" that enables deep understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Physics-Based Authority</h3>
              <p className="text-blue-100">
                Our models reveal cause-and-effect relationships in ballistic phenomena, 
                high-G environments, and weapon system interactions through deep understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hybrid Innovation</h3>
              <p className="text-blue-100">
                Seamless integration of physical R&D capabilities with virtual collaboration, 
                enabling global access to cutting-edge engineering tools.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary-800/50 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Measurable Results</h3>
              <p className="text-xl text-blue-100">
                We deliver <strong>better engineering decisions through physics-based understanding</strong>, 
                AI-enhanced analysis, and proven methodologies that consistently reduce risk, 
                optimize performance, and accelerate innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Facility Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced R&D Facility
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Our cutting-edge laboratory embodies our philosophy: build <strong>authoritative physics-based models</strong> 
              through deep understanding of ballistic phenomena, high-G environments, and material behavior. 
              Enhanced by AI tools for accelerated analysis and insight generation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700 card-hover">
              <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Precision Manufacturing</h3>
              <p className="text-slate-300">
                5-axis CNC machining and metal additive manufacturing informed by physics-based understanding of 
                material properties, thermal stress, and manufacturing variability for complex ballistic components.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700 card-hover">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-300">AI-Enhanced Testing</h3>
              <p className="text-slate-300">
                High-speed cameras with AI-powered video analysis, instrumented test ranges with machine learning 
                pattern recognition, and automated data processing for ballistic characterization.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700 card-hover">
              <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Physics-Based Simulation</h3>
              <p className="text-slate-300">
                GPU clusters for Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA) that maintain 
                the "explanatory effect" – engineers understand the physics behind every simulation result.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 p-8 rounded-lg border border-slate-600 mb-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Hybrid Physical & Virtual Environments</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-3">🏭 Physical Facility</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• War rooms for collaborative simulations and team-centered analysis</li>
                  <li>• Large displays for integrated model visualization and trade studies</li>
                  <li>• Instrumentation labs with strain gauges, pressure sensors, thermal cameras</li>
                  <li>• AI workstations for real-time video and data analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3">🌐 Virtual Facility (Digital Twin)</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• Complete digital twin enabling remote collaboration worldwide</li>
                  <li>• Virtual reality interfaces for immersive design reviews</li>
                  <li>• Cloud-based physics simulations accessible anywhere</li>
                  <li>• AI-powered workflow automation and analysis tools</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/facility" className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              <BarChart3 className="mr-3 h-6 w-6" />
              Explore Our Complete Facility
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-900 text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Accelerate Your Digital Thread?
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us to discuss how High G Solutions can help streamline your precision fires 
              and ballistic systems development through advanced digital engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@highgsolutions.com</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">Washington, DC Metro Area</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              Schedule a Consultation
            </button>
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