import Image from "next/image"
import { Typography } from "@mui/material"

export default function AboutMe() {
  return (
    <section>
      <Typography 
        variant="h3" 
        className="hidden lg:block"
        sx={{
          marginBottom: "2rem"
        }}
      >
        a little bit <strong>About Me</strong>...
      </Typography>
      <div className="flex flex-col-reverse text-center justify-between items-center gap-16 mb-24 lg:flex-row lg:text-left">
        <div>
          <Typography 
            variant="h3" 
            className="block lg:hidden"
            sx={{
              marginBottom: "2rem"
            }}
          >
            a little bit <strong>About Me</strong>...
          </Typography>
          <Typography 
            variant="h5"
            sx={{
              maxWidth: 800,
            }}
          >
            I was born and raised in Austin, Texas. I attended Austin Community College for two years, where I earned my Associates in <strong>Computer Science</strong>.
            <br /><br/>
            I am mainly fluent in <em>HTML, CSS/SCSS, TypeScript, and JavaScript</em>, along with some experience with <em>Python</em>. I typically work with <strong>React.js</strong> and <strong>Next.js</strong> for web & software development.
            <br /><br />
            Apart from coding, some other hobbies that I enjoy include...
          </Typography>
          <Typography variant="h6" className="text-gray-500">
            <ul className="pl-8 list-disc list-inside lg:list-outside">
              <li>Reading books 🤓📚</li>
              <li>Playing video games 🎮 (currently playing <em>Elden Ring</em> ⚔️)</li>
              <li>Learning to play guitar 🤔🎸</li>
            </ul>
          </Typography>
        </div>
        <Image className="animate-levitate" src={'/images/aboutme.gif'} alt="Levitating .gif of a laptop" width={400} height={0} style={{height: "auto"}}/>
      </div>
    </section>
  )
}
