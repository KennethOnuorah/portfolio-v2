import Image from "next/image"

import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { HiOutlineExternalLink as DemoLink } from "react-icons/hi"

type Props = {
  title: string
  description: string
  image: string
  repoLink: string
  hasDemo?: true
  demoLink: string
  bp: GridItemBreakpoints
} | {
  title: string
  description: string
  image: string
  repoLink: string
  hasDemo?: false
  demoLink?: never
  bp: GridItemBreakpoints
}

export default function Project({...props} : Props) {
  return (
    <Grid xs={props.bp.xs} sm={props.bp.sm} md={props.bp.md}>
      <article className="">
        <a href={props.repoLink} target="_blank" rel="noopener noreferrer">
          <Image
            className="transition-all h-auto w-auto mb-8 shadow-gray-400 shadow-xl cursor-pointer hover:-translate-y-2"
            src={props.image} 
            alt={`Image of "${props.title}" project`} 
            width={0} height={0}
            sizes="100vw"
            priority
          />
        </a>
        <Typography 
          variant="h5"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontWeight: 'bold',
            marginBottom: '8px'
          }}
          className="flex items-center gap-1 font-bold mb-2"
        >
          {props.title}
        </Typography>
        <Typography variant="body1" sx={{'color': 'gray'}}>
          {props.description} {props.hasDemo && 
            <a className="w-max flex items-center gap-1 text-purple-400 underline" href={props.demoLink} target="_blank" rel="noopener noreferrer">
              Visit Demo
              <DemoLink/>
            </a>
          }
        </Typography>
      </article>
    </Grid>
  )
}
