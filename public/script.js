progress = 0;
gameStartOverlayOpen = !$( "#gameStartOverlay" )[0].hidden;

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

uiOpen = false;

charStat = $( "#charStatBlock" )[0];
charStatOpen = false;

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

inventory = $( "#inventory" )[0];
inventoryOpen = false;

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

skills = $( "#skills" )[0];
skillsOpen = false;

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

projects = $( "#projects" )[0];
projectsOpen = false;

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