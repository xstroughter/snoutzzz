import React from "react"

import { IconProps } from "types/icon"

const Threads: React.FC<IconProps> = ({
  size = "20",
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
      <path
        d="M10 2.5c-4.2 0-6.2 2.7-6.2 7.2s2 7.8 6.3 7.8c3.1 0 4.9-1.4 5.5-3.6.5-1.8-.1-3.4-2.1-4.1-.1-1.7-1.2-2.9-3.1-2.9-1.4 0-2.5.7-3 1.9l1.3.6c.3-.7.9-1.1 1.7-1.1 1 0 1.6.6 1.7 1.6-.6-.1-1.3-.1-1.9 0-1.9.3-3 1.4-2.9 2.9.1 1.5 1.4 2.4 3.1 2.3 1.9-.1 2.8-1.3 3-2.9.7.4 1 1.1.7 2-.4 1.3-1.6 2.1-3.9 2.1-3 0-4.7-1.9-4.7-6.4s1.7-5.8 4.7-5.8c1.7 0 2.9.6 3.7 1.7l1.2-.9C13.4 3.3 11.9 2.5 10 2.5Zm.5 8c.4 0 .9 0 1.4.1 0 1.3-.6 2-1.7 2-.9 0-1.4-.4-1.5-1-.1-.7.5-1.1 1.8-1.1Z"
        fill={color}
      />
    </svg>
  )
}

export default Threads
