import skills from './skills.module.css';
import { Navbar } from '../navbar';
import { AllLists } from './bpLists';
import Image from 'next/image';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';

import CMGG from '../../public/images/cmgg_workshop.jpg';
import Decal from '../../public/images/gdd_decal.jpg';
import Fa23 from '../../public/images/gdd_fa23.jpg';
import Sp24 from '../../public/images/gdd_sp24.jpg';
import Tabling from '../../public/images/gdd_tabling.jpg';

export default function Page() {
    return <>
        <div className="d-flex flex-column gap-3">

            <div className="bgPolygon" id={skills.bgPolygon}></div>
            <Navbar name="Skills" />

            <div className="d-flex flex-column-reverse flex-xxl-row flex-fill align-items-center">
                <div className={`d-flex flex-column justify-content-center gap-4 mb-5 ${skills.test}`}>
                    <AllLists 
                        categories={["Programming Languages", "Web Design", "Game Development"]}
                        bulletpoints={[["Python", "Java", "C#", "C++", "SQL"], ["HTML", "CSS", "Javascript", "React"], ["Unity Engine"]]} />
                </div>

                <div className={`d-flex flex-column justify-content-center ${skills.test}`} style={{maxWidth:"100vw"}}>
                    <Carousel slide={false} className="mx-auto" id={skills.carouselContent}>
                        <CarouselItem>
                            <Image
                                src={Fa23}
                                width={1000}
                                height={600}
                                alt="Fall 2023 GDD Officers"
                                priority={true}
                                className="mx-auto d-block"
                            />
                            <CarouselCaption>
                            <h3>GDD Officers</h3>
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
                                className="mx-auto d-block"
                            />
                            <CarouselCaption>
                            <h3>GDD Officers</h3>
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
                                className="mx-auto d-block"
                            />
                            <CarouselCaption>
                            <h3>GDD Tabling</h3>
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
                                className="mx-auto d-block"
                            />
                            <CarouselCaption>
                            <h3>GDD Decal</h3>
                            <p>Fall 2023 Faciltators</p>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem>
                            <Image
                                src={CMGG}
                                width={1000}
                                height={650}
                                alt="Hosting a GDDxCMGG game dev workshop!"
                                className="mx-auto d-block"
                            />
                            <CarouselCaption>
                            <h3>GDDxCMGG Workshop</h3>
                            <p>I hosted and prepared the GDDxCMGG intro to game dev workshop!</p>
                            </CarouselCaption>
                        </CarouselItem>
                    </Carousel>

                    <div className="mx-auto text-center align-middle mt-3" id={skills.gddText}>
                        <h5>President | Programming Faciltator</h5>
                        <p className="makoRegular">Being a part of Game Design and Development at Berkeley (GDD) was one of my best college experiences. It pushed me out of my comfort zone and challenged me to lead a community. I learned so much and met so many incredible people.</p>
                    </div>

                </div>

            </div>
            
        </div>
    </>
}