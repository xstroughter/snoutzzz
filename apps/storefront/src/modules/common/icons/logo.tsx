import Image from "next/image"
import React from "react"

type LogoProps = {
  size?: string | number
}

const Logo: React.FC<LogoProps> = ({ size = 36 }) => {
  return (
    <span
      className="relative inline-block rounded-full overflow-hidden shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src="/hero/noodlez-sleepy.png"
        alt="Noodlez, the Snoutzzz mascot"
        fill
        sizes="48px"
        className="object-cover"
      />
    </span>
  )
}

export default Logo
