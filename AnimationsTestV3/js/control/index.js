//jQuery
$(document).ready(function () {
    //plays background ambience music
    var menuMusic = new Howl({
        urls : ["sounds/ambience/menuAmbience.mp3"],
        loop : true
    });
    menuMusic.play();
    //loads other sounds
    var clickSound = new Howl({urls : ["sounds/menu/click2.mp3"], volume:0.3});
    var selectSound = new Howl({urls:["sounds/menu/menu4.mp3"], volume:0.3});
    
    //animations test button click
    $("#okButton").click(function() {
        clickSound.play();
        menuMusic.stop();
        window.open("game.html");
    });    
    //sounds for menu
    $("[name='menuSelect']").click(function() {selectSound.play();});
});
