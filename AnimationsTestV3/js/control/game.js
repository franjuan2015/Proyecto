//global variables
var selectedPlayerRobot;
var selectedEnemyRobot;
var playerAnimationID;
var enemyAnimationID;
var topPlayerFrames;
var topEnemyFrames;
var gameSounds;

$(document).ready(function() {
    //assings the selected robots
    selectedPlayerRobot = window.opener.$("#playerSelect").val();
    selectedEnemyRobot = window.opener.$("#enemySelect").val();    
    
    //loads the selected player and enemy graphics
    loadPlayerTopFrames(selectedPlayerRobot);    
    loadEnemyTopFrames(selectedEnemyRobot);
    
    //loads all sound
    loadSounds();
    
    //loads all graphics 
    loadGraphics(); 
    
    //sets the default animations
    setPlayerAnim("idle");
    setEnemyAnim("idle");
           
    //loads selected background
    $("#background").attr("src", "images/backgrounds/"+window.opener.
            $("#scenarioSelect").val()+".jpg");
    
    //plays background music
    gameSounds.gameMusic.play();
    
    //button events
    $("#attack1").click(function() {setPlayerAnim("attack1");});
    $("#attack2").click(function() {setPlayerAnim("attack2");});
    $("#attack3").click(function() {setPlayerAnim("attack3");});
    $("#attack4").click(function() {setPlayerAnim("attack4");});
    $("#attack5").click(function() {setPlayerAnim("attack5");});
    $("#attack6").click(function() {setPlayerAnim("attack6");});
    $("#ultimate").click(function() {setPlayerAnim("ultimate");});
    $("#hit1").click(function() {setPlayerAnim("hit1");});
    $("#hit2").click(function() {setPlayerAnim("hit2");});
    $("#hit3").click(function() {setPlayerAnim("hit3");});
    $("#die").click(function() {setPlayerAnim("die");});
});


