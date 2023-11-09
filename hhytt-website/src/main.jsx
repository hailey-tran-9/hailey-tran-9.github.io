import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import $ from 'jquery';
import { createRoot } from 'react-dom/client';
import { Fragment } from 'react';

var charDisplay = $( "#characterDisplay" )[0];
var speechBubble = $( "#speechBubble" )[0];

var w = window.innerWidth;
var h = window.innerHeight;
charDisplay.style.right = w/8 + "px";
speechBubble.style.right = w/48 + "px";

function MoveChar() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    // console.log(w);
    // console.log(h);

    charDisplay.style.right = w/8 + "px";
    speechBubble.style.right = w/48 + "px";
}

window.addEventListener('resize', MoveChar);

function CreateProject(page, vs, mt, gt, link, roleTime, description, tasks) {
    return (
        <div id={"page-"+page} style={{"position": "absolute", "visibility": vs}}>
            <div className="row" style={{"marginTop": mt}}>
                <div className="col-4 d-flex justify-content-center">
                <img src={"/imgs/"+gt.replace(/\s+/g, '')+".png"} width="143px" 
                    height="143px" style={{"objectFit": "cover", "marginLeft": "7px"}}></img>
                </div>
                <div className="col-8" style={{"paddingLeft": "1.35rem"}}>
                    <div className="row"><h3 className="pr-3 pt-1 mb-0">{gt}</h3></div>
                    <div className="row"><a href={link} target="_blank">Play the game here!</a></div>
                    <div className="row" style={{"marginTop": "2.4rem"}}><p className="pt-2">{roleTime}</p></div>
                </div>
            </div>
            <div className="row" style={{"marginTop": "2.4rem", "paddingLeft": "95px", "paddingRight": "105px", "whiteSpace": "pre-wrap"}}>
                <div id="scrollable">
                    <p style={{"paddingTop": "0.5rem"}}>{description}</p>
                    <ul style={{"paddingLeft": "2rem"}}>
                        {tasks.map(task => (
                            <li key={task}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

var projectDivs = [];
projectDivs.push(CreateProject(0, "hidden", "82px", "[ME][TA]L", "https://penguinies.itch.io/metal", "Programmer | 2 months",
    "[ME][TA]L is a metal-themed rhythm game. Its unique feature is the burst note, which requires you to type the words on the screen in a limited time frame!",
    ["Implemented UI functionality", "Aligned note recordings to our parser's structure", "Created the tutorial"]));

projectDivs.push(CreateProject(1, "hidden", "82px", "LemmeDoIt4U", "https://zenuriken.itch.io/lemmedoit4u", "Programmer | 2 days",
    "LemmeDoIt4U is a short game about a dog sticking its nose into a can to get the last pringle chip for its owner while dodging alien chips! The theme of the game jam was 'Into the Unknown.'",
    ["Implemented UI and meme popup functionality", "Set up audio and buff timers"]));

projectDivs.push(CreateProject(2, "hidden", "82px", "Morpheus' (Unpaid) Intern", "https://weest.itch.io/morpheus-intern-unpaid", "Programmer | 2 days",
    "Morpheus' (Unpaid) Intern is a bullet-hell, where you play as the new intern of the god of dreams. Protect the sleeping child from nightmares!",
    ["Implemented UI functionality", "Created buff/debuff spawner and effects"]));

function RenderProjects() {
    return projectDivs.map((project, i) =>
        <Fragment key={i}>{project}</Fragment>
    );
}

const projectsRoot = createRoot(document.getElementById( "projectsContainer" ));
projectsRoot.render(RenderProjects());

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
                SetTabs("projects");
                HideUI();
            }
            ToggleProjects();
        } else if (e.key == "o") {
            if (uiOpen && !skillsOpen) {
                SetTabs("regular");
                HideUI();
            }
            ToggleSkills();
        } else if (e.key == "i") {
            if (uiOpen && !inventoryOpen) {
                SetTabs("regular");
                HideUI();
            }
            ToggleInventory();
        } else if (e.key == "u") {
            if (uiOpen && !charStatOpen) {
                SetTabs("regular");
                HideUI();
            }
            ToggleCharProf();
        }
    }
} );

