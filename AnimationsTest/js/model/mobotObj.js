this.mobotObj = function() {
    ////////////////////////////////////////////////////////////////////////////PROPERTIES
    this.name = "Mobot"; //> The name of the character
    this.id = "mobot"; //> the character ID
    this.initialHp = 400; //> the initial health pool
    this.initialDamageReduction = 1.5; //> the incoming damage will be reduced by this amount
    this.initialDamageMultiplier = 1.5; //> the output damage will be increased by this amount
    this.topFrames = [
        ["attack1",96],
        ["attack2",104],
        ["attack3",111],
        ["attack4",247],
        ["attack5",200],
        ["attack6",155],
        ["die",60],
        ["hit1",25],
        ["hit2",22],
        ["hit3",24],
        ["idle",60]
    ];
    this.thumbnailPath = "images/mobot/thumbnail.png";  //> the path for the thumbnail image
    this.images = []; //contains all robot images. Its filled then loadData() is called
    this.enemy;
	
    ////////////////////////////////////////////////////////////////////////////METHODS
    this.createEnemy = function (enemyName) {
        this.enemy = new enemyObj(enemyName);
    };
    this.loadData = function() {        
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
};

