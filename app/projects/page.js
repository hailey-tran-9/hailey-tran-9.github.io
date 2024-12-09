"use client";

import projects from './projects.module.css'
import Image from '../../node_modules/next/image'
import { useState } from 'react'
import { Textfit } from 'react-textfit';
import { Navbar } from '../navbar';

// Load in project data
const projectData = require('../../public/projects/data.json').projects;
// console.log(projectData);

// ------------------------------ COMPONENTS ------------------------------
function ProjectInfo({ name, role, duration, description }) {
    return <>
        <div id={'project-info'}>
            <div className={`${projects.title}` + ' lalezarRegular align-items-center'}>
                <p style={{paddingLeft:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>{name}</p>
            </div>
            <div className={`${projects.roleDur}` + ' lalezarRegular align-items-center'}>
                <div className='d-flex'>
                    <p className='flex-grow-1' style={{paddingLeft:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>Role: {role}</p>
                    <p style={{paddingLeft:'3rem', paddingRight:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>Duration: {duration}</p>
                </div>
            </div>
            <div className={projects.descrip}>
                <p style={{padding:'3rem'}}>{description}</p>
            </div>
        </div>
    </>
}

function ProjectTab({proj, index, onProjectTabClick}) {
    return (
        <div id={`${proj}` + '-tab-' + `${index}`}>
            <button type="button" 
            className={`${projects.tab}` + ' makoRegular align-items-center' + ' btn btn-success' + ' prj-btn'}
            onClick={onProjectTabClick}>
                <Textfit 
                    className={`${projects.tabName}`}
                    mode="single"
                    max={32}>
                        {proj}
                </Textfit>
                <div className={projects.tabStripe}></div>
            </button>
        </div>
    )
}

// ------------------------------ PROJECTS PAGE ------------------------------
export default function Page() {
    const [focusedProject, setFocusedProject] = useState(0);
    const [name, setName] = useState(projectData[focusedProject].name);
    const [role, setRole] = useState(projectData[focusedProject].role);
    const [duration, setDuration] = useState(projectData[focusedProject].duration);
    const [description, setDescription] = useState(projectData[focusedProject].description);

    function handleClick(index) {
        if (index !== focusedProject) {
            let data = projectData[index];
            setName(data.name);
            setRole(data.role);
            setDuration(data.duration);
            setDescription(data.description);
            setFocusedProject(index);
        }
    }

    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <Navbar name="Projects" />

                <div 
                    className='d-flex justify-content-between'
                    style={{margin:'5rem', marginTop:0, marginLeft:0}}>
                    <div id={`${projects.projectsList}`}>
                        {projectData.map((p, index) => 
                            <ProjectTab 
                                proj={p.name} 
                                index={index} 
                                key={p.name + index.toString()}
                                onProjectTabClick={() => handleClick(index)} />
                        )}
                    </div>
                    
                    <p>filter</p>
                    
                    <div>
                        <ProjectInfo name={name} role={role} duration={duration} description={description} />
                    </div>
                    
                </div>

            </div>
        </div>
    </>
}