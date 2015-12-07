function loadPlayerTopFrames() {
    if (selectedPlayerRobot == "mobot") {
        topPlayerFrames = {
        "attack1":96,
        "attack2":104,
        "attack3":111,
        "attack4":247,
        "attack5":200,
        "attack6":155,
        "die":60,
        "hit1":25,
        "hit2":22,
        "hit3":24,
        "idle":60,
        "ultimate":230
    };
    }
};
function setPlayerAnim(animationName) {
    clearInterval(playerAnimationID);
    var i = 1;
    playerAnimationID = setInterval(function() {
        $("#playerFrame").attr("src", "images/"+selectedPlayerRobot+"/"+
                animationName+"/"+animationName+" ("+i+").png");
        //attack events
        //MOBOT
        if (selectedPlayerRobot == "mobot") {
            if (animationName == "attack1") {
                if (i == 11) {gameSounds.sableStart.play();gameSounds.sableIsOn.play();}
                if (i == 41) {gameSounds.sableSlash1.play();}
                if (i == 42) {hitEnemy();}
                if (i == 54) {gameSounds.hidraulic1.play();}
                if (i == 87) {gameSounds.sableIsOn.stop();}
            }
            if (animationName == "attack2") {
                if (i == 12) {gameSounds.reload.play();}
                if (i == 34) {hitEnemy();gameSounds.shot1.play();}
                if (i == 40) {hitEnemy();gameSounds.shot2.play();}
                if (i == 48) {hitEnemy();gameSounds.shot4.play();}
            }
            if (animationName == "attack3") {
                if (i == 3) {gameSounds.sableStart.play();}
                if (i == 34) {gameSounds.sableSlash2.play();}
                if (i == 42) {hitEnemy();gameSounds.sableSlash3.play();}
                if (i == 47) {hitEnemy();}
                if (i == 55) {hitEnemy();}
                if (i == 61) {hitEnemy();gameSounds.death.play();gameSounds.sableSlash1.play();}
                if (i == 69) {hitEnemy();}
                if (i == 74) {hitEnemy();}
                if (i == 79) {hitEnemy();gameSounds.sableSlash2.play();}
            }
            if (animationName == "attack4") {
                if (i == 7) {gameSounds.sableStart.play();gameSounds.sableIsOn.play();}
                if (i == 94) {gameSounds.hidraulic2.play();}
                if (i == 119) {hitEnemy();gameSounds.sableSlash1.play();}
                if (i == 154) {hitEnemy();gameSounds.sableSlash3.play();}
                if (i == 234) {gameSounds.sableIsOn.stop();}
            }
            if (animationName == "attack5") {
                if (i == 2) {gameSounds.reload.play();}
                if (i == 21) {hitEnemy();gameSounds.shot1.play();}
                if (i == 90) {hitEnemy();gameSounds.shot2.play();}
                if (i == 102) {hitEnemy();gameSounds.shot3.play();}
                if (i == 118) {hitEnemy();gameSounds.shot4.play();}
            }
            if (animationName == "attack6") {
                if (i == 6) {gameSounds.sableStart.play();gameSounds.hidraulic1.play();}
                if (i == 60) {hitEnemy();gameSounds.sableSlash1.play();}
                if (i == 65) {hitEnemy();gameSounds.sableSlash3.play();}
                if (i == 133) {gameSounds.sableStart.play();}
            }
            if (animationName == "ultimate") {
                if (i == 5) {gameSounds.sableStart.play();gameSounds.hidraulic2.play();}
                if (i == 34) {hitEnemy();gameSounds.sableSlash1.play();}
                if (i == 51) {hitEnemy();gameSounds.sableSlash2.play();}
                if (i == 78) {hitEnemy();gameSounds.sableSlash3.play();}
                if (i == 92) {hitEnemy();}
                if (i == 103) {hitEnemy();}
                if (i == 112) {hitEnemy();gameSounds.sableSlash1.play();}
                if (i == 122) {hitEnemy();}
                if (i == 133) {hitEnemy();gameSounds.sableSlash2.play();}
                if (i == 142) {hitEnemy();}
                if (i == 152) {hitEnemy();}
                if (i == 165) {hitEnemy();gameSounds.sableSlash3.play();}
                if (i == 209) {gameSounds.sableStart.play();}
            }
            if (animationName == "die") {
                if (i == 1) {gameSounds.death.play();gameSounds.hidraulic1.play();gameSounds.spark1.play();}
            }
            if (animationName == "hit1") {
                if (i == 1) {gameSounds.spark1.play();}
            }
            if (animationName == "hit2") {
                if (i == 1) {gameSounds.spark2.play();}
            }
            if (animationName == "hit3") {
                if (i == 1) {gameSounds.spark3.play();}
            }
        }        
        //checks if the animation has finished
        if (i >= topPlayerFrames[animationName]) {
            stopPlayerAnims();
        }
        i++;
    }, 30);
};
function stopPlayerAnims() {
    clearInterval(playerAnimationID);
    setPlayerAnim("idle");
};

