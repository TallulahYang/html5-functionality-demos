(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    // for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    //     window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    //     window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    // }
    // if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
    //     var currTime = new Date().getTime();
    //     var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    //     var id = window.setTimeout(function() {
    //         callback(currTime + timeToCall);
    //     }, timeToCall);
    //     lastTime = currTime + timeToCall;
    //     return id;
    // };

    window.RAF = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = 1000 / 40;
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    // if (!window.cancelAnimationFrame) {
    //     window.cancelAnimationFrame = function(id) {
    //         clearTimeout(id);
    //     };
    // }
    window.CAF = function(id) {
        clearTimeout(id);
    };
})();
(function() {
    var _Car = function(dom, options) {
        this._dom = dom;
        this._canvas = document.createElement('canvas');
        this._ctx = this._canvas.getContext('2d');

        var newContent = document.createTextNode("Sorry, your browser doesn't support canvas!");
        // this._canvas.width = this._dom.clientWidth*2;
        // this._canvas.height = this._dom.clientHeight*2;
        this._canvas.width = 568 ;//171
        this._canvas.height = 260; //189;
        this._canvas.className = 'c-render';
        this._canvas.appendChild(newContent);
        this._dom.appendChild(this._canvas);

        this.carColorCanvas = document.createElement("canvas");
        this.carColorCanvas.width = this._canvas.width;
        this.carColorCanvas.height = this._canvas.height;
        this.carColorCanvasCtx = this.carColorCanvas.getContext("2d");

        var defalut = {
            "baseUrl": "images/",
            "carColor": 1,
            "carImages": {
                "frame":{img: new Image(), url: "car_red.png"},
                "0":{img: new Image(), url: "car_red.png"},
                "1":{img: new Image(), url: "car_gray.png"},
                "2":{img: new Image(), url: "car_blue.png"},
                "shadowmaskAni": {img: new Image(), url: "mask-ani.png"}
            },
            "maskaniData": {},
            "maskglowData": {}
        };
        options = $.extend(defalut, options);

        this.build(options);
    };

    _Car.prototype.build = function(options) {
        this.status = "loading";
        this._baseUrl = options.baseUrl;

        this.carColor = options.carColor;
        this.carImages = options.carImages;
        
        this.carFrame = new Image();
        this.curColorImage = new Image();
        this.nextColorImage = new Image();


        this.textureData = options.maskaniData["frames"];
        this.textureDataMeta = options.maskaniData["meta"];
        this.textureCurFrame = 0;
        this.maskglowData = options.maskglowData["frames"];
        var self = this;
        this.loadAssets(function() {
            self.status = "loaded";
            console.log('load images done!', self.textureDataMeta.length);
            self.curColorImage = self.carImages[self.carColor].img;
            self.carFrame = self.carImages.frame.img;
            self.shadowmaskAni = self.carImages.shadowmaskAni.img;
            self.drawCar();
        });
    }

    _Car.prototype.loadAssets = function(callback) {
        var self = this, colors = [], loaded = 0, loadCount = colors.length;
        for(var j in self.carImages){
            colors.push(j);
            console.log(j)
        }
        loadCount = colors.length;
        for (var i = 0; i < colors.length; i++) {
            self.carImages[colors[i]].img.onload = function() {
                loaded++;
                if (loaded == loadCount) callback();
            };
            self.carImages[colors[i]].img.src = self._baseUrl + self.carImages[colors[i]].url;
        }
    }

    _Car.prototype.drawCar = function() {
        var canvas = this._canvas,
            ctx = this._ctx;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.globalCompositeOperation = "copy";
        ctx.fillStyle = "rgba(0,0,0,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        // ctx.drawImage(this.carFrame, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.curColorImage, 0, 0, canvas.width, canvas.height);

    }


    _Car.prototype.switchColor = function(color) {
        var self = this,
            width = 100, widthStep = 30;
            var canvas = this._canvas,
                ctx = this._ctx;

            self.status = "changing";
            self.nextColorImage = self.carImages[color].img;

    var carColorCanvas = this.carColorCanvas,
        carColorCanvasCtx = this.carColorCanvasCtx;

        (function draw() {
            if (self.textureCurFrame <= self.textureDataMeta.length) {
                var curFrame = _Car.formatNumber2Str(self.textureCurFrame),
                sx = self.textureData[curFrame].frame.x,
                sy = self.textureData[curFrame].frame.y,
                sw = self.textureData[curFrame].frame.w,
                sh = self.textureData[curFrame].frame.h,
                cx = self.textureData[curFrame].spriteSourceSize.x,
                cy = self.textureData[curFrame].spriteSourceSize.y,
                cw = self.textureData[curFrame].spriteSourceSize.w,
                ch = self.textureData[curFrame].spriteSourceSize.h;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                carColorCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                // next color
                carColorCanvasCtx.save();
                
                carColorCanvasCtx.drawImage(self.nextColorImage, 0, 0, sw, canvas.height, 0, 0, sw, canvas.height);
                carColorCanvasCtx.globalCompositeOperation = "destination-in";
                carColorCanvasCtx.drawImage(self.shadowmaskAni, sx, sy, sw, sh, cx, cy, cw, ch);
                
                carColorCanvasCtx.restore();

                // put color on car
                ctx.save();
                ctx.globalCompositeOperation = "copy";
                ctx.fillStyle = "rgba(0,0,0,0)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();

                // ctx.drawImage(self.carFrame, 0, 0, canvas.width, canvas.height);
                ctx.drawImage(self.curColorImage, 0, 0, canvas.width, canvas.height);
                
                ctx.drawImage(carColorCanvas, 0, 0, canvas.width, canvas.height);
                
                // ctx.drawImage(self.shadowmaskglowAni, gsx, gsy, gsw, gsh, gcx, gcy, gcw, gch);

                self.textureCurFrame++;
                window.RAF(draw);
            } else {
                self.status = "changed";
                self.textureCurFrame = 0;
                self.curColorImage = self.nextColorImage;
                self.carColor = color;
                self.drawCar();
            }
            
        }());
    }

    _Car.formatNumber2Str = function(n) {
        var result = "";
        if (n < 10) {
            result = "0" + n;
        } else {
            result = "" + n;
        }

        return result;
    }

    window.Car = _Car;
}())