function loadGraphics() {
    //loads player graphics
    var playerAnimationNames = ["attack1","attack2","attack3","attack4","attack5",
        "attack6","die","hit1","hit2","hit3","idle","ultimate"];
    var playerImagesArray = [];
    for (var i=0; i<playerAnimationNames.length; i++) {
        for (var j=1; j<topPlayerFrames[playerAnimationNames[i]]; j++) {
            var img = new Image();
            img.src = "images/"+selectedPlayerRobot+"/"+playerAnimationNames[i]+
                    "/"+playerAnimationNames[i]+" ("+j+").png";
            playerImagesArray.push(img);
        }
    }
    
    //loads enemy graphics
    var enemyAnimationNames = ["die","hi1","hi2","hi3","idle"];
    var enemyImagesArray = [];
    for (var i=0; i<enemyAnimationNames.length; i++) {
        for (var j=1; j<topEnemyFrames[enemyAnimationNames[i]]; j++) {
            var img = new Image();
            img.src = "images/"+selectedEnemyRobot+"/"+enemyAnimationNames[i]+"/"
                    +enemyAnimationNames[i]+" ("+j+").png";
            enemyImagesArray.push(img);
        }
    }
};


