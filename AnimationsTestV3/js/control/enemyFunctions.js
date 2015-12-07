function loadEnemyTopFrames() {
    if (selectedEnemyRobot == "mobot") {
        topEnemyFrames = {
            "die":60,
            "hit1":25,
            "hit2":22,
            "hit3":24,
            "idle":60
        };
    }
};
function setEnemyAnim(animationName) {
    clearInterval(enemyAnimationID);
    var i = 1;
    enemyAnimationID = setInterval(function () {
        $("#enemyFrame").attr("src", "images/"+selectedEnemyRobot+"/"+
                animationName+"/"+animationName+" ("+i+").png");
        if (i >= topEnemyFrames[animationName]) {
            stopEnemyAnims();
        }
        i++;
    }, 30);
};
function stopEnemyAnims() {
    clearInterval(enemyAnimationID);
    setEnemyAnim("idle");
};
function hitEnemy() {
    //sets a random hit animation
    var i = Math.floor(Math.random() * 3) + 1;
    setEnemyAnim("hit"+i);
    
    //sets a random hit sound
    var i = Math.floor(Math.random() * 4) + 1;
    if (i==1) {gameSounds.spark1.play();}
    else if (i==2) {gameSounds.spark2.play();}
    else if (i==3) {gameSounds.spark3.play();}
    else {gameSounds.spark4.play();}
};

