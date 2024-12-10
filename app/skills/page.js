import skills from './skills.module.css';
import Image from '../../node_modules/next/image';
import { Navbar } from '../navbar';
import { Fragment } from 'react';
import { CategoryBody } from './categoryBody';

function Category({ category, body }) {
    return (<>
        <div className={skills.category} id={`${category}-container`}>
            <div className={`${skills.categoryHeader} lalezarRegular`}>
                <p>{category}</p>
            </div>
            <div className={`${skills.categoryBody} makoRegular`}>
                <CategoryBody category={category} body={body} />
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
                        <Category 
                            category={"Programming Languages"}
                            body={["Python", "Java", "C#", "C++"]} />
                        <Category 
                            category={"Web Design"} 
                            body={["HTML", "CSS", "Javascript", "React"]} />
                        <Category 
                            category={"Game Development"}
                            body={["Unity Engine"]} />
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