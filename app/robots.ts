import type { MetadataRoute } from "next";

const productionOrigin = "https://nord-garage.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${productionOrigin}/sitemap.xml`,
  };
}
