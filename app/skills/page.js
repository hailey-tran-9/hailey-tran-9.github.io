import skills from './skills.module.css';
import { Navbar } from '../navbar';
import { Category } from './categories';

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <div id={skills.bgPolygon}></div>
                <Navbar name="Skills" />

                <div className='d-flex' id={skills.content}>

                    <div id={skills.categoryContainer}>
                        <Category 
                            category={"Programming Languages"}
                            body={["Python", "Java", "C#", "C++"]} />
                        <Category 
                            category={"Web Design"} 
                            body={["HTML", "CSS", "Javascript", "React"]} />
                        <Category 
                            category={"Game Development"}
                            body={["Unity Engine"]} />

                        {/* <Categories 
                            info={
                                [{category:"Programming Languages", bulletpoints:["Python", "Java", "C#", "C++"]},
                                {category:"Web Design", bulletpoints:["HTML", "CSS", "Javascript", "React"]},
                                {category:"Game Development", bulletpoints:["Unity Engine"]}]
                            }/> */}
                    </div>

                    <div id={skills.correlationContainer}>
                        <div id={skills.correlatedImg}></div>
                        <div id={skills.correlatedDescription}></div>
                    </div>

                </div>
            
            </div>
        </div>
    </>
}