export default function Skills() {
    return <div className="d-flex flex-column flex-lg-row gap-4 justify-content-center mx-5" id="skillBoxes">
        <SkillBox id="programmingLanguages" elements={["Python", "Java", "C#", "C++"]} />
        <SkillBox id="webDev" elements={["HTML", "CSS", "React", "Three.js"]} />
        <SkillBox id="gameDev" elements={["Unity Engine", "Unreal Engine"]} />
    </div>;
}

function SkillBox({ id, elements }) {
    let boxHeader = "";
    // let boxColor = "white";
    if (id === "programmingLanguages") {
        boxHeader = "Programming Languages";
        // boxColor = "salmon";
    } else if (id === "webDev") {
        boxHeader = "Web Development";
        // boxColor = "lightgreen";
    } else if (id === "gameDev") {
        boxHeader = "Game Development";
        // boxColor = "paleturquoise";
    }

    return <div className="skillsBox w-lg-25 text-center rounded py-3 px-5" id={id}>
        <h6>{boxHeader}</h6>
        <ul>{elements.map((item) => <li key={`${item}Key`}>{item}</li>)}</ul>
    </div>;
}