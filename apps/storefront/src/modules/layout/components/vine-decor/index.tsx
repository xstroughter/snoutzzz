const RAIL_TOP = "4rem"

// Content-container padding is a fixed px-6 (24px) at every breakpoint until
// the 1440px container itself starts leaving real margin (large screens and
// up). Below xlarge there's only ever a thin sliver of room, and the full
// multi-strand artwork turns to mush at that size — so small/medium/large
// screens get a simplified single-strand version instead, and only xlarge+
// (where there's real margin to work with) gets the full detailed art.
const COMPACT_WIDTH_CLASSES = "w-[12px] small:w-[18px] large:w-[26px]"
const FULL_WIDTH_CLASSES = "xlarge:w-[110px] 2xlarge:w-[150px]"

const VineDecor = () => {
  return (
    <>
      {/* Compact single-strand version: small/medium/large screens */}
      <div
        aria-hidden="true"
        className={`flex xlarge:hidden flex-col absolute pointer-events-none z-30 ${COMPACT_WIDTH_CLASSES}`}
        style={{ top: RAIL_TOP, bottom: 0, left: 0 }}
      >
        <img src="/decor/vine-compact-header-left.png" alt="" className="w-full block" />
        <div
          className="flex-1 w-full"
          style={{
            backgroundImage: "url(/decor/vine-compact-tile-left.png)",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "top left",
            backgroundSize: "100% auto",
          }}
        />
        <img src="/decor/vine-compact-tip-left.png" alt="" className="w-full block" />
      </div>
      <div
        aria-hidden="true"
        className={`flex xlarge:hidden flex-col absolute pointer-events-none z-30 ${COMPACT_WIDTH_CLASSES}`}
        style={{ top: RAIL_TOP, bottom: 0, right: 0 }}
      >
        <img src="/decor/vine-compact-header-right.png" alt="" className="w-full block" />
        <div
          className="flex-1 w-full"
          style={{
            backgroundImage: "url(/decor/vine-compact-tile-right.png)",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "top right",
            backgroundSize: "100% auto",
          }}
        />
        <img src="/decor/vine-compact-tip-right.png" alt="" className="w-full block" />
      </div>

      {/* Full detailed version: xlarge+ screens, where there's room for it */}
      <div
        aria-hidden="true"
        className={`hidden xlarge:flex flex-col absolute pointer-events-none z-30 ${FULL_WIDTH_CLASSES}`}
        style={{ top: RAIL_TOP, bottom: 0, left: 0 }}
      >
        <img src="/decor/vine-header-left.png" alt="" className="w-full block" />
        <div
          className="flex-1 w-full"
          style={{
            backgroundImage: "url(/decor/vine-tile-left.png)",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "top left",
            backgroundSize: "100% auto",
          }}
        />
        <img src="/decor/vine-tip-left.png" alt="" className="w-full block" />
      </div>
      <div
        aria-hidden="true"
        className={`hidden xlarge:flex flex-col absolute pointer-events-none z-30 ${FULL_WIDTH_CLASSES}`}
        style={{ top: RAIL_TOP, bottom: 0, right: 0 }}
      >
        <img src="/decor/vine-header-right.png" alt="" className="w-full block" />
        <div
          className="flex-1 w-full"
          style={{
            backgroundImage: "url(/decor/vine-tile-right.png)",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "top right",
            backgroundSize: "100% auto",
          }}
        />
        <img src="/decor/vine-tip-right.png" alt="" className="w-full block" />
      </div>
    </>
  )
}

export default VineDecor
