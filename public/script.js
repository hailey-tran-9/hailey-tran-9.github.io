progress = 0;
gameStartOverlayOpen = !$( "#gameStartOverlay" )[0].hidden;

// Handle document clicks
$( document ).on( "click", function() {
    if (gameStartOverlayOpen) {
        $( "#gameStartOverlay" ).hide();
        gameStartOverlayOpen = false;
    }
} );