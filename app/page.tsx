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
              Beyond MBSE & SysML:
              <span className="block text-blue-200">Real Digital Engineering for Defense</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We focus on quantitative analysis, proven engineering methods, and physics-based models 
              that actually improve decisions – not just create more diagrams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/business-plan" className="btn-secondary">
                <BarChart3 className="mr-2 h-5 w-5" />
                Interactive Business Plan
              </Link>
              <button className="btn-primary">
                Contact Us
              </button>
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
                Founded by Jason Foultz, High G Solutions cuts through the Digital Engineering hype to deliver 
                what actually matters: <strong>quantitative analysis that enables better engineering decisions</strong>. 
                We leverage proven methods like DOE, MODA, Monte Carlo simulation, and physics-based M&S.
              </p>
              <p className="text-dark-600 text-lg mb-6">
                While others focus on SysML diagrams and modeling formalism, we prioritize <strong>systems thinking, 
                knowledge acquisition, and authoritative physics-based models</strong> that reduce risk and optimize 
                performance in precision fires and ballistic systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  Analysis & insight over diagram complexity
                </li>
                <li className="flex items-center text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  Proven quantitative methods (Six Sigma, DOE, FMEA)
                </li>
                <li className="flex items-center text-dark-600">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3" />
                  Physics-based models grounded in deep understanding
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
              Our Digital Engineering Philosophy
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-xl text-dark-600 max-w-4xl mx-auto">
              We believe Digital Engineering should enable <strong>better decisions, faster and cheaper</strong> – 
              not just create more interconnected diagrams. Here's how we're different:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Systems Thinking First</h3>
              <p className="text-dark-600">
                Foundation in systems thinking and human insight, not tools and processes. 
                We prioritize the "explanatory effect" – engineers understanding the <em>why</em> behind results.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Proven Methods Over Formalism</h3>
              <p className="text-dark-600">
                Six Sigma, DOE, FMEA, MODA, Monte Carlo simulation, and physics-based M&S. 
                These time-tested methods actually reduce risk and optimize designs.
              </p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">Knowledge Acquisition Focus</h3>
              <p className="text-dark-600">
                The real bottleneck isn't modeling languages – it's fundamental knowledge gaps. 
                We prioritize R&D and testing to build authoritative physics-based models.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">What We Don't Do (And Why)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Model-Centric Approach</h4>
                <p className="text-dark-600 text-sm mb-4">
                  We don't make the model the product. Complex SysML diagrams often hinder iteration 
                  and exploration rather than enabling better understanding.
                </p>
                <h4 className="font-bold text-red-800 mb-2">❌ Domain-Ignorant Modeling</h4>
                <p className="text-dark-600 text-sm">
                  We don't task generalists with creating detailed models of specialized domains, 
                  avoiding technically naive diagrams that waste expert time.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-red-800 mb-2">❌ Communication Breakdown</h4>
                <p className="text-dark-600 text-sm mb-4">
                  We don't replace clear technical documentation with complex diagrams that prioritize 
                  modeling rigor over clarity and shared understanding.
                </p>
                <h4 className="font-bold text-red-800 mb-2">❌ Digital Theater</h4>
                <p className="text-dark-600 text-sm">
                  We don't create elaborate documentation exercises that add bureaucratic layers 
                  without improving decision quality or system performance.
                </p>
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
              Why We're Different from Other DE Consultants
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              While others chase MBSE/SysML trends, we focus on what actually works: 
              proven quantitative methods that improve decision quality and system performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Analysis Over Formalism</h3>
              <p className="text-blue-100">
                We prioritize rigorous quantitative analysis (DOE, MODA, Monte Carlo) over 
                complex modeling languages that obscure rather than illuminate.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Human Insight Central</h3>
              <p className="text-blue-100">
                We maintain the "explanatory effect" – ensuring engineers understand the physics 
                and reasoning behind results, not just black-box outputs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Physics-Based Foundation</h3>
              <p className="text-blue-100">
                Our models are grounded in deep understanding of ballistic phenomena, 
                high-G environments, and weapon system physics – not just structural relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Measurable Outcomes</h3>
              <p className="text-blue-100">
                We judge success by decision quality, cycle time reduction, and system performance 
                improvements – not model complexity or diagram count.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary-800/50 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-xl text-blue-100">
                We ask the hard question: <strong>Has your Digital Engineering initiative actually improved 
                your ability to innovate, produce, and field superior systems faster and cheaper?</strong> 
                If not, you need a different approach.
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
              Knowledge-Driven Prototype Facility
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Our R&D laboratory embodies our philosophy: build <strong>authoritative physics-based models</strong> 
              through deep understanding of ballistic phenomena, high-G environments, and material behavior. 
              Real knowledge acquisition, not just digital documentation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700 card-hover">
              <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Knowledge-Based Manufacturing</h3>
              <p className="text-slate-300">
                5-axis CNC and metal 3D printing informed by deep understanding of material properties, 
                thermal stress, and manufacturing variability – not just process documentation.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700 card-hover">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-300">Physics-Based Testing</h3>
              <p className="text-slate-300">
                High-speed cameras and instrumented ranges that generate data for authoritative ballistic models. 
                Understanding <em>why</em> projectiles behave as they do, not just documenting that they do.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700 card-hover">
              <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Explanatory Simulation</h3>
              <p className="text-slate-300">
                GPU clusters for CFD and FEA that maintain the "explanatory effect" – engineers understand 
                the physics, not just the outputs. Hard-to-vary models that account for observed phenomena.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 p-8 rounded-lg border border-slate-600 mb-8">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4 text-center">The Knowledge Acquisition Difference</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-3">🔬 What We Build</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• Deep understanding of material behavior under extreme conditions</li>
                  <li>• Authoritative databases of validated ballistic phenomena</li>
                  <li>• Physics-based models that reveal cause-and-effect relationships</li>
                  <li>• Quantitative frameworks for uncertainty management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3">📊 How We Apply It</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• DOE and MODA for systematic design optimization</li>
                  <li>• Monte Carlo simulation for robust risk assessment</li>
                  <li>• FMEA grounded in actual failure mechanisms</li>
                  <li>• Clear technical documentation over complex diagrams</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/business-plan" className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              <BarChart3 className="mr-3 h-6 w-6" />
              Model Our Knowledge-Driven Approach
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