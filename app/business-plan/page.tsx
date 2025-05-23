'use client'

import React, { useState, useEffect } from 'react'
import { Shield, TrendingUp, DollarSign, Users, Target, AlertCircle, ChevronLeft, Factory, Zap, Cpu, Wrench } from 'lucide-react'
import Link from 'next/link'

export default function BusinessPlanPage() {
  // State for financial model inputs
  const [contractSize, setContractSize] = useState(750) // in thousands
  const [contractsPerYear, setContractsPerYear] = useState(3)
  const [marketPenetration, setMarketPenetration] = useState(15) // percentage
  const [operatingMargin, setOperatingMargin] = useState(25) // percentage
  const [riskFactor, setRiskFactor] = useState(10) // percentage
  const [staffingLevel, setStaffingLevel] = useState(5) // number of staff
  const [yearlyGrowthRate, setYearlyGrowthRate] = useState(85) // percentage
  
  // New facility and equipment parameters
  const [facilityEnabled, setFacilityEnabled] = useState(true)
  const [facilitySize, setFacilitySize] = useState(15000) // square feet
  const [equipmentBudget, setEquipmentBudget] = useState(2500) // in thousands
  const [labStaffing, setLabStaffing] = useState(8) // additional lab staff
  const [facilityStartYear, setFacilityStartYear] = useState(2) // year to start facility

  // Calculated values
  const [projections, setProjections] = useState({
    year1Revenue: 0,
    year2Revenue: 0,
    year3Revenue: 0,
    year5Revenue: 0,
    totalCosts: 0,
    netProfit: 0,
    breakEvenMonth: 0,
    riskAdjustedRevenue: 0,
    facilityROI: 0,
    equipmentDepreciation: 0,
    facilityCosts: 0,
    labRevenue: 0
  })

  // Calculate projections whenever inputs change
  useEffect(() => {
    const baseRevenue = (contractSize * 1000) * contractsPerYear * (marketPenetration / 100)
    const year1 = baseRevenue
    const year2 = year1 * (1 + yearlyGrowthRate / 100)
    const year3 = year2 * (1 + yearlyGrowthRate / 100)
    const year5 = year3 * Math.pow(1 + yearlyGrowthRate / 100, 2)
    
    // Facility and equipment costs
    const facilityLeaseRate = 25 // per sq ft per year
    const facilityCosts = facilityEnabled ? facilitySize * facilityLeaseRate : 0
    const equipmentDepreciation = facilityEnabled ? (equipmentBudget * 1000) / 7 : 0 // 7-year depreciation
    const facilityUtilities = facilityEnabled ? facilitySize * 8 : 0 // $8/sq ft for utilities
    
    // Staffing costs
    const consultingStaff = staffingLevel * 150000 // $150k average per consulting staff
    const labStaffCosts = facilityEnabled && facilityStartYear <= 2 ? labStaffing * 120000 : 0 // $120k average per lab staff
    
    // Operating costs
    const baseOperatingCosts = baseRevenue * 0.3 // 30% of revenue for base operating costs
    const totalFacilityCosts = facilityCosts + facilityUtilities + equipmentDepreciation
    const totalCosts = consultingStaff + labStaffCosts + baseOperatingCosts + totalFacilityCosts
    
    // Lab revenue (prototype and testing services)
    const labRevenue = facilityEnabled && facilityStartYear <= 2 ? labStaffing * 180000 : 0 // $180k revenue per lab staff
    const totalRevenue = facilityStartYear === 1 ? year1 + labRevenue : 
                        facilityStartYear === 2 ? year2 + labRevenue : year3 + labRevenue
    
    const netProfit = (baseRevenue * (operatingMargin / 100)) + labRevenue - totalCosts
    const riskAdjustedRevenue = (baseRevenue + labRevenue) * (1 - riskFactor / 100)
    const breakEvenMonth = totalCosts > 0 ? Math.ceil((totalCosts / (baseRevenue + labRevenue)) * 12) : 0
    const facilityROI = facilityEnabled && labRevenue > 0 ? 
      ((labRevenue - totalFacilityCosts - labStaffCosts) / (equipmentBudget * 1000)) * 100 : 0

    setProjections({
      year1Revenue: year1,
      year2Revenue: year2,
      year3Revenue: year3,
      year5Revenue: year5,
      totalCosts,
      netProfit,
      breakEvenMonth,
      riskAdjustedRevenue,
      facilityROI,
      equipmentDepreciation,
      facilityCosts: totalFacilityCosts,
      labRevenue
    })
  }, [contractSize, contractsPerYear, marketPenetration, operatingMargin, riskFactor, staffingLevel, yearlyGrowthRate, facilityEnabled, facilitySize, equipmentBudget, labStaffing, facilityStartYear])

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
              Interactive Business Plan
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Model our physics-centric approach that leverages <strong>proven quantitative methods and AI-enhanced workflows</strong> 
              including Design of Experiments (DOE), Multi-Objective Decision Analysis (MODA), and Failure Mode Effects Analysis (FMEA). 
              Explore scenarios including our cutting-edge prototype facility focused on authoritative physics-based understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Prototype Facility Vision */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
              <Factory className="h-10 w-10 mr-4 text-cyan-400" />
              Advanced Prototype Facility
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              A SpaceX-inspired R&D laboratory featuring cutting-edge manufacturing, testing, and simulation capabilities 
              for next-generation ballistic systems and instrumented projectiles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-300">Advanced Manufacturing</h3>
              <p className="text-slate-300 text-sm">
                5-axis CNC machining, metal 3D printing, precision tooling for complex geometries and exotic materials
              </p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-300">Ballistic Testing</h3>
              <p className="text-slate-300 text-sm">
                High-speed cameras, instrumented test ranges, shock tube testing, and environmental chambers
              </p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">HPC Simulation</h3>
              <p className="text-slate-300 text-sm">
                GPU clusters for CFD, finite element analysis, and physics-based modeling of high-G environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Financial Model */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Controls Panel */}
            <div className="space-y-8">
              {/* Business Parameters */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-dark-900 mb-8 flex items-center">
                  <Target className="h-6 w-6 text-primary-600 mr-3" />
                  Business Parameters
                </h2>
                
                <div className="space-y-6">
                  {/* Contract Size */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-3">
                      Average Contract Size: {formatCurrency(contractSize * 1000)}
                    </label>
                    <input
                      type="range"
                      min="200"
                      max="2000"
                      step="50"
                      value={contractSize}
                      onChange={(e) => setContractSize(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-dark-500 mt-1">
                      <span>$200K</span>
                      <span>$2M</span>
                    </div>
                  </div>

                  {/* Contracts Per Year */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-3">
                      Contracts Per Year: {contractsPerYear}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      step="1"
                      value={contractsPerYear}
                      onChange={(e) => setContractsPerYear(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Market Penetration */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-3">
                      Market Penetration: {formatPercentage(marketPenetration)}
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="1"
                      value={marketPenetration}
                      onChange={(e) => setMarketPenetration(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Consulting Staff */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-3">
                      Consulting Team: {staffingLevel} people
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      step="1"
                      value={staffingLevel}
                      onChange={(e) => setStaffingLevel(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Growth Rate */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-3">
                      Yearly Growth Rate: {formatPercentage(yearlyGrowthRate)}
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="200"
                      step="5"
                      value={yearlyGrowthRate}
                      onChange={(e) => setYearlyGrowthRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>
              </div>

              {/* Facility Parameters */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-cyan-500">
                <h2 className="text-2xl font-bold text-dark-900 mb-8 flex items-center">
                  <Factory className="h-6 w-6 text-cyan-600 mr-3" />
                  Prototype Facility Planning
                </h2>
                
                <div className="space-y-6">
                  {/* Facility Toggle */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="facilityEnabled"
                      checked={facilityEnabled}
                      onChange={(e) => setFacilityEnabled(e.target.checked)}
                      className="w-5 h-5 text-cyan-600 rounded"
                    />
                    <label htmlFor="facilityEnabled" className="font-semibold text-dark-700">
                      Enable Prototype Facility
                    </label>
                  </div>

                  {facilityEnabled && (
                    <>
                      {/* Facility Size */}
                      <div>
                        <label className="block text-sm font-semibold text-dark-700 mb-3">
                          Facility Size: {facilitySize.toLocaleString()} sq ft
                        </label>
                        <input
                          type="range"
                          min="5000"
                          max="50000"
                          step="1000"
                          value={facilitySize}
                          onChange={(e) => setFacilitySize(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-xs text-dark-500 mt-1">
                          <span>5K sq ft</span>
                          <span>50K sq ft</span>
                        </div>
                      </div>

                      {/* Equipment Budget */}
                      <div>
                        <label className="block text-sm font-semibold text-dark-700 mb-3">
                          Equipment Investment: {formatCurrency(equipmentBudget * 1000)}
                        </label>
                        <input
                          type="range"
                          min="500"
                          max="10000"
                          step="100"
                          value={equipmentBudget}
                          onChange={(e) => setEquipmentBudget(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-xs text-dark-500 mt-1">
                          <span>$500K</span>
                          <span>$10M</span>
                        </div>
                      </div>

                      {/* Lab Staffing */}
                      <div>
                        <label className="block text-sm font-semibold text-dark-700 mb-3">
                          Lab Team: {labStaffing} engineers & technicians
                        </label>
                        <input
                          type="range"
                          min="3"
                          max="25"
                          step="1"
                          value={labStaffing}
                          onChange={(e) => setLabStaffing(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>

                      {/* Facility Start Year */}
                      <div>
                        <label className="block text-sm font-semibold text-dark-700 mb-3">
                          Launch Year: {facilityStartYear}
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="4"
                          step="1"
                          value={facilityStartYear}
                          onChange={(e) => setFacilityStartYear(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                        <div className="flex justify-between text-xs text-dark-500 mt-1">
                          <span>Year 1</span>
                          <span>Year 4</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Risk Controls */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-dark-900 mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                  Risk Assessment
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-3">
                    Overall Risk Factor: {formatPercentage(riskFactor)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    step="1"
                    value={riskFactor}
                    onChange={(e) => setRiskFactor(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              {/* Revenue Projections */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                  Revenue Projections
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-green-700 font-medium">Year 1</div>
                    <div className="text-2xl font-bold text-green-800">
                      {formatCurrency(projections.year1Revenue + (facilityStartYear === 1 ? projections.labRevenue : 0))}
                    </div>
                    {facilityStartYear === 1 && <div className="text-xs text-green-600">+Lab Revenue</div>}
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-green-700 font-medium">Year 2</div>
                    <div className="text-2xl font-bold text-green-800">
                      {formatCurrency(projections.year2Revenue + (facilityStartYear === 2 ? projections.labRevenue : 0))}
                    </div>
                    {facilityStartYear === 2 && <div className="text-xs text-green-600">+Lab Revenue</div>}
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-green-700 font-medium">Year 3</div>
                    <div className="text-2xl font-bold text-green-800">
                      {formatCurrency(projections.year3Revenue + (facilityStartYear <= 3 ? projections.labRevenue : 0))}
                    </div>
                    {facilityStartYear <= 3 && <div className="text-xs text-green-600">+Lab Revenue</div>}
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-green-700 font-medium">Year 5</div>
                    <div className="text-2xl font-bold text-green-800">
                      {formatCurrency(projections.year5Revenue + projections.labRevenue * 2)}
                    </div>
                    {facilityEnabled && <div className="text-xs text-green-600">+Scaled Lab</div>}
                  </div>
                </div>
              </div>

              {/* Facility Metrics */}
              {facilityEnabled && (
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-cyan-500">
                  <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center">
                    <Factory className="h-6 w-6 text-cyan-600 mr-3" />
                    Facility Performance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-cyan-50 rounded-lg">
                      <span className="font-medium text-dark-700">Lab Revenue (Annual)</span>
                      <span className="text-xl font-bold text-cyan-800">
                        {formatCurrency(projections.labRevenue)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-dark-700">Facility ROI</span>
                      <span className="text-xl font-bold text-blue-800">
                        {formatPercentage(projections.facilityROI)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-medium text-dark-700">Equipment Depreciation</span>
                      <span className="text-xl font-bold text-slate-800">
                        {formatCurrency(projections.equipmentDepreciation)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                      <span className="font-medium text-dark-700">Total Facility Costs</span>
                      <span className="text-xl font-bold text-orange-800">
                        {formatCurrency(projections.facilityCosts)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Financial Metrics */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-dark-900 mb-6 flex items-center">
                  <DollarSign className="h-6 w-6 text-primary-600 mr-3" />
                  Key Financial Metrics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium text-dark-700">Total Operating Costs</span>
                    <span className="text-xl font-bold text-blue-800">
                      {formatCurrency(projections.totalCosts)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-medium text-dark-700">Net Profit (Year 1)</span>
                    <span className="text-xl font-bold text-green-800">
                      {formatCurrency(projections.netProfit)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-medium text-dark-700">Risk-Adjusted Revenue</span>
                    <span className="text-xl font-bold text-orange-800">
                      {formatCurrency(projections.riskAdjustedRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium text-dark-700">Break-Even Timeline</span>
                    <span className="text-xl font-bold text-purple-800">
                      {projections.breakEvenMonth} months
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Business Model Summary */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center mb-12">
              Strategic Business Evolution: Analysis-Driven Approach
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">Phase 1: Quantitative Foundation</h3>
                <p className="text-dark-600 mb-4 text-sm">
                  Apply proven methods (DOE, MODA, Monte Carlo) to DEVCOM AC challenges. 
                  Focus on decision quality over diagram complexity.
                </p>
                <div className="text-sm font-bold text-primary-600">Months 1-12</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
                <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">Phase 2: Physics-Based Lab</h3>
                <p className="text-dark-600 mb-4 text-sm">
                  Build authoritative models grounded in deep understanding. 
                  Prototype facility for ballistic characterization and high-G testing.
                </p>
                <div className="text-sm font-bold text-cyan-600">Months 12-24</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">Phase 3: Knowledge Integration</h3>
                <p className="text-dark-600 mb-4 text-sm">
                  Scale proven methodologies. Integrate physics-based models with 
                  quantitative analysis frameworks for superior decision-making.
                </p>
                <div className="text-sm font-bold text-green-600">Months 24-36</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">Phase 4: Industry Leadership</h3>
                <p className="text-dark-600 mb-4 text-sm">
                  Lead DE transformation focused on measurable outcomes: 
                  faster cycles, lower costs, superior system performance.
                </p>
                <div className="text-sm font-bold text-purple-600">Years 3-5</div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Our Success Metrics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">✅ What We Measure</h4>
                  <ul className="text-dark-600 text-sm space-y-1">
                    <li>• Decision quality improvement</li>
                    <li>• Design cycle time reduction</li>
                    <li>• Cost savings from risk mitigation</li>
                    <li>• Fielded system performance gains</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-800 mb-2">❌ What We Don't Measure</h4>
                  <ul className="text-dark-600 text-sm space-y-1">
                    <li>• Number of SysML diagrams created</li>
                    <li>• Model "maturity" metrics</li>
                    <li>• Tool adoption rates</li>
                    <li>• Process compliance scores</li>
                  </ul>
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