import AppShell from "@/layout/AppShell"
import Hero from "@/sections/Hero"
import Projects from "@/sections/Projects"
import Skills from "@/sections/Skills"
import About from "@/sections/About"
import Contact from "@/sections/Contact"

function App() {
  return (
    <AppShell>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </AppShell>
  )
}

export default App