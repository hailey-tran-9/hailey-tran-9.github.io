"use client";

import projects from "./projects.module.css";
import Link from "../../node_modules/next/link";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "../navbar";
import { Tag } from "./Tag.jsx";

// Load in project data
// const projectData = require("../../public/projects/data.json").projects;

const projectData = require('./projects/data.json').projects;

// ------------------------------ COMPONENTS ------------------------------
function ProjectInfo({
  name,
  link,
  role,
  duration,
  description,
  tasks,
  subsections,
}) {
  return (
    <>
      <div id={projects.projectInfoBuffer}></div>
      <div className="pe-5" id={`${projects.projectInfo}`}>
        <div className={`${projects.title} lalezarRegular align-middle`}>
          {link !== "" ? (
            <Link href={link} target="_blank" className="align-middle">
              {name}
            </Link>
          ) : (
            <p>{name}</p>
          )}
        </div>
        <div className={`${projects.roleDur} lalezarRegular`}>
          <div className="d-flex" id={projects.roleDurFlex}>
            <p>Role: {role}</p>
            <p className="ms-auto">Duration: {duration}</p>
          </div>
        </div>
        <div className={`${projects.descrip}`}>
          <p>{description}</p>
          <div className="d-inline-flex flex-row flex-wrap">
            <h4>Accomplishments</h4>
            <ul className={`${projects.taskList} flex-wrap`}>
              {tasks.map((task, index) => (
                <li key={`${name}-task-${index}`}>{task}</li>
              ))}
            </ul>
          </div>
          {subsections.length > 0 ? (
            <div className="d-inline-flex flex-row gap-4">
              <h4>More Details</h4>
              <div className="d-inline-flex flex-column">
                {subsections.map((subsec, index) => (
                  <div className="flex-column" key={`${name}-subsec-${index}`}>
                    <h5>{subsec[0]}</h5>
                    <ul>
                      {subsec[1].map((ele) => (
                        <li key={ele}>{ele}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
          {link !== "" ? (
            <div className="flex-column">
              <Link
                href={link}
                target="_blank"
                className="align-self-end align-text-bottom"
              >
                Check out the project here!
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

function ProjectTab({ proj, index, onProjectTabClick, tags }) {
  return (
    <div id={`${proj}` + "-tab-" + `${index}`}>
      <button
        type="button"
        className={`${projects.tab} ${proj}-button makoRegular align-items-center`}
        id={`${proj}-button`}
        onClick={onProjectTabClick}
      >
        <p>{proj}</p>
        <div className={`${projects.tabStripe} d-flex align-items-center`}>
          {tags.map((tag, index) => (
            <Tag tagType={tag} key={`${proj}-tag-${index}`} />
          ))}
        </div>
      </button>
    </div>
  );
}

// ------------------------------ PROJECTS PAGE ------------------------------
export default function Page() {
  // Project text
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

//   const [testData, setTestData] = useState(null);

  // Sorting and Filtering
  const [sortState, setSortState] = useState("none");
  const [sortedProjects, setSortedProjects] = useState(projectData);

  const [filterState, setFilterState] = useState("none");
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  const [displayedProjects, setDisplayedProjects] = useState(projectData);

  // REFS
  const bgPolyRef = useRef(null);

  const sortMethods = {
    none: { method: (a, b) => null },
    alphabetically: { method: (a, b) => (a.name > b.name ? 1 : -1) },
    type: { method: (a, b) => (a.tags[0] > b.tags[0] ? 1 : -1) },
    // date: { method: (a, b) => (a > b ? -1 : 1) },
  };

  useEffect(() => {
    // Code to run after component has loaded
    require("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");

    // // Load data
    // async function test() {

    //     const res = await fetch("http://localhost:3000/api");
    //     const data = await res.json();

    //     if (testData == null) {
    //         console.log("DATA");
    //         console.log(data);
    //         setTestData(data);
    //     }

    // }
    // test();

    // TESTING
    // function setProjectListHeight() {
    //   let bgPoly = document.querySelector(`.${projects.bgPolygon}`);
    //   // console.log(bgPoly);
    //   let pgHeader = document.querySelector(".page-header");
    //   // console.log(pgHeader);

    //   // console.log("BG POLY REF");
    //   // console.log(bgPolyRef.current);
    //   // console.log(window.getComputedStyle(bgPolyRef.current).height);

    //   let bgPolyInt = parseInt(
    //     window.getComputedStyle(bgPoly).height.split("px")[0]
    //   );
    //   console.log(bgPolyInt);

    //   let diff =
    //     window.getComputedStyle(bgPoly).height -
    //     window.getComputedStyle(pgHeader).height;
    //   let projList = document.querySelector(`#${projects.projectsList}`);
    //   console.log(diff);
    //   projList.style.height = diff;
    // }

    // setProjectListHeight();
  }, []);

  // Reset the focused button
  useEffect(() => {
    // console.log("FOCUSED BTN CHANGED");

    let focusInList = false;

    if (focusedBtn != null) {
      for (let i = 0; i < displayedProjects.length; i++) {
        if (name === displayedProjects[i].name) {
          // console.log(i);
          setFocusedProject(i);
          let newFocusedBtn = document.getElementById(name + "-button");
          setFocusedBtn(newFocusedBtn);
          selectTab(newFocusedBtn);

          focusInList = true;
          break;
        }
      }
    } else {
      setFocusedProject(0);
      let firstProjectBtn = document.querySelector(`#${projects.projectsList}`)
        .children[0].children[0];
      setFocusedBtn(firstProjectBtn);
      selectTab(firstProjectBtn);

      updateDisplayedInfo(0);
    }

    if (!focusInList) {
      let projList = document.querySelector(`#${projects.projectsList}`);
      if (projList.children.length !== 0) {
        setFocusedProject(0);
        let firstProjectBtn = projList.children[0].children[0];
        setFocusedBtn(firstProjectBtn);
        selectTab(firstProjectBtn);

        updateDisplayedInfo(0);
      }
    }
  }, [focusedBtn, displayedProjects]);

  function selectTab(btn) {
    // console.log("CHANGE TAB COLOR");
    // console.log(btn);

    btn.style.backgroundColor = "white";
    btn.style.color = "#404040";
    btn.style.marginTop = "15px";
    btn.style.boxShadow = "-15px -15px #EFEFEF";
    btn.children[1].style.backgroundColor = "#404040";
  }

  function unselectTab() {
    focusedBtn.style.backgroundColor = "#395D47";
    focusedBtn.style.color = "white";
    focusedBtn.style.marginTop = "0px";
    focusedBtn.style.boxShadow = "none";
    focusedBtn.children[1].style.backgroundColor = "#69A882";
  }

  function handleClick(event, index) {
    if (index !== focusedProject) {
      console.log("LOAD DIFF PROJ");

      // Unselect the previously selected button
      unselectTab();
      // Select this button
      let clickedBtn = event.target;
      selectTab(clickedBtn);
      setFocusedBtn(clickedBtn);

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
        setDisplayedProjects(
          displayedProjects.slice().sort(sortMethods[method].method)
        );
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

  return (
    <>
      <div className="bgPolygon" id={projects.bgPolygon} ref={bgPolyRef}></div>
      <div className="d-flex flex-column">
        <Navbar name="Projects" />

        <div className="d-flex" style={{ overflow: "visible" }}>
          <div id={`${projects.projectsList}`}>
            {displayedProjects.map((p, index) => (
              <ProjectTab
                proj={p.name}
                index={index}
                tags={p.tags}
                key={p.name + index.toString()}
                onProjectTabClick={(e) => handleClick(e, index)}
              />
            ))}
          </div>

          <div className="flex-column ms-5">
            <div className="row">
              <div
                className={`btn-group ${projects.btnGroup}`}
                id={projects.sortBy}
              >
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  Sort
                </button>
                <ul className="dropdown-menu">
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => sortClick("none")}
                  >
                    None
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => sortClick("alphabetically")}
                  >
                    Alphabetically
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => sortClick("type")}
                  >
                    Type
                  </button>
                  {/* <button className="dropdown-item" type="button" onClick={() => setSortState("date")}>Date</button> */}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className={`btn-group ${projects.btnGroup}`}>
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <ul className="dropdown-menu">
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => filterClick("none")}
                  >
                    None
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => filterClick("Game")}
                  >
                    Game
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => filterClick("Graphics")}
                  >
                    Graphics
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => filterClick("SWE")}
                  >
                    SWE
                  </button>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => filterClick("Web Dev")}
                  >
                    Web Dev
                  </button>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <ProjectInfo
              name={name}
              link={link}
              role={role}
              duration={duration}
              description={description}
              tasks={tasks}
              subsections={subsections}
            />
          </div>
        </div>
      </div>
    </>
  );
}
