"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  FileText, 
  BookOpen, 
  Globe, 
  TrendingUp,
  Award,
  Target,
  Zap,
  Search,
  Menu,
  X,
  ChevronRight,
  BarChart3,
  Layers,
  Gem,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Table of Contents items
const tocSections = [
  { id: "overview", title: "Strategic Landscape", icon: Globe },
  { id: "landscape-map", title: "Landscape Map", icon: Layers },
  { id: "winning-formula", title: "Winning Formula", icon: Award },
  { id: "opportunity-gaps", title: "Critical Gaps", icon: Target },
  { id: "tier-1", title: "Elite Platforms (Tier 1)", icon: Award },
  { id: "tier-2", title: "Strong Platforms (Tier 2)", icon: TrendingUp },
  { id: "tier-3", title: "Notable Platforms (Tier 3)", icon: BookOpen },
  { id: "hidden-gems", title: "Hidden Gems", icon: Gem },
  { id: "feature-matrix", title: "Feature Intelligence", icon: BarChart3 },
  { id: "trend-analysis", title: "Trend Analysis", icon: TrendingUp },
  { id: "pajakku-benchmark", title: "PAJAKKU Benchmark", icon: Target },
  { id: "actionable-insights", title: "Top 10 Insights", icon: Zap },
  { id: "feature-roadmap", title: "Adoption Roadmap", icon: Layers },
  { id: "conclusion", title: "Strategic Conclusion", icon: Target },
];

// Score badge component
function ScoreBadge({ score }: { score: string }) {
  const numScore = parseFloat(score);
  let className = "bg-red-500 text-white";
  if (numScore >= 8) className = "bg-emerald-500 text-white";
  else if (numScore >= 6) className = "bg-amber-500 text-white";
  
  return (
    <span className={cn("inline-block px-2 py-0.5 rounded-full text-xs font-semibold", className)}>
      {score}
    </span>
  );
}

