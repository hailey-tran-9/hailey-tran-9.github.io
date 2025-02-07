"use client";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

import { useState, useEffect, useRef } from "react";

const projectData = require("../../public/projects/data.json").projects;

export default function Projects() {
    // Projects
    const [displayedProjects, setDisplayedProjects] = useState(projectData);

    // Project Info
    const [focusedProject, setFocusedProject] = useState(0);
    const [focusedBtn, setFocusedBtn] = useState(null);
    const [name, setName] = useState(projectData[focusedProject].name);
    const [link, setLink] = useState(projectData[focusedProject].link);
    const [role, setRole] = useState(projectData[focusedProject].role);
    const [duration, setDuration] = useState(
        projectData[focusedProject].duration
    );
    const [description, setDescription] = useState(
        projectData[focusedProject].description
    );
    const [tasks, setTasks] = useState(projectData[focusedProject].tasks);
    const [subsections, setSubsections] = useState(
        projectData[focusedProject].subsections
    );
    
    // Sorting and Filtering
    const [sortState, setSortState] = useState("none");
    const [sortedProjects, setSortedProjects] = useState(projectData);

    const [filterState, setFilterState] = useState("none");
    const [filteredProjects, setFilteredProjects] = useState(projectData);

    const sortMethods = {
        none: { method: (a, b) => null },
        alphabetically: { method: (a, b) => (a.name > b.name ? 1 : -1) },
        type: { method: (a, b) => (a.tags[0] > b.tags[0] ? 1 : -1) },
        // date: { method: (a, b) => (a > b ? -1 : 1) },
    };

    function handleClick(event, index) {
        if (index !== focusedProject) {
            console.log("LOAD DIFF PROJ");
            setFocusedBtn(event.target);
            updateDisplayedInfo(index);
        }
    }
    
    function updateDisplayedInfo(index) {
        let data = displayedProjects[index];
        setName(data.name);
        setLink(data.link);
        setRole(data.role);
        setDuration(data.duration);
        setDescription(data.description);
        setTasks(data.tasks);
        setSubsections(data.subsections);
        setFocusedProject(index);
    }
    
    function sortClick(method) {
        if (sortState !== method) {
            // console.log("SORT/FILTER " + sortState + " " + filterState);
            setSortState(method);

            if (method === "none") {
                if (filterState === "none") {
                    setSortedProjects(projectData);
                    setDisplayedProjects(projectData);
                } else {
                    setDisplayedProjects(filteredProjects);
                }
            } else {
                setSortedProjects(projectData.slice().sort(sortMethods[method].method));
                setDisplayedProjects(displayedProjects.slice().sort(sortMethods[method].method));
            }
        }
    }
    
    function filterClick(filter) {
        if (filterState !== filter) {
            // console.log("SORT/FILTER " + sortState + " " + filterState);
            setFilterState(filter);

            if (filter === "none") {
                if (sortState === "none") {
                    setFilteredProjects(projectData);
                    setDisplayedProjects(projectData);
                } else {
                    setDisplayedProjects(sortedProjects);
                }
            } else {
                // Filtered projects
                let newFilteredProjs = [];
                projectData.slice().map((proj) => {
                    if (proj.tags[0] === filter) {
                        newFilteredProjs.push(proj);
                    }
                });
                // console.log(newFilteredProjs);
                setFilteredProjects(newFilteredProjs);

                // Displayed projects
                let newDisplayedProjs = [];
                displayedProjects.slice().map((proj) => {
                    if (proj.tags[0] === filter) {
                        newDisplayedProjs.push(proj);
                    }
                });
                // console.log(newDisplayedProjs);
                setDisplayedProjects(newDisplayedProjs);
            }
        }
    }

    return <div className="d-flex flex-row gap-3">
        <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-row gap-2">
                <DropdownButton className="dropdownBtn" title="Sort" size="sm">
                    <Dropdown.Item href="#/action-1" onClick={() => sortClick("none")}>None</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => sortClick("type")}>Type</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={() => sortClick("alphabetically")}>Alphabetically</Dropdown.Item>
                </DropdownButton>
                <DropdownButton className="dropdownBtn" title="Filter" size="sm">
                    <Dropdown.Item href="#/action-1" onClick={() => filterClick("none")}>None</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => filterClick("Game")}>Game</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={() => filterClick("Graphics")}>Graphics</Dropdown.Item>
                    <Dropdown.Item href="#/action-4" onClick={() => filterClick("SWE")}>SWE</Dropdown.Item>
                    <Dropdown.Item href="#/action-5" onClick={() => filterClick("Web Dev")}>Web Dev</Dropdown.Item>
                </DropdownButton>
            </div>

            <div className="d-flex flex-column rounded" id={"projectsList"}>
                {displayedProjects.map((p, index) => (
                    <Button variant="light" key={`proj${index}`} onClick={(e) => handleClick(e, index)}>{p.name}</Button>
                ))}
            </div>
        </div>

        <ProjectInfo name={name} link={link} role={role} duration={duration} description={description} tasks={tasks} subsections={subsections} />
    </div>;
}

function ProjectInfo({name, link, role, duration, description, tasks, subsections}) {
    return <div className="flex-fill rounded px-5 py-4" id="projectInfo">
        <h2 className="kadwa-bold">{name}</h2>
        <div className="d-flex flex-row" id="projectStats">
            <h5 className="flex-fill">Role: {role}</h5>
            <h5 className="flex-fill">Duration: {duration}</h5>
            <h5 className="flex-fill">Team Size:</h5>
        </div>
        <a href={link} target="_blank">{link}</a>
        <p className="py-3">{description}</p>
        <h5 className="pb-1">Accomplishments</h5>
        <ul>
            {tasks.map((item, index) => <li key={`${name}Task${index}`}>{item}</li>)}
        </ul>
        {subsections.length > 0 ? <h5 className="pb-1">More Details</h5> : <></>}
        {subsections.length > 0 ? 
            subsections.map((subsec, index) => (
                <div className="flex-column" key={`${name}Subsec${index}`}>
                <h6>{subsec[0]}</h6>
                <ul>
                    {subsec[1].map((ele) => (
                        <li key={ele}>{ele}</li>
                    ))}
                </ul>
                </div>
            )) : ( <></> )} 
    </div>;
}