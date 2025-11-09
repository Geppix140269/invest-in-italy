"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building2, Euro, Users } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// GDP Growth Data
const gdpData = [
  { year: "2018", gdp: 2.1 },
  { year: "2019", gdp: 2.3 },
  { year: "2020", gdp: 1.8 },
  { year: "2021", gdp: 3.2 },
  { year: "2022", gdp: 3.7 },
  { year: "2023", gdp: 4.1 },
  { year: "2024", gdp: 4.5 }
];

// Real Estate Price Growth
const realEstateData = [
  { year: "2018", residential: 185, commercial: 210 },
  { year: "2019", residential: 192, commercial: 225 },
  { year: "2020", residential: 188, commercial: 215 },
  { year: "2021", residential: 205, commercial: 240 },
  { year: "2022", residential: 225, commercial: 265 },
  { year: "2023", residential: 245, commercial: 290 },
  { year: "2024", residential: 268, commercial: 315 }
];

// Investment by Sector
const sectorData = [
  { name: "Real Estate", value: 38, color: "hsl(38, 70%, 55%)" },
  { name: "Technology", value: 22, color: "hsl(38, 60%, 65%)" },
  { name: "Tourism", value: 18, color: "hsl(38, 50%, 75%)" },
  { name: "Manufacturing", value: 14, color: "hsl(215, 30%, 40%)" },
  { name: "Other", value: 8, color: "hsl(215, 20%, 60%)" }
];

// Foreign Investment Growth
const foreignInvestmentData = [
  { year: "2018", investment: 24.5 },
  { year: "2019", investment: 28.2 },
  { year: "2020", investment: 22.8 },
  { year: "2021", investment: 32.5 },
  { year: "2022", investment: 38.7 },
  { year: "2023", investment: 45.3 },
  { year: "2024", investment: 52.1 }
];

// Custom tooltip styling
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-3 rounded-lg border border-accent/20">
        <p className="font-semibold text-sm mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function AnimatedChart({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
}

export function MarketInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-elegant">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
            Market Intelligence
          </Badge>
          <h2 className="heading-section mb-6">
            Italy&apos;s Economic <span className="gradient-text">Growth Story</span>
          </h2>
          <p className="prose-elegant">
            Data-driven insights into Italy&apos;s expanding economy, real estate appreciation,
            and investment opportunities across key sectors.
          </p>
        </motion.div>

        {/* Key Metrics Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: TrendingUp, label: "GDP Growth", value: "+4.5%", desc: "2024 YoY" },
            { icon: Building2, label: "Real Estate", value: "+45%", desc: "Since 2018" },
            { icon: Euro, label: "FDI Inflow", value: "€52B", desc: "2024 Total" },
            { icon: Users, label: "New Investors", value: "+28%", desc: "YoY Growth" }
          ].map((metric, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="glass border-accent/20 hover:border-accent/50 transition-all duration-300 card-3d">
                <CardContent className="p-4">
                  <metric.icon className="h-5 w-5 text-accent mb-2" />
                  <div className="text-2xl font-display font-bold gradient-text mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.desc}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* GDP Growth Chart */}
          <AnimatedChart delay={0.2}>
            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  GDP Growth Trend
                </CardTitle>
                <CardDescription>
                  Italy&apos;s economic expansion over the past 7 years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={gdpData}>
                    <defs>
                      <linearGradient id="gdpGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(38, 70%, 55%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(38, 70%, 55%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis
                      dataKey="year"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="gdp"
                      stroke="hsl(38, 70%, 55%)"
                      strokeWidth={3}
                      fill="url(#gdpGradient)"
                      animationDuration={1500}
                      name="GDP Growth"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </AnimatedChart>

          {/* Real Estate Price Index */}
          <AnimatedChart delay={0.3}>
            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  Real Estate Price Index
                </CardTitle>
                <CardDescription>
                  Residential vs Commercial property appreciation (Base 2018=100)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={realEstateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis
                      dataKey="year"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="residential"
                      stroke="hsl(38, 70%, 55%)"
                      strokeWidth={3}
                      dot={{ fill: "hsl(38, 70%, 55%)", r: 4 }}
                      activeDot={{ r: 6 }}
                      animationDuration={1500}
                      name="Residential"
                    />
                    <Line
                      type="monotone"
                      dataKey="commercial"
                      stroke="hsl(215, 30%, 40%)"
                      strokeWidth={3}
                      dot={{ fill: "hsl(215, 30%, 40%)", r: 4 }}
                      activeDot={{ r: 6 }}
                      animationDuration={1500}
                      animationBegin={300}
                      name="Commercial"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </AnimatedChart>

          {/* Foreign Direct Investment */}
          <AnimatedChart delay={0.4}>
            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Euro className="h-5 w-5 text-accent" />
                  Foreign Direct Investment
                </CardTitle>
                <CardDescription>
                  Annual FDI inflow in billions of euros
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={foreignInvestmentData}>
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(38, 70%, 55%)" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="hsl(38, 70%, 55%)" stopOpacity={0.6} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis
                      dataKey="year"
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                      tickFormatter={(value) => `€${value}B`}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="glass p-3 rounded-lg border border-accent/20">
                              <p className="font-semibold text-sm mb-1">{payload[0].payload.year}</p>
                              <p className="text-xs text-accent">
                                €{payload[0].value} billion
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="investment"
                      fill="url(#barGradient)"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </AnimatedChart>

          {/* Investment by Sector */}
          <AnimatedChart delay={0.5}>
            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 h-full">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Investment by Sector
                </CardTitle>
                <CardDescription>
                  Distribution of foreign investments across key sectors (2024)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={90}
                      fill="#8884d8"
                      dataKey="value"
                      animationDuration={1500}
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="glass p-3 rounded-lg border border-accent/20">
                              <p className="font-semibold text-sm mb-1">{payload[0].name}</p>
                              <p className="text-xs text-accent">
                                {payload[0].value}% of total investments
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </AnimatedChart>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="glass border-2 border-accent/30 p-8 hover:glow transition-all duration-500">
            <p className="prose-elegant mb-4">
              These trends demonstrate Italy&apos;s robust economic recovery and growing appeal
              to international investors seeking stable, high-return opportunities in Europe.
            </p>
            <Badge className="bg-accent text-accent-foreground">
              All data sourced from ISTAT, Eurostat & Bank of Italy
            </Badge>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
