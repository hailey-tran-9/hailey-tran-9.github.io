"use client";

import projects from './projects.module.css';
import Image from '../../node_modules/next/image';
import Link from '../../node_modules/next/link';
import { useState, useEffect } from 'react';
import { Textfit } from 'react-textfit';
import { Navbar } from '../navbar';

// Load in project data
const projectData = require('../../public/projects/data.json').projects;
// console.log(projectData);

// ------------------------------ COMPONENTS ------------------------------
function ProjectInfo({ name, link, role, duration, description, tasks }) {
    return <>
        <div id={projects.projectInfoBuffer}></div>
        <div id={projects.projectInfo}>
            <div className={`${projects.title} lalezarRegular text-end`}>
                <Link href={link} target="_blank" style={{color:"white", textDecoration:"none"}}>
                    <p style={{paddingTop:'0.75rem', paddingBottom:'auto'}}>{name}</p>
                </Link>
            </div>
            <div className={`${projects.roleDur} lalezarRegular`}>
                <div className="d-flex">
                    <p>Role: {role}</p>
                    <p className="ms-auto">Duration: {duration}</p>
                </div>
            </div>
            <div className={`${projects.descrip} position-relative text-end`}>
                <p>{description}</p>
                <h4>Accomplishments</h4>
                <ul>
                    {tasks.map((task, index) => <li key={`${name}-task-${index}`}>{task}</li>)}
                </ul>
                <h4>More Details</h4>
                <h5>Subsection</h5>
                <ul>
                    <li></li>
                </ul>
                <Link href={link} target="_blank">
                    <p className="align-text-bottom">Play the game here!</p>
                </Link>
            </div>
        </div>
    </>
}

function ProjectTab({proj, index, onProjectTabClick}) {
    return (
        <div id={`${proj}` + '-tab-' + `${index}`}>
            <button type="button" 
            className={`${projects.tab} makoRegular align-items-center`}
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
    const [focusedBtn, setFocusedBtn] = useState(null);
    const [name, setName] = useState(projectData[focusedProject].name);
    const [link, setLink] = useState(projectData[focusedProject].link);
    const [role, setRole] = useState(projectData[focusedProject].role);
    const [duration, setDuration] = useState(projectData[focusedProject].duration);
    const [description, setDescription] = useState(projectData[focusedProject].description);
    const [tasks, setTasks] = useState(projectData[focusedProject].tasks);

    useEffect(() => {
        // Code to run after component has loaded
        require("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");

        if (focusedBtn == null) {
            let firstProjectBtn = document.querySelector(`#${projects.projectsList}`).children[0].children[0];
            setFocusedBtn(firstProjectBtn);
            SelectTab(firstProjectBtn);
        }
    }, []);

    function SelectTab(btn) {
        btn.style.backgroundColor = "white";
        btn.style.color = "#404040";
        btn.style.marginTop = "15px";
        btn.style.boxShadow = "-15px -15px #EFEFEF";
        btn.children[1].style.backgroundColor = "#404040";
    }

    function UnselectTab() {
        focusedBtn.style.backgroundColor = "#395D47";
        focusedBtn.style.color = "white";
        focusedBtn.style.marginTop = "0px";
        focusedBtn.style.boxShadow = "none";
        focusedBtn.children[1].style.backgroundColor = "#69A882";
    }
    
    function handleClick(event, index) {
        if (index !== focusedProject) {
            // Unselect the previously selected button
            UnselectTab();
            // Select this button
            let clickedBtn = event.target;
            SelectTab(clickedBtn);

            let data = projectData[index];
            setName(data.name);
            setLink(data.link);
            setRole(data.role);
            setDuration(data.duration);
            setDescription(data.description);
            setTasks(data.tasks);
            setFocusedProject(index);
            setFocusedBtn(clickedBtn);
        }
    }

    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <div className={projects.bgPolygon}></div>

                <Navbar name="Projects" />

                <div 
                    className='d-flex'
                    style={{margin:'5rem', marginTop:0, marginLeft:0, overflow:"visible"}}>
                    <div id={`${projects.projectsList}`}>
                        {projectData.map((p, index) => 
                            <ProjectTab 
                                proj={p.name} 
                                index={index} 
                                key={p.name + index.toString()}
                                onProjectTabClick={(e) => handleClick(e, index)} />
                        )}
                    </div>
                    
                    <div className="flex-column me-auto ms-5">
                        <div className="row">
                            <div className={`btn-group ${projects.btnGroup}`} id={projects.sortBy}>
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    Sort
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Type</a></li>
                                    <li><a className="dropdown-item" href="#">Date</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="row">
                            <div className={`btn-group ${projects.btnGroup}`}>
                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    Filter
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">SWE</a></li>
                                    <li><a className="dropdown-item" href="#">Game</a></li>
                                </ul>
                            </div>

                        </div>
                        
                    </div>
                    
                    <div className="ms-5">
                        <ProjectInfo name={name} link={link} role={role} duration={duration} description={description} tasks={tasks} />
                    </div>
                    
                </div>

            </div>
        </div>
    </>
}