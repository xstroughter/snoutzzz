import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Heading } from "@modules/common/components/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function PopularProducts({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      limit: 8,
      fields: "*variants.calculated_price",
    },
  })

  if (!products?.length) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between items-baseline mb-8">
        <Heading
          level="h2"
          className="font-heading text-3xl text-brand-charcoal"
        >
          Popular
        </Heading>
        <InteractiveLink href="/store">Shop all</InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-12 small:gap-y-16">
        {products.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} region={region} />
          </li>
        ))}
      </ul>
    </div>
  )
}
