import type { MetadataRoute } from "next";
import { services } from "@/config/services";

const productionOrigin = "https://nord-garage-kld.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${productionOrigin}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${productionOrigin}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${productionOrigin}/contacts`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${productionOrigin}/works`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map(({ slug }) => ({
    url: `${productionOrigin}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
