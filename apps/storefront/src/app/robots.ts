import { getBaseURL } from "@lib/util/env"
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account", "/cart", "/checkout"],
    },
    sitemap: `${getBaseURL()}/sitemap.xml`,
  }
}
