export const PRICE_RANGE_QUERY_KEY = "priceRange"

export type PriceRangeValue = "all" | "under-15" | "15-25" | "25-40" | "40-plus"

export type PriceRangeBounds = {
  min?: number
  max?: number
}

export const PRICE_RANGE_OPTIONS: {
  value: PriceRangeValue
  label: string
  bounds: PriceRangeBounds
}[] = [
  { value: "all", label: "All prices", bounds: {} },
  { value: "under-15", label: "Under $15", bounds: { max: 15 } },
  { value: "15-25", label: "$15 - $25", bounds: { min: 15, max: 25 } },
  { value: "25-40", label: "$25 - $40", bounds: { min: 25, max: 40 } },
  { value: "40-plus", label: "$40+", bounds: { min: 40 } },
]

export const getPriceRangeBounds = (
  value?: PriceRangeValue
): PriceRangeBounds => {
  return (
    PRICE_RANGE_OPTIONS.find((option) => option.value === value)?.bounds || {}
  )
}

export const parsePriceRange = (
  searchParams: Record<string, string | string[] | undefined>
): PriceRangeValue => {
  const paramValue = searchParams[PRICE_RANGE_QUERY_KEY]
  const value = Array.isArray(paramValue) ? paramValue[0] : paramValue

  if (
    value &&
    PRICE_RANGE_OPTIONS.some((option) => option.value === value)
  ) {
    return value as PriceRangeValue
  }

  return "all"
}
