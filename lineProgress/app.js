(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var myCanvas = document.getElementById('my-canvas'),
    myCanvasCtx = myCanvas.getContext('2d');

var curPosition = 0,
    distPositionX = NaN;
var requestTimer;

myCanvasCtx.beginPath();
myCanvasCtx.fillStyle = "#C2C4C5";
myCanvasCtx.fillRect(0, 40, 200, 20);
myCanvasCtx.closePath();

myCanvasCtx.beginPath();
myCanvasCtx.fillStyle = "#F36E21";
myCanvasCtx.fillRect(0, 20, 20, 60);
myCanvasCtx.closePath();


function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    myCanvasCtx.beginPath();
    myCanvasCtx.fillStyle = "#C2C4C5";
    myCanvasCtx.fillRect(0, 40, 200, 20);
    myCanvasCtx.closePath();

    myCanvasCtx.beginPath();
    myCanvasCtx.fillStyle = "#F36E21";
    myCanvasCtx.fillRect(message, 20, 20, 60);
    myCanvasCtx.closePath();

    myCanvasCtx.beginPath();
    context.font = '12pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
    myCanvasCtx.closePath();

}

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
var isMouseDown = false;

myCanvas.addEventListener('mousedown', function(evt){
    console.log('mousedown');
    isMouseDown = true;
    var mousePos = getMousePos(myCanvas, evt);

    distPositionX = mousePos.x;
    distPositionX = (distPositionX - 10 < 0) ? 0 : distPositionX;
    distPositionX = (distPositionX + 20 > 200) ? 180 : distPositionX;
    requestAnimationFrame(function() {
        console.log('mousemove...', curPosition, distPositionX);
        changePositionAnimation(myCanvas, distPositionX);
    });
});
myCanvas.addEventListener('mouseup', function(evt){
    console.log('mouseup');
    isMouseDown = false;
});
myCanvas.addEventListener('mousemove', function(evt) {
    console.log('mousemove', isMouseDown);
    var mousePos = getMousePos(myCanvas, evt);

    distPositionX = mousePos.x;
    distPositionX = (distPositionX - 10 < 0) ? 0 : distPositionX;
    distPositionX = (distPositionX + 20 > 200) ? 180 : distPositionX;

    requestAnimationFrame(function() {
        console.log('mousemove...', curPosition, distPositionX);
        changePositionAnimation(myCanvas, distPositionX);
    });
}, false);


function changePositionAnimation() {
    if (!isMouseDown) {
        return;
    }
    if (curPosition != distPositionX) {
        if (curPosition > distPositionX) {
            curPosition -= (curPosition - distPositionX) / 7;
        } else {
            curPosition += (distPositionX - curPosition) / 7;
        }
        if (Math.abs(curPosition - distPositionX) < 0.0001) {
            curPosition = distPositionX;
        } else {
            myCanvasCtx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            myCanvasCtx.beginPath();
            myCanvasCtx.fillStyle = "#C2C4C5";
            myCanvasCtx.fillRect(0, 40, 200, 20);
            myCanvasCtx.closePath();

            myCanvasCtx.beginPath();
            myCanvasCtx.fillStyle = "#F36E21";
            myCanvasCtx.fillRect(curPosition, 20, 20, 60);
            myCanvasCtx.closePath();

            requestAnimationFrame(changePositionAnimation);
        }
    }
}