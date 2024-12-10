import skills from './skills.module.css'
import Image from '../../node_modules/next/image'
import { Navbar } from '../navbar';

function Category({ category }) {
    return (<>
        <div className={skills.category} id={`${category}-container`}>
            <div className={`${skills.categoryHeader} lalezarRegular`}>
                <p>{category}</p>
            </div>
        </div>
    </>);
}

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <div id={skills.bgPolygon}></div>
                <Navbar name="Skills" />

                <div className='d-flex' id={skills.content}>

                    <div id={skills.categoryContainer}>
                        <Category category={"Programming Languages"} />
                        <Category category={"Web Design"} />
                        <Category category={"Game Development"} />
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