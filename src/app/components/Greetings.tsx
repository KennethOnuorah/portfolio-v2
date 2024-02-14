'use client'

import { useState } from "react"
import useViewportDimensions from "@/lib/hooks/useViewportDimensions"
import Image from "next/image"

import { Typography } from "@mui/material"
import Slide from "@mui/material/Slide"
import Fade from "@mui/material/Fade"

import { Typewriter } from "react-simple-typewriter"


export default function Greetings() {
  const [isEditing, setIsEditing] = useState(false)
  const {width,} = useViewportDimensions()

  return (
    <section className="flex flex-col-reverse text-center justify-evenly items-center gap-16 mb-64 lg:flex-row lg:text-left">
      <Typography 
        variant={width > 810 ? "h3" : "h4"}
        sx={{
          maxWidth: width > 810 ? 700 : 'auto',
        }}
      >
        Hi, my name is <strong>Kenneth</strong>, and I live in Austin, Texas.{width < 1024 && <br/>} I am a <strong>
          <Typewriter
            words={["Software Developer", "UI Developer", "Programmer"]}
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={3000}
            loop={0}
            onType={() => setIsEditing(true)}
            onDelay={() => setIsEditing(false)}
            onDelete={() => setIsEditing(true)}
          /></strong><span className={`text-gray-500 ${isEditing ? 'animate-none' : 'animate-blink'}`}>|</span>{width < 1024 && <br/>} with a great passion for TypeScript and UI & software technologies.
      </Typography>
      <Slide direction="left" timeout={500} in mountOnEnter>
        <Fade in>
          <Image 
            className="drop-shadow-lg shadow-black rounded-full" 
            src={'/images/avatar.png'} 
            alt="Cartoon avatar of Kenneth Onuorah" 
            width={270} height={0}
            style={{height: "auto"}}
          />
        </Fade>
      </Slide>
    </section>
  )
}
