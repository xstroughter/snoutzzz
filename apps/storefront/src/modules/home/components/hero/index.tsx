import { Heading } from "@modules/common/components/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[75vh] w-full border-b border-brand-sage-dark/20 relative bg-brand-sage-mist overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-16 small:p-32 gap-6">
        <div className="relative w-56 h-56 small:w-80 small:h-80">
          <Image
            src="/hero/noodlez-sleepy.png"
            alt="Noodlez, the Snoutzzz mascot, dozing off"
            fill
            priority
            sizes="(max-width: 1024px) 224px, 320px"
            className="object-contain"
          />
        </div>
        <span className="flex flex-col gap-2">
          <Heading
            level="h1"
            className="font-heading text-4xl small:text-5xl leading-tight text-brand-charcoal font-normal"
          >
            Calm, cozy comfort
          </Heading>
          <Heading
            level="h2"
            className="font-heading text-4xl small:text-5xl leading-tight text-brand-charcoal italic font-normal"
          >
            for anxious pets
          </Heading>
        </span>
        <p className="max-w-md text-base text-brand-cream bg-brand-charcoal rounded-large px-5 py-4">
          Calming beds, wraps, and enrichment made for dogs who need a
          little extra ease — during storms, separation, or everyday
          overstimulation.
        </p>
        <LocalizedClientLink href="/store">
          <button className="px-6 py-3 rounded-full bg-brand-sage text-white hover:bg-brand-sage-dark transition-colors font-medium">
            Shop the collection
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  );
};

export default Hero;
