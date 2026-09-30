import Image from "next/image"

import { Heading } from "@modules/common/components/ui"

const StoreBanner = () => {
  return (
    <div className="content-container pt-6">
      <div className="relative w-full h-[220px] small:h-[340px] rounded-large overflow-hidden">
        <Image
          src="/store/cozy-coffee-banner.png"
          alt="Noodlez the cat curled up on a warm, whipped-cream-topped drink"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1440px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/10 to-transparent" />
        <div className="absolute inset-0 flex items-end p-6 small:p-10">
          <Heading
            level="h2"
            className="font-heading text-3xl small:text-5xl text-brand-cream leading-tight"
          >
            It&apos;s Time To Get Cozzzy
          </Heading>
        </div>
      </div>
    </div>
  )
}

export default StoreBanner
