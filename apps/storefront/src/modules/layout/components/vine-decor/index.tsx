const RAIL_TOP = "4rem"

// Content-container padding is a fixed px-6 (24px) at every breakpoint until
// the 1440px container itself starts leaving real margin (large screens and
// up). So the rail stays thin enough to sit inside that gutter on
// small/medium screens, then grows once there's genuine margin to use —
// same artwork throughout, just scaled, so mobile and desktop match.
const RAIL_WIDTH_CLASSES = "w-[16px] small:w-[22px] large:w-[28px] xlarge:w-[110px] 2xlarge:w-[150px]"

const VineDecor = () => {
  return (
    <>
      <div
        aria-hidden="true"
        className={`flex flex-col absolute pointer-events-none z-30 ${RAIL_WIDTH_CLASSES}`}
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
        className={`flex flex-col absolute pointer-events-none z-30 ${RAIL_WIDTH_CLASSES}`}
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
