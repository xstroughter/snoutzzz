import { listCategories } from "@lib/data/categories"
import { listProducts } from "@lib/data/products"
import { getBaseURL } from "@lib/util/env"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseURL()
  const countryCode = "us"

  const [categories, { response }] = await Promise.all([
    listCategories(),
    listProducts({
      countryCode,
      queryParams: { limit: 200, fields: "handle" },
    }),
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/${countryCode}`,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/${countryCode}/store`,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]

  const categoryRoutes: MetadataRoute.Sitemap = categories.map(
    (category) => ({
      url: `${baseUrl}/${countryCode}/categories/${category.handle}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  )

  const productRoutes: MetadataRoute.Sitemap = response.products.map(
    (product) => ({
      url: `${baseUrl}/${countryCode}/products/${product.handle}`,
      changeFrequency: "weekly",
      priority: 0.6,
    })
  )

  return [...staticRoutes, ...categoryRoutes, ...productRoutes]
}
