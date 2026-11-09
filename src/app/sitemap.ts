import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/services";
import { CASE_STUDIES_DATA } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://profound.agency";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/approach",
    "/pricing",
    "/contact",
    "/insights",
    "/privacy",
    "/terms",
    "/security",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route === "/services" || route === "/work" ? 0.9 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const workRoutes = CASE_STUDIES_DATA.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}

