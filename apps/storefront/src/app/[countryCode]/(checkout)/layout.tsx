import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-brand-cream relative small:min-h-screen">
      <div className="h-16 bg-brand-cream border-b border-brand-cream-dark">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-small-semi text-brand-charcoal flex items-center gap-x-2 flex-1 basis-0"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="mt-px hidden small:block txt-compact-plus text-brand-charcoal/70 hover:text-brand-terracotta">
              Back to shopping cart
            </span>
            <span className="mt-px block small:hidden txt-compact-plus text-brand-charcoal/70 hover:text-brand-terracotta">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="font-heading text-xl text-brand-sage-dark hover:text-brand-terracotta transition-colors"
            data-testid="store-link"
          >
            Snoutzzz
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
    </div>
  )
}
