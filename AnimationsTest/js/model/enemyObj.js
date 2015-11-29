this.enemyObj = function(robotName) {
    this.id = robotName;
    this.topFrames = [];
    this.filePath = "";
    this.currentAnimationID = 0;
    if (this.id === "mobot") {
        this.topFrames = [
            ["die",60],
            ["hit1",25],
            ["hit2",22],
            ["hit3",24],
            ["idle",60]
        ];
        this.filePath = "images/mobot/";
    }
    
    this.playAnim = function(animationName) {
        clearInterval(this.currentAnimationID);
        var topFrame;
        var filePath = this.filePath;
        if (animationName === "die") {topFrame = 60;}
        else if (animationName === "hit1") {topFrame = 25;}
        else if (animationName === "hit2") {topFrame = 22;}
        else if (animationName === "hit3") {topFrame = 24;}
        else if (animationName === "idle") {topFrame = 60;}
        var i = 1;
        this.currentAnimationID = setInterval(function() {
            $("#playerContainer").attr("src", filePath+animationName+"/"+animationName+" ("+i+").png");
            i++;
            if (i == topFrame && animationName === "idle") {
                i = 1;
            }else {
                clearInterval(this.currentAnimationID);
            }
        }, 45);  
        renewAnims();
    };
    function renewAnims() {
        this.playAnim("idle");
    };
};


