import React from "react"

type LogoProps = {
  size?: string | number
} & React.SVGAttributes<SVGElement>

const Logo: React.FC<LogoProps> = ({ size = "36", ...attributes }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -10 175 165"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <rect x="-5" y="-15" width="185" height="180" rx="48" fill="#8DA576" />
      <polygon points="30,45 45,10 62,42" fill="#FFD3A8" stroke="#5B4636" strokeWidth="3" />
      <polygon points="130,45 115,10 98,42" fill="#FFD3A8" stroke="#5B4636" strokeWidth="3" />
      <circle cx="80" cy="85" r="52" fill="#FFF8EF" stroke="#5B4636" strokeWidth="3.5" />
      <line x1="30" y1="90" x2="6" y2="85" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="96" x2="4" y2="96" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="101" x2="6" y2="107" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="130" y1="90" x2="154" y2="85" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="130" y1="96" x2="156" y2="96" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="130" y1="101" x2="154" y2="107" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="52" cy="98" r="9" fill="#FFC7A6" opacity="0.7" />
      <circle cx="108" cy="98" r="9" fill="#FFC7A6" opacity="0.7" />
      <path d="M56 82 Q64 74 72 82" fill="none" stroke="#5B4636" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M88 82 Q96 74 104 82" fill="none" stroke="#5B4636" strokeWidth="3.5" strokeLinecap="round" />
      <polygon points="74,94 86,94 80,102" fill="#5B4636" />
      <path d="M80 102 L80 106" fill="none" stroke="#5B4636" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 106 Q74 112 68 107" fill="none" stroke="#5B4636" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M80 106 Q86 112 92 107" fill="none" stroke="#5B4636" strokeWidth="2.5" strokeLinecap="round" />
      <text x="118" y="44" fontFamily="Fredoka, system-ui, sans-serif" fontWeight="700" fontSize="18" fill="#8FCBE0">z</text>
      <text x="132" y="29" fontFamily="Fredoka, system-ui, sans-serif" fontWeight="700" fontSize="24" fill="#8FCBE0">z</text>
      <text x="150" y="10" fontFamily="Fredoka, system-ui, sans-serif" fontWeight="700" fontSize="30" fill="#8FCBE0">z</text>
    </svg>
  )
}

export default Logo
