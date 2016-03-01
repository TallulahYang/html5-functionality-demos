var FPS = 30,
	TIME = .4,
	$canvas_wrapper = $('#canvas_wrapper'),
	alpha = .5,
	lastTime = 0,
	lastFpsTime = 0,
	fpsEle = document.getElementById('fps');
var bigCar = new Car();
var config = {
	id: 'canvas',
	width: 640,
	height: 300,
	srcArr: ['img/car.png', 'img/car-shadow-mask.png', 'img/car-high-light.png'],
	$colors : $('.color div'),
	colors: ['rgb(112, 124, 116)','rgb(1, 3, 40)', 'rgb(255, 255, 255)', 'rgb(242, 202, 168)', 'rgb(80, 0, 0)']
}
function Car () {
	this.canvas = null;
	this.ctx = null;
	this.WIDTH = 0;
	this.HEIGHT = 0;
	this.srcArr = null;
	this.carMaskImage = null;
	this.isAnimating = false;
	this.loop = null;
	this.currentX = 0;
	this.lastColor = null;
	this.stepX = 0;
}
Car.prototype.init = function (config) {
	this.canvas = document.getElementById(config.id);
	this.ctx = this.canvas.getContext('2d');
	this.canvas.width = config.width;
	this.canvas.height = config.height;
	this.WIDTH = config.width;
	this.HEIGHT = config.height;
	this.srcArr = config.srcArr;
	this.$colors = config.$colors;
	this.colors = config.colors;
	// this.currentX = 0;
	this.stepX = this.WIDTH/(FPS * TIME);
}
Car.prototype.update = function () {

}
Car.prototype.start = function () {
	var that = this;
	that.loadImg(this.srcArr, function(imgs) {
		// carImage = imgs[0];
		that.carMaskImage = imgs[1];
		that.initAnimate();
		$canvas_wrapper.css({
			opacity: 1
		});
	});
}
Car.prototype.loadImg = function (srcArr, done) {
	var len = srcArr.length,
		imgs = new Array(len),
		count = 0;
	for (var i=0; i<len; i++) {
		(function(i){
			imgs[i] = new Image();
			imgs[i].onload = function () {
				count+=1;
				if (count >= len) {
					done(imgs);
				} else {
					return;
				}
			}
			imgs[i].src = srcArr[i];
		})(i);	
	}
}
Car.prototype.initAnimate = function () {
	var that = this;
	that.$colors.each(function(i,ele) {
		// console.log(i, $this);
		$(this).on('click', function (e) {
			var $this = $(this);
			console.log('click', $this, that.isAnimating,$this.hasClass('active') )
			if (that.isAnimating === true || $this.hasClass('active')) {
				console.log('cant click')
				return;
			}
			that.$colors.removeClass('active');
			$this.addClass('active');
			clearTimeout(that.loop);
			that.currentX = 0;
			that.isAnimating = true;
			that.color = that.colors[i];
			that.ctx.clearRect(0, 0, that.WIDTH, that.HEIGHT);
			that.setTimer(that);
			// loadCar("imgs/car-shadow-mask.png");
		}, false);
	});
	that.initGrey();
}
Car.prototype.initGrey = function () {
	this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
	this.drawMask();
	this.ctx.save();
	this.ctx.globalCompositeOperation = "source-atop";
	// ctx.globalCompositeOperation = "source-in";
	this.ctx.fillStyle = this.colors[2];
	this.ctx.globalAlpha = alpha;
	this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
	this.ctx.restore();
	this.lastColor = this.colors[2];
	this.$colors.eq(2).addClass('active');
}
Car.prototype.drawMask = function () {
	this.ctx.drawImage(this.carMaskImage, 0, 0, this.WIDTH, this.HEIGHT);
}
Car.prototype.drawColor = function ()  {
	if (this.color) {
		this.ctx.save();
		this.ctx.globalCompositeOperation = "source-atop";
		// ctx.globalCompositeOperation = "source-in";
		this.ctx.fillStyle = this.lastColor;
		this.ctx.globalAlpha = alpha;
		this.ctx.fillRect(this.currentX, 0, this.WIDTH-this.currentX, this.HEIGHT);
		this.ctx.restore();
	}
	this.ctx.save();
	this.ctx.globalCompositeOperation = "source-atop";
	// ctx.globalCompositeOperation = "source-in";
	this.ctx.fillStyle = this.color;
	this.ctx.globalAlpha = alpha;
	this.ctx.fillRect(0, 0, this.currentX, this.HEIGHT);
	this.ctx.restore();
}
Car.prototype.startDrawing = function () {
	this.drawMask();
	this.drawColor();
}
Car.prototype.setTimer = function (that) {
	console.log('171:' ,that.currentX)
	

	that.currentX = that.currentX + that.stepX;
	that.setFPS();

	that.startDrawing();
	that.loop = setTimeout(function(){
		that.setTimer(that);
	}, 1000/FPS);
	if (that.currentX>=that.WIDTH) {
		that.lastColor = that.color;
		that.isAnimating = false;
		console.log(that.color);
		clearTimeout(that.loop);
	};
	// requestAnimationFrame(setTimer);
}
Car.prototype.setFPS = function () {
	var now = new Date();
	var fps = Math.round(1000 / (now - lastTime));//fps on now
	if(now - lastFpsTime > 200) { //draw fps
		lastFpsTime = now;
		fpsEle.innerHTML = fps;
	}
	lastTime = now;
}
bigCar.init(config);
bigCar.start();