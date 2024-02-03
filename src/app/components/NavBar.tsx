'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import NavLink from './NavLink';
import useViewportDimensions from '@/lib/hooks/useViewportDimensions';

import { FaRegLightbulb as Skills } from 'react-icons/fa';
import { GrProjects as Projects, GrDocumentText as Resume } from "react-icons/gr";
import { IoLogoGithub as GitHub, IoMenu as Open, IoClose as Close } from 'react-icons/io5';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {width,} = useViewportDimensions() as {width: number,}
  const navRef = useRef<HTMLElement>(null)

  const desktopNavContent = (
    <div className=' flex gap-16 items-end'>
      <div className='flex gap-16'>
        <NavLink href='/skills' name='Skills' icon={<Skills size={16}/>}/>
        <NavLink href='/projects' name='Projects' icon={<Projects size={16}/>}/>
        <NavLink href='/resume' name='Resume' icon={<Resume size={16}/>}/>
      </div>
      <Link 
        href={'https://github.com/KennethOnuorah/portfolio-v2'}
        target='_blank' 
        className='transition-all opacity-50 font-semibold hover:opacity-100'
      >
        <GitHub size={45}/>
      </Link>
    </div>
  )

  const mobileNavContent = ( 
    <div className='px-6 py-6'>
      <div className='flex flex-col items-center gap-6'>
        <NavLink 
          href='/skills' 
          name='Skills' 
          icon={<Skills size={width > 810 ? 16 : 24}/>}
          onClick={() => setIsMenuOpen(false)}
        />
        <NavLink 
          href='/projects' 
          name='Projects' 
          icon={<Projects size={width > 810 ? 16 : 24}/>}
          onClick={() => setIsMenuOpen(false)}
        />
        <NavLink 
          href='/resume' 
          name='Resume' 
          icon={<Resume size={width > 810 ? 16 : 24}/>}
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
      <div className='flex justify-center mt-8'>
        <Link 
          href={'https://github.com/KennethOnuorah/portfolio-v2'}
          target='_blank' 
          className='transition-all opacity-50 font-semibold hover:opacity-100'
          onClick={() => setIsMenuOpen(false)}
        >
          <GitHub size={60}/>
        </Link>
      </div>
    </div>
  )

  useEffect(() => {
    const id = document.querySelector('[id^="EZDrawer__container"]')!.id
    const menu = document.getElementById(id)
    menu!.style.marginTop = `${navRef.current?.clientHeight.toString()}px`
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed bg-white w-full top-0 left-0 z-10 flex justify-between flex-row py-6 px-6 items-start md:items-center sm:px-24`}
      >
        <Link href={'/'} className='text-4xl font-bold'>
          KO
        </Link>
        <div className='hidden md:block'>
          {desktopNavContent}
        </div>
        <button 
          className='transition-all block md:hidden hover:opacity-50 active:scale-75'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Close size={45}/> : <Open size={45}/>}
        </button>
      </nav>
      <Drawer
        open={isMenuOpen}
        direction='right'
        enableOverlay={false}
        lockBackgroundScroll
        style={{
          display: width < 810 ? 'block' : 'none', 
          marginTop: `${navRef.current?.clientHeight}px`,
          boxShadow: 'none',
          width: '100%'
        }}
      >
        {mobileNavContent}
      </Drawer>
    </>
  )
}