export default function Header() {
    return <div className="d-flex flex-column pt-3 pb-5">
        <div className="d-flex flex-row" id="header">
            <h1 className="flex-fill">Hailey</h1>
            <div className="d-flex flex-row gap-5 flex-fill align-items-center" id="anchors">
                <a href="#introSection"><h3>Intro</h3></a>
                <a href="#projectsSection"><h3>Projects</h3></a>
                <a href="#skillsSection"><h3>Skills</h3></a>
                <a href="#experiencesSection"><h3>Experiences</h3></a>
            </div>
        </div>
        <hr className="solid"></hr>
    </div>;
}