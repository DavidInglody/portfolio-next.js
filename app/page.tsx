import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import MainSkills from "@/components/MainSkills";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <MainSkills/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  )
}
