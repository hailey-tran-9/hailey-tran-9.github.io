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