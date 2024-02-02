import { Typography } from "@mui/material"

import { BiLogoGmail as Gmail } from "react-icons/bi"
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6"

export default function Contacts() {
  return (
    <section>
      <Typography variant="h3" sx={{fontWeight: 'bold'}} className="text-center">
        My Contacts
      </Typography>
      <Typography variant="h6" className="py-2 text-center text-gray-500">
        Connect with me on...
      </Typography>
      <div className="flex justify-center items-center gap-4 mb-24">
        <a 
          className="transition-all rounded-full shadow-xl hover:bg-gray-100"
          href='mailto:kenneth4832@gmail.com' 
          rel="noopener noreferrer"
        >
          <Gmail size={70} className="p-4 text-red-800 rounded-full"/>
        </a>
        <a
          className="transition-all rounded-full shadow-xl hover:bg-gray-100"
          href='https://linkedin.com/in/kenneth-onuorah-64640419b' 
          target="_blank" 
          rel="noopener noreferrer">
          <Linkedin size={70} className="p-4 text-blue-400"/>
        </a>
        <a
          className="transition-all rounded-full shadow-xl hover:bg-gray-100" 
          href='https://github.com/KennethOnuorah' 
          target="_blank" 
          rel="noopener noreferrer">
          <Github size={70} className="p-4 rounded-full"/>
        </a>
      </div>
    </section>
  )
}
