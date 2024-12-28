import projects from './projects.module.css';

export function Tag({ tagType }) {
    let res;
    if (tagType === "SWE") {
        res = <div className={`${projects.tag} ${projects.sweTag} d-inline-flex text-center px-2`}>SWE</div>;
    } else if (tagType === "Web Dev") {
        res = <div className={`${projects.tag} ${projects.webTag} d-inline-flex text-center px-2`}>Web Dev</div>;
    } else if (tagType === "Game") {
        res = <div className={`${projects.tag} ${projects.gameTag} d-inline-flex text-center px-2`}>Game</div>;
    } else if (tagType === "Graphics") {
        res = <div className={`${projects.tag} ${projects.graphicsTag} d-inline-flex text-center px-2`}>Graphics</div>;
    }

    return res;
}