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
    if (e.key == "p") {
        ToggleCharProf();
    } else if (e.key == "i") {
        ToggleInventory();
    } else if (e.key == "u") {
        ToggleSkills();
    }
} );

charStat = $( "#charStatBlock" )[0];
charStatOpen = false;

function ToggleCharProf() {
    if (charStatOpen) {
        charStat.style.visibility = "hidden";
        charStatOpen = false;
    } else {
        charStat.style.visibility = "visible";
        charStatOpen = true;
    }
}

inventory = $( "#inventory" )[0];
inventoryOpen = false;

function ToggleInventory() {
    if (inventoryOpen) {
        inventory.style.visibility = "hidden";
        inventoryOpen = false;
    } else {
        inventory.style.visibility = "visible";
        inventoryOpen = true;
    }
}

skills = $( "#skills" )[0];
skillsOpen = false;

function ToggleSkills() {
    if (skillsOpen) {
        skills.style.visibility = "hidden";
        skillsOpen = false;
    } else {
        skills.style.visibility = "visible";
        skillsOpen = true;
    }
}