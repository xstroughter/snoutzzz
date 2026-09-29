const RAIL_TOP = "4rem"
const RAIL_WIDTH = 110

const VineDecor = () => {
  return (
    <>
      <div
        aria-hidden="true"
        className="hidden xlarge:flex flex-col absolute pointer-events-none z-30"
        style={{ top: RAIL_TOP, bottom: 0, left: 0, width: RAIL_WIDTH }}
      >
        <img src="/decor/vine-header-left.png" alt="" className="w-full block" />
        <div
          className="flex-1 w-full"
          style={{
            backgroundImage: "url(/decor/vine-tile-left.png)",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "top left",
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="hidden xlarge:flex flex-col absolute pointer-events-none z-30"
        style={{ top: RAIL_TOP, bottom: 0, right: 0, width: RAIL_WIDTH }}
      >
        <img src="/decor/vine-header-right.png" alt="" className="w-full block" />
        <div
          className="flex-1 w-full"
          style={{
            backgroundImage: "url(/decor/vine-tile-right.png)",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "top right",
          }}
        />
      </div>
    </>
  )
}

export default VineDecor
