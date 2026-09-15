import React from "react"

type LogoProps = {
  size?: string | number
} & React.SVGAttributes<SVGElement>

const Logo: React.FC<LogoProps> = ({ size = "36", ...attributes }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <circle cx="140" cy="140" r="140" fill="#8DA576" />
      <polygon points="90,100 105,65 122,97" fill="#FFD3A8" stroke="#5B4636" strokeWidth="3" />
      <polygon points="190,100 175,65 158,97" fill="#FFD3A8" stroke="#5B4636" strokeWidth="3" />
      <circle cx="140" cy="140" r="52" fill="#FFF8EF" stroke="#5B4636" strokeWidth="3.5" />
      <line x1="90" y1="145" x2="66" y2="140" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="90" y1="151" x2="64" y2="151" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="90" y1="156" x2="66" y2="162" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="190" y1="145" x2="214" y2="140" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="190" y1="151" x2="216" y2="151" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="190" y1="156" x2="214" y2="162" stroke="#5B4636" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="112" cy="153" r="9" fill="#FFC7A6" opacity="0.7" />
      <circle cx="168" cy="153" r="9" fill="#FFC7A6" opacity="0.7" />
      <path d="M116 137 Q124 129 132 137" fill="none" stroke="#5B4636" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M148 137 Q156 129 164 137" fill="none" stroke="#5B4636" strokeWidth="3.5" strokeLinecap="round" />
      <polygon points="134,149 146,149 140,157" fill="#5B4636" />
      <path d="M140 157 L140 161" fill="none" stroke="#5B4636" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M140 161 Q134 167 128 162" fill="none" stroke="#5B4636" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M140 161 Q146 167 152 162" fill="none" stroke="#5B4636" strokeWidth="2.5" strokeLinecap="round" />
      <text x="178" y="99" fontFamily="Fredoka, system-ui, sans-serif" fontWeight="700" fontSize="18" fill="#8FCBE0">z</text>
      <text x="192" y="84" fontFamily="Fredoka, system-ui, sans-serif" fontWeight="700" fontSize="24" fill="#8FCBE0">z</text>
      <text x="210" y="65" fontFamily="Fredoka, system-ui, sans-serif" fontWeight="700" fontSize="30" fill="#8FCBE0">z</text>
    </svg>
  )
}

export default Logo
