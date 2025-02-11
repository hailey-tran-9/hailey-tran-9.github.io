import Image from "next/image";
import PFP from "../../public/images/grad.jpg";

export default function Intro() {
    return <div className="d-flex flex-row gap-4 justify-content-center">
        <Image
            src={PFP}
            width={200}
            height={300}
            alt="Hailey's Graduation Image"
            priority={true}
            className="rounded"
            id="pfp"
        />
        <div className="d-flex flex-column justify-content-center text-center w-50 gap-3">
            <p>Hi! I'm Hailey, a recent computer science graduate from the University of California-- Berkeley. I'm interested in software engineering and game development. Thanks for visiting my website!</p>
            <div className="d-flex flex-row gap-5 justify-content-center">
                <a>LinkedIn</a>
                <a>GitHub</a>
                <a>itch.io</a>
            </div>
        </div>
    </div>;
}