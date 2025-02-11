export default function Tag({ tagType }) {
    let res;
    if (tagType === "SWE") {
        res = <div className={"tag sweTag d-inline-flex text-center rounded px-2 py-1"}>SWE</div>;
    } else if (tagType === "Web Dev") {
        res = <div className={"tag webTag d-inline-flex text-center rounded px-2 py-1"}>Web Dev</div>;
    } else if (tagType === "Game") {
        res = <div className={"tag gameTag d-inline-flex text-center rounded px-2 py-1"}>Game</div>;
    } else if (tagType === "Graphics") {
        res = <div className={"tag graphicsTag d-inline-flex text-center rounded px-2 py-1"}>Graphics</div>;
    }

    return res;
}