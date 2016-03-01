function playSpriteAni(elementId, playTime, totalSpriteHeight, startFrame, endFrame) {
    var loading = {
        element: null,
        spriteHeight: 0,
        startFrame: 0,
        endFrame: 0,
        playRate: 0,
        curFrame: 0,
        transY: 0,
        endtransY: 0,
        sprites: null,

        start: function() {
            var scope = this;
            this.sprites = setInterval(function() {
                scope.curFrame++;
                scope.transY -= scope.spriteHeight;
                scope.element.style.backgroundPosition = "0 " + scope.transY + "px";
                if (scope.curFrame == scope.endFrame) {
                    scope.transY = 0;
                    scope.curFrame = 0;
                }
            }, this.playRate);
        },
        stop: function() {
            clearInterval(this.sprites);
        },
        build: function(elementId, playTime, totalSpriteHeight, startFrame, endFrame) {
            this.element = document.getElementById(elementId);
            this.spriteHeight = this.element.clientHeight;
            this.startFrame = (startFrame == 0) || startFrame ? startFrame : 1;
            console.log(this.startFrame)
            this.endFrame = endFrame ? endFrame : (totalSpriteHeight /this.spriteHeight);
            console.log(this.endFrame)
            this.playRate = playTime / (this.endFrame - this.startFrame);
            console.log(this.playRate)
            this.curFrame = this.startFrame;
            this.transY = -(this.startFrame - 1) * this.spriteHeight;
            this.endtransY = -(this.endFrame - 1) * this.spriteHeight;
        }
    }
    loading.build(elementId, playTime, totalSpriteHeight, startFrame, endFrame);
    return loading;
}

var loadingAni = playSpriteAni('seq', 1000, 3600);
loadingAni.start();


setTimeout(function(){
   loadingAni.stop(); 
},1000);
setTimeout(function(){
   loadingAni.start(); 
},2000);