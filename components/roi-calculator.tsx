"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Euro, Percent, Calendar, Home, Building2 } from "lucide-react";

export function ROICalculator() {
  const [investmentType, setInvestmentType] = useState<"real-estate" | "business">("real-estate");
  const [propertyPrice, setPropertyPrice] = useState<string>("250000");
  const [downPayment, setDownPayment] = useState<string>("50000");
  const [monthlyRent, setMonthlyRent] = useState<string>("1500");
  const [propertyAppreciation, setPropertyAppreciation] = useState<string>("3");
  const [investmentPeriod, setInvestmentPeriod] = useState<string>("10");
  const [maintenanceCost, setMaintenanceCost] = useState<string>("2");
  const [vacancyRate, setVacancyRate] = useState<string>("5");

  // Business investment inputs
  const [initialInvestment, setInitialInvestment] = useState<string>("100000");
  const [annualRevenue, setAnnualRevenue] = useState<string>("200000");
  const [profitMargin, setProfitMargin] = useState<string>("15");
  const [growthRate, setGrowthRate] = useState<string>("10");

  const calculateRealEstateROI = () => {
    const price = parseFloat(propertyPrice);
    const down = parseFloat(downPayment);
    const rent = parseFloat(monthlyRent);
    const appreciation = parseFloat(propertyAppreciation) / 100;
    const years = parseFloat(investmentPeriod);
    const maintenance = parseFloat(maintenanceCost) / 100;
    const vacancy = parseFloat(vacancyRate) / 100;

    // Annual rental income
    const annualRent = rent * 12 * (1 - vacancy);

    // Annual costs
    const annualMaintenance = price * maintenance;
    const annualCashFlow = annualRent - annualMaintenance;

    // Total rental income over period
    const totalRentalIncome = annualCashFlow * years;

    // Property value after appreciation
    const futureValue = price * Math.pow(1 + appreciation, years);
    const capitalGain = futureValue - price;

    // Total return
    const totalReturn = totalRentalIncome + capitalGain;

    // ROI
    const roi = (totalReturn / down) * 100;

    // Annual ROI
    const annualROI = roi / years;

    return {
      totalReturn: totalReturn.toFixed(0),
      capitalGain: capitalGain.toFixed(0),
      rentalIncome: totalRentalIncome.toFixed(0),
      futureValue: futureValue.toFixed(0),
      roi: roi.toFixed(2),
      annualROI: annualROI.toFixed(2),
      annualCashFlow: annualCashFlow.toFixed(0),
      grossYield: ((annualRent / price) * 100).toFixed(2),
      netYield: ((annualCashFlow / price) * 100).toFixed(2)
    };
  };

  const calculateBusinessROI = () => {
    const investment = parseFloat(initialInvestment);
    const revenue = parseFloat(annualRevenue);
    const margin = parseFloat(profitMargin) / 100;
    const growth = parseFloat(growthRate) / 100;
    const years = parseFloat(investmentPeriod);

    let totalProfit = 0;
    let currentRevenue = revenue;

    for (let i = 0; i < years; i++) {
      const yearlyProfit = currentRevenue * margin;
      totalProfit += yearlyProfit;
      currentRevenue = currentRevenue * (1 + growth);
    }

    const roi = (totalProfit / investment) * 100;
    const annualROI = roi / years;
    const firstYearProfit = revenue * margin;

    return {
      totalProfit: totalProfit.toFixed(0),
      roi: roi.toFixed(2),
      annualROI: annualROI.toFixed(2),
      firstYearProfit: firstYearProfit.toFixed(0),
      firstYearROI: ((firstYearProfit / investment) * 100).toFixed(2),
      finalRevenue: currentRevenue.toFixed(0)
    };
  };

  const results = investmentType === "real-estate"
    ? calculateRealEstateROI()
    : calculateBusinessROI();

  return (
    <div className="space-y-8">
      {/* Investment Type Selector */}
      <div className="flex gap-4">
        <Button
          onClick={() => setInvestmentType("real-estate")}
          variant={investmentType === "real-estate" ? "default" : "outline"}
          className="flex-1"
        >
          <Home className="mr-2 h-4 w-4" />
          Real Estate
        </Button>
        <Button
          onClick={() => setInvestmentType("business")}
          variant={investmentType === "business" ? "default" : "outline"}
          className="flex-1"
        >
          <Building2 className="mr-2 h-4 w-4" />
          Business
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-accent" />
                Investment Details
              </CardTitle>
              <CardDescription>
                {investmentType === "real-estate"
                  ? "Enter your Italian real estate investment parameters"
                  : "Enter your Italian business investment parameters"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {investmentType === "real-estate" ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="propertyPrice">Property Price (€)</Label>
                    <Input
                      id="propertyPrice"
                      type="number"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(e.target.value)}
                      placeholder="250000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="downPayment">Down Payment (€)</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      placeholder="50000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyRent">Monthly Rental Income (€)</Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                      placeholder="1500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appreciation">Annual Appreciation (%)</Label>
                    <Input
                      id="appreciation"
                      type="number"
                      step="0.1"
                      value={propertyAppreciation}
                      onChange={(e) => setPropertyAppreciation(e.target.value)}
                      placeholder="3"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maintenance">Annual Maintenance Cost (%)</Label>
                    <Input
                      id="maintenance"
                      type="number"
                      step="0.1"
                      value={maintenanceCost}
                      onChange={(e) => setMaintenanceCost(e.target.value)}
                      placeholder="2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vacancy">Vacancy Rate (%)</Label>
                    <Input
                      id="vacancy"
                      type="number"
                      step="0.1"
                      value={vacancyRate}
                      onChange={(e) => setVacancyRate(e.target.value)}
                      placeholder="5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="period">Investment Period (years)</Label>
                    <Input
                      id="period"
                      type="number"
                      value={investmentPeriod}
                      onChange={(e) => setInvestmentPeriod(e.target.value)}
                      placeholder="10"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="initialInvestment">Initial Investment (€)</Label>
                    <Input
                      id="initialInvestment"
                      type="number"
                      value={initialInvestment}
                      onChange={(e) => setInitialInvestment(e.target.value)}
                      placeholder="100000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="annualRevenue">Annual Revenue (€)</Label>
                    <Input
                      id="annualRevenue"
                      type="number"
                      value={annualRevenue}
                      onChange={(e) => setAnnualRevenue(e.target.value)}
                      placeholder="200000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profitMargin">Profit Margin (%)</Label>
                    <Input
                      id="profitMargin"
                      type="number"
                      step="0.1"
                      value={profitMargin}
                      onChange={(e) => setProfitMargin(e.target.value)}
                      placeholder="15"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="growthRate">Annual Growth Rate (%)</Label>
                    <Input
                      id="growthRate"
                      type="number"
                      step="0.1"
                      value={growthRate}
                      onChange={(e) => setGrowthRate(e.target.value)}
                      placeholder="10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessPeriod">Investment Period (years)</Label>
                    <Input
                      id="businessPeriod"
                      type="number"
                      value={investmentPeriod}
                      onChange={(e) => setInvestmentPeriod(e.target.value)}
                      placeholder="10"
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Investment Returns
              </CardTitle>
              <CardDescription>
                Projected returns based on your inputs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main ROI Display */}
              <div className="text-center p-6 bg-white/50 rounded-lg border-2 border-accent/30">
                <div className="text-sm text-muted-foreground mb-2">Total ROI</div>
                <div className="text-5xl font-bold gradient-text mb-2">
                  {investmentType === "real-estate" ? results.roi : results.roi}%
                </div>
                <div className="text-sm text-muted-foreground">
                  {investmentType === "real-estate" ? results.annualROI : results.annualROI}% annually
                </div>
              </div>

              {/* Detailed Metrics */}
              {investmentType === "real-estate" ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Euro className="h-4 w-4 text-accent" />
                      Total Return
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      €{parseInt(results.totalReturn).toLocaleString()}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      Capital Gain
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      €{parseInt(results.capitalGain).toLocaleString()}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      Rental Income
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      €{parseInt(results.rentalIncome).toLocaleString()}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Home className="h-4 w-4 text-accent" />
                      Future Property Value
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      €{parseInt(results.futureValue).toLocaleString()}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Percent className="h-4 w-4 text-accent" />
                      Gross Yield
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      {results.grossYield}%
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Percent className="h-4 w-4 text-accent" />
                      Net Yield
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      {results.netYield}%
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Euro className="h-4 w-4 text-accent" />
                      Annual Cash Flow
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      €{parseInt(results.annualCashFlow).toLocaleString()}
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Euro className="h-4 w-4 text-accent" />
                      Total Profit
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      €{parseInt(results.totalProfit).toLocaleString()}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent" />
                      First Year Profit
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      €{parseInt(results.firstYearProfit).toLocaleString()}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Percent className="h-4 w-4 text-accent" />
                      First Year ROI
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      {results.firstYearROI}%
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white/30 rounded">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      Final Revenue
                    </span>
                    <Badge variant="outline" className="font-semibold">
                      €{parseInt(results.finalRevenue).toLocaleString()}
                    </Badge>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
                <strong>Disclaimer:</strong> These calculations are estimates based on the inputs provided.
                Actual returns may vary based on market conditions, taxes, fees, and other factors.
                Consult with a financial advisor for personalized advice.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
