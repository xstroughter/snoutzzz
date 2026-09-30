import { Suspense } from "react"

import { OptionValueIds } from "@lib/util/product-option-filters"
import { PriceRangeValue } from "@lib/util/price-range-filters"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import SpeciesSwitcher from "@modules/store/components/species-switcher"
import StoreBanner from "@modules/store/components/store-banner"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
  optionValueIds,
  priceRange,
  selectedSpecies,
  categoryId,
  categoryName,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
  optionValueIds?: OptionValueIds
  priceRange?: PriceRangeValue
  selectedSpecies?: string
  categoryId?: string
  categoryName?: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <>
      <StoreBanner />
      <div
        className="flex flex-col small:flex-row small:items-start py-6 content-container"
        data-testid="category-container"
      >
        <RefinementList sortBy={sort} />
        <div className="w-full">
          <SpeciesSwitcher selected={selectedSpecies} />
          <div className="mb-8">
            <h1
              className="font-heading text-3xl text-brand-charcoal"
              data-testid="store-page-title"
            >
              {categoryName || "All products"}
            </h1>
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              categoryId={categoryId}
              countryCode={countryCode}
              optionValueIds={optionValueIds}
              priceRange={priceRange}
            />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default StoreTemplate
