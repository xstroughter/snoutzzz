import { getCategoryByHandle } from "@lib/data/categories"
import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@modules/common/components/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function HumanFavorites({
  region,
}: {
  region: HttpTypes.StoreRegion
}) {
  const charmsCategory = await getCategoryByHandle(["charms-&-keepsakes"]).catch(
    () => undefined
  )

  if (!charmsCategory) {
    return null
  }

  const {
    response: { products },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      category_id: [charmsCategory.id],
      limit: 8,
      fields: "*variants.calculated_price",
    },
  })

  if (!products?.length) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between items-baseline mb-2">
        <Heading
          level="h2"
          className="font-heading text-3xl text-brand-charcoal"
        >
          For the Humans
        </Heading>
        <InteractiveLink href="/categories/charms-&-keepsakes">
          Shop all
        </InteractiveLink>
      </div>
      <Text className="text-brand-charcoal/60 mb-8">
        Pins, stickers, and little somethings for the cat (or dog) person —
        not the pet.
      </Text>
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
