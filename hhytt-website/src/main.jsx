import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import $ from 'jquery';

import { createRoot } from 'react-dom/client';

function CreateProject(mt, gt) {
    return (
        <div className="row" style={{"marginTop": mt}}>
            <div className="col-4 d-flex justify-content-center">
              <img src="/imgs/[ME][TA]L.png" width="155px" 
                height="150px" style={{"objectFit": "contain", "marginLeft": "7px"}}></img>
            </div>
            <div className="col-8">
              <h3 className="pl-1 pr-3">{gt}</h3>
            </div>
        </div>
    )
}

const projectsRoot = createRoot(document.getElementById( "projectsContainer" ));
projectsRoot.render(CreateProject("50px", "[ME][TA]L"));



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
            if (uiOpen && !charStatOpen) {
                HideUI();
            }
            ToggleCharProf();
        } else if (e.key == "o") {
            if (uiOpen && !projectsOpen) {
                HideUI();
            }
            ToggleProjects();
        } else if (e.key == "i") {
            if (uiOpen && !inventoryOpen) {
                HideUI();
            }
            ToggleInventory();
        } else if (e.key == "u") {
            if (uiOpen && !skillsOpen) {
                HideUI();
            }
            ToggleSkills();
        }
    }
} );

var uiOpen = false;

var charStat = $( "#charStatBlock" )[0];
var charStatOpen = false;

function ToggleCharProf() {
    if (charStatOpen) {
        charStat.style.visibility = "hidden";
        charStatOpen = false;
        uiOpen = false;
    } else {
        charStat.style.visibility = "visible";
        charStatOpen = true;
        uiOpen = true;
    }
}

var inventory = $( "#inventory" )[0];
var inventoryOpen = false;

function ToggleInventory() {
    if (inventoryOpen) {
        inventory.style.visibility = "hidden";
        inventoryOpen = false;
        uiOpen = false;
    } else {
        inventory.style.visibility = "visible";
        inventoryOpen = true;
        uiOpen = true;
    }
}

var skills = $( "#skills" )[0];
var skillsOpen = false;

function ToggleSkills() {
    if (skillsOpen) {
        skills.style.visibility = "hidden";
        skillsOpen = false;
        uiOpen = false;
    } else {
        skills.style.visibility = "visible";
        skillsOpen = true;
        uiOpen = true;
    }
}

var projects = $( "#projects" )[0];
var projectsOpen = false;

function ToggleProjects() {
    if (projectsOpen) {
        projects.style.visibility = "hidden";
        projectsOpen = false;
        uiOpen = false;
    } else {
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