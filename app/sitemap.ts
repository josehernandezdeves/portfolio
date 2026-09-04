import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
