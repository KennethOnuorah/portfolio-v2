'use client'

import { useState } from "react"
import Image from "next/image"

import useViewportDimensions from "@/lib/hooks/useViewportDimensions"

import { Typewriter } from "react-simple-typewriter"
import Tilt from 'react-parallax-tilt'

import { Typography } from "@mui/material"
import Zoom from "@mui/material/Zoom"

export default function Greetings() {
  const [isEditing, setIsEditing] = useState(false)
  const {width,} = useViewportDimensions()

  const typeWrittenText = (
    <strong>
      <Typewriter
        words={["Software Developer", "UI Developer", "Programmer"]}
        typeSpeed={60}
        deleteSpeed={40}
        delaySpeed={3000}
        loop={0}
        onType={() => setIsEditing(true)}
        onDelay={() => setIsEditing(false)}
        onDelete={() => setIsEditing(true)}
      />
    </strong>)

  return (
    <section className="flex flex-col-reverse text-center justify-evenly items-center gap-16 mb-64 lg:flex-row lg:text-left">
      <Typography 
        variant={width > 810 ? "h3" : "h4"}
        sx={{
          maxWidth: width > 810 ? 700 : 'auto',
        }}
      >
        Hi, my name is <strong>Kenneth</strong>, and I live in Austin, Texas.{width < 1024 && <br/>} I am a {typeWrittenText}<span className={`text-gray-500 ${isEditing ? 'animate-none' : 'animate-blink'}`}>|</span>{width < 1024 && <br/>} with a great passion for TypeScript and UI & software technologies.
      </Typography>
      <Tilt scale={1} tiltReverse>
        <Zoom easing={'cubic-bezier(0.06, 1.22, 0.22, 0.96)'} timeout={1000} in>
          <Image 
            className="relative drop-shadow-lg shadow-black rounded-full" 
            src={'/images/avatar.png'} 
            alt="Cartoon avatar of Kenneth Onuorah" 
            width={270} height={0}
            style={{height: "auto"}}
          />
        </Zoom>
      </Tilt>
    </section>
  )
}