var arrL = $( "#arrowL" )[0];
var arrR = $( "#arrowR" )[0];

// Handle button clicks
$( "#arrowL" ).on( "click", function () {
    // console.log("left arrow");
    ScrollLeft();
} );

$( "#arrowR" ).on( "click", function () {
    // console.log("right arrow");
    ScrollRight();
} );

$( "#tab1" ).on( "click", function () {
    if (uiOpen && !charStatOpen) {
        if (projectsOpen) {
            SetTabs("regular");
            // MoveChar("regular");
        }
        HideUI();
    }
    ToggleCharProf();
} );

$( "#tab2" ).on( "click", function () {
    if (uiOpen && !inventoryOpen) {
        if (projectsOpen) {
            SetTabs("regular");
            // MoveChar("regular");
        }
        HideUI();
    }
    ToggleInventory();
} );

$( "#tab3" ).on( "click", function () {
    if (uiOpen && !skillsOpen) {
        if (projectsOpen) {
            SetTabs("regular");
            // MoveChar("regular");
        }
        HideUI();
    }
    ToggleSkills();
} );

$( "#tab4" ).on( "click", function () {
    if (uiOpen && !projectsOpen) {
        SetTabs("projects");
        // MoveChar("projects");
        HideUI();
    }
    ToggleProjects();
} );

var tab1 = $( "#tab1" )[0];
var tab2 = $( "#tab2" )[0];
var tab3 = $( "#tab3" )[0];
var tab4 = $( "#tab4" )[0];

function SetTabs(type) {
    if (type == "regular") {
        tab1.style.width = "97.5px";
        tab2.style.width = "82.5px";
        tab2.style.left = "97.5px";
        tab3.style.width = "82.5px";
        tab3.style.left = "180px";
        tab4.style.width = "97.5px";
        tab4.style.left = "262.5px";
    } else {
        tab1.style.width = "107.5px";
        tab2.style.width = "92.5px";
        tab2.style.left = "107.5px";
        tab3.style.width = "92.5px";
        tab3.style.left = "200px";
        tab4.style.width = "107.5px";
        tab4.style.left = "292.5px";
    }
}

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
var lastOpenedProjIndex = 0;

function ToggleProjects() {
    if (!projectsOpen) {
        projects.style.visibility = "visible";
        projectsOpen = true;
        uiOpen = true;

        let proj = $( "#page-"+lastOpenedProjIndex )[0];
        proj.style.visibility = "visible";
    }
}

function ScrollLeft() {
    let proj = $( "#page-"+lastOpenedProjIndex )[0];
    proj.style.visibility = "hidden";

    if (lastOpenedProjIndex == 0) {
        lastOpenedProjIndex = projectDivs.length - 1;
    } else {
        lastOpenedProjIndex -= 1;
    }

    proj = $( "#page-"+lastOpenedProjIndex )[0];
    proj.style.visibility = "visible";
}

function ScrollRight() {
    let proj = $( "#page-"+lastOpenedProjIndex )[0];
    proj.style.visibility = "hidden";

    if (lastOpenedProjIndex == projectDivs.length - 1) {
        lastOpenedProjIndex = 0;
    } else {
        lastOpenedProjIndex += 1;
    }

    proj = $( "#page-"+lastOpenedProjIndex )[0];
    proj.style.visibility = "visible";
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

        let proj = $( "#page-"+lastOpenedProjIndex )[0];
        proj.style.visibility = "hidden";
    }
    uiOpen = false;
}

// Handle events when the window loads
window.onload = (event) => {
    ToggleCharProf();
  };


// Button toggling

var activeButton = "char-prof-but";
$( "#char-prof-but" )[0].style.backgroundImage = "url('/imgs/TabP.png')";

$(function() {
    $( 'button.butt' ).on( "click", function(e) {
        if (e.target.id != activeButton) {
            $( "#" + activeButton )[0].style.backgroundImage = "url('/imgs/Tab.png')";
            activeButton = e.target.id;
            e.target.style.backgroundImage = "url('/imgs/TabP.png')";
        }
        
    } );
  });