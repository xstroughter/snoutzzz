import { listCategories } from "@lib/data/categories";
import { listCollections } from "@lib/data/collections";
import { Text, clx } from "@modules/common/components/ui";

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Instagram from "@modules/common/icons/instagram";
import Threads from "@modules/common/icons/threads";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/snoutzzz/",
    Icon: Instagram,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@snoutzzz",
    Icon: Threads,
  },
]

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  });
  const productCategories = await listCategories();

  return (
    <footer className="border-t border-brand-cream-dark w-full bg-brand-cream">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div className="flex flex-col gap-y-3 max-w-xs">
            <LocalizedClientLink
              href="/"
              className="font-heading text-2xl text-brand-sage-dark hover:text-brand-terracotta transition-colors"
            >
              Snoutzzz
            </LocalizedClientLink>
            <Text className="txt-small text-brand-charcoal/60">
              Calm, cozy comfort for anxious pets.
            </Text>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-brand-charcoal">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return;
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null;

                    return (
                      <li
                        className="flex flex-col gap-2 text-brand-charcoal/60 txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-brand-terracotta",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-brand-terracotta"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-brand-charcoal">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-brand-charcoal/60 txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-brand-terracotta"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-brand-charcoal">
                Support
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-brand-charcoal/60 txt-small">
                <li>
                  <LocalizedClientLink
                    href="/account"
                    className="hover:text-brand-terracotta"
                  >
                    My Account
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/cart"
                    className="hover:text-brand-terracotta"
                  >
                    Cart
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between items-center text-brand-charcoal/50">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Snoutzzz. All rights reserved.
          </Text>
          <div className="flex items-center gap-x-4">
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-brand-terracotta transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
