import Greetings from "./components/Greetings"
import AboutMe from "./components/AboutMe"
import Contacts from "./components/Contacts"

export default function Home() {
  return (
    <main className="mt-40 px-6 md:mt-60 md:px-24">
      <Greetings/>
      <AboutMe/>
      <Contacts/>
    </main>
  )
}
