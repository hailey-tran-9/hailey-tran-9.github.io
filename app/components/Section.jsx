export default function Section({ title, children }) {
    let sectionId = "";
    let space = "";
    if (title === "INTRO") {
        sectionId = "introSection";
        space = "0";
    } else if (title === "PROJECTS") {
        sectionId = "projectsSection";
        space = "5vh";
    } else if (title === "SKILLS") {
        sectionId = "skillsSection";
        space = "5vh";
    } else if (title === "EXPERIENCES") {
        sectionId = "experiencesSection";
        space = "5vh";
    }

    return sectionId !== "" ? <section id={sectionId}>
        <h3 style={{marginBottom:space}}>{title === "INTRO" ? "" : title}</h3>
        {children}
    </section> : <></>;
}