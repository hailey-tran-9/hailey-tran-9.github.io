export default function Section({ title, children }) {
    let sectionId = "";
    let space = "";
    if (title === "INTRO") {
        sectionId = "introSection";
        space = "introSpace";
    } else if (title === "PROJECTS") {
        sectionId = "projectsSection";
        space = "projectsSpace";
    } else if (title === "SKILLS") {
        sectionId = "skillsSection";
        space = "skillsSpace";
    } else if (title === "EXPERIENCES") {
        sectionId = "experiencesSection";
        space = "experiencesSpace";
    }

    return sectionId !== "" ? <section id={sectionId}>
        <h3 id={space}>{title === "INTRO" ? "" : title}</h3>
        {children}
    </section> : <></>;
}