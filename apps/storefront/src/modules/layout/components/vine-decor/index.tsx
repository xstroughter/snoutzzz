const RAIL_TOP = "4rem"

// Content-container padding is a fixed px-6 (24px) at every breakpoint until
// the 1440px container itself starts leaving real margin (large screens and
// up). So the rail has to stay thin enough to sit inside that gutter on
// small/medium screens, then can grow once there's genuine margin to use.
const RAIL_WIDTH_CLASSES = "w-[12px] small:w-[18px] large:w-[24px] xlarge:w-[80px] 2xlarge:w-[110px]"

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
      </div>
    </>
  )
}

export default VineDecor
