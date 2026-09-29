import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-brand-sage-mist relative small:min-h-screen">
      <div className="h-16 bg-brand-sage-mist border-b border-brand-sage-dark/20">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="flex items-center gap-x-2 flex-1 basis-0 text-brand-charcoal"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="mt-px hidden small:inline-block rounded-full bg-brand-charcoal px-3 py-1 txt-compact-plus text-brand-cream hover:bg-brand-terracotta-dark transition-colors">
              Back to shopping cart
            </span>
            <span className="mt-px inline-block small:hidden rounded-full bg-brand-charcoal px-3 py-1 txt-compact-plus text-brand-cream hover:bg-brand-terracotta-dark transition-colors">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="font-heading text-xl text-brand-charcoal hover:text-brand-terracotta-dark transition-colors"
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
