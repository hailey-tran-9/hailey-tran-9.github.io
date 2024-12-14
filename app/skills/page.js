import skills from './skills.module.css';
import { Navbar } from '../navbar';
import { AllLists } from './bpLists';

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <div id={skills.bgPolygon}></div>
                <Navbar name="Skills" />

                <div className='d-flex' id={skills.content}>
                    <div id={skills.categoryContainer}>
                        <AllLists 
                            categories={["Programming Languages", "Web Design", "Game Development"]}
                            bulletpoints={[["Python", "Java", "C#", "C++", "SQL"], ["HTML", "CSS", "Javascript", "React"], ["Unity Engine"]]} />
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