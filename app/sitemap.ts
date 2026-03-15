import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pajakku.vercel.app";

  const routes = [
    { path: "", priority: 1 },
    { path: "/glosarium", priority: 0.8 },
    { path: "/kalender", priority: 0.9 },
    { path: "/kalkulator", priority: 0.9 },
    { path: "/kalkulator/pph-21", priority: 0.8 },
    { path: "/kalkulator/ppn", priority: 0.8 },
    { path: "/regulasi", priority: 0.8 },
    { path: "/alerts", priority: 0.7 },
    { path: "/asean", priority: 0.7 },
    { path: "/community", priority: 0.7 },
    { path: "/templates", priority: 0.7 },
    { path: "/(knowledge)/pph", priority: 0.8 },
    { path: "/(knowledge)/ppn", priority: 0.8 },
    { path: "/(knowledge)/kup", priority: 0.8 },
    { path: "/(knowledge)/pbb", priority: 0.8 },
    { path: "/(knowledge)/coretax", priority: 0.7 },
    { path: "/(knowledge)/resources/books", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}/`,
    lastModified: new Date(),
    priority: route.priority,
  }));
}
