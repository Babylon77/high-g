'use client'

import React, { useState, useEffect } from 'react'
import { Shield, TrendingUp, DollarSign, Users, Target, AlertCircle, ChevronLeft, Factory, Zap, Cpu, Wrench, Calculator, Building, CreditCard, Camera, Microscope } from 'lucide-react'
import Link from 'next/link'

export default function BusinessPlanPage() {
  // Major Equipment
  const [cncMachine, setCncMachine] = useState(1200) // 5-axis CNC machine cost in thousands
  const [metalPrinter, setMetalPrinter] = useState(2500) // Metal 3D printer cost in thousands
  const [gpuCluster, setGpuCluster] = useState(350) // GPU cluster cost in thousands
  
  // Test Equipment with Quantities
  const [highSpeedCameras, setHighSpeedCameras] = useState(2) // Quantity
  const [highSpeedCameraCost, setHighSpeedCameraCost] = useState(125) // Cost per camera in thousands
  const [dataAcqSystems, setDataAcqSystems] = useState(3) // Quantity
  const [dataAcqSystemCost, setDataAcqSystemCost] = useState(45) // Cost per system in thousands
  const [accelerometers, setAccelerometers] = useState(12) // Quantity
  const [accelerometerCost, setAccelerometerCost] = useState(8) // Cost per unit in thousands
  const [envChambers, setEnvChambers] = useState(1) // Quantity
  const [envChamberCost, setEnvChamberCost] = useState(180) // Cost per chamber in thousands
  const [oscilloscopes, setOscilloscopes] = useState(4) // Quantity
  const [oscilloscopeCost, setOscilloscopeCost] = useState(25) // Cost per scope in thousands
  const [testFixtures, setTestFixtures] = useState(8) // Quantity
  const [testFixtureCost, setTestFixtureCost] = useState(15) // Cost per fixture in thousands
  
  // Lab Equipment with Quantities
  const [workstations, setWorkstations] = useState(12) // Quantity
  const [workstationCost, setWorkstationCost] = useState(8) // Cost per workstation in thousands
  const [precisionTools, setPrecisionTools] = useState(1) // Tool sets
  const [precisionToolCost, setPrecisionToolCost] = useState(45) // Cost per tool set in thousands
  const [safetyEquipment, setSafetyEquipment] = useState(1) // Complete safety setup
  const [safetyEquipmentCost, setSafetyEquipmentCost] = useState(25) // Cost for safety setup in thousands
  const [cmms, setCmms] = useState(1) // Coordinate Measuring Machines
  const [cmmCost, setCmmCost] = useState(150) // Cost per CMM in thousands
  const [labBenches, setLabBenches] = useState(8) // Quantity
  const [labBenchCost, setLabBenchCost] = useState(6) // Cost per bench in thousands
  const [storageSystemsCost, setStorageSystemsCost] = useState(35) // Total storage costs in thousands
  
  // Software Licenses (annual costs in thousands)
  const [abaqusSeats, setAbaqusSeats] = useState(4) // Number of ABAQUS seats
  const [abaqusCostPerSeat, setAbaqusCostPerSeat] = useState(45) // ABAQUS cost per seat per year
  const [matlabSeats, setMatlabSeats] = useState(6) // MATLAB/Simulink seats
  const [matlabCostPerSeat, setMatlabCostPerSeat] = useState(8) // MATLAB cost per seat per year
  const [cadSeats, setCadSeats] = useState(8) // SolidWorks/NX seats
  const [cadCostPerSeat, setCadCostPerSeat] = useState(12) // CAD cost per seat per year
  const [cloudCompute, setCloudCompute] = useState(60) // Annual cloud computing costs
  
  // Facility Parameters (Northern New Jersey)
  const [facilitySize, setFacilitySize] = useState(15000) // square feet
  const [leaseRate, setLeaseRate] = useState(12) // $ per sq ft per year (NJ industrial)
  const [utilityRate, setUtilityRate] = useState(8) // $ per sq ft per year
  const [insuranceRate, setInsuranceRate] = useState(2.5) // $ per sq ft per year
  const [maintenanceRate, setMaintenanceRate] = useState(3) // $ per sq ft per year
  
  // Staffing (Northern NJ rates with benefits)
  const [seniorEngineers, setSeniorEngineers] = useState(4) // Senior engineers/PhDs
  const [seniorEngineerSalary, setSeniorEngineerSalary] = useState(165) // thousands including benefits
  const [midEngineers, setMidEngineers] = useState(6) // Mid-level engineers
  const [midEngineerSalary, setMidEngineerSalary] = useState(135) // thousands including benefits
  const [technicians, setTechnicians] = useState(4) // Lab technicians/machinists
  const [technicianSalary, setTechnicianSalary] = useState(85) // thousands including benefits
  const [businessStaff, setBusinessStaff] = useState(3) // PM, business dev, admin
  const [businessStaffSalary, setBusinessStaffSalary] = useState(125) // thousands including benefits
  
  // Business Parameters
  const [avgContractSize, setAvgContractSize] = useState(850) // thousands
  const [contractsYear1, setContractsYear1] = useState(2)
  const [contractGrowthRate, setContractGrowthRate] = useState(75) // percentage year over year
  const [utilization, setUtilization] = useState(70) // percentage of billable time
  const [billableRate, setBillableRate] = useState(225) // $ per hour
  
  // Financing Parameters
  const [financingModel, setFinancingModel] = useState('mixed') // cash, loan, equity, mixed
  const [equityPercentage, setEquityPercentage] = useState(40) // if mixed financing
  const [loanInterestRate, setLoanInterestRate] = useState(8.5) // percentage
  const [loanTermYears, setLoanTermYears] = useState(7)
  
  // Risk Parameters
  const [marketRisk, setMarketRisk] = useState(15) // percentage
  const [competitionRisk, setCompetitionRisk] = useState(10) // percentage
  const [operationalRisk, setOperationalRisk] = useState(12) // percentage
  
  // Calculated values
  const [projections, setProjections] = useState({
    initialInvestment: 0,
    equipmentCosts: 0,
    testEquipmentCosts: 0,
    labEquipmentCosts: 0,
    annualSoftwareCosts: 0,
    annualFacilityCosts: 0,
    annualStaffingCosts: 0,
    annualOperatingCosts: 0,
    year1Revenue: 0,
    year2Revenue: 0,
    year3Revenue: 0,
    year5Revenue: 0,
    breakEvenMonth: 0,
    roi3Year: 0,
    roi5Year: 0,
    irr: 0,
    npv: 0,
    totalFinancing: 0,
    debtService: 0,
    riskAdjustedRevenue: 0
  })

  // Calculate projections whenever inputs change
  useEffect(() => {
    // Test equipment costs calculation
    const testEquipmentCosts = (
      highSpeedCameras * highSpeedCameraCost +
      dataAcqSystems * dataAcqSystemCost +
      accelerometers * accelerometerCost +
      envChambers * envChamberCost +
      oscilloscopes * oscilloscopeCost +
      testFixtures * testFixtureCost
    ) * 1000
    
    // Lab equipment costs calculation
    const labEquipmentCosts = (
      workstations * workstationCost +
      precisionTools * precisionToolCost +
      safetyEquipment * safetyEquipmentCost +
      cmms * cmmCost +
      labBenches * labBenchCost +
      storageSystemsCost
    ) * 1000
    
    // Major equipment costs
    const majorEquipmentCosts = (cncMachine + metalPrinter + gpuCluster) * 1000
    
    // Total equipment costs
    const equipmentCosts = majorEquipmentCosts + testEquipmentCosts + labEquipmentCosts
    
    // Annual software costs
    const annualSoftwareCosts = (
      abaqusSeats * abaqusCostPerSeat +
      matlabSeats * matlabCostPerSeat +
      cadSeats * cadCostPerSeat +
      cloudCompute
    ) * 1000
    
    // Annual facility costs
    const annualFacilityCosts = facilitySize * (leaseRate + utilityRate + insuranceRate + maintenanceRate)
    
    // Annual staffing costs
    const annualStaffingCosts = (
      seniorEngineers * seniorEngineerSalary +
      midEngineers * midEngineerSalary +
      technicians * technicianSalary +
      businessStaff * businessStaffSalary
    ) * 1000
    
    // Working capital and setup costs
    const workingCapital = annualStaffingCosts * 0.25 // 3 months operating capital
    const setupCosts = 150000 // Legal, permits, initial marketing, etc.
    
    const initialInvestment = equipmentCosts + workingCapital + setupCosts
    
    // Revenue calculations
    const year1Revenue = avgContractSize * 1000 * contractsYear1
    const year2Revenue = year1Revenue * (1 + contractGrowthRate / 100)
    const year3Revenue = year2Revenue * (1 + contractGrowthRate / 100)
    const year5Revenue = year3Revenue * Math.pow(1 + contractGrowthRate / 100, 2)
    
    // Additional revenue from hourly consulting
    const totalEngineers = seniorEngineers + midEngineers
    const annualHours = totalEngineers * 2080 * (utilization / 100) // 2080 hours per year
    const hourlyRevenue = annualHours * billableRate
    
    const totalYear1Revenue = year1Revenue + hourlyRevenue
    const totalYear2Revenue = year2Revenue + hourlyRevenue * 1.3
    const totalYear3Revenue = year3Revenue + hourlyRevenue * 1.6
    const totalYear5Revenue = year5Revenue + hourlyRevenue * 2.2
    
    // Operating costs
    const annualOperatingCosts = annualSoftwareCosts + annualFacilityCosts + annualStaffingCosts + 
                                (equipmentCosts * 0.08) // 8% maintenance on equipment
    
    // Financing calculations
    let totalFinancing = 0
    let debtService = 0
    
    if (financingModel === 'loan' || financingModel === 'mixed') {
      const loanAmount = financingModel === 'loan' ? initialInvestment : 
                        initialInvestment * (1 - equityPercentage / 100)
      const monthlyRate = loanInterestRate / 100 / 12
      const numPayments = loanTermYears * 12
      debtService = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                   (Math.pow(1 + monthlyRate, numPayments) - 1) * 12
      totalFinancing = loanAmount
    }
    
    // Break-even calculation
    const monthlyRevenue = totalYear1Revenue / 12
    const monthlyOperatingCosts = (annualOperatingCosts + debtService) / 12
    const breakEvenMonth = monthlyOperatingCosts > 0 ? 
      Math.ceil(initialInvestment / (monthlyRevenue - monthlyOperatingCosts)) : 0
    
    // ROI calculations
    const year3NetProfit = (totalYear1Revenue + totalYear2Revenue + totalYear3Revenue) - 
                          (annualOperatingCosts * 3 + debtService * 3)
    const year5NetProfit = (totalYear1Revenue + totalYear2Revenue + totalYear3Revenue + 
                          totalYear5Revenue * 2) - (annualOperatingCosts * 5 + debtService * 5)
    
    const roi3Year = ((year3NetProfit - initialInvestment) / initialInvestment) * 100
    const roi5Year = ((year5NetProfit - initialInvestment) / initialInvestment) * 100
    
    // Risk adjustment
    const totalRisk = marketRisk + competitionRisk + operationalRisk
    const riskAdjustedRevenue = totalYear1Revenue * (1 - totalRisk / 100)
    
    // NPV calculation (10% discount rate)
    const discountRate = 0.10
    const cashFlows = [
      totalYear1Revenue - annualOperatingCosts - debtService,
      totalYear2Revenue - annualOperatingCosts - debtService,
      totalYear3Revenue - annualOperatingCosts - debtService,
      totalYear5Revenue - annualOperatingCosts - debtService,
      totalYear5Revenue - annualOperatingCosts - debtService
    ]
    
    const npv = -initialInvestment + cashFlows.reduce((sum, cf, i) => 
      sum + cf / Math.pow(1 + discountRate, i + 1), 0)
    
    // IRR approximation (simplified)
    const irr = ((year3NetProfit / initialInvestment) ** (1/3) - 1) * 100

    setProjections({
      initialInvestment,
      equipmentCosts,
      testEquipmentCosts,
      labEquipmentCosts,
      annualSoftwareCosts,
      annualFacilityCosts,
      annualStaffingCosts,
      annualOperatingCosts,
      year1Revenue: totalYear1Revenue,
      year2Revenue: totalYear2Revenue,
      year3Revenue: totalYear3Revenue,
      year5Revenue: totalYear5Revenue,
      breakEvenMonth,
      roi3Year,
      roi5Year,
      irr,
      npv,
      totalFinancing,
      debtService,
      riskAdjustedRevenue
    })
  }, [cncMachine, metalPrinter, gpuCluster, 
      highSpeedCameras, highSpeedCameraCost, dataAcqSystems, dataAcqSystemCost,
      accelerometers, accelerometerCost, envChambers, envChamberCost,
      oscilloscopes, oscilloscopeCost, testFixtures, testFixtureCost,
      workstations, workstationCost, precisionTools, precisionToolCost,
      safetyEquipment, safetyEquipmentCost, cmms, cmmCost, labBenches, labBenchCost,
      storageSystemsCost, abaqusSeats, abaqusCostPerSeat, matlabSeats, matlabCostPerSeat, 
      cadSeats, cadCostPerSeat, cloudCompute, facilitySize, leaseRate, 
      utilityRate, insuranceRate, maintenanceRate, seniorEngineers, 
      seniorEngineerSalary, midEngineers, midEngineerSalary, technicians, 
      technicianSalary, businessStaff, businessStaffSalary, avgContractSize, 
      contractsYear1, contractGrowthRate, utilization, billableRate,
      financingModel, equityPercentage, loanInterestRate, loanTermYears,
      marketRisk, competitionRisk, operationalRisk])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Custom slider styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            cursor: pointer;
          }
          input[type="range"]::-webkit-slider-track {
            background: currentColor;
            height: 8px;
            border-radius: 4px;
          }
          input[type="range"]::-moz-range-track {
            background: currentColor;
            height: 8px;
            border-radius: 4px;
            border: none;
          }
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #ffffff;
            border: 2px solid currentColor;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease;
          }
          input[type="range"]::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #ffffff;
            border: 2px solid currentColor;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease;
          }
          input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          input[type="range"]::-moz-range-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          input[type="range"]:focus {
            outline: none;
          }
          input[type="range"]:focus::-webkit-slider-thumb {
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
          }
          input[type="range"]:focus::-moz-range-thumb {
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
          }
        `
      }} />

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
              <Link href="/facility" className="text-dark-600 hover:text-primary-600 font-medium">Facility</Link>
              <Link href="/business-plan" className="text-primary-600 font-medium">Business Plan</Link>
              <Link href="/#contact" className="text-dark-600 hover:text-primary-600 font-medium">Contact</Link>
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
              Comprehensive Business Plan
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Strategic roadmap for physics-centric digital engineering excellence with detailed financial modeling, 
              market analysis, risk assessment, and growth strategies for the defense technology sector.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 mb-8">Executive Summary</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Mission Statement</h3>
                <p className="text-blue-800">
                  Transform defense engineering through physics-based digital solutions that deliver measurable improvements 
                  in system performance, cost reduction, and development cycle time.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4">Value Proposition</h3>
                <p className="text-green-800">
                  Authoritative physics-based models combined with proven quantitative methods (DOE, MODA, FMEA) 
                  to solve critical ballistic systems challenges for DEVCOM AC and prime contractors.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Financial Highlights</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">$5.2M</div>
                  <div className="text-sm text-dark-600">Initial Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$1.7M</div>
                  <div className="text-sm text-dark-600">Year 1 Revenue Target</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">18mo</div>
                  <div className="text-sm text-dark-600">Break-Even Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">285%</div>
                  <div className="text-sm text-dark-600">5-Year ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis & Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Market Analysis & Opportunities</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-dark-900 mb-4">Total Addressable Market</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">$2.8B</div>
                <p className="text-dark-600 text-sm mb-4">
                  Defense modeling & simulation market growing at 5.1% CAGR through 2028
                </p>
                <ul className="text-sm text-dark-600 space-y-1">
                  <li>• DEVCOM AC R&D budget: $400M annually</li>
                  <li>• PEO Missiles & Space: $1.2B annually</li>
                  <li>• Prime contractor M&S: $1.2B annually</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-dark-900 mb-4">Serviceable Market</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$180M</div>
                <p className="text-dark-600 text-sm mb-4">
                  Physics-based ballistic systems modeling and digital engineering services
                </p>
                <ul className="text-sm text-dark-600 space-y-1">
                  <li>• Precision fires: $85M</li>
                  <li>• Ballistic characterization: $55M</li>
                  <li>• Digital thread consulting: $40M</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-dark-900 mb-4">Market Share Target</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">3.5%</div>
                <p className="text-dark-600 text-sm mb-4">
                  Achievable market penetration within 5 years based on competitive analysis
                </p>
                <ul className="text-sm text-dark-600 space-y-1">
                  <li>• Year 1: 0.5% ($900K revenue)</li>
                  <li>• Year 3: 1.8% ($3.2M revenue)</li>
                  <li>• Year 5: 3.5% ($6.3M revenue)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Key Market Drivers</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-800 mb-3">🚀 Growth Opportunities</h4>
                  <ul className="text-dark-600 space-y-2">
                    <li>• Hypersonic weapons development surge</li>
                    <li>• AI/ML integration in defense systems</li>
                    <li>• Digital transformation mandates</li>
                    <li>• Near-peer competition driving innovation</li>
                    <li>• Supply chain resilience requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-3">🎯 Market Gaps</h4>
                  <ul className="text-dark-600 space-y-2">
                    <li>• Physics-ignorant MBSE implementations</li>
                    <li>• Lack of quantitative rigor in DE</li>
                    <li>• Disconnect between models and reality</li>
                    <li>• Over-reliance on legacy simulation tools</li>
                    <li>• Insufficient ballistic characterization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Strategy */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Financing Strategy & Models</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Recommended: Mixed Financing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Equipment Loan (60%)</span>
                    <span className="text-xl font-bold text-blue-800">$3.1M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Equity Investment (40%)</span>
                    <span className="text-xl font-bold text-blue-800">$2.1M</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total Funding</span>
                      <span className="text-2xl font-bold text-blue-900">$5.2M</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded">
                  <h4 className="font-bold text-blue-900 mb-2">Benefits</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Lower cost of capital</li>
                    <li>• Tax advantages on equipment</li>
                    <li>• Retained ownership control</li>
                    <li>• Flexible repayment terms</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-green-900 mb-3">SBA Loans</h4>
                  <p className="text-green-800 text-sm mb-3">
                    7(a) program for working capital and equipment up to $5M at prime + 2.75%
                  </p>
                  <div className="text-sm text-green-700">
                    ✓ 85% SBA guarantee • ✓ 10-year terms • ✓ Lower down payment
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-900 mb-3">Defense Innovation Unit (DIU)</h4>
                  <p className="text-purple-800 text-sm mb-3">
                    SBIR Phase III pathway for dual-use technologies with defense applications
                  </p>
                  <div className="text-sm text-purple-700">
                    ✓ Non-dilutive funding • ✓ Customer validation • ✓ Scale opportunity
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-orange-900 mb-3">Strategic Investors</h4>
                  <p className="text-orange-800 text-sm mb-3">
                    Defense primes seeking digital engineering capabilities and innovation partners
                  </p>
                  <div className="text-sm text-orange-700">
                    ✓ Industry expertise • ✓ Customer access • ✓ Technology validation
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Alternative Financing Scenarios</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-dark-900 mb-4">Conservative (All Cash)</h4>
                  <div className="space-y-2 text-sm">
                    <div>Initial Investment: $5.2M</div>
                    <div>Annual Debt Service: $0</div>
                    <div>5-Year ROI: 285%</div>
                    <div className="text-green-600 font-semibold">Risk: Low</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-4">Optimal (Mixed)</h4>
                  <div className="space-y-2 text-sm">
                    <div>Initial Investment: $5.2M</div>
                    <div>Annual Debt Service: $485K</div>
                    <div>5-Year ROI: 358%</div>
                    <div className="text-blue-600 font-semibold">Risk: Moderate</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-dark-900 mb-4">Aggressive (Equity)</h4>
                  <div className="space-y-2 text-sm">
                    <div>Initial Investment: $7.5M</div>
                    <div>Equity Dilution: 35%</div>
                    <div>5-Year ROI: 425%</div>
                    <div className="text-orange-600 font-semibold">Risk: High</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Strategy & Scaling */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Growth Strategy & Scaling Plan</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">Phase 1: Foundation</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">Months 1-12</div>
                <p className="text-sm text-dark-600">
                  Establish core capabilities, hire key staff, secure initial contracts with DEVCOM AC
                </p>
                <div className="mt-4 text-sm">
                  <div className="font-semibold text-green-600">Target: $1.7M revenue</div>
                  <div className="text-dark-500">2-3 major contracts</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">Phase 2: Lab Launch</h3>
                <div className="text-2xl font-bold text-cyan-600 mb-2">Months 12-24</div>
                <p className="text-sm text-dark-600">
                  Activate prototype facility, expand to PEO Missiles & Space, develop IP portfolio
                </p>
                <div className="mt-4 text-sm">
                  <div className="font-semibold text-green-600">Target: $3.2M revenue</div>
                  <div className="text-dark-500">4-6 major contracts</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">Phase 3: Scale</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">Months 24-36</div>
                <p className="text-sm text-dark-600">
                  Team expansion, prime contractor partnerships, multi-program support
                </p>
                <div className="mt-4 text-sm">
                  <div className="font-semibold text-green-600">Target: $5.1M revenue</div>
                  <div className="text-dark-500">8-12 major contracts</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">Phase 4: Domination</h3>
                <div className="text-2xl font-bold text-purple-600 mb-2">Years 3-5</div>
                <p className="text-sm text-dark-600">
                  Market leadership, acquisition opportunities, international expansion
                </p>
                <div className="mt-4 text-sm">
                  <div className="font-semibold text-green-600">Target: $8.5M revenue</div>
                  <div className="text-dark-500">15+ major contracts</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Revenue Growth Drivers</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-blue-800 mb-4">Organic Growth (75%)</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 font-bold text-xs">1</span>
                      </div>
                      <div>
                        <div className="font-semibold">Contract Size Growth</div>
                        <div className="text-sm text-dark-600">$850K &rarr; $1.5M average contract value</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 font-bold text-xs">2</span>
                      </div>
                      <div>
                        <div className="font-semibold">Contract Volume</div>
                        <div className="text-sm text-dark-600">2 &rarr; 12 contracts annually</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 font-bold text-xs">3</span>
                      </div>
                      <div>
                        <div className="font-semibold">Hourly Consulting</div>
                        <div className="text-sm text-dark-600">$1.2M &rarr; $3.8M annually</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 font-bold text-xs">4</span>
                      </div>
                      <div>
                        <div className="font-semibold">Lab Services</div>
                        <div className="text-sm text-dark-600">$0 &rarr; $2.5M prototype testing revenue</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-4">Strategic Growth (25%)</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-600 font-bold text-xs">1</span>
                      </div>
                      <div>
                        <div className="font-semibold">Prime Partnerships</div>
                        <div className="text-sm text-dark-600">Raytheon, Northrop, Boeing subcontracts</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-600 font-bold text-xs">2</span>
                      </div>
                      <div>
                        <div className="font-semibold">IP Licensing</div>
                        <div className="text-sm text-dark-600">Proprietary ballistic models and tools</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-600 font-bold text-xs">3</span>
                      </div>
                      <div>
                        <div className="font-semibold">Software Products</div>
                        <div className="text-sm text-dark-600">Packaged simulation and analysis tools</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-600 font-bold text-xs">4</span>
                      </div>
                      <div>
                        <div className="font-semibold">International Markets</div>
                        <div className="text-sm text-dark-600">NATO allies, Five Eyes partners</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment & Mitigation */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Risk Assessment & Mitigation</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  Market Risks (15%)
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-red-800">Defense Budget Cuts</div>
                    <div className="text-sm text-red-700 mb-2">Congressional funding reductions impact R&D spending</div>
                    <div className="text-xs text-red-600">
                      <strong>Mitigation:</strong> Diversify across multiple programs, focus on high-priority capabilities
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-red-800">Program Cancellations</div>
                    <div className="text-sm text-red-700 mb-2">Major defense programs face cancellation risk</div>
                    <div className="text-xs text-red-600">
                      <strong>Mitigation:</strong> Multi-program strategy, commercial dual-use applications
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-900 mb-4">Competition Risks (10%)</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-orange-800">Incumbent Advantages</div>
                    <div className="text-sm text-orange-700 mb-2">Established players with existing relationships</div>
                    <div className="text-xs text-orange-600">
                      <strong>Mitigation:</strong> Demonstrable superior results, disruptive pricing models
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-800">New Entrants</div>
                    <div className="text-sm text-orange-700 mb-2">Tech giants entering defense market</div>
                    <div className="text-xs text-orange-600">
                      <strong>Mitigation:</strong> Deep domain expertise, specialized capabilities
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-900 mb-4">Operational Risks (12%)</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-yellow-800">Key Personnel</div>
                    <div className="text-sm text-yellow-700 mb-2">Dependence on specialized talent</div>
                    <div className="text-xs text-yellow-600">
                      <strong>Mitigation:</strong> Competitive compensation, equity participation, knowledge transfer
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-yellow-800">Technology Obsolescence</div>
                    <div className="text-sm text-yellow-700 mb-2">Rapid advancement in simulation technology</div>
                    <div className="text-xs text-yellow-600">
                      <strong>Mitigation:</strong> Continuous R&D investment, university partnerships
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Risk Mitigation Strategies</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-800 mb-4">Financial Safeguards</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• 6-month operating cash reserve</li>
                    <li>• Diversified customer base (no {'>'}30% concentration)</li>
                    <li>• Flexible cost structure (variable vs fixed)</li>
                    <li>• Performance-based contract terms</li>
                    <li>• Equipment insurance and warranties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-4">Strategic Safeguards</h4>
                  <ul className="space-y-2 text-green-700">
                    <li>• Multiple prime contractor relationships</li>
                    <li>• International market diversification</li>
                    <li>• Intellectual property protection</li>
                    <li>• Technology refresh roadmap</li>
                    <li>• Strategic advisory board</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Competitive Analysis</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-900 mb-4">Legacy Incumbents</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-red-800">Major Players</div>
                    <div className="text-red-700">SAIC, Booz Allen, CACI, MITRE</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-red-800">Strengths</div>
                    <div className="text-red-700">Established relationships, large contracts, security clearances</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-red-800">Weaknesses</div>
                    <div className="text-red-700">Outdated methodologies, physics-ignorant MBSE, high overhead</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-orange-900 mb-4">Engineering Firms</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-orange-800">Major Players</div>
                    <div className="text-orange-700">ANSYS, Dassault, Siemens PLM</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-orange-800">Strengths</div>
                    <div className="text-orange-700">Software tools, technical expertise, industry presence</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-orange-800">Weaknesses</div>
                    <div className="text-orange-700">Generic solutions, limited defense focus, consultant-heavy</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500">
                <h3 className="text-xl font-bold text-green-900 mb-4">High G Solutions</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-green-800">Unique Position</div>
                    <div className="text-green-700">Physics-centric, quantitative rigor, ballistic systems expertise</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-green-800">Competitive Advantages</div>
                    <div className="text-green-700">Proven methods, prototype facility, rapid iteration capability</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-green-800">Differentiation</div>
                    <div className="text-green-700">Measurable outcomes, physics-based validation, cost efficiency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Competitive Positioning Strategy</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-blue-800 mb-4">Technical Differentiation</h4>
                  <ul className="space-y-2 text-dark-600">
                    <li>• Physics-first approach vs. MBSE diagrams</li>
                    <li>• Quantitative validation using DOE/MODA</li>
                    <li>• Ballistic systems domain expertise</li>
                    <li>• Prototype facility for rapid validation</li>
                    <li>• Cost-effective simulation alternatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-4">Market Positioning</h4>
                  <ul className="space-y-2 text-dark-600">
                    <li>• Premium expertise, competitive pricing</li>
                    <li>• Faster time-to-insight than incumbents</li>
                    <li>• Specialized vs. generalist approach</li>
                    <li>• Results-driven vs. process-driven</li>
                    <li>• Innovation partner vs. vendor relationship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Strategy */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Technology Strategy & Roadmap</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-900 mb-6">Core Technology Stack</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Simulation & Analysis</span>
                    <span className="text-cyan-800">ABAQUS, MATLAB, Custom Physics Models</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">High-Performance Computing</span>
                    <span className="text-cyan-800">NVIDIA A100 GPU Clusters, Cloud Bursting</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Data Analytics</span>
                    <span className="text-cyan-800">Python, R, Specialized DOE Tools</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">CAD/Design</span>
                    <span className="text-cyan-800">SolidWorks, NX, Parametric Modeling</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-900 mb-3">Year 1-2: Foundation</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Core simulation infrastructure deployment</li>
                    <li>• Ballistic characterization capabilities</li>
                    <li>• Initial physics model library</li>
                    <li>• Customer-specific tool development</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-indigo-900 mb-3">Year 3-4: Expansion</h4>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• AI/ML integration for optimization</li>
                    <li>• Automated testing workflows</li>
                    <li>• Multi-physics coupling capabilities</li>
                    <li>• Real-time simulation platforms</li>
                  </ul>
                </div>

                <div className="bg-violet-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-violet-900 mb-3">Year 5+: Innovation</h4>
                  <ul className="text-sm text-violet-800 space-y-1">
                    <li>• Quantum computing integration</li>
                    <li>• Digital twin ecosystems</li>
                    <li>• Autonomous experimental design</li>
                    <li>• Next-gen visualization platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Intellectual Property Strategy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-dark-900 mb-4">Proprietary Models</h4>
                  <div className="space-y-2 text-sm text-dark-600">
                    <div>• Ballistic trajectory optimization</div>
                    <div>• Multi-phase flow simulation</div>
                    <div>• Structural dynamics under extreme loads</div>
                    <div>• Thermal protection systems</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-dark-900 mb-4">Software Tools</h4>
                  <div className="space-y-2 text-sm text-dark-600">
                    <div>• Physics-based design optimization</div>
                    <div>• Automated test planning</div>
                    <div>• Real-time data analysis</div>
                    <div>• Uncertainty quantification</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-dark-900 mb-4">Methodologies</h4>
                  <div className="space-y-2 text-sm text-dark-600">
                    <div>• Rapid prototyping workflows</div>
                    <div>• Validated simulation processes</div>
                    <div>• Statistical design methods</div>
                    <div>• Performance characterization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Implementation Timeline</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Phase 1: Foundation (Months 1-12)</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-bold text-blue-800 mb-3">Q1: Startup</h4>
                    <ul className="text-sm text-dark-600 space-y-1">
                      <li>• Incorporate business, establish legal structure</li>
                      <li>• Secure initial funding ($2M equity/loan)</li>
                      <li>• Hire 2 senior engineers, 1 business dev</li>
                      <li>• Establish temporary workspace</li>
                      <li>• Begin DEVCOM AC relationship building</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-3">Q2-Q3: Capability</h4>
                    <ul className="text-sm text-dark-600 space-y-1">
                      <li>• Secure facility lease, begin buildout</li>
                      <li>• Order and install major equipment</li>
                      <li>• Hire 3 mid-level engineers, 2 technicians</li>
                      <li>• Software licensing and IT infrastructure</li>
                      <li>• First contract award from DEVCOM AC</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 mb-3">Q4: Execution</h4>
                    <ul className="text-sm text-dark-600 space-y-1">
                      <li>• Facility operational, equipment commissioned</li>
                      <li>• Complete first major deliverable</li>
                      <li>• Establish quality management system</li>
                      <li>• Develop IP portfolio foundation</li>
                      <li>• Secure second major contract</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-900 mb-6">Phase 2: Lab Launch (Months 12-24)</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-bold text-cyan-800 mb-3">Q5-Q6: Expansion</h4>
                    <ul className="text-sm text-dark-600 space-y-1">
                      <li>• Full prototype facility activation</li>
                      <li>• Hire 2 more engineers, expand admin</li>
                      <li>• PEO Missiles & Space contract pursuit</li>
                      <li>• Establish prime contractor relationships</li>
                      <li>• Launch IP licensing program</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-800 mb-3">Q7: Growth</h4>
                    <ul className="text-sm text-dark-600 space-y-1">
                      <li>• Multi-program contract execution</li>
                      <li>• Technology demonstration events</li>
                      <li>• International market exploration</li>
                      <li>• Strategic partnership development</li>
                      <li>• Advanced capabilities investment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-cyan-800 mb-3">Q8: Scale</h4>
                    <ul className="text-sm text-dark-600 space-y-1">
                      <li>• $3M+ annual revenue run rate</li>
                      <li>• Team size 15+ professionals</li>
                      <li>• Multiple concurrent programs</li>
                      <li>• Industry recognition and awards</li>
                      <li>• Series A funding consideration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Phase 3-4: Scale & Domination (Years 3-5)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-green-800 mb-4">Strategic Milestones</h4>
                    <ul className="space-y-2 text-dark-600">
                      <li>• Market leadership in ballistic systems modeling</li>
                      <li>• 25+ person technical team</li>
                      <li>• $8M+ annual revenue</li>
                      <li>• International market presence</li>
                      <li>• Acquisition opportunities evaluation</li>
                      <li>• IPO preparation or strategic exit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-4">Technology Leadership</h4>
                    <ul className="space-y-2 text-dark-600">
                      <li>• Industry-standard physics models</li>
                      <li>• AI-enhanced simulation platforms</li>
                      <li>• Real-time digital twin capabilities</li>
                      <li>• Autonomous testing systems</li>
                      <li>• Next-generation visualization tools</li>
                      <li>• Quantum computing applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management & Operations */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Management Strategy & Operations</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6">Leadership Team Structure</h3>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <div className="font-bold text-indigo-800">CEO/Founder - Jason Foultz</div>
                    <div className="text-sm text-indigo-700">Strategic direction, customer relationships, technical oversight</div>
                  </div>
                  <div className="border-b pb-3">
                    <div className="font-bold text-indigo-800">CTO (Hire Month 6)</div>
                    <div className="text-sm text-indigo-700">Technology roadmap, R&D leadership, IP strategy</div>
                  </div>
                  <div className="border-b pb-3">
                    <div className="font-bold text-indigo-800">VP Engineering (Hire Month 12)</div>
                    <div className="text-sm text-indigo-700">Project execution, quality systems, technical delivery</div>
                  </div>
                  <div>
                    <div className="font-bold text-indigo-800">VP Business Dev (Hire Month 18)</div>
                    <div className="text-sm text-indigo-700">Sales growth, partnership development, market expansion</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-orange-900 mb-3">Talent Acquisition Strategy</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Target top 10% defense engineering talent</li>
                    <li>• Competitive compensation + equity packages</li>
                    <li>• University partnerships for pipeline</li>
                    <li>• Industry conference presence and recruiting</li>
                    <li>• Employee referral incentive program</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-green-900 mb-3">Culture & Values</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Physics-first decision making</li>
                    <li>• Quantitative rigor in all analysis</li>
                    <li>• Rapid iteration and learning</li>
                    <li>• Customer mission success focus</li>
                    <li>• Technical excellence and innovation</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">Quality Management</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• ISO 9001 certification path</li>
                    <li>• CMMI Level 3 process framework</li>
                    <li>• Six Sigma methodology adoption</li>
                    <li>• Continuous improvement culture</li>
                    <li>• Customer satisfaction metrics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Exit Strategy Considerations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-purple-900 mb-4">Strategic Acquisition</h4>
                  <div className="space-y-2 text-sm text-dark-600">
                    <div className="font-semibold">Potential Acquirers:</div>
                    <div>• Defense primes (RTX, LMT, NOC)</div>
                    <div>• Engineering firms (ANSYS, Siemens)</div>
                    <div>• PE firms with defense focus</div>
                    <div className="font-semibold mt-3">Timeline: Years 5-7</div>
                    <div className="font-semibold">Valuation: 8-15x revenue</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-4">Management Buyout</h4>
                  <div className="space-y-2 text-sm text-dark-600">
                    <div className="font-semibold">Structure:</div>
                    <div>• Employee stock ownership plan</div>
                    <div>• Gradual founder transition</div>
                    <div>• Maintain independence</div>
                    <div className="font-semibold mt-3">Timeline: Years 7-10</div>
                    <div className="font-semibold">Benefits: Cultural continuity</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-4">Public Offering</h4>
                  <div className="space-y-2 text-sm text-dark-600">
                    <div className="font-semibold">Requirements:</div>
                    <div>• $50M+ annual revenue</div>
                    <div>• Consistent profitability</div>
                    <div>• Scalable business model</div>
                    <div className="font-semibold mt-3">Timeline: Years 8-12</div>
                    <div className="font-semibold">Valuation: 12-25x revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Interactive Financial Model</h2>
          
          {/* Model Controls */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Equipment & Infrastructure */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-bold text-dark-900 flex items-center">
                      <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                      Equipment & Infrastructure
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Core manufacturing and testing capabilities</p>
                  </div>
                  
                  {/* Major Equipment */}
                  <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-all duration-300 border border-blue-200 hover:shadow-lg">
                    <h4 className="font-bold text-blue-900 mb-4">Major Equipment</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">5-Axis CNC Machine</label>
                          <span className="text-sm font-bold text-blue-800 bg-blue-200 px-2 py-1 rounded transition-all duration-200 hover:bg-blue-300">{formatCurrency(cncMachine * 1000)}</span>
                        </div>
                        <input
                          type="range"
                          min="800"
                          max="2500"
                          step="50"
                          value={cncMachine}
                          onChange={(e) => setCncMachine(Number(e.target.value))}
                          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer text-blue-600"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>$800K</span>
                          <span>$2.5M</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Metal 3D Printer</label>
                          <span className="text-sm font-bold text-blue-800 bg-blue-200 px-2 py-1 rounded transition-all duration-200 hover:bg-blue-300">{formatCurrency(metalPrinter * 1000)}</span>
                        </div>
                        <input
                          type="range"
                          min="1500"
                          max="4000"
                          step="100"
                          value={metalPrinter}
                          onChange={(e) => setMetalPrinter(Number(e.target.value))}
                          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer text-blue-600"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">GPU Cluster</label>
                          <span className="text-sm font-bold text-blue-800 bg-blue-200 px-2 py-1 rounded transition-all duration-200 hover:bg-blue-300">{formatCurrency(gpuCluster * 1000)}</span>
                        </div>
                        <input
                          type="range"
                          min="200"
                          max="800"
                          step="25"
                          value={gpuCluster}
                          onChange={(e) => setGpuCluster(Number(e.target.value))}
                          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer text-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Facility */}
                  <div className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-all duration-300 border border-purple-200 hover:shadow-lg">
                    <h4 className="font-bold text-purple-900 mb-4">Facility (Northern NJ)</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Size</label>
                          <span className="text-sm font-bold text-purple-800 bg-purple-200 px-2 py-1 rounded transition-all duration-200 hover:bg-purple-300">{facilitySize.toLocaleString()} sq ft</span>
                        </div>
                        <input
                          type="range"
                          min="8000"
                          max="30000"
                          step="1000"
                          value={facilitySize}
                          onChange={(e) => setFacilitySize(Number(e.target.value))}
                          className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer text-purple-600"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Lease Rate</label>
                          <span className="text-sm font-bold text-purple-800 bg-purple-200 px-2 py-1 rounded transition-all duration-200 hover:bg-purple-300">${leaseRate}/sq ft/year</span>
                        </div>
                        <input
                          type="range"
                          min="8"
                          max="18"
                          step="0.5"
                          value={leaseRate}
                          onChange={(e) => setLeaseRate(Number(e.target.value))}
                          className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer text-purple-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Test Equipment Summary */}
                  <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-all duration-300 border border-red-200 hover:shadow-lg">
                    <h4 className="font-bold text-red-900 mb-3">Test Equipment</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>High-Speed Cameras ({highSpeedCameras})</span>
                        <span className="font-semibold bg-red-200 px-2 py-1 rounded text-xs transition-all duration-200 hover:bg-red-300">{formatCurrency(highSpeedCameras * highSpeedCameraCost * 1000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Data Acquisition ({dataAcqSystems})</span>
                        <span className="font-semibold bg-red-200 px-2 py-1 rounded text-xs transition-all duration-200 hover:bg-red-300">{formatCurrency(dataAcqSystems * dataAcqSystemCost * 1000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sensors & Equipment</span>
                        <span className="font-semibold bg-red-200 px-2 py-1 rounded text-xs transition-all duration-200 hover:bg-red-300">{formatCurrency((accelerometers * accelerometerCost + envChambers * envChamberCost + oscilloscopes * oscilloscopeCost + testFixtures * testFixtureCost) * 1000)}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total Test Equipment</span>
                        <span className="bg-red-300 px-2 py-1 rounded text-red-900">{formatCurrency(projections.testEquipmentCosts)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Parameters */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-bold text-dark-900 flex items-center">
                      <DollarSign className="h-6 w-6 text-green-600 mr-3" />
                      Business Model & Growth
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Revenue streams and scaling parameters</p>
                  </div>

                  {/* Revenue Model */}
                  <div className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-all duration-300 border border-green-200 hover:shadow-lg">
                    <h4 className="font-bold text-green-900 mb-4">Revenue Streams</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Avg Contract Size</label>
                          <span className="text-sm font-bold text-green-800">{formatCurrency(avgContractSize * 1000)}</span>
                        </div>
                        <input
                          type="range"
                          min="300"
                          max="2000"
                          step="50"
                          value={avgContractSize}
                          onChange={(e) => setAvgContractSize(Number(e.target.value))}
                          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Contracts Year 1</label>
                          <span className="text-sm font-bold text-green-800">{contractsYear1}</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="8"
                          step="1"
                          value={contractsYear1}
                          onChange={(e) => setContractsYear1(Number(e.target.value))}
                          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Contract Growth Rate</label>
                          <span className="text-sm font-bold text-green-800">{formatPercentage(contractGrowthRate)}</span>
                        </div>
                        <input
                          type="range"
                          min="25"
                          max="150"
                          step="5"
                          value={contractGrowthRate}
                          onChange={(e) => setContractGrowthRate(Number(e.target.value))}
                          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Billable Rate</label>
                          <span className="text-sm font-bold text-green-800">${billableRate}/hour</span>
                        </div>
                        <input
                          type="range"
                          min="175"
                          max="350"
                          step="10"
                          value={billableRate}
                          onChange={(e) => setBillableRate(Number(e.target.value))}
                          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Utilization Rate</label>
                          <span className="text-sm font-bold text-green-800">{formatPercentage(utilization)}</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="85"
                          step="2"
                          value={utilization}
                          onChange={(e) => setUtilization(Number(e.target.value))}
                          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Staffing */}
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-900 mb-4">Team & Talent (NJ Rates)</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Senior Engineers</label>
                          <span className="text-sm font-bold text-orange-800">{seniorEngineers} @ {formatCurrency(seniorEngineerSalary * 1000)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="range"
                            min="2"
                            max="10"
                            step="1"
                            value={seniorEngineers}
                            onChange={(e) => setSeniorEngineers(Number(e.target.value))}
                            className="h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <input
                            type="range"
                            min="140"
                            max="200"
                            step="5"
                            value={seniorEngineerSalary}
                            onChange={(e) => setSeniorEngineerSalary(Number(e.target.value))}
                            className="h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Mid Engineers</label>
                          <span className="text-sm font-bold text-orange-800">{midEngineers} @ {formatCurrency(midEngineerSalary * 1000)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="range"
                            min="2"
                            max="15"
                            step="1"
                            value={midEngineers}
                            onChange={(e) => setMidEngineers(Number(e.target.value))}
                            className="h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <input
                            type="range"
                            min="110"
                            max="160"
                            step="5"
                            value={midEngineerSalary}
                            onChange={(e) => setMidEngineerSalary(Number(e.target.value))}
                            className="h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Technicians</label>
                          <span className="text-sm font-bold text-orange-800">{technicians} @ {formatCurrency(technicianSalary * 1000)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="range"
                            min="2"
                            max="12"
                            step="1"
                            value={technicians}
                            onChange={(e) => setTechnicians(Number(e.target.value))}
                            className="h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <input
                            type="range"
                            min="70"
                            max="110"
                            step="5"
                            value={technicianSalary}
                            onChange={(e) => setTechnicianSalary(Number(e.target.value))}
                            className="h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Business Staff</label>
                          <span className="text-sm font-bold text-orange-800">{businessStaff} @ {formatCurrency(businessStaffSalary * 1000)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="range"
                            min="1"
                            max="8"
                            step="1"
                            value={businessStaff}
                            onChange={(e) => setBusinessStaff(Number(e.target.value))}
                            className="h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <input
                            type="range"
                            min="95"
                            max="160"
                            step="5"
                            value={businessStaffSalary}
                            onChange={(e) => setBusinessStaffSalary(Number(e.target.value))}
                            className="h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financing & Risk */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-bold text-dark-900 flex items-center">
                      <CreditCard className="h-6 w-6 text-indigo-600 mr-3" />
                      Financing & Risk Management
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">Capital structure and risk assessment</p>
                  </div>

                  {/* Financing Model */}
                  <div className="bg-indigo-50 p-4 rounded-lg hover:bg-indigo-100 transition-all duration-300 border border-indigo-200 hover:shadow-lg">
                    <h4 className="font-bold text-indigo-900 mb-4">Financing Strategy</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-dark-700 mb-2">Financing Type</label>
                        <select
                          value={financingModel}
                          onChange={(e) => setFinancingModel(e.target.value)}
                          className="w-full p-2 border border-indigo-300 rounded bg-white text-sm hover:border-indigo-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                        >
                          <option value="cash">All Cash</option>
                          <option value="loan">Equipment Loan</option>
                          <option value="equity">Equity Investment</option>
                          <option value="mixed">Mixed (Debt + Equity)</option>
                        </select>
                      </div>

                      {(financingModel === 'loan' || financingModel === 'mixed') && (
                        <>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <label className="text-sm font-semibold text-dark-700">Interest Rate</label>
                              <span className="text-sm font-bold text-indigo-800 bg-indigo-200 px-2 py-1 rounded transition-all duration-200 hover:bg-indigo-300">{formatPercentage(loanInterestRate)}</span>
                            </div>
                            <input
                              type="range"
                              min="5"
                              max="15"
                              step="0.25"
                              value={loanInterestRate}
                              onChange={(e) => setLoanInterestRate(Number(e.target.value))}
                              className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer text-indigo-600"
                            />
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <label className="text-sm font-semibold text-dark-700">Loan Term</label>
                              <span className="text-sm font-bold text-indigo-800 bg-indigo-200 px-2 py-1 rounded transition-all duration-200 hover:bg-indigo-300">{loanTermYears} years</span>
                            </div>
                            <input
                              type="range"
                              min="3"
                              max="10"
                              step="1"
                              value={loanTermYears}
                              onChange={(e) => setLoanTermYears(Number(e.target.value))}
                              className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer text-indigo-600"
                            />
                          </div>
                        </>
                      )}

                      {financingModel === 'mixed' && (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-dark-700">Equity Percentage</label>
                            <span className="text-sm font-bold text-indigo-800 bg-indigo-200 px-2 py-1 rounded transition-all duration-200 hover:bg-indigo-300">{formatPercentage(equityPercentage)}</span>
                          </div>
                          <input
                            type="range"
                            min="20"
                            max="80"
                            step="5"
                            value={equityPercentage}
                            onChange={(e) => setEquityPercentage(Number(e.target.value))}
                            className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer text-indigo-600"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Risk Assessment */}
                  <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-all duration-300 border border-red-200 hover:shadow-lg">
                    <h4 className="font-bold text-red-900 mb-4">Risk Assessment</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Market Risk</label>
                          <span className="text-sm font-bold text-red-800 bg-red-200 px-2 py-1 rounded transition-all duration-200 hover:bg-red-300">{formatPercentage(marketRisk)}</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="30"
                          step="1"
                          value={marketRisk}
                          onChange={(e) => setMarketRisk(Number(e.target.value))}
                          className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer text-red-600"
                        />
                        <p className="text-xs text-red-700 mt-1">Defense budget cuts, program cancellations</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Competition Risk</label>
                          <span className="text-sm font-bold text-red-800 bg-red-200 px-2 py-1 rounded transition-all duration-200 hover:bg-red-300">{formatPercentage(competitionRisk)}</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="25"
                          step="1"
                          value={competitionRisk}
                          onChange={(e) => setCompetitionRisk(Number(e.target.value))}
                          className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer text-red-600"
                        />
                        <p className="text-xs text-red-700 mt-1">New market entrants, pricing pressure</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-semibold text-dark-700">Operational Risk</label>
                          <span className="text-sm font-bold text-red-800 bg-red-200 px-2 py-1 rounded transition-all duration-200 hover:bg-red-300">{formatPercentage(operationalRisk)}</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="25"
                          step="1"
                          value={operationalRisk}
                          onChange={(e) => setOperationalRisk(Number(e.target.value))}
                          className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer text-red-600"
                        />
                        <p className="text-xs text-red-700 mt-1">Key personnel, technology obsolescence</p>
                      </div>

                      <div className="border-t pt-3 mt-3 bg-red-100 -mx-4 -mb-4 px-4 pb-4 rounded-b-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-red-900">Total Risk Discount</span>
                          <span className="text-lg font-bold text-red-900 bg-red-300 px-3 py-1 rounded">{formatPercentage(marketRisk + competitionRisk + operationalRisk)}</span>
                        </div>
                        <p className="text-xs text-red-700 mt-1">Applied to revenue projections for conservative planning</p>
                      </div>
                    </div>
                  </div>

                  {/* Software Costs */}
                  <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-3">Annual Software Costs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>ABAQUS ({abaqusSeats} seats)</span>
                        <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs transition-all duration-200 hover:bg-gray-300">{formatCurrency(abaqusSeats * abaqusCostPerSeat * 1000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>MATLAB ({matlabSeats} seats)</span>
                        <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs transition-all duration-200 hover:bg-gray-300">{formatCurrency(matlabSeats * matlabCostPerSeat * 1000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CAD Software ({cadSeats} seats)</span>
                        <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs transition-all duration-200 hover:bg-gray-300">{formatCurrency(cadSeats * cadCostPerSeat * 1000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cloud Computing</span>
                        <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs transition-all duration-200 hover:bg-gray-300">{formatCurrency(cloudCompute * 1000)}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total Software</span>
                        <span className="bg-gray-300 px-2 py-1 rounded text-gray-900">{formatCurrency(projections.annualSoftwareCosts)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">Financial Results Dashboard</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Initial Investment */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Initial Investment</h3>
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {formatCurrency(projections.initialInvestment)}
              </div>
              <div className="text-sm text-blue-700">
                Equipment: {formatCurrency(projections.equipmentCosts)}
              </div>
            </div>

            {/* Annual Operating Costs */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-bold text-orange-900 mb-2">Annual Operating</h3>
              <div className="text-3xl font-bold text-orange-800 mb-2">
                {formatCurrency(projections.annualOperatingCosts)}
              </div>
              <div className="text-sm text-orange-700">
                + Debt Service: {formatCurrency(projections.debtService)}
              </div>
            </div>

            {/* Break-Even */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-900 mb-2">Break-Even</h3>
              <div className="text-3xl font-bold text-green-800 mb-2">
                {projections.breakEvenMonth} mo
              </div>
              <div className="text-sm text-green-700">
                Year 1 Revenue: {formatCurrency(projections.year1Revenue)}
              </div>
            </div>

            {/* 5-Year ROI */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-bold text-purple-900 mb-2">5-Year ROI</h3>
              <div className="text-3xl font-bold text-purple-800 mb-2">
                {formatPercentage(projections.roi5Year)}
              </div>
              <div className="text-sm text-purple-700">
                IRR: {formatPercentage(projections.irr)}
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold text-dark-900 mb-4">Equipment Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-600">Major Equipment</span>
                  <span className="font-bold">{formatCurrency((cncMachine + metalPrinter + gpuCluster) * 1000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Test Equipment</span>
                  <span className="font-bold">{formatCurrency(projections.testEquipmentCosts)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Lab Equipment</span>
                  <span className="font-bold">{formatCurrency(projections.labEquipmentCosts)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total Equipment</span>
                    <span>{formatCurrency(projections.equipmentCosts)}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-3">
                  <div>• CNC: {formatCurrency(cncMachine * 1000)}</div>
                  <div>• 3D Printer: {formatCurrency(metalPrinter * 1000)}</div>
                  <div>• GPU Cluster: {formatCurrency(gpuCluster * 1000)}</div>
                  <div>• Cameras: {highSpeedCameras} × {formatCurrency(highSpeedCameraCost * 1000)}</div>
                  <div>• Workstations: {workstations} × {formatCurrency(workstationCost * 1000)}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold text-dark-900 mb-4">Operating Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-600">Software Licenses</span>
                  <span className="font-bold">{formatCurrency(projections.annualSoftwareCosts)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Facility Costs</span>
                  <span className="font-bold">{formatCurrency(projections.annualFacilityCosts)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Staffing</span>
                  <span className="font-bold">{formatCurrency(projections.annualStaffingCosts)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Equipment Maintenance</span>
                  <span className="font-bold">{formatCurrency(projections.equipmentCosts * 0.08)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total Annual</span>
                    <span>{formatCurrency(projections.annualOperatingCosts)}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-3">
                  <div>• ABAQUS: {abaqusSeats} × {formatCurrency(abaqusCostPerSeat * 1000)}</div>
                  <div>• Facility: {facilitySize.toLocaleString()} sq ft @ ${leaseRate + utilityRate + insuranceRate + maintenanceRate}/sq ft</div>
                  <div>• Staff: {seniorEngineers + midEngineers + technicians + businessStaff} people</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold text-dark-900 mb-4">Revenue Projections</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-600">Year 1</span>
                  <span className="font-bold">{formatCurrency(projections.year1Revenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Year 2</span>
                  <span className="font-bold">{formatCurrency(projections.year2Revenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Year 3</span>
                  <span className="font-bold">{formatCurrency(projections.year3Revenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Year 5</span>
                  <span className="font-bold">{formatCurrency(projections.year5Revenue)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-600">Risk Adjusted</span>
                    <span className="text-orange-600">{formatCurrency(projections.riskAdjustedRevenue)}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-3">
                  <div>• Contracts: {contractsYear1} @ {formatCurrency(avgContractSize * 1000)}</div>
                  <div>• Consulting: {formatCurrency((seniorEngineers + midEngineers) * 2080 * (utilization / 100) * billableRate)}/year</div>
                  <div>• Growth: {formatPercentage(contractGrowthRate)} per year</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold text-dark-900 mb-4">Financial Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-600">Initial Investment</span>
                  <span className="font-bold">{formatCurrency(projections.initialInvestment)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">3-Year ROI</span>
                  <span className="font-bold">{formatPercentage(projections.roi3Year)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">5-Year ROI</span>
                  <span className="font-bold">{formatPercentage(projections.roi5Year)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">IRR</span>
                  <span className="font-bold">{formatPercentage(projections.irr)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">NPV</span>
                  <span className="font-bold">{formatCurrency(projections.npv)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-600">Financing Needed</span>
                    <span className="text-blue-600">{formatCurrency(projections.totalFinancing)}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-3">
                  <div>• Break-even: {projections.breakEvenMonth} months</div>
                  <div>• Debt service: {formatCurrency(projections.debtService)}/year</div>
                  <div>• Risk factors: {formatPercentage(marketRisk + competitionRisk + operationalRisk)}</div>
                </div>
              </div>
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