'use client'

import { Metadata } from "next"
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import useViewportDimensions from "@/lib/hooks/useViewportDimensions";
import Project from "./components/Project";

function generateMetadata() : Metadata {
  return {
    title: 'Projects',
    description: "Kenneth Onuorah's list of projects",
  }
}

export default function ProjectsPage() {
  const {width,} = useViewportDimensions()

  return (
    <main className={`mt-36 ${width < 750 ? 'px-6' : 'px-36'} mb-24`}>
      <Typography 
        variant="h3" 
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        My Projects
      </Typography>
      <Typography 
        variant="h6" 
        sx={{
          textAlign: 'center',
          color: 'gray',
          marginBottom: '64px',
        }}
      >
        Some projects I developed in the past
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid columns={2} container spacing={4}>
          <Project
            title="Crypto Market Tracker"
            description="A web application that tracks and analyzes the cryptocurrency market in realtime. Made with React.js, Redux, React-Router, ApexCharts, and CoinGecko API."
            image="/images/crypto_image.png"
            repoLink="https://github.com/KennethOnuorah/CryptoTracker"
            bp={{md:1, sm: 2, xs: 2}}
          />
          <Project
            title="Blog"
            description="A personal blog website; made w/ Next.js, TailwindCSS, and Markdown-to-JSX, Front-Matter, and Highlight.js libraries."
            hasDemo
            demoLink="https://kennethonuorahblog.vercel.app"
            image="/images/blog_image2.png"
            repoLink="https://github.com/KennethOnuorah/next-blog-website"
            bp={{md:1, sm: 2, xs: 2}}
          />
          <Project
            title="WikiFind"
            description="A web app that returns Wikipedia data based on a given search query; built w/ Next.js, TailwindCSS, and the MediaWiki API."
            image="/images/wikifind_image.png"
            repoLink="https://github.com/KennethOnuorah/next-small-project"
            bp={{md:1, sm: 2, xs: 2}}
          />
          <Project
            title="Tunes"
            description="A Spotify-esque, local music-player web application created w/ React.js, Redux.js, and the LocalForage library."
            image="/images/tunes_image.png"
            hasDemo
            demoLink="https://kenneth-o-react-tunes.netlify.app/"
            repoLink="https://github.com/KennethOnuorah/React-Tunes"
            bp={{md:1, sm: 2, xs: 2}}
          />
          <Project
            title="Weather Reporter"
            description="A web application that reports weather and temperature forecasts based on a given location. Made with React.js, Redux, React-Router, and Geocode & Open-Meteo APIs."
            image="/images/weather_image.png"
            hasDemo
            demoLink="https://kenneth-o-react-weather.netlify.app/"
            repoLink="https://github.com/KennethOnuorah/React-Weather"
            bp={{md:1, sm: 2, xs: 2}}
          />
          <Project
            title="Errands & Todos"
            description="An task management web application; built with React.js and the JSON-Server library."
            image="/images/errands_image.png"
            repoLink="https://github.com/KennethOnuorah/React-Errands"
            bp={{md:1, sm: 2, xs: 2}}
          />
        </Grid>
      </Box>
    </main>
  )
}
