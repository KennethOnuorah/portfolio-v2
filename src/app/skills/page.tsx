'use client'

import { Metadata } from "next"
import { Typography } from "@mui/material"

import useViewportDimensions from "@/lib/hooks/useViewportDimensions"
import Skill from "./components/Skill"

import { 
  IoLogoHtml5 as HTML, 
  IoLogoCss3 as CSS,
  IoLogoSass as SCSS,
  IoLogoJavascript as JS,
  IoLogoPython as PY,
  IoLogoReact as React,
} from "react-icons/io5"
import { BiLogoTypescript as TS} from "react-icons/bi"
import { 
  SiNextdotjs as Next,
  SiTailwindcss as Tailwind,
  SiRedux as Redux,
  SiVite as Vite,
  SiKibana as Kibana,
  SiElasticsearch as ES,
  SiJupyter as JPY,
  SiVisualstudio as VSCode,
  SiNetlify as Netlify,
} from "react-icons/si"
import { FaGitAlt as Git } from "react-icons/fa"
import { FiFigma as Figma } from "react-icons/fi"

function generateMetadata() : Metadata {
  return {
    title: 'Skills',
    description: "Kenneth Onuorah's list of skills",
  }
}

export default function SkillsPage() {
  const {width,} = useViewportDimensions() as {width: number,}

  return (
    <main className="mt-36 mb-24 mx-6 sm:mx-36">
      <Typography 
        variant="h3" 
        sx={{
          fontWeight: 'bold', 
          textAlign: 'center', 
          marginBottom: '2rem'
        }}
      >
        Languages Used
      </Typography>
      <div className="flex justify-center gap-8 flex-wrap mb-24">
        <Skill icon={<HTML size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="orange"/>
        <Skill icon={<CSS size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="blue"/>
        <Skill icon={<SCSS size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="magenta"/>
        <Skill icon={<TS size={80 - (width < 640 ? 40 : 0)}/>} hoverColor="#4587dc"/>
        <Skill icon={<JS size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="gold"/>
        <Skill icon={<PY size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="gold"/>
      </div>
      <hr />
      <Typography 
        variant="h3" 
        sx={{
          marginTop: '3rem',
          marginBottom: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Tools Used
      </Typography>
      <div className="flex justify-center gap-8 flex-wrap">
        <Skill icon={<React size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#04e2ff"/>
        <Skill icon={<Next size={70 - (width < 640 ? 40 : 0)}/>}/>
        <Skill icon={<Tailwind size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#00c2dc"/>
        <Skill icon={<Redux size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#9c00c8"/>
        <Skill icon={<Vite size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="lightgreen"/>
        <Skill icon={<Git size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#ff5500"/>
        <Skill icon={<Figma size={70 - (width < 640 ? 40 : 0)}/>}/>
        <Skill icon={<Netlify size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#03ebd7"/>
        <Skill icon={<Kibana size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#03ebd7"/>
        <Skill icon={<ES size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#03ebd7"/>
        <Skill icon={<JPY size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#e66f00"/>
        <Skill icon={<VSCode size={70 - (width < 640 ? 40 : 0)}/>} hoverColor="#14ace9"/>
      </div>
    </main>
  )
}
