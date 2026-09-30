import clsx from "clsx"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

type SpeciesSwitcherProps = {
  selected?: string
}

const OPTIONS = [
  { handle: undefined, label: "All" },
  { handle: "dog", label: "Dogs" },
  { handle: "cat", label: "Cats" },
  { handle: "humans", label: "Humans" },
]

const SpeciesSwitcher = ({ selected }: SpeciesSwitcherProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6" data-testid="species-switcher">
      {OPTIONS.map(({ handle, label }) => {
        const isSelected = selected === handle
        const href = handle ? `/store?category=${handle}` : "/store"

        return (
          <LocalizedClientLink
            key={label}
            href={href}
            className={clsx(
              "border-ui-border-base border text-small-regular h-10 rounded-rounded px-3 flex items-center transition-colors duration-150",
              {
                "border-ui-border-interactive text-ui-fg-base": isSelected,
                "text-ui-fg-muted hover:text-ui-fg-base": !isSelected,
              }
            )}
            aria-pressed={isSelected}
            data-testid={`species-switcher-${label.toLowerCase()}`}
          >
            {label}
          </LocalizedClientLink>
        )
      })}
    </div>
  )
}

export default SpeciesSwitcher