// Platform Card Component
function PlatformCard({ 
  title, 
  score, 
  category, 
  region, 
  price, 
  icon: Icon,
  children 
}: { 
  title: string;
  score: string;
  category: string;
  region: string;
  price: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Card className="mb-6 border-l-4 border-l-blue-500">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ScoreBadge score={score} />
              <Badge variant="outline" className="text-xs">{category}</Badge>
              <Badge variant="secondary" className="text-xs">{region}</Badge>
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm font-medium text-muted-foreground">
              {price}
            </CardDescription>
          </div>
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

// Insight Card Component
function InsightCard({ 
  title, 
  color = "blue",
  children 
}: { 
  title: string;
  color?: "blue" | "green" | "amber" | "purple";
  children: React.ReactNode;
}) {
  const colorClasses = {
    blue: "border-l-blue-500 bg-blue-50/50",
    green: "border-l-green-500 bg-green-50/50",
    amber: "border-l-amber-500 bg-amber-50/50",
    purple: "border-l-purple-500 bg-purple-50/50",
  };

  return (
    <div className={cn("p-4 rounded-lg border-l-4", colorClasses[color])}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export default function GlobalTaxKnowledgePlatformLandscapePage() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocSections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border lg:hidden"
      >
        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 h-screen w-72 bg-white/95 backdrop-blur-md border-r z-40 overflow-y-auto p-6 transition-transform",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="mb-6">
          <h2 className="font-bold text-lg">Tax Platform Intelligence</h2>
          <p className="text-xs text-muted-foreground">Strategic Analysis of Global Knowledge Platforms</p>
        </div>

        <div className="space-y-1">
          {tocSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2",
                activeSection === section.id 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              <section.icon className="h-4 w-4" />
              <span className="truncate">{section.title}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main ref={mainRef} className="lg:ml-72">
        {/* Hero Section */}
        <section className="px-4 py-12 md:px-8 lg:px-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-5xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/materi"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Materi
            </Link>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <Badge className="bg-blue-600">Competitive Intelligence Research</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="text-blue-600 italic">Global Tax Knowledge Platform</span>
                  <br />
                  Landscape Analysis
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Strategic analysis of global knowledge platforms with benchmarking of PAJAKKU vs Bloomberg Tax, Thomson Reuters, and emerging CORETAX DJP opportunities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">30+ Platform Analysis</Badge>
                  <Badge variant="outline">8 Jurisdictions</Badge>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Very High Richness</Badge>
                </div>
                <div className="flex gap-3 pt-2">
                  <a 
                    href="/materi/global-tax-knowledge-platform-landscape.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      <FileText className="h-4 w-4 mr-2" />
                      Buka PDF
                    </Button>
                  </a>
                  <a 
                    href="/materi/global-tax-knowledge-platform-landscape.pdf"
                    download
                  >
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <Card className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                      <Globe className="h-16 w-16 text-blue-600/50" />
                    </div>
                    <h3 className="font-semibold mb-1">Strategic Positioning</h3>
                    <p className="text-sm text-muted-foreground">
                      Tax platform ecosystem visualization across enterprise, professional, and compliance segments.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 py-12 md:px-8 lg:px-12 max-w-5xl mx-auto space-y-16">
          {/* Executive Summary */}
          <section id="overview">
            <h2 className="text-2xl font-bold mb-6">Executive Intelligence Brief</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <InsightCard title="🗺️ Strategic Landscape" color="blue">
                The tax knowledge platform market shows fundamental <strong>bifurcation</strong> between enterprise-grade professional research platforms and localized compliance-focused solutions.
              </InsightCard>
              <InsightCard title="🎯 Winning Formula" color="amber">
                Three factors consistently drive platform success: <strong>real-time regulatory update velocity</strong>, integrated tool-knowledge architecture, and practitioner-centric workflow design.
              </InsightCard>
              <InsightCard title="💎 Critical Opportunities" color="green">
                Four strategic gaps present expansion opportunities: <strong>cross-jurisdiction ASEAN planning tools</strong>, real-time regulatory impact assessment, AI-powered tax assistance, and mobile-native professional workflows.
              </InsightCard>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">The #1 Finding: Market Fragmentation Creates Regional Dominance Opportunity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>No global tax knowledge platform has achieved comprehensive, practitioner-optimized coverage across multiple major jurisdictions while maintaining the depth and timeliness required for professional use.</strong> This fragmentation creates substantial opportunity for well-executed regional platforms to establish dominant positions, with PAJAKKU&apos;s Coretax DJP 2025 first-mover advantage and &quot;second brain&quot; positioning representing the strongest Indonesia-specific execution to date.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Landscape Map */}
          <section id="landscape-map">
            <h2 className="text-2xl font-bold mb-6">🗺️ Landscape Map</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Category Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Knowledge Base & Reference</span>
                    <Badge className="bg-emerald-500">45+ platforms</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Tax Course & Certification</span>
                    <Badge className="bg-emerald-500">60+ platforms</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Tax Calculator & Tools</span>
                    <Badge className="bg-amber-500">80+ platforms</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Tax Consulting with Hub</span>
                    <Badge className="bg-emerald-500">120+ platforms</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">Tax Community & Forum</span>
                    <Badge className="bg-red-500">25+ platforms</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution by Region</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold">Indonesia</div>
                    <div className="text-sm text-muted-foreground">PAJAKKU, OnlinePajak, KlikPajak, DDTC</div>
                    <div className="text-xs text-muted-foreground mt-1">High density, fragmented market</div>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold">ASEAN (ex-Indonesia)</div>
                    <div className="text-sm text-muted-foreground">IRAS (SG), LHDN (MY), BIR (PH)</div>
                    <div className="text-xs text-muted-foreground mt-1">Government-led, English accessibility varies</div>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-semibold">India</div>
                    <div className="text-sm text-muted-foreground">Taxsutra, ClearTax, IndiaFilings</div>
                    <div className="text-xs text-muted-foreground mt-1">Scale advantage, GST complexity</div>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="font-semibold">North America</div>
                    <div className="text-sm text-muted-foreground">Bloomberg Tax, Thomson Reuters Checkpoint</div>
                    <div className="text-xs text-muted-foreground mt-1">Enterprise dominance, premium pricing</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ecosystem Map Visualization */}
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50">
              <CardHeader>
                <CardTitle>Tax Platform Ecosystem Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-slate-800 text-white rounded-lg">
                    <div className="font-bold mb-2">Enterprise Tier</div>
                    <div className="text-xs space-y-1">
                      <div>Bloomberg Tax ($25K+/year)</div>
                      <div>Thomson Reuters ($15K+/year)</div>
                      <div>IBFD ($10K+/year)</div>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-500 text-white rounded-lg">
                    <div className="font-bold mb-2">Professional Tier</div>
                    <div className="text-xs space-y-1">
                      <div className="font-bold">PAJAKKU (Coretax DJP)</div>
                      <div>DDTC Knowledge Base</div>
                      <div>Ortax</div>
                    </div>
                  </div>
                  <div className="p-4 bg-emerald-500 text-white rounded-lg">
                    <div className="font-bold mb-2">Compliance Tier</div>
                    <div className="text-xs space-y-1">
                      <div>OnlinePajak</div>
                      <div>KlikPajak</div>
                      <div>Talenta</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-4">
                  <Badge className="bg-red-500">ASEAN Expansion Opportunity</Badge>
                  <Badge className="bg-red-500">Hybrid Model Opportunity</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Winning Formula */}
          <section id="winning-formula">
            <h2 className="text-2xl font-bold mb-6">🏆 Winning Formula Analysis</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Real-time Regulatory Velocity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Successful platforms deliver sub-48-hour analysis of major regulatory changes with proactive user notification systems.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg text-sm">
                    <strong className="text-blue-800">PAJAKKU Alignment:</strong> Manual curation processes present automation and scaling opportunities.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Layers className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Integrated Tool-Knowledge Architecture</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Seamless transition from learning to application, with embedded calculators and actionable templates directly within knowledge content.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg text-sm">
                    <strong className="text-green-800">PAJAKKU Alignment:</strong> <strong>Core strength</strong> with integrated calculator-knowledge synergy.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Target className="h-5 w-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Practitioner-Centric Workflow</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Focus on case studies, templates, and client-ready deliverables rather than theoretical exposition.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg text-sm">
                    <strong className="text-purple-800">PAJAKKU Alignment:</strong> Strong case study library with template expansion opportunities.
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Opportunity Gaps */}
          <section id="opportunity-gaps">
            <h2 className="text-2xl font-bold mb-6">💎 Critical Opportunity Gaps</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-base">Cross-jurisdiction ASEAN Planning Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    ASEAN Tax Lookup Portal limited to trade taxes; no income tax integration across jurisdictions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-base">Real-time Regulatory Impact Assessment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Bloomberg Tax alerts are enterprise-priced; no mid-market Indonesian equivalent with proactive notifications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-base">AI-Powered Tax Assistance (Indonesian-language)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Global experiments lack Indonesia-specific training data; defensible local language advantage opportunity.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-amber-600" />
                    <CardTitle className="text-base">Mobile-Native Professional Tax Workflows</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Consumer-focused mobile apps lack advanced practitioner mobile experience for field-accessible research.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tier 1 Platforms */}
          <section id="tier-1">
            <h2 className="text-2xl font-bold mb-6">🏆 Tier 1: Elite Platforms (Score 8.0+)</h2>
            
            <PlatformCard 
              title="Bloomberg Tax" 
              score="9.2/10" 
              category="Enterprise Tax Research"
              region="North America"
              price="$25,000+/year"
              icon={Award}
            >
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Core Value:</strong> Proprietary Tax Automation Technology for Tax Professionals
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> Real-time regulatory alerts with <strong>sub-48-hour analysis velocity</strong>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> Advanced cross-jurisdictional research tools
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> Professional workflow integration capabilities
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <strong className="text-blue-800">Inspiration for PAJAKKU:</strong> Implement automated regulatory alerts with <strong>48-hour analysis velocity</strong>, develop practitioner workflow integration tools, create cross-jurisdiction research capabilities for ASEAN expansion.
              </div>
            </PlatformCard>

            <PlatformCard 
              title="Thomson Reuters Checkpoint" 
              score="9.0/10" 
              category="Professional Tax Research"
              region="North America"
              price="$15,000+/year"
              icon={Search}
            >
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Core Value:</strong> Comprehensive Tax Research, Guidance, and Learning Platform
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> Comprehensive research database with <strong>advanced search algorithms</strong>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> Practical guidance with actionable templates
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> Integrated CPE courses for professional development
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-sm">
                <strong className="text-green-800">Inspiration for PAJAKKU:</strong> Integrate structured <strong>professional development courses</strong> with knowledge base, develop comprehensive template library for client deliverables, implement advanced search algorithms.
              </div>
            </PlatformCard>

            <PlatformCard 
              title="IBFD (International Bureau of Fiscal Documentation)" 
              score="8.8/10" 
              category="International Tax Research"
              region="Netherlands"
              price="$10,000+/year"
              icon={Globe}
            >
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Core Value:</strong> International Tax Research with Global Treaty Database
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> <strong>Global treaty database</strong> with comprehensive coverage
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> Cross-border transaction analysis tools
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckIcon /> Transfer pricing documentation automation
                </div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg text-sm">
                <strong className="text-purple-800">Inspiration for PAJAKKU:</strong> Develop <strong>ASEAN treaty database</strong> for regional expansion, create cross-border transaction analysis tools for Indonesian MNCs, implement transfer pricing documentation automation for SME segment.
              </div>
            </PlatformCard>
          </section>

          {/* Tier 2 - PAJAKKU Highlight */}
          <section id="tier-2">
            <h2 className="text-2xl font-bold mb-6">💪 Tier 2: Strong Platforms (Score 6.0–7.9)</h2>
            
            <Card className="mb-6 border-l-4 border-l-violet-600 bg-gradient-to-r from-violet-50 to-indigo-50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <ScoreBadge score="7.6-7.95/10" />
                      <Badge variant="outline">Hybrid Knowledge Platform</Badge>
                      <Badge variant="secondary">Indonesia</Badge>
                    </div>
                    <CardTitle className="text-2xl text-violet-900">PAJAKKU</CardTitle>
                    <CardDescription className="font-medium">Freemium Model</CardDescription>
                  </div>
                  <div className="p-2 bg-violet-100 rounded-lg">
                    <Target className="h-6 w-6 text-violet-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Core Value:</strong> &quot;Second Brain&quot; Tax Knowledge Platform with CORETAX DJP 2025 Advantage
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <StarIcon /> <strong>Coretax DJP 2025 first-mover advantage</strong>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <StarIcon /> Integrated calculator-knowledge <strong>synergy</strong>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <StarIcon /> Structured documentation like technical knowledge base
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Content Depth & Quality:</span>
                      <span className="font-bold">8.5/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Feature Richness:</span>
                      <span className="font-bold">7.8/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>UX & Design:</span>
                      <span className="font-bold">7.2/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Unique Value Proposition:</span>
                      <span className="font-bold text-green-600">8.7/10</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-violet-100 p-3 rounded-lg text-sm">
                  <strong className="text-violet-800">Strategic Opportunities:</strong> Automate regulatory update processes for <strong>real-time velocity</strong>, develop mobile-native professional workflows, expand to <strong>English-language ASEAN markets</strong>, leverage Coretax advantage for regional dominance.
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">ClearTax</CardTitle>
                    <ScoreBadge score="7.5/10" />
                  </div>
                  <CardDescription>India | Tax Filing Platform | Freemium</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Comprehensive tax filing platform with strong GST compliance focus and integrated knowledge base.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">OnlinePajak</CardTitle>
                    <ScoreBadge score="7.2/10" />
                  </div>
                  <CardDescription>Indonesia | Compliance SaaS | Subscription</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Leading e-filing platform with comprehensive tax compliance workflow and mobile-first design.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">DDTC Knowledge Base</CardTitle>
                    <ScoreBadge score="7.0/10" />
                  </div>
                  <CardDescription>Indonesia | Knowledge Platform | Freemium</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Professional tax knowledge base with deep regulatory analysis and practitioner-focused content.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">Taxsutra</CardTitle>
                    <ScoreBadge score="6.8/10" />
                  </div>
                  <CardDescription>India | Knowledge Platform | Subscription</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Comprehensive tax knowledge platform with strong professional community and real-time updates.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tier 3 */}
          <section id="tier-3">
            <h2 className="text-2xl font-bold mb-6">📋 Tier 3: Notable Platforms (Score 4.0–5.9)</h2>
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 text-sm font-semibold">Platform</th>
                      <th className="text-left p-4 text-sm font-semibold">Region</th>
                      <th className="text-left p-4 text-sm font-semibold">Category</th>
                      <th className="text-left p-4 text-sm font-semibold">Score</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-4 font-medium">KlikPajak</td>
                      <td className="p-4 text-muted-foreground">Indonesia</td>
                      <td className="p-4 text-muted-foreground">Compliance SaaS</td>
                      <td className="p-4"><ScoreBadge score="5.5/10" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Ortax</td>
                      <td className="p-4 text-muted-foreground">Indonesia</td>
                      <td className="p-4 text-muted-foreground">Knowledge Platform</td>
                      <td className="p-4"><ScoreBadge score="5.2/10" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">SME Toolkit</td>
                      <td className="p-4 text-muted-foreground">Indonesia</td>
                      <td className="p-4 text-muted-foreground">Business Platform</td>
                      <td className="p-4"><ScoreBadge score="4.8/10" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Talenta</td>
                      <td className="p-4 text-muted-foreground">Indonesia</td>
                      <td className="p-4 text-muted-foreground">Payroll & Tax</td>
                      <td className="p-4"><ScoreBadge score="4.5/10" /></td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </section>

          {/* Hidden Gems */}
          <section id="hidden-gems">
            <h2 className="text-2xl font-bold mb-6">💎 Hidden Gems</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-base">Government-Oriented Platforms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Under-the-radar platforms serving specific government agencies with specialized tax knowledge and compliance tools.</p>
                  <p className="text-xs text-blue-600 mt-2 font-medium">High practitioner utility, limited market visibility</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-base">Open Source Tax Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Community-driven tax calculation and compliance tools with transparent methodology and collaborative development.</p>
                  <p className="text-xs text-green-600 mt-2 font-medium">High innovation potential, limited commercial support</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-base">Academic Tax Platforms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">University-affiliated tax research and education platforms with deep theoretical foundations and research capabilities.</p>
                  <p className="text-xs text-purple-600 mt-2 font-medium">High content depth, limited practical application</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Top 10 Insights */}
          <section id="actionable-insights">
            <h2 className="text-2xl font-bold mb-6">💡 Top 10 Actionable Insights for PAJAKKU</h2>
            <div className="space-y-4">
              {[
                {
                  title: "1. Leverage Coretax DJP 2025 First-Mover Advantage for Regional Expansion",
                  finding: "No regional platform has comprehensive Coretax DJP 2025 coverage",
                  action: "Develop English-language ASEAN expansion leveraging Indonesian expertise as foundation for regional content"
                },
                {
                  title: "2. Automate Regulatory Update Velocity for Competitive Advantage",
                  finding: "Successful platforms achieve sub-48-hour regulatory analysis",
                  action: "Implement automated regulatory monitoring with AI-powered impact analysis and proactive user notifications"
                },
                {
                  title: "3. Develop Indonesian-Language AI Tax Assistant",
                  finding: "Global AI tax assistants lack Indonesia-specific training data",
                  action: "Create defensible local language advantage with Indonesian tax-trained AI assistant for practitioner use"
                },
                {
                  title: "4. Build Mobile-Native Professional Tax Workflows",
                  finding: "Professional tax workflows remain desktop-focused despite practitioner mobility",
                  action: "Design field-accessible research and calculation workflows optimized for professional mobile use"
                },
                {
                  title: "5. Expand Practitioner Template Library for Client Deliverables",
                  finding: "Successful platforms focus on client-ready deliverables vs. theoretical exposition",
                  action: "Develop comprehensive template library for SPT preparation, client communications, and regulatory responses"
                },
                {
                  title: "6. Implement Real-time Regulatory Impact Assessment System",
                  finding: "Enterprise solutions provide regulatory impact analysis at premium prices",
                  action: "Develop accessible impact assessment system with business scenario analysis for Indonesian SMEs"
                },
                {
                  title: "7. Create Cross-jurisdiction ASEAN Tax Planning Tools",
                  finding: "No comprehensive ASEAN tax planning platform exists",
                  action: "Build ASEAN tax planning module leveraging Indonesian expertise for regional expansion"
                },
                {
                  title: "8. Develop API Ecosystem for Third-party Integration",
                  finding: "Leading platforms offer robust API ecosystems for integration",
                  action: "Create REST API for calculator services, regulatory updates, and knowledge content integration"
                },
                {
                  title: "9. Implement Professional Community Features for Knowledge Sharing",
                  finding: "Professional tax communities drive platform engagement and retention",
                  action: "Build Q&A forums, case study sharing, and peer learning capabilities for Indonesian tax professionals"
                },
                {
                  title: "10. Create Predictive Analytics for Tax Optimization Opportunities",
                  finding: "Advanced platforms using predictive analytics for tax planning optimization",
                  action: "Develop predictive models for Indonesian tax optimization based on regulatory patterns and business scenarios"
                },
              ].map((insight, idx) => (
                <Card key={idx} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-blue-900">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-blue-800">Finding:</strong>
                        <p className="text-muted-foreground">{insight.finding}</p>
                      </div>
                      <div>
                        <strong className="text-blue-800">Action:</strong>
                        <p className="text-muted-foreground">{insight.action}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-bold mb-6">🎯 Strategic Conclusion</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-base">Current Position</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    PAJAKKU represents the <strong>strongest Indonesia-specific tax knowledge platform execution</strong>, with distinctive &quot;second brain&quot; positioning and Coretax DJP 2025 first-mover advantage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-base">Strategic Direction</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The path to Tier 1 status requires <strong>automation of regulatory velocity</strong>, development of mobile-native professional workflows, and expansion into white space opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-base">Critical Timeline</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The <strong>12-18 month window</strong> to consolidate Coretax DJP 2025 advantage is closing as competitors develop their own system documentation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="font-bold text-xl mb-4">The Strategic Imperative</h3>
                <p className="text-lg leading-relaxed">
                  No global platform has achieved comprehensive, practitioner-optimized tax knowledge across multiple jurisdictions. <strong>PAJAKKU&apos;s opportunity to become the dominant ASEAN tax knowledge platform</strong> through strategic execution of identified opportunities represents the most significant growth vector in the current tax technology landscape.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <footer className="border-t pt-8 mt-12">
            <div className="text-center text-sm text-muted-foreground">
              <p>
                This analysis is based on comprehensive research of 30+ global tax knowledge platforms with benchmarking against industry leaders.
              </p>
              <div className="flex justify-center gap-4 mt-3">
                <span>Research Date: February 2026</span>
                <span>|</span>
                <span>30+ Platforms Analyzed</span>
                <span>|</span>
                <span>8 Jurisdictions Covered</span>
              </div>
              <div className="flex justify-center gap-3 mt-6">
                <a 
                  href="/materi/global-tax-knowledge-platform-landscape.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Buka PDF
                  </Button>
                </a>
                <a 
                  href="/materi/global-tax-knowledge-platform-landscape.pdf"
                  download
                >
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

// Helper Components
function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-4 w-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
