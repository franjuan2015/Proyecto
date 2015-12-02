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
    this.images = [];
};
enemyObj.prototype.loadData = function() {
    for (var i=0; i<this.topFrames.length; i++) {
        var tmpArray = [];
        for (var j=1; j<=this.topFrames[i][1]; j++) {
            var image = new Image();
            image.src = "images/mobot/"+this.topFrames[i][0]+"/"+this.topFrames[i][0]+" ("+j+").png";
            tmpArray.push(image);
        }
        this.images.push(tmpArray);
    }
};



