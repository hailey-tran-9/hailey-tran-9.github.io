import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import Image from "next/image";

import CMGG from "../../public/images/cmgg_workshop.jpg";
import Decal from "../../public/images/gdd_decal.jpg";
import Fa23 from "../../public/images/gdd_fa23.jpg";
import Sp24 from "../../public/images/gdd_sp24.jpg";
import Tabling from "../../public/images/gdd_tabling.jpg";

export default function Experiences() {
    return <div className="d-flex flex-column">
        <div className="d-flex flex-column" id="experiencesSec1">
            <Carousel slide={false} className="w-100 w-lg-50 mx-auto rounded">
                <CarouselItem>
                    <Image
                        src={Fa23}
                        width={1000}
                        height={600}
                        alt="Fall 2023 GDD Officers"
                        priority={true}
                        className="mx-auto d-block rounded carouselImage"
                    />
                    <CarouselCaption>
                    <h5>GDD Officers</h5>
                    <p>Fall 2023</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src={Sp24}
                        width={1000}
                        height={600}
                        alt="Spring 2024 GDD Officers"
                        priority={true}
                        className="mx-auto d-block rounded carouselImage"
                    />
                    <CarouselCaption>
                    <h5>GDD Officers</h5>
                    <p>Spring 2024</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src={Tabling}
                        width={1000}
                        height={600}
                        alt="Tabling for GDD at Cal Gaming Expo"
                        priority={true}
                        className="mx-auto d-block rounded carouselImage"
                    />
                    <CarouselCaption>
                    <h5>GDD Tabling</h5>
                    <p>Fall 2023 Cal Gaming Expo</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src={Decal}
                        width={1000}
                        height={750}
                        alt="Fall 2023 Faciltator Team"
                        priority={true}
                        className="mx-auto d-block rounded carouselImage2"
                    />
                    <CarouselCaption>
                    <h5>GDD Decal</h5>
                    <p>Fall 2023 Faciltators</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <Image
                        src={CMGG}
                        width={1000}
                        height={650}
                        alt="Hosting a GDDxCMGG game dev workshop!"
                        className="mx-auto d-block rounded carouselImage"
                    />
                    <CarouselCaption>
                    <h5>GDDxCMGG Workshop</h5>
                    <p>I hosted the GDDxCMGG intro to game dev workshop!</p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
            <p className="w-75 align-self-center text-center mt-3">While I was a student, I was also involved in Game Design and Development at Berkeley (GDD)! GDD is a student organization that fosters the game development community at Berkeley by hosting game jams, industry/social events, offering mentorship, and running its own student-led elective class.</p>
        </div>

        <div className="experiencesBox px-3">
            <h5>President | Dec 2023 - May 2024</h5>
            <p>As the president, I got to work with others who were passionate about games and motivated to reach out to others. I was responsible for ensuring all administrative documents were up-to-date and handled interactions between our group and the ASUC/OASIS. I also organized and hosted all club officer staff meetings, scheduled and oversaw all events over the semester, and collaborated with other RSOs on campus. I hosted the board members (club, Party System, Decal) weekly meeting to keep every part of the organization in the loop.</p>
        </div>

        <div className="experiencesBox px-3 mt-5">
            <h5>Programming Facilitator | May 2023 - 2024</h5>
            <p>As a Programming facilitator of the Decal, I mentored a group of 5-6 students for 2 months as they developed their first video game in Unity Engine. I also assisted 40+ students with any technical questions during labs and held mini-lectures on different game design topics.</p>
            <div id="gamesMentored">
                <h6 className="text-center mt-4 my-lg-3">Games I Mentored</h6>
                <div className="d-flex flex-column flex-lg-row justify-content-center gap-2 gap-lg-5">
                    <a href="https://samhitag3.itch.io/operation-aptitude" target="_blank">
                        <div className="d-flex flex-column align-items-center">
                            <Image 
                                src={"https://img.itch.zone/aW1nLzE1OTUyNTY1LnBuZw==/315x250%23c/TdVGW7.png"}
                                width={200}
                                height={200}
                                alt="Operation Aptitude"
                                className="rounded mentoredGames"
                            />
                            <p className="text-center">Operation Aptitude</p>
                        </div>
                    </a>
                    <a href="https://pragma-twice.itch.io/homeforanderson" target="_blank">
                        <div className="d-flex flex-column align-items-center">
                            <Image 
                                src={"https://img.itch.zone/aW1nLzE0MTU5NTE4LnBuZw==/315x250%23c/BUzHWL.png"}
                                width={200}
                                height={200}
                                alt="Home for Anderson"
                                className="rounded mentoredGames"
                            />
                            <p className="text-center">Home for Anderson</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>;
}