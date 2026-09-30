import { Metadata } from "next"

import { getCategoryByHandle } from "@lib/data/categories"
import { parseOptionValueIds } from "@lib/util/product-option-filters"
import { parsePriceRange } from "@lib/util/price-range-filters"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Shop — Snoutzzz",
  description: "Calming beds, wraps, and enrichment for anxious pets.",
}

// The URL's `category` value uses simple handles; "humans" maps to the
// category's real (and URL-unfriendly) handle behind the scenes.
const SPECIES_CATEGORY_HANDLES: Record<string, string> = {
  dog: "dog",
  cat: "cat",
  humans: "charms-&-keepsakes",
}

type StorePageSearchParams = Record<string, string | string[] | undefined> & {
  sortBy?: SortOptions
  page?: string
  optionValueIds?: string | string[]
  category?: string
}

type Params = {
  searchParams: Promise<StorePageSearchParams>
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { sortBy, page, category } = searchParams
  const optionValueIds = parseOptionValueIds(searchParams)
  const priceRange = parsePriceRange(searchParams)

  const selectedCategory =
    category && category in SPECIES_CATEGORY_HANDLES ? category : undefined

  const productCategory = selectedCategory
    ? await getCategoryByHandle([
        SPECIES_CATEGORY_HANDLES[selectedCategory],
      ]).catch(() => undefined)
    : undefined

  return (
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
      optionValueIds={optionValueIds}
      priceRange={priceRange}
      selectedSpecies={selectedCategory}
      categoryId={productCategory?.id}
      categoryName={productCategory?.name}
    />
  )
}
