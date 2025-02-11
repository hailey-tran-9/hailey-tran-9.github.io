import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experiences from "./components/Experiences.jsx";
import Section from "./components/Section.jsx";

export default function Page() {
    return <>
        <div className="d-flex flex-column w-100 px-5">
            <Header />
            <Section title="INTRO"><Intro /></Section>
            <Section title="PROJECTS"><Projects /></Section>
            <Section title="SKILLS"><Skills /></Section>
            <Section title="EXPERIENCES"><Experiences /></Section>
        </div>
    </>
}