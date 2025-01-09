import skills from './skills.module.css';
import { Navbar } from '../navbar';
import { AllLists } from './bpLists';
import Image from 'next/image';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <div id={skills.bgPolygon}></div>
                {/* <div id={skills.bgPolygon2}></div> */}
                {/* <div id={skills.bgPolygon3}></div> */}
                <Navbar name="Skills" />

                <div className="d-flex" id={skills.content}>
                    <div id={skills.categoryContainer}>
                        <AllLists 
                            categories={["Programming Languages", "Web Design", "Game Development"]}
                            bulletpoints={[["Python", "Java", "C#", "C++", "SQL"], ["HTML", "CSS", "Javascript", "React"], ["Unity Engine"]]} />
                    </div>

                    <div className="mx-auto align-items-middle" id={skills.content2}>
                        <Carousel slide={false}>
                            <CarouselItem>
                                <Image
                                    src="./images/gdd_fa23.jpg"
                                    width={1000}
                                    height={600}
                                    alt="Fall 2023 GDD Officers"
                                    priority={true}
                                    style={{resizeMode: 'contain'}}
                                    className="mx-auto d-block"
                                />
                                <CarouselCaption>
                                <h3>GDD Officers</h3>
                                <p>Fall 2023</p>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem>
                                <Image
                                    src="./images/gdd_sp24.jpg"
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
                                    src="./images/gdd_tabling.jpg"
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
                                    src="./images/gdd_decal.jpg"
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
                                    src="./images/cmgg_workshop.jpg"
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
        </div>
    </>
}