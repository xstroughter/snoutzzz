import { Heading } from "@modules/common/components/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-brand-cream-dark relative bg-brand-cream overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span className="flex flex-col gap-2">
          <Heading
            level="h1"
            className="font-heading text-4xl small:text-5xl leading-tight text-brand-charcoal font-normal"
          >
            Calm, cozy comfort
          </Heading>
          <Heading
            level="h2"
            className="font-heading text-4xl small:text-5xl leading-tight text-brand-sage-dark font-normal"
          >
            for anxious pets
          </Heading>
        </span>
        <p className="max-w-md text-base text-brand-charcoal/70">
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
