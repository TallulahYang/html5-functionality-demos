(function() {
    var _Car = function(dom, options) {
        this._dom = dom;
        this._canvas = document.createElement('canvas');
        this._ctx = this._canvas.getContext('2d');

        var newContent = document.createTextNode("Sorry, your browser doesn't support canvas!");
        this._canvas.width = this._dom.clientWidth*2;
        this._canvas.height = this._dom.clientHeight*2;
        this._canvas.className = 'c-render';
        this._canvas.appendChild(newContent);
        this._dom.appendChild(this._canvas);

        var defalut = {
            "baseUrl": "images/car/",
            "carColor": "black",
            "carImages": {
                "frame":{img: new Image(), url: "car.png"},
                "black":{img: new Image(), url: "car-shadow-mask-black.png"},
                "brown":{img: new Image(), url: "car-shadow-mask-brown.png"},
                "red":{img: new Image(), url: "car-shadow-mask-red.png"},
                "blue":{img: new Image(), url: "car-shadow-mask-blue.png"}
            }
        };
        options = $.extend(options, defalut);

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

        var self = this;
        this.loadAssets(function() {
            self.status = "loaded";
            console.log('load images done!', self);
            self.curColorImage = self.carImages[self.carColor].img;
            self.carFrame = self.carImages.frame.img;
            self.drawCar();
        });
    }

    _Car.prototype.loadAssets = function(callback) {
        var self = this, colors = ["frame", "black", "brown", "red", "blue"], loaded = 0, loadCount = colors.length;
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

        ctx.drawImage(this.carFrame, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.curColorImage, 0, 0, canvas.width, canvas.height);

    }

    _Car.prototype.drawCarColor = function() {
        var canvas = this._canvas,
            ctx = this._ctx,
            carColorCanvas = this.carColorCanvas,
            carColorCanvasCtx = this.carColorCanvasCtx;
    


        carColorCanvasCtx.save();
        carColorCanvasCtx.globalCompositeOperation = "copy";
        carColorCanvasCtx.globalAlpha = 0.8;
        carColorCanvasCtx.fillStyle = this.carColor;
        carColorCanvasCtx.fillRect(0, 0, carColorCanvas.width, carColorCanvas.height);
        carColorCanvasCtx.restore();

        carColorCanvasCtx.save();
        carColorCanvasCtx.globalCompositeOperation = "destination-in";
        carColorCanvasCtx.drawImage(this.carColorMask, 0, 0, canvas.width, canvas.height);
        carColorCanvasCtx.restore();
    }

    _Car.prototype.switchColor = function(color) {
        console.log("The Car will change to color:", color);
        var self = this,
            width = 0, widthStep = 30;
            var canvas = this._canvas,
                ctx = this._ctx;

            self.status = "changing";
            self.nextColorImage = self.carImages[color].img;
        (function draw() {
            if (width <= self._canvas.width) {                
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                ctx.save();
                ctx.globalCompositeOperation = "copy";
                ctx.fillStyle = "rgba(0,0,0,0)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();

                ctx.drawImage(self.carFrame, 0, 0, canvas.width, canvas.height);
                ctx.drawImage(self.curColorImage, 0, 0, canvas.width, canvas.height);
                ctx.drawImage(self.nextColorImage, 0, 0, width, canvas.height, 0, 0, width, canvas.height);

                width += widthStep;
                window.requestAnimationFrame(draw);
            } else {
                self.status = "changed";
                self.curColorImage = self.nextColorImage;
                self.carColor = color;
                self.drawCar();
            }
            
        }())
    }
    window.Car = _Car;
}())
