"use client";

import { useState } from "react";
import { 
  Globe, 
  ArrowRightLeft, 
  Calculator, 
  FileText, 
  Building2,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Search,
  MapPin,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const ASEAN_COUNTRIES = [
  { code: "ID", name: "Indonesia", currency: "IDR", taxRate: "22%", vatRate: "12%", flag: "🇮🇩" },
  { code: "SG", name: "Singapore", currency: "SGD", taxRate: "17%", vatRate: "9% (GST)", flag: "🇸🇬" },
  { code: "MY", name: "Malaysia", currency: "MYR", taxRate: "24%", vatRate: "8% (SST)", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", currency: "THB", taxRate: "20%", vatRate: "7%", flag: "🇹🇭" },
  { code: "VN", name: "Vietnam", currency: "VND", taxRate: "20%", vatRate: "10%", flag: "🇻🇳" },
  { code: "PH", name: "Philippines", currency: "PHP", taxRate: "25%", vatRate: "12%", flag: "🇵🇭" },
  { code: "BN", name: "Brunei", currency: "BND", taxRate: "18.5%", vatRate: "Tidak ada", flag: "🇧🇳" },
  { code: "KH", name: "Cambodia", currency: "KHR", taxRate: "20%", vatRate: "10%", flag: "🇰🇭" },
  { code: "LA", name: "Laos", currency: "LAK", taxRate: "20%", vatRate: "10%", flag: "🇱🇦" },
  { code: "MM", name: "Myanmar", currency: "MMK", taxRate: "25%", vatRate: "5%", flag: "🇲🇲" },
];

interface TaxComparison {
  aspect: string;
  description: string;
  countries: Record<string, string>;
}

const TAX_COMPARISONS: TaxComparison[] = [
  {
    aspect: "Corporate Income Tax",
    description: "Tarif pajak penghasilan badan",
    countries: {
      "ID": "22% (2025)",
      "SG": "17%",
      "MY": "24%",
      "TH": "20%",
      "VN": "20%",
      "PH": "25%",
    },
  },
  {
    aspect: "Value Added Tax",
    description: "Tarif pajak pertambahan nilai",
    countries: {
      "ID": "12% (PPN)",
      "SG": "9% (GST)",
      "MY": "8% (SST)",
      "TH": "7%",
      "VN": "10%",
      "PH": "12%",
    },
  },
  {
    aspect: "Withholding Tax - Dividend",
    description: "Pemotongan atas dividen ke non-residen",
    countries: {
      "ID": "20%",
      "SG": "0%",
      "MY": "0%",
      "TH": "10%",
      "VN": "0%*",
      "PH": "15-30%",
    },
  },
  {
    aspect: "Withholding Tax - Interest",
    description: "Pemotongan atas bunga ke non-residen",
    countries: {
      "ID": "20%",
      "SG": "15%",
      "MY": "15%",
      "TH": "15%",
      "VN": "5%",
      "PH": "15-20%",
    },
  },
  {
    aspect: "Withholding Tax - Royalty",
    description: "Pemotongan atas royalti ke non-residen",
    countries: {
      "ID": "20%",
      "SG": "10%",
      "MY": "10%",
      "TH": "15%",
      "VN": "10%",
      "PH": "15-30%",
    },
  },
];

export default function ASEANPage() {
  const [selectedCountry, setSelectedCountry] = useState("ID");
  const [income, setIncome] = useState("");
  const [activeTab, setActiveTab] = useState("comparison");

  const country = ASEAN_COUNTRIES.find(c => c.code === selectedCountry);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">ASEAN Tax Hub</h1>
            <p className="text-sm text-muted-foreground">
              Perbandingan perpajakan dan kalkulator cross-jurisdiction untuk ASEAN
            </p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="comparison">
            <ArrowRightLeft className="h-4 w-4 mr-2" />
            Perbandingan
          </TabsTrigger>
          <TabsTrigger value="calculator">
            <Calculator className="h-4 w-4 mr-2" />
            Kalkulator
          </TabsTrigger>
          <TabsTrigger value="treaty">
            <FileText className="h-4 w-4 mr-2" />
            Tax Treaty
          </TabsTrigger>
          <TabsTrigger value="guide">
            <Briefcase className="h-4 w-4 mr-2" />
            Business Guide
          </TabsTrigger>
        </TabsList>

        {/* Comparison Tab */}
        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Perbandingan Tarif Pajak ASEAN</CardTitle>
              <CardDescription>
                Bandingkan tarif pajak di berbagai negara ASEAN
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2 font-semibold">Aspek</th>
                      {["ID", "SG", "MY", "TH", "VN", "PH"].map((code) => {
                        const c = ASEAN_COUNTRIES.find(x => x.code === code);
                        return (
                          <th key={code} className="text-center py-3 px-2">
                            <span className="text-2xl">{c?.flag}</span>
                            <p className="text-xs font-medium mt-1">{c?.name}</p>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {TAX_COMPARISONS.map((item, idx) => (
                      <tr key={idx} className="hover:bg-muted/50">
                        <td className="py-3 px-2">
                          <p className="font-medium">{item.aspect}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </td>
                        {["ID", "SG", "MY", "TH", "VN", "PH"].map((code) => (
                          <td key={code} className="text-center py-3 px-2">
                            <span className={cn(
                              "inline-flex items-center px-2 py-1 rounded text-xs font-medium",
                              item.countries[code]?.includes("0%") 
                                ? "bg-green-100 text-green-800" 
                                : "bg-blue-50 text-blue-800"
                            )}>
                              {item.countries[code] || "-"}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Country Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {ASEAN_COUNTRIES.map((c) => (
              <Card 
                key={c.code}
                className={cn(
                  "cursor-pointer transition-all hover:shadow-md",
                  selectedCountry === c.code && "ring-2 ring-primary"
                )}
                onClick={() => setSelectedCountry(c.code)}
              >
                <CardContent className="p-4 text-center">
                  <span className="text-3xl">{c.flag}</span>
                  <p className="font-semibold text-sm mt-2">{c.name}</p>
                  <Badge variant="outline" className="text-[10px] mt-1">
                    CIT: {c.taxRate}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Calculator Tab */}
        <TabsContent value="calculator">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Kalkulator Tax Cross-Border</CardTitle>
                <CardDescription>
                  Hitung pajak untuk transaksi lintas negara ASEAN
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Negara Sumber</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3">
                    {ASEAN_COUNTRIES.map(c => (
                      <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Negara Tujuan</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3">
                    {ASEAN_COUNTRIES.filter(c => c.code !== "ID").map(c => (
                      <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Jenis Penghasilan</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3">
                    <option>Dividen</option>
                    <option>Bunga</option>
                    <option>Royalti</option>
                    <option>Service Fee</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Jumlah (USD)</label>
                  <Input type="number" placeholder="100,000" />
                </div>
                <Button className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Hitung Pajak
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle>Hasil Perhitungan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-sm">Jumlah Penghasilan</span>
                  <span className="font-semibold">USD 100,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-sm">Tarif WHT Indonesia</span>
                  <span className="font-semibold">20%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-sm">Tarif WHT Singapore</span>
                  <span className="font-semibold text-green-600">0%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                  <span className="text-sm font-medium">Total Pajak Terutang</span>
                  <span className="font-bold text-red-600">USD 0</span>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Tax Treaty Benefit</span>
                  </div>
                  <p className="text-xs text-green-700">
                    Berdasarkan tax treaty Indonesia-Singapore, dividen ke Singapore tidak dikenai WHT jika memenuhi substance requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Treaty Tab */}
        <TabsContent value="treaty">
          <Card>
            <CardHeader>
              <CardTitle>Tax Treaty Network Indonesia</CardTitle>
              <CardDescription>
                Double Taxation Avoidance Agreement (DTAA) Indonesia dengan negara ASEAN
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { country: "Singapore", whtDividen: "15% → 0%*", whtBunga: "10%", whtRoyalti: "15%", status: "Active" },
                  { country: "Malaysia", whtDividen: "15% → 10%", whtBunga: "10%", whtRoyalti: "10%", status: "Active" },
                  { country: "Thailand", whtDividen: "20% → 15%", whtBunga: "15% → 10%", whtRoyalti: "15%", status: "Active" },
                  { country: "Vietnam", whtDividen: "15% → 10%", whtBunga: "15%", whtRoyalti: "15%", status: "Active" },
                  { country: "Philippines", whtDividen: "20% → 15%", whtBunga: "15% → 10%", whtRoyalti: "15%", status: "Active" },
                  { country: "Brunei", whtDividen: "20% → 10%", whtBunga: "15%", whtRoyalti: "15%", status: "Active" },
                ].map((treaty, idx) => (
                  <Card key={idx} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold">{treaty.country}</h3>
                        <Badge className="bg-green-100 text-green-800">{treaty.status}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dividen:</span>
                          <span className="font-medium">{treaty.whtDividen}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bunga:</span>
                          <span className="font-medium">{treaty.whtBunga}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Royalti:</span>
                          <span className="font-medium">{treaty.whtRoyalti}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Business Guide Tab */}
        <TabsContent value="guide">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Establishing Business",
                icon: Building2,
                items: ["Company registration", "Tax identification", "Licensing requirements"],
              },
              {
                title: "Transfer Pricing",
                icon: ArrowRightLeft,
                items: ["Documentation rules", "APA procedures", "BEPS compliance"],
              },
              {
                title: "Tax Incentives",
                icon: TrendingUp,
                items: ["Tax holidays", "Investment allowances", "Special economic zones"],
              },
            ].map((guide, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <guide.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {guide.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Lihat Detail
                    <ArrowRightLeft className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
