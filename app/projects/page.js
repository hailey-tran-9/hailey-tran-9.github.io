"use client";

import projects from './projects.module.css'
import Image from '../../node_modules/next/image'
import {ESC} from '../esc'

import { useState, useEffect } from 'react'

// Load in project data
const projectData = require('../../public/projects/data.json').projects;
// console.log(projectData);
var focusedProject = 0;

export default function Page() {
    return <>
        <div className='d-flex' style={{width:'100vw', height:'100vh'}}>
            <div className='flex-column' style={{width:'100vw', height:'100vh'}}>

                <div className='d-flex flex-lg-col flex-row flex-wrap'>
                    <div className={`${projects.header}`}></div>
                    <ESC />
                </div>

                <div className='d-flex justify-content-between' style={{margin:'5rem', marginLeft:0}}>
                    <div>
                        {projectData.map((p, index) => GenerateProjTab(p.name, index, p.name + index.toString()))}
                    </div>
                    
                    <p>filter</p>
                    
                    <div>
                        {GenerateProjInfo(
                            projectData[focusedProject].name,
                            projectData[focusedProject].role,
                            projectData[focusedProject].duration,
                            projectData[focusedProject].description)}
                    </div>
                    
                </div>

            </div>
        </div>
    </>
}

function GenerateProjTab(proj, index, k) {
    return (
        <div id={`${proj}` + '-tab-' + `${index}`} key={k}>
            <button type="button" 
            className={`${projects.tab}` + ' makoRegular align-items-center' + ' btn btn-success' + ' prj-btn'}>
                {/* <p style={{paddingLeft:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>{proj}</p> */}
                {proj}
                {/* <div className={projects.tabStripe}></div> */}
            </button>
        </div>
    )
}

function UpdateFocusedProject(event) {
    const clickedElement = event.target;
    let clickedIndex = parseInt(clickedElement.id.split('-')[-1]);
    console.log(clickedIndex);
}

function GenerateProjInfo(proj, role, duration, description) {
    useEffect(() => {
        const check = document;
        if (check) {
            const tabs = document.querySelector('prj-btn');
            console.log(tabs);
            // tabs.forEach(tab => {
            //     tab.addEventListener("click", (event) => {
            //         UpdateFocusedProject(event);
            //     });
            // });
        }
    })

    return <>
        <div id={`${proj}` + '-info'}>
            <div className={`${projects.title}` + ' lalezarRegular align-items-center'}>
                <p style={{paddingLeft:'3rem', paddingTop:'0.75rem', paddingBottom:'auto'}}>{proj}</p>
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