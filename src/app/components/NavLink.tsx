'use client'

import Link from "next/link"
import { useState } from "react"

interface Props {
  href: string,
  name: string,
  icon: React.ReactNode,
  onClick?: (() => void) | undefined
}

export default function NavLink({href, name, icon, onClick} : Props) {
  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <Link 
      href={href} 
      className='transition-all font-semibold text-3xl text-gray-500 hover:text-black sm:text-xl'
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={() => onClick && onClick()}
    >
      <div className="flex justify-center items-baseline gap-1.5 mb-1 sm:justify-normal">
        {icon}
        {name}
      </div>
      <hr className={`transition-all outline-4 border-black border-2 rounded-full ${isMouseOver ? 'w-full' : 'w-0 border-transparent'}`}/>
    </Link>
  )
}
