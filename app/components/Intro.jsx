import Image from "next/image";
import PFP from "../../public/images/grad.jpg";
import LinkedIn from "../../public/images/LI-In-Bug.png";
import GitHub from "../../public/images/github-mark.png";
import ItchIO from "../../public/images/itchio-logo-textless-black.png";

export default function Intro() {
    return <div className="d-flex flex-column flex-lg-row gap-4 gap-xxl-5 align-items-center justify-content-lg-center">
        <Image
            src={PFP}
            width={200}
            height={300}
            alt="Hailey's Graduation Image"
            priority={true}
            className="rounded"
            id="pfp"
        />
        <div className="d-flex flex-column justify-content-center text-center gap-3" id="introInfo">
            <p>Hi! I'm Hailey, a recent computer science graduate from the University of California-- Berkeley. I'm interested in software engineering and game development. Thanks for visiting my website!</p>
            <div className="d-flex flex-row gap-2 gap-lg-5 justify-content-center">
                <a href="https://www.linkedin.com/in/hhytt/" target="_blank">
                    <Image src={LinkedIn} width={45} height={40} alt="LinkedIn Logo" />
                </a>
                <a href="https://github.com/hailey-tran-9" target="_blank">
                    <Image src={GitHub} width={40} height={40} alt="GitHub Logo" />
                </a>
                <a href="https://penguinies.itch.io/" target="_blank">
                    <Image src={ItchIO} width={40} height={40} alt="itch.io Logo" />
                </a>
            </div>
        </div>
    </div>;
}