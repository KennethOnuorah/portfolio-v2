'use client'

import { useState } from "react"

interface Props {
  icon: React.ReactNode,
  hoverColor?: string,
}

export default function Skill({ icon, hoverColor='black' } : Props) {
  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <figure 
      className={`bg-white flex items-center transition-all shadow-2xl p-8 ${isMouseOver ? 'rounded-3xl' : 'rounded-md'} cursor-pointer ${isMouseOver && 'scale-110'}`}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      style={{
        color: isMouseOver ? hoverColor : 'black',
        filter: isMouseOver ? `drop-shadow(0px 0px 1px ${hoverColor})` : 'none'
      }}
    >
      {icon}
    </figure>
  )
}
