import React from "react"

import { IconProps } from "types/icon"

const PawPrint: React.FC<IconProps> = ({
  size = "12",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <ellipse cx="10" cy="13.2" rx="4.6" ry="3.9" fill={color} />
      <ellipse cx="4.2" cy="8.3" rx="2" ry="2.5" fill={color} />
      <ellipse cx="8.4" cy="4.9" rx="1.9" ry="2.5" fill={color} />
      <ellipse cx="12.6" cy="4.9" rx="1.9" ry="2.5" fill={color} />
      <ellipse cx="16.2" cy="8.3" rx="2" ry="2.5" fill={color} />
    </svg>
  )
}

export default PawPrint
