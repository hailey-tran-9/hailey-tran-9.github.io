import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import $ from 'jquery'
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// From main.jsx
// ---------------------------------------------------- Character ----------------------------------------------------
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

// ---------------------------------------------------- Hover/Project Generation ----------------------------------------------------
// Create hover DOMs
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

// Render hovers
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

// Create project DOMs
function CreateProject(page, vs, mt, pic, gt, link, team, role, duration, description, tasks, padding) {
    return (
        <div id={"page-"+page} style={{"position": "absolute", "visibility": vs}}>
            <div className="row" style={{"marginTop": mt, "marginLeft": "3.5em"}}>
                <div className="row"><h4 className="pr-3 pt-1 mb-0" style={{"color":"white"}}>Projects</h4></div>
            </div>
            <div className="row" style={{"height": "120px", "marginTop": "4.3em"}}>
                <div className="col" style={{"height": "120px", "paddingRight": "0"}}>
                    <div className='row'>
                        <img src={"/imgs/"+pic.replace(/\s+/g, '')+".png"} 
                        style={{"width": "100px", "height": "100px", 
                        "objectFit": "cover", "marginRight": "25px", 
                        "marginTop": "5px", "marginLeft": "64px",
                        "padding": "0"}}></img>
                    </div>
                </div>
                <div className="col-10" style={{"height": "120px", "paddingLeft": padding[0]}}>
                    <div className="row" style={{"paddingLeft": "5px", "marginTop": "8px"}}>
                        <div className="col-1" style={{"marginRight": padding[1]}}><p className='white'>Title</p></div>
                        <div className='col-9'><h5>{gt}</h5></div>
                    </div>
                    <div className="row" style={{"paddingLeft": "5px", "marginTop": "-2px"}}>
                        <div className="col-1" style={{"marginRight": padding[1]}}><p className='white'>Link</p></div>
                        <div className='col-9'><a href={link} target="_blank">View the project here!</a></div>
                    </div>
                </div>
            </div>
            <div className="row" style={{"marginLeft": "50px", "marginTop": "1px"}}>
                <div className='col-2' style={{"paddingRight": "0"}}>
                    <p className='white'>Team Size</p>
                </div>
                <div className='col-1' style={{"width":"20px", "paddingLeft": padding[2], "paddingRight": "0"}}>
                    <p>{team}</p>
                </div>
                <div className='col-1' style={{"paddingLeft": padding[3], "paddingRight": "0"}}>
                    <p className='white'>Role</p>
                </div>
                <div className='col-3' style={{"paddingLeft": padding[4]}}>
                    <p>{role}</p>
                </div>
                <div className='col-1' style={{"width":"100px", "paddingLeft": padding[5], "paddingRight": "0"}}>
                    <p className='white'>Duration</p>
                </div>
                <div className='col-3' style={{"paddingLeft": padding[6], "paddingRight": 0}}>
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

// Render projects
var projectDivs = [];
projectDivs.push(CreateProject(0, "hidden", "30px", "[ME][TA]L", "[ME][TA]L", "https://penguinies.itch.io/metal", "5", "Programmer", "2 months",
    "[ME][TA]L is a metal-themed rhythm game. Its unique feature is the burst note, which requires you to type the words on the screen in a limited time frame!",
    ["Implemented UI functionality", "Aligned note recordings to our parser's structure", "Created the tutorial", "Mapped songs", "Managed audio system"], 
    ["58px", "5px", "5px", "37px", "25px", "45px", "32px"]));

projectDivs.push(CreateProject(1, "hidden", "30px", "LemmeDoIt4U", "LemmeDoIt4U", "https://zenuriken.itch.io/lemmedoit4u", "4", "Programmer", "2 days",
    "LemmeDoIt4U is a short game about a dog sticking its nose into a can to get the last pringle chip for its owner while dodging alien chips! The theme of the game jam was 'Into the Unknown.'",
    ["Implemented UI and meme popup functionality", "Set up audio and buff timers"], 
    ["64px", "8px", "10px", "42px", "33px", "61px", "48px"]));

projectDivs.push(CreateProject(2, "hidden", "30px", "Morpheus' (Unpaid) Intern", "Morpheus' (Unpaid) Intern", "https://weest.itch.io/morpheus-intern-unpaid", "4", "Programmer", "2 days",
    "Morpheus' (Unpaid) Intern is a bullet-hell, where you play as the new intern of the god of dreams. Protect the sleeping child from nightmares!",
    ["Implemented UI functionality", "Created buff/debuff spawner and effects"], 
    ["70px", "10px", "16px", "48px", "42px", "79px", "66px"]));

projectDivs.push(CreateProject(3, "hidden", "30px", "Transparent", "Gitlet", "", "1", "Programmer", "2 weeks",
    "A simplified version of the popular collaborative file system program Github.",
    ["Implemented git add, commit, push, pull", "Merge functionality"], 
    ["70px", "10px", "16px", "48px", "42px", "79px", "66px"]));

projectDivs.push(CreateProject(4, "hidden", "30px", "Transparent", "GDD 3D Showroom", "", "4", "Programmer", "2 weeks",
    "An informational website that helps users learn more about the Game Design and Development at Berkeley (GDD) organization. By clicking on interactable \
    objects and navigating through the 3D space, we tried to emulate a more game-like experience.",
    ["Implemented UI functionality", "Created helper functions for object loading", "Implemented keyboard re-mapping"], 
    ["70px", "7px", "16px", "45px", "42px", "72px", "60px"]));

projectDivs.push(CreateProject(5, "hidden", "30px", "Transparent", "Multi-Agent Search", "", "2", "Programmer", "2 weeks",
    "Implemented different search algorithms for a simiplifed version of Pacman.",
    ["A* Search", "Other utility functions"], 
    ["80px", "10px", "25px", "50px", "45px", "95px", "84px"]));

projectDivs.push(CreateProject(6, "hidden", "30px", "Transparent", "Encrypted File Sharing System", "", "2", "Programmer", "1 month",
    "Created an encrypted file system.",
    ["Symmetric key encryption", "HMAC encoding", "Random key generation using SHA-156", "Implemented user authentication, file storage/retrieval, file sharing, file revocation, and efficient writes"], 
    ["50px", "5px", "3px", "30px", "15px", "25px", "15px"]));

function RenderProjects() {
    return projectDivs.map((project, i) =>
        <Fragment key={i}>{project}</Fragment>
    );
}

const projectsRoot = createRoot(document.getElementById( "projectsContainer" ));
projectsRoot.render(RenderProjects());

// ---------------------------------------------------- Tab Toggling ----------------------------------------------------
var gameStartOverlayOpen = !$( "#gameStartOverlay" )[0].hidden;

// Handle 1st document click
$( document ).on( "click", function() {
    if (gameStartOverlayOpen) {
        $( "#gameStartOverlay" ).hide();
        gameStartOverlayOpen = false;
    }
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

function SwitchProject(to) {
    let projInt = parseInt(to.id.split("-")[1]);
    if (projInt != lastOpenedProjIndex) {
        let proj = $( "#page-"+lastOpenedProjIndex )[0];
        proj.style.visibility = "hidden";

        proj = $( "#page-"+projInt )[0];
        proj.style.visibility = "visible";
    }
    lastOpenedProjIndex = projInt;
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
window.onload = (e) => {
    ToggleCharProf();
};

$(function() {
    $( '.proj-but' ).on( "click", function(e) {
        SwitchProject(e.currentTarget);
    } );
});

// ---------------------------------------------------- Button Toggling ----------------------------------------------------
var buttonsHaveBeenPressed = new Set();
buttonsHaveBeenPressed.add("char-prof-but");

var progressBar = $( "#progress-bar" )[0];

var activeButton = "char-prof-but";
$( ".char-prof-but" )[0].style.backgroundImage = "url('/imgs/TabP.png')";

// Update the button sprites and website progress bar
function ButtonPress(targetName) {
    if (targetName != activeButton) {
        // console.log($( "." + activeButton ));
        let activeButtons = $( "." + activeButton );
        for (let i = 0; i < activeButtons.length; i++) {
            activeButtons[i].style.backgroundImage = "url('/imgs/Tab.png')";
        }
        activeButton = targetName;
        // console.log($( "." + targetName ));
        for (let i = 0; i < $( "." + targetName ).length; i++) {
            $( "." + targetName )[i].style.backgroundImage = "url('/imgs/TabP.png')";
        }

        if (!buttonsHaveBeenPressed.has(targetName)) {
            buttonsHaveBeenPressed.add(targetName);
            progressBar.style.width = String(Math.floor((buttonsHaveBeenPressed.size / 4) * 100)) + "%";
            progressBar.ariaValueNow = String(Math.floor((buttonsHaveBeenPressed.size / 4) * 100));
        }
    }
}

// Handle physical button clicks
$(function() {
    $( 'button.butt' ).on( "click", function(e) {
        let butTargetName = e.target.className.split(" ")[1];
        ButtonPress(butTargetName);
    } );
});

// Handle keyboard shortcuts
$( document ).on( "keydown", function( e ) {
    console.log(e.key);
    if (!gameStartOverlayOpen) {
        if (e.key == "p") {
            if (uiOpen && !projectsOpen) {
                HideUI();
            }
            ToggleProjects();
            ButtonPress("projects-but");
        } else if (e.key == "o") {
            if (uiOpen && !skillsOpen) {
                HideUI();
            }
            ToggleSkills();
            ButtonPress("skills-but");
        } else if (e.key == "i") {
            if (uiOpen && !inventoryOpen) {
                HideUI();
            }
            ToggleInventory();
            ButtonPress("inventory-but");
        } else if (e.key == "u") {
            if (uiOpen && !charStatOpen) {
                HideUI();
            }
            ToggleCharProf();
            ButtonPress("char-prof-but");
        }
    }
} );

// ---------------------------------------------------- Inventory Anchor Hovering ----------------------------------------------------
// Open/close hovers
var linkedIn;
var gmail;
var github;
var itch;
var gdd;

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

// ---------------------------------------------------- Chat Box ----------------------------------------------------
var qa = {"What's your favorite game?": ["Monster Hunter: World! I've been a huge fan of the franchise ever since \
    Monster Hunter 2, which I played on the PSP.", "It's so satisfying to complete weapon and armor loadouts and \
    learn the moveset of these insanely awesome monsters.", "But the aspect of MHW that really drew me in was the \
    interactivity with the environment. For the player and the monsters!"],
    "Rhythm games?": ["Rythm games!! I absolutely love playing rhythm games (both arcade and pc/console)! \
    You can find me on weekends at Round 1 playing DDR or DanceRush Stardom.", "I even tried to make a rhythm game \
    myself!"], 
    "TTRPGs?": ["I also play D&D 5E. I enjoy playing spellcasters and using my character's unique \
    abilities to explore the world."], 
    "Hobbies?": ["Besides gaming, my hobbies are watching anime, reading manga, playing music (piano/guitar), and \
    photography.", "You can check out some of the photos I've taken ____."],
    "Game Design and Development at Berkeley (GDD)": ["Throughout my time in the club, I've been the President, Decal \
    Facilitator, and Public Relations officer.", "Being part of the staff has allowed me to improve my \
    teamwork and communication skills.", "I also got to meet more people and become better friends with my \
    peers!"],
    "GDD Decal": ["UC Berkeley doesn't have an officially endorsed game development course under the College \
    of Engineering, so I took GDD's Decal instead.", "It was helpful learning with a structured course and \
    having a group committed to finishing a project.", "So I decided to become a Facilitator and help others \
    do the same!", "The 2 groups I've mentored are 'A Home For Anderson' and 'Catching Fire'."]
};