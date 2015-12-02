//jQuery
$(document).ready(function () {

});
//Angular
(function() {
    var animationsTestApp = angular.module("animationsTestApp", []);
    animationsTestApp.controller("animationsTestAppController", function($scope, $interval) {
        ////////////////////////////////////////////////////////////////////////PROPERTIES        
        this.robotTypesArray = []; //> array for the player robot select        
        this.selectedScenario; //> Contains the selected scenario
        this.scenariosArray = []; //> will contain all the scenario img objects    
        
        ////////////////////////////////////////////////////////////////////////SCOPE PROPERTIES  
        $scope.menuIsOn = true;
        $scope.playerAnimationID;
        $scope.enemyAnimationID;
        $scope.selectedPlayerRobot; //> The selected robot in the select
        $scope.selectedEnemyRobot; //> The selected robot in the enemy select 
        $scope.currentPlayerFrame; //> the current 'path' of the player frame at all times
        $scope.currentEnemyFrame; //> the current 'path' of the enemy frame at all times
        
        ////////////////////////////////////////////////////////////////////////METHODS    
        /***********************************************************************
         * @name setPlayerAnim()
         * @author Juan
         * @version 3.0
         * @date 2/12/2015
         * @param {String} animationName : the name of the animation to play
         * @description plays a given animation for the player
         **********************************************************************/
        $scope.setPlayerAnim = function(animationName) {
            $interval.cancel($scope.playerAnimationID);
            var topFrame = $scope.selectedPlayerRobot.topFrames[animationName];            
            var i = 1;
            $scope.playerAnimationID = $interval(function() {
                $scope.currentPlayerFrame = "images/"+$scope.selectedPlayerRobot.id+"/"+animationName+"/"+animationName+" ("+i+").png";                
                if (i == topFrame) {
                    $scope.stopPlayerAnim();
                }
                i++;
            }, 30);
        };
        /***********************************************************************
         * @name stopPlayerAnim()
         * @description stops all animation for player and sets the idle 
         *      animation
         **********************************************************************/
        $scope.stopPlayerAnim = function() {
            $interval.cancel($scope.playerAnimationID);
            $scope.setPlayerAnim("idle");
        };
        /***********************************************************************
         * @name setEnemyAnim()
         * @author Juan
         * @version 3.0
         * @date 2/12/2015
         * @param {String} animationName : the name of the animation to play
         * @description plays a given animation for the enemy
         **********************************************************************/
        $scope.setEnemyAnim = function(animationName) {
            $interval.cancel($scope.enemyAnimationID);
            var topFrame = $scope.selectedEnemyRobot.enemy.topFrames[animationName];
            var i = 1;
            $scope.enemyAnimationID = $interval(function() {
                $scope.currentEnemyFrame = "images/"+$scope.selectedEnemyRobot.id+"/"+animationName+"/"+animationName+" ("+i+").png";                
                if (i == topFrame) {
                    $scope.stopEnemyAnim();
                }
                i++;
            }, 30);
        };
        /***********************************************************************
         * @name stopEnemyAnim()
         * @description stops all animation for enemy and sets the idle 
         *      animation
         **********************************************************************/
        $scope.stopEnemyAnim = function() {
            $interval.cancel($scope.enemyAnimationID);
            $scope.setEnemyAnim("idle");
        };
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
         * @author Juan
         * @date 2/12/2015
         * @version 2.0
         * @description turns off the menu, turns on the game. Creates the enemy
         *      object, based on the content of the variable 'selectedEnemyRobot'
         **********************************************************************/
        this.startGame = function() {
            // Turns OFF the menu, turns ON the game screen
            $scope.menuIsOn = false; 
            
            //creates the enemy player            
            $scope.selectedPlayerRobot.createEnemy($scope.selectedEnemyRobot.id);
            $scope.selectedPlayerRobot.enemy.loadData();
            
            //sets the idle animation for both player and enemy
            $scope.setPlayerAnim("idle");
            $scope.setEnemyAnim("idle");
        };        
    });
})();
