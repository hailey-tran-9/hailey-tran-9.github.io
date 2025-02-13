export default function Header() {
    return <div className="d-flex flex-column py-3 py-xxl-5">
        <div className="d-flex flex-column flex-lg-row" id="header">
            <h1 className="flex-fill mb-xxs-3">Hailey</h1>
            <div className="d-flex flex-row flex-wrap gap-2 gap-md-3 gap-lg-5 flex-fill align-items-center" id="anchors">
                <a href="#introSection"><h3>Intro</h3></a>
                <a href="#projectsSection"><h3>Projects</h3></a>
                <a href="#skillsSection"><h3>Skills</h3></a>
                <a href="#experiencesSection"><h3>Experiences</h3></a>
            </div>
        </div>
        <hr className="solid"></hr>
    </div>;
}