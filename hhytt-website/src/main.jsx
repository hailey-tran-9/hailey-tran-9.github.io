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

function CreateProject(page, vs, mt, gt, link, team, role, duration, description, tasks) {
    return (
        <div id={"page-"+page} style={{"position": "absolute", "visibility": vs}}>
            <div className="row" style={{"marginTop": mt, "marginLeft": "50px"}}>
                <div className="row"><h4 className="pr-3 pt-1 mb-0" style={{"color":"white"}}>Projects</h4></div>
            </div>
            <div className="row" style={{"height": "120px", "marginTop": "60px"}}>
                <div className="col" style={{"height": "120px", "paddingRight": "0"}}>
                    <div className='row'>
                        <img src={"/imgs/"+gt.replace(/\s+/g, '')+".png"} 
                        style={{"width": "100px", "height": "100px", 
                        "objectFit": "cover", "marginRight": "25px", 
                        "marginTop": "5px", "marginLeft": "64px",
                        "padding": "0"}}></img>
                    </div>
                </div>
                <div className="col-10" style={{"height": "120px", "paddingLeft": "58px"}}>
                    <div className="row" style={{"paddingLeft": "5px", "marginTop": "8px"}}>
                        <div className="col-1" style={{"marginRight": "5px"}}><p className='white'>Title</p></div>
                        <div className='col-9'><h5>{gt}</h5></div>
                    </div>
                    <div className="row" style={{"paddingLeft": "5px", "marginTop": "-2px"}}>
                        <div className="col-1" style={{"marginRight": "5px"}}><p className='white'>Link</p></div>
                        <div className='col-9'><a href={link} target="_blank">Play the game here!</a></div>
                    </div>
                </div>
            </div>
            <div className="row" style={{"marginLeft": "50px", "marginTop": "1px"}}>
                <div className='col-2' style={{"paddingRight": "0"}}>
                    <p className='white'>Team Size</p>
                </div>
                <div className='col-1' style={{"width":"20px", "paddingLeft": "5px", "paddingRight": "0"}}>
                    <p>{team}</p>
                </div>
                <div className='col-1' style={{"paddingLeft": "37px", "paddingRight": "0"}}>
                    <p className='white'>Role</p>
                </div>
                <div className='col-3' style={{"paddingLeft": "25px"}}>
                    <p>{role}</p>
                </div>
                <div className='col-1' style={{"width":"100px", "paddingLeft": "45px", "paddingRight": "0"}}>
                    <p className='white'>Duration</p>
                </div>
                <div className='col-2' style={{"paddingLeft": "32px"}}>
                    <p>{duration}</p>
                </div>
            </div>
            <div className="row" style={{"marginLeft": "50px", "marginTop": "5px"}}>
                <div className='col-3' style={{"width": "240px", "height": "250px"}}>
                    <div className='row' style={{"height": "20px", "marginBottom": "10px"}}>
                        <p className='white'>Description</p>
                    </div>
                    <div className='row plr-1'>
                        {description}
                    </div>
                </div>
                <div className='col-7' style={{"height": "250px", "paddingLeft": "42px"}}>
                    <div className='row' style={{"height": "20px", "marginBottom": "10px"}}>
                        <p className='white'>Contribution</p>
                    </div>
                    <div className='row plr-1'>
                        <ul style={{"paddingLeft": "1rem"}}>
                            {tasks.map(task => (
                                <li key={task}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

var projectDivs = [];
projectDivs.push(CreateProject(0, "hidden", "30px", "[ME][TA]L", "https://penguinies.itch.io/metal", "5", "Programmer", "2 months",
    "[ME][TA]L is a metal-themed rhythm game. Its unique feature is the burst note, which requires you to type the words on the screen in a limited time frame!",
    ["Implemented UI functionality", "Aligned note recordings to our parser's structure", "Created the tutorial"]));

projectDivs.push(CreateProject(1, "hidden", "82px", "LemmeDoIt4U", "https://zenuriken.itch.io/lemmedoit4u", "4", "Programmer", "2 days",
    "LemmeDoIt4U is a short game about a dog sticking its nose into a can to get the last pringle chip for its owner while dodging alien chips! The theme of the game jam was 'Into the Unknown.'",
    ["Implemented UI and meme popup functionality", "Set up audio and buff timers"]));

projectDivs.push(CreateProject(2, "hidden", "82px", "Morpheus' (Unpaid) Intern", "4", "https://weest.itch.io/morpheus-intern-unpaid", "Programmer", "2 days",
    "Morpheus' (Unpaid) Intern is a bullet-hell, where you play as the new intern of the god of dreams. Protect the sleeping child from nightmares!",
    ["Implemented UI functionality", "Created buff/debuff spawner and effects"]));

function RenderProjects() {
    return projectDivs.map((project, i) =>
        <Fragment key={i}>{project}</Fragment>
    );
}

const projectsRoot = createRoot(document.getElementById( "projectsContainer" ));
projectsRoot.render(RenderProjects());

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
$( "#arrowL" ).on( "click", function () {
    // console.log("left arrow");
    ScrollLeft();
} );

$( "#arrowR" ).on( "click", function () {
    // console.log("right arrow");
    ScrollRight();
} );

$( ".char-prof-but" ).on( "click", function () {
    if (uiOpen && !charStatOpen) {
        if (projectsOpen) {
            // MoveChar("regular");
        }
        HideUI();
    }
    ToggleCharProf();
} );

$( ".inventory-but" ).on( "click", function () {
    if (uiOpen && !inventoryOpen) {
        if (projectsOpen) {
            // MoveChar("regular");
        }
        HideUI();
    }
    ToggleInventory();
} );

$( ".skills-but" ).on( "click", function () {
    if (uiOpen && !skillsOpen) {
        if (projectsOpen) {
            // MoveChar("regular");
        }
        HideUI();
    }
    ToggleSkills();
} );

$( "#tab4" ).on( "click", function () {
    if (uiOpen && !projectsOpen) {
        // MoveChar("projects");
        HideUI();
    }
    ToggleProjects();
} );

$( ".projects-but" ).on( "click", function () {
    if (uiOpen && !projectsOpen) {
        // MoveChar("projects");
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

var buttonsHaveBeenPressed = new Set();
buttonsHaveBeenPressed.add("char-prof-but");

var progressBar = $( "#progress-bar" )[0];

var activeButton = "char-prof-but";
$( ".char-prof-but" )[0].style.backgroundImage = "url('/imgs/TabP.png')";

$(function() {
    $( 'button.butt' ).on( "click", function(e) {
        let butTargetName = e.target.className.split(" ")[1];
        if (butTargetName != activeButton) {
            // console.log($( "." + activeButton ));
            let activeButtons = $( "." + activeButton );
            for (let i = 0; i < activeButtons.length; i++) {
                activeButtons[i].style.backgroundImage = "url('/imgs/Tab.png')";
            }
            activeButton = butTargetName;
            // console.log($( "." + butTargetName ));
            for (let i = 0; i < $( "." + butTargetName ).length; i++) {
                $( "." + butTargetName )[i].style.backgroundImage = "url('/imgs/TabP.png')";
            }

            if (!buttonsHaveBeenPressed.has(butTargetName)) {
                buttonsHaveBeenPressed.add(butTargetName);
                // console.log(buttonsHaveBeenPressed.size);
                // console.log(Math.floor((buttonsHaveBeenPressed.size / 4) * 100));
                // console.log(String(Math.floor((buttonsHaveBeenPressed.size / 4) * 100)) + "%");
                progressBar.style.width = String(Math.floor((buttonsHaveBeenPressed.size / 4) * 100)) + "%";
                progressBar.ariaValueNow = String(Math.floor((buttonsHaveBeenPressed.size / 4) * 100));
            }

            
        }
        
    } );
});

// Inventory anchor hovering
function CreateHover(name, left, top, description) {
    return (
        <div className="hover" id={name+"-hover"} style={{"left": left + "px", "top": top + "px", "visibility": "hidden"}}>
            <div className="container fullHeight d-flex">
                <div className="row d-flex align-self-center">
                    <div className="col">
                        <p className="plr-05" style={{"marginBottom": "0.25rem"}}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

var hoverDivs = [];
hoverDivs.push(CreateHover("linkedin", 120, 60, "Connect with me on LinkedIn"));
hoverDivs.push(CreateHover("gmail", 220, 40, "Contact me at this email"));
hoverDivs.push(CreateHover("github", 320, 60, "Check out the codebase for all of my public projects here"));
hoverDivs.push(CreateHover("itch", 120, 140, "Play my games on itch.io"));
hoverDivs.push(CreateHover("gdd", 220, 140, "Learn more about Game Design and Development at Berkeley (GDD)"));

function RenderHovers() {
    return hoverDivs.map((hover, i) =>
        <Fragment key={i}>{hover}</Fragment>
    );
}

const hoverRoot = createRoot(document.getElementById( "hover-container" ));
hoverRoot.render(RenderHovers());

let linkedIn;
let gmail;
let github;
let itch;
let gdd;

$( function() {
    linkedIn = document.getElementById("linkedin-hover");
    gmail = document.getElementById("gmail-hover");
    github = document.getElementById("github-hover");
    itch = document.getElementById("itch-hover");
    gdd = document.getElementById("gdd-hover");
});

function getHover(id) {
    if (id == "linkedin-but") {
        return linkedIn;
    } else if (id == "gmail-but") {
        return gmail;
    } else if (id == "github-but") {
        return github;
    } else if (id == "itch-but") {
        return itch;
    } else if (id == "gdd-but") {
        return gdd;
    } 
}

$( ".inv-but" ).hover(
    function(e) {
        getHover(e.currentTarget.id).style.visibility = "visible";
    }, function(e) {
        getHover(e.currentTarget.id).style.visibility = "hidden";
    }
);