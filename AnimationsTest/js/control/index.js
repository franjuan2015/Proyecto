//jQuery
$(document).ready(function () {

});
//Angular
(function() {
    var animationsTestApp = angular.module("animationsTestApp", []);
    animationsTestApp.controller("animationsTestAppController", function($scope) {
        ////////////////////////////////////////////////////////////////////////PROPERTIES
        this.menuIsOn = true; //true if the menu must be shown
        this.robotTypesArray = []; //> array for the player robot select        
        this.selectedScenario; //> Contains the selected scenario
        this.scenariosArray = []; //> will contain all the scenario img objects
        this.selectedPlayerRobot; //> The selected robot in the select
        this.selectedEnemyRobot; //> The selected robot in the enemy select
        
        ////////////////////////////////////////////////////////////////////////SCOPE PROPERTIES        
        
        ////////////////////////////////////////////////////////////////////////METHODS
        /***********************************************************************
         * @name loadGameData()
         * @author Juan
         * @date 29/11/2015
         * @version 1.0
         * @description loads all game data in cache so the game loads faster. 
         *      Also fills the arrays for the menu selects
         * @returns {undefined}
         **********************************************************************/
        this.loadGameData = function() {
            //loads robots
            var mobot = new mobotObj();
            mobot.loadData();
            this.robotTypesArray.push(mobot);
            //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<add more robots here
            
            //loads scenarios
            var scenario = new scenarioObj("scifiDownTown");
            this.scenariosArray.push(scenario);
            //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<more scenarios to add here
            
            //load sounds
            //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<add sounds here
        };
        /***********************************************************************
         * @name startGame() 
         **********************************************************************/
        this.startGame = function() {
            // Turns OFF the menu, turns ON the game screen
            this.menuIsOn = false; 
            
            //creates the players            
            this.selectedPlayerRobot.createEnemy(this.selectedEnemyRobot.id);
            
            //starts the idle animations
            //this.selectedPlayerRobot.playAnim("idle");
            this.selectedPlayerRobot.enemy.playAnim("idle");
        };        
    });
})();
