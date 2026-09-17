"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import {
  PRICE_RANGE_OPTIONS,
  PriceRangeValue,
} from "@lib/util/price-range-filters"

type PriceRangeFilterProps = {
  priceRange: PriceRangeValue
  setPriceRange: (value: PriceRangeValue) => void
  "data-testid"?: string
}

const PriceRangeFilter = ({
  "data-testid": dataTestId,
  priceRange,
  setPriceRange,
}: PriceRangeFilterProps) => {
  const handleChange = (value: string) => {
    setPriceRange(value as PriceRangeValue)
  }

  return (
    <FilterRadioGroup
      title="Price"
      items={PRICE_RANGE_OPTIONS.map(({ value, label }) => ({ value, label }))}
      value={priceRange}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default PriceRangeFilter
