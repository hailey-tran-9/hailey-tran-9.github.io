import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import $ from 'jquery';

import { createRoot } from 'react-dom/client';

function CreateProject(mt, gt, link, roleTime, description, tasks) {
    return (
        <>
            <div className="row" style={{"marginTop": mt}}>
                <div className="col-4 d-flex justify-content-center">
                <img src={"/imgs/"+gt.replace(/\s+/g, '')+".png"} width="155px" 
                    height="155px" style={{"objectFit": "cover", "marginLeft": "7px"}}></img>
                </div>
                <div className="col-8" style={{"paddingLeft": "1.75rem"}}>
                    <div className="row"><h3 className="pr-3 pt-1 mb-0">{gt}</h3></div>
                    <div className="row"><a href={link} target="_blank">Play the game here!</a></div>
                    <div className="row mt-5"><p className="pt-2">{roleTime}</p></div>
                </div>
            </div>
            <div className="row" style={{"marginTop": "3.5rem", "paddingLeft": "45px", "paddingRight": "155px", "whiteSpace": "pre-wrap"}}>
                <p>{description}</p>
                <ul style={{"paddingLeft": "2rem"}}>
                    {tasks.map(task => (
                        <li key={task}>{task}</li>
                    ))}
                </ul>
            </div>
        </>
        
    )
}

const projectsRoot = createRoot(document.getElementById( "projectsContainer" ));
projectsRoot.render(CreateProject("45px", "[ME][TA]L", "https://penguinies.itch.io/metal", "Programmer | 2 months",
    "[ME][TA]L is a metal-themed rhythm game. Its unique feature is the burst note, which requires you to type the words on the screen in a limited time frame!",
    ["Implemented UI functionality", "Aligned note recordings to our parser's structure", "Created the tutorial"]));

projectsRoot.render(CreateProject("45px", "LemmeDoIt4U", "https://zenuriken.itch.io/lemmedoit4u", "Programmer | 2 days",
    "LemmeDoIt4U is a short game about a dog sticking its nose into a can to get the last pringle chip for its owner while dodging alien chips! The theme of the game jam was 'Into the Unknown.'",
    ["Implemented UI and meme popup functionality", "Set up audio and buff timers"]));

projectsRoot.render(CreateProject("45px", "Morpheus' (Unpaid) Intern", "https://weest.itch.io/morpheus-intern-unpaid", "Programmer | 2 days",
    "Morpheus' (Unpaid) Intern is a bullet-hell, where you play as the new intern of the god of dreams. Protect the sleeping child from nightmares!",
    ["Implemented UI functionality", "Created buff/debuff spawner and effects"]));

var progress = 0;
var gameStartOverlayOpen = !$( "#gameStartOverlay" )[0].hidden;

// Handle document clicks
$( document ).on( "click", function() {
    if (gameStartOverlayOpen) {
        $( "#gameStartOverlay" ).hide();
        gameStartOverlayOpen = false;
    }
} );

// Handle keyboard shortcuts
$( document ).on( "keydown", function( e ) {
    console.log(e.key);
    if (!gameStartOverlayOpen) {
        if (e.key == "p") {
            if (uiOpen && !projectsOpen) {
                HideUI();
            }
            ToggleProjects();
        } else if (e.key == "o") {
            if (uiOpen && !skillsOpen) {
                HideUI();
            }
            ToggleSkills();
        } else if (e.key == "i") {
            if (uiOpen && !inventoryOpen) {
                HideUI();
            }
            ToggleInventory();
        } else if (e.key == "u") {
            if (uiOpen && !charStatOpen) {
                HideUI();
            }
            ToggleCharProf();
        }
    }
} );

// Handle button clicks
$( "#regTab1" ).on( "click", function () {
    if (uiOpen && !charStatOpen) {
        HideUI();
    }
    ToggleCharProf();
} );

$( "#regTab2" ).on( "click", function () {
    if (uiOpen && !inventoryOpen) {
        HideUI();
    }
    ToggleInventory();
} );

$( "#regTab3" ).on( "click", function () {
    if (uiOpen && !skillsOpen) {
        HideUI();
    }
    ToggleSkills();
} );

$( "#regTab4" ).on( "click", function () {
    if (uiOpen && !projectsOpen) {
        HideUI();
    }
    ToggleProjects();
} );

var uiOpen = false;

var charStat = $( "#charStatBlock" )[0];
var charStatOpen = false;

function ToggleCharProf() {
    if (!charStatOpen) {
        charStat.style.visibility = "visible";
        charStatOpen = true;
        uiOpen = true;
    }
}

var inventory = $( "#inventory" )[0];
var inventoryOpen = false;

function ToggleInventory() {
    if (!inventoryOpen) {
        inventory.style.visibility = "visible";
        inventoryOpen = true;
        uiOpen = true;
    }
}

var skills = $( "#skills" )[0];
var skillsOpen = false;

function ToggleSkills() {
    if (!skillsOpen) {
        skills.style.visibility = "visible";
        skillsOpen = true;
        uiOpen = true;
    }
}

var projects = $( "#projects" )[0];
var projectsOpen = false;

function ToggleProjects() {
    if (!projectsOpen) {
        projects.style.visibility = "visible";
        projectsOpen = true;
        uiOpen = true;
    }
}

function HideUI() {
    if (charStatOpen) {
        charStat.style.visibility = "hidden";
        charStatOpen = false;
    }
    if (inventoryOpen) {
        inventory.style.visibility = "hidden";
        inventoryOpen = false;
    }
    if (skillsOpen) {
        skills.style.visibility = "hidden";
        skillsOpen = false;
    }
    if (projectsOpen) {
        projects.style.visibility = "hidden";
        projectsOpen = false;
    }
    uiOpen = false;
}