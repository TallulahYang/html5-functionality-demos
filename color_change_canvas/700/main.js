var canvas = document.getElementById('canvas'),
	laser = document.getElementById('laser'),
	ctx = canvas.getContext('2d'),
	ctxL = laser.getContext('2d'),
	FPS = 30,
	TIME = .5,
	WIDTH = canvas.width,
	HEIGHT = canvas.height,
	stepX = WIDTH/(FPS * TIME),
	stepY = HEIGHT/(FPS * TIME),
	colors = new Array('rgb(112, 124, 116)','rgb(1, 3, 40)', 'rgb(210, 210, 210)', 'rgb(127, 127, 127)', 'rgb(89, 0, 23)'),
	$colors = $('.color div'),
	colorLen = $colors.length,
	srcArr = new Array('img/car.png', 'img/car-shadow-mask.png'),
	carImage,
	carMaskImage,
	alpha = .5,
	isAnimating = false,

	x = 0,
	y = 0,
	gradient,
	currentX = 0,
	currentY = 0,
	color = "rgb(70, 78, 73)",
	lastTime = 0,
	lastFpsTime = 0,
	fpsEle = document.getElementById('fps'),
	loop,
	lastColor=false;
loadImg(srcArr, function(imgs) {
	carImage = imgs[0];
	carMaskImage = imgs[1];
	initAnimate();
});
function loadImg (srcArr, done) {
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
function initAnimate () {
	$colors.each(function(i,ele) {
		console.log($colors, i, $(this))
		$(this).on('click', function (e) {
			if (isAnimating === true) {
				return;
			}
			clearTimeout(loop);
			currentX = 0;
			isAnimating = true;
			// color = this.style.backgroundColor;
			color = colors[i];
			console.log(color);
			setTimer();
			// loadCar("imgs/car-shadow-mask.png");
		}, false);
	});
	setTimer();
}
function startAnimate () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	
	drawMask();
	drawColor();
	drawCar();
	drawLaser();
}
function drawMask () {
	ctx.save();
	// ctx.globalCompositeOperation = "destination-atop";
	ctx.drawImage(carMaskImage, 0, 0, WIDTH, HEIGHT);
	ctx.restore();
}
function drawColor() {
	// console.log(currentX);
	if (color) {
		ctx.save();
		ctx.globalCompositeOperation = "source-atop";
		// ctx.globalCompositeOperation = "source-in";
		ctx.fillStyle = lastColor;
		ctx.globalAlpha = alpha;
		ctx.fillRect(currentX, 0, WIDTH, currentY);
		ctx.restore();
	}
	ctx.save();
	ctx.globalCompositeOperation = "source-atop";
	// ctx.globalCompositeOperation = "source-in";
	ctx.fillStyle = color;
	ctx.globalAlpha = alpha;
	ctx.fillRect(0, 0, currentX, currentY);
	ctx.restore();
}
function drawCar () {
	ctx.save();
	ctx.globalCompositeOperation = "destination-over";
	ctx.drawImage(carImage, 0, 0, 700, 328);
	ctx.restore();
}
function drawLaser () {
	ctxL.save();
	ctxL.globalCompositeOperation = "destination-over";
	gradient = ctxL.createLinearGradient(100, currentY/2, currentX, currentY/2);
	gradient.addColorStop(0, 'blue');
	gradient.addColorStop(.25, 'white');
	gradient.addColorStop(.5, 'white');
	gradient.addColorStop(.75, 'red');
	gradient.addColorStop(1, 'yellow');
	ctxL.fillStyle = gradient;
	ctxL.fillRect(currentX -10, 0, currentX, currentY );
	
	// ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.restore();

}
function setTimer () {
	console.log(isAnimating);
	if (currentX>=WIDTH) {
		lastColor = color;
		isAnimating = false;
		return false;
	};
	currentX = currentX + stepX;
	currentY = HEIGHT;
	setFPS();
	
	startAnimate();
	loop = setTimeout(setTimer, 1000/FPS);
	// requestAnimationFrame(setTimer);
}
function setFPS () {
	var now = new Date();
	var fps = Math.round(1000 / (now - lastTime));//fps on now
	if(now - lastFpsTime > 200) { //draw fps
		lastFpsTime = now;
		fpsEle.innerHTML = fps;
	}
	lastTime = now;
}